var Transform = require('stream').Transform;

var through = require('through2');    // npm install --save through2
const fs = require('fs')
const loadBodyPrefixer = require('./scriptsToString.js').loadBody

module.exports =  ()=> {
   return through.obj(function(file, encoding, cb) {
     const jsonData = JSON.parse(file.contents.toString('ascii'))
     //We get the location of the file from there we access the templates
     let targetHTMLFile=''
     if(jsonData.template)
        targetHTMLFile = file.cwd+'/src/templates/'+jsonData.template+'.html'
     else 
      throw "We need a template target"
    console.log(targetHTMLFile)
     let htmlContent = fs.readFileSync(targetHTMLFile)
     htmlContent = htmlContent.toString('ascii')
     for(let key in jsonData){
        if(key==='template')
          continue
        else{
          console.log(key + ":" + jsonData[key])
          let regex = new RegExp("##"+key+"##",'g')
          htmlContent = htmlContent.replace(regex,jsonData[key])
        }
     }
     
     // console.log(typeof htmlContent)
     // if(htmlContent)
     //    htmlContent = Buffer.from(htmlContent,'utf8')
     //We check if the first seven characters are "headme"
     if(htmlContent.slice(0,7).toString('ascii')=="#headme"){
        const pageContent = htmlContent.slice(7,htmlContent.length)
        const script = loadBodyPrefixer()
        const header = "<script>var content=\""+ pageContent.toString()+ "\";"+  script+"</script>"      
        file.contents = Buffer.from(header,'utf8')
        console.log(loadBodyPrefixer())
      }
     cb(null,file)
  });
};