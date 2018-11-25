var Transform = require('stream').Transform;

var through = require('through2');    // npm install --save through2

const loadBodyPrefixer = require('./scriptsToString.js').loadBody
module.exports =  ()=> {
   return through.obj(function(file, encoding, cb) {

     const data = file.toString();
     // for (let key in file){
     //  console.log(key)
     //  console.log(file[key])
     // }     console.log('end')
     console.log(file.contents.length)
     //We check if the first seven characters are "headme"
     if(file.contents.slice(0,7).toString('ascii')=="#headme"){
      const pageContent = file.contents.slice(7,file.contents.length).toString()
      const script = loadBodyPrefixer()
      console.log(script)
      const header = "<script>var content=\""+ pageContent.toString()+ "\";"+  script+"</script>"      
      // file.contents = Buffer.concat([Buffer.from(header,'utf8'), pageContent]);
      file.contents = Buffer.from(header,'utf8')
      console.log(loadBodyPrefixer())

     }
     // console.log(file.contents.toString())
    // console.log( util.inspect(file))
  // console.log(data)
  // console.log(util.inspect(data,false, null, true /* enable colors */))
    cb(null,file)
  });
};