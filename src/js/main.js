console.log('hey it looks like it worked! Happy Hacking!')
var checkthatbody

ready(function(){
  let body = document.body
    //Mimics the bootstrap JS to open navBar
    let buttonNav = document.getElementsByClassName('navbar-toggler')[0]
    let navBarNav = document.getElementsByClassName('navbar-nav')[0]
    let contentNav = document.getElementById('navbarNavAltMarkup')
    let show = false
    buttonNav.onclick=(()=>{
        show = !show

        //Check the status of the show variable and add or remove show class accordingly
        if(show){
          contentNav.classList.add('show')
          navBarNav.classList.add('show')
        }
        else{
          contentNav.classList.remove('show')
          navBarNav.classList.remove('show')
        }
    })
    //Navigation Bar Links
    // document.
    //See more first block
    document.getElementById("first-block-more-info").onclick =()=>{
      console.log('clock')
      let firstBlock = document.getElementById('first-block')
      let newFirstBlock = firstBlock.cloneNode(true)
      newFirstBlock.style.position = "absolute"
      newFirstBlock.style.top = 0
      newFirstBlock.style.height = "80vh"
      newFirstBlock.style.width = "100vw"
      newFirstBlock.style.left = 0
      firstBlock.remove()
      while (body.firstChild) {
        body.removeChild(body.firstChild);
      } 
      body.classList.add('blue')

      document.body.appendChild(newFirstBlock)
      loadTemplate(newFirstBlock,'./pages/template-page.html')

    }

  })

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