


//This function is used to load some HTML from targetUrl, 
// and replace the content of targetDiv with it.
 function loadTemplate(targetDiv, targetUrl,targetContent) {
  targetDiv.innerHTML = ""
  console.log('loading')
    fetch(targetUrl).then(res=>{
      res.arrayBuffer().then((ab)=>{
        // for(let i =0; i<ab.length; i++){
          let myString =  String.fromCharCode.apply(null, new Uint8Array(ab))  // }
          console.log(typeof myString)
          //Eleminating all the 
          targetDiv.innerHTML += myString.match(/(content=\")([^]+)\"/)[0].replace(/(content=\")/,"").slice(0, -1)
        })
      })
    // res.body.getReader().read().then(result=>{
    //     let content = ""
    //     console.log('in')
    //     // while(!result.done){
    //       //Converting to Array Buffer to a String
    //       let string  = String.fromCharCode.apply(null, new Uint8Array(result.value))
    //       //Only add the content and remove the javascript with regex
    //       console.log('yo')
    //       string  = string.match(/(content=\")([^]+)\"/)[0].toString()
    //       string = string.replace((/(content=\")/g,''))
    //       console.log(string)

    //       // targetDiv.innerHTML += string.match(/(content=\")([^]+)\"/)[0].replace((/(content=\")/,"").slice(0, -1))
    //       // cIn case we have more coming in
    //       // result = await reader.read();
    //     // }
    // })
  .catch(e=>{console.log(e)})
  // const res = await fetch(targetUrl)
  // const reader = res.body.getReader()
  // let result = await reader.read()
  // console.log(result.)
  // Maybe use blobs by creating a reader then read as texthttp://qnimate.com/an-introduction-to-javascript-blobs-and-file-interface/ but creating blob just uses up client memory

}


//Thanks to http://youmightnotneedjquery.com/#ready
function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}