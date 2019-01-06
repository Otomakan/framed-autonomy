ready(function(){
  let body = document.body

    //See more first block
    openFirstBlock()
    openContactUs()
    arrowScrollDown()
 
  })


function arrowScrollDown(){
  let arrow =   document.getElementById('main-page-down-arrow')

  // window.onscroll = ()=>{
  //   if(window.scrollY <= 50)
  //     arrow.style.opacity = 1
  //   else
  //     arrow.style.opacity = 0
  // }
  arrow.onclick=(e)=>{
    // Smoother scrolling function
    var style = "scrollTop"
    let scrollingElement = document.scrollingElement || document.documentElement
    var start = new Date().getTime(),
        timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime()-start) / 1000);
            if (step > 0.5) 
                step+= 0.05
            
            scrollingElement[style] = ( step * (window.innerHeight-60 ));
            
            if (step >= 1) 
                clearInterval(timer);
            
        }, 10);
        scrollingElement[style] = 0;
    
    
    // window.scrollBy(0,window.innerHeight-60)
  }
}
function openFirstBlock(){
    let body = document.body
      document.getElementById("first-block-more-info").onclick =()=>{
      let firstBlock = document.getElementById('first-block')
      let firstBlockText = firstBlock.childNodes
      let bodyWrapper = document.getElementsByClassName('body-wrapper')[0]
      let closeButton = document.createElement('div')
      closeButton.classList.add("close-button")

      
      for(var i=0; i<firstBlockText.length; i++) {
            if(firstBlockText[i].nodeName!="#text"){
            firstBlockText[i].style.transition = "opacity 0.3s"  
             firstBlockText[i].style.opacity = 0
           }
      }
       let newFirstBlock = firstBlock.cloneNode(true)
      newFirstBlock.innerHTML = ""
      newFirstBlock.id = "stick-out-page"
      // newFirstBlock.style.position = "absolute"
      newFirstBlock.style.top = firstBlock.getBoundingClientRect().top +'px'
      newFirstBlock.style.width = firstBlock.offsetWidth +'px'
      newFirstBlock.style.height = firstBlock.offsetHeight +'px'
      // newFirstBlock.style.overflowY = "scroll"
      // "100vw"
      newFirstBlock.style.left = firstBlock.getBoundingClientRect().left +'px'
      newFirstBlock.style.transition =  "all 1s"
      newFirstBlock.style.backgroundColor = "white"
       loadTemplate(newFirstBlock,'/pages/my-template.html')

    
      newFirstBlock.appendChild(closeButton)
      let newFirstBlockText  = newFirstBlock.childNodes
      for(var i=0; i<newFirstBlockText.length; i++) {
            newFirstBlockText[i].style.opacity = 0
            // newFirstBlockText[i].style.transition = "opacity 0.3s"  
      }

      window.setTimeout(()=>{

        document.body.appendChild(newFirstBlock)
        bodyWrapper.style.transition =  "all 0.2s"
        // bodyWrapper.style.width = "94vw"
        // bodyWrapper.style.height = "90vh"
        bodyWrapper.style.left = "0"
        bodyWrapper.style.top = "0"
      },300)
      window.setTimeout(()=>{     
         newFirstBlock.style.top = "80px"
        newFirstBlock.style.left = 3+"vw"
        firstBlock.style.opacity = 0
        closeFirstBlock(bodyWrapper)
        let navBar = document.getElementsByTagName('nav')
        for(let i=0; i<navBar.length;i++)
          closeFirstBlock(navBar[i])

        closeFirstBlock(document.getElementsByClassName('close-button')[0])
            },350)
     setTimeout(()=>{

        newFirstBlock.style.width = 94+"vw"

        newFirstBlock.style.height = 90+"vh"
        document.getElementsByClassName('close-button')[0].style.opacity = 1
        
  
     },1200)
      body.classList.add('blue')

     // Change history when div is clicked
      window.history.pushState({page:'my template'},'my template page', '/pages/my-template.html')
      customHistoryFIFO.push(window.location.href)
    }
}

function closeFirstBlock(target){
   let newFirstBlock = document.getElementById('stick-out-page')
   let firstBlock = document.getElementById('first-block')
    target.onclick=((e)=>{
      newFirstBlock.style.left = 0
      newFirstBlock.style.top = 0
      newFirstBlock.style.width = firstBlock.offsetWidth + "px"
      newFirstBlock.style.height = firstBlock.offsetHeight +"px"
      let newFirstBlockText = newFirstBlock.childNodes[2].childNodes
      for(let i=0; i<newFirstBlockText.length; i++) {

            if(newFirstBlockText[i].tagName && newFirstBlockText[i].tagName!="STYLE"){
              newFirstBlockText[i].style.transition = "opacity 0.5s"  
             newFirstBlockText[i].style.opacity = 0
           }
      }
      firstBlock.style.opacity = 1
 document.getElementById("home-contact-box").style.opacity = 1

      let firstBlockText = firstBlock.childNodes
      window.setTimeout(()=>{
       newFirstBlock.style.opacity = 0
      },700)
      window.setTimeout(()=>{

      for(let i=0; i<firstBlockText.length; i++) {

            if(firstBlockText[i].nodeName!="#text"){
              firstBlockText[i].style.transition = "opacity 1s"  
             firstBlockText[i].style.opacity = 1
           }
      }
      newFirstBlock.remove()
      },1500)
      e.target.removeAttribute("onclick");
    })
    target.click=((e)=>{
      newFirstBlock.style.left = 0
      newFirstBlock.style.top = 0
      newFirstBlock.style.width = firstBlock.offsetWidth + "px"
      newFirstBlock.style.height = firstBlock.offsetHeight +"px"
      let newFirstBlockText = newFirstBlock.childNodes[2].childNodes
      for(let i=0; i<newFirstBlockText.length; i++) {
          if(newFirstBlockText[i].tagName && newFirstBlockText[i].tagName!="STYLE"){
              newFirstBlockText[i].style.transition = "opacity 0.5s"  
             newFirstBlockText[i].style.opacity = 0
           }
      }
      firstBlock.style.opacity = 1

      let firstBlockText = firstBlock.childNodes
      window.setTimeout(()=>{
       newFirstBlock.style.opacity = 0
      },700)
      window.setTimeout(()=>{

      for(let i=0; i<firstBlockText.length; i++) {

            if(firstBlockText[i].nodeName!="#text"){
              firstBlockText[i].style.transition = "opacity 1s"  
             firstBlockText[i].style.opacity = 1
           }
      }
      newFirstBlock.remove()
      },1500)
      e.target.removeAttribute("onclick");
    })

}


function openContactUs(target){
      let body = document.body
      document.getElementById("home-contact-box").onclick =(e)=>{
      let contactUsBox = e.currentTarget
      let contactUsText = contactUsBox.childNodes
      let bodyWrapper = document.getElementsByClassName('body-wrapper')[0]
      let closeButton = document.createElement('div')
      closeButton.classList.add("close-button")
       for(var i=0; i<contactUsText.length; i++) {
              if(contactUsText[i].nodeName!="#text"){
              contactUsText[i].style.transition = "opacity 0.3s"  
               contactUsText[i].style.opacity = 0
             }
        }
        let newContactBox = contactUsBox.cloneNode(true)
         newContactBox.innerHTML = ""
      newContactBox.id = "stick-out-page"
      // newContactBox.style.position = "absolute"
      newContactBox.style.top = contactUsBox.getBoundingClientRect().top +'px'
      newContactBox.style.width = contactUsBox.offsetWidth +'px'
      newContactBox.style.height = contactUsBox.offsetHeight +'px'
      newContactBox.style.overflowY = "scroll"
      // "100vw"
      newContactBox.style.left = contactUsBox.getBoundingClientRect().left +'px'
      newContactBox.style.transition =  "all 1s"
      newContactBox.style.backgroundColor = "white"
       loadTemplate(newContactBox,'/pages/contact-us.html')
      newContactBox.appendChild(closeButton)


      let newContactBoxText  = newContactBox.childNodes
      for(var i=0; i<newContactBoxText.length; i++) {
            newContactBoxText[i].style.opacity = 0
            // newContactBoxText[i].style.transition = "opacity 0.3s"  
      }
  window.setTimeout(()=>{

        document.body.appendChild(newContactBox)
        bodyWrapper.style.transition =  "all 0.2s"
        // bodyWrapper.style.width = "94vw"
        // bodyWrapper.style.height = "90vh"
        bodyWrapper.style.left = "0"
        bodyWrapper.style.top = "0"
      },300)
      window.setTimeout(()=>{     
         newContactBox.style.top = "80px"
        newContactBox.style.left = 3+"vw"

        contactUsBox.style.opacity = 0
        closeFirstBlock(bodyWrapper)

        closeFirstBlock(document.getElementsByClassName('close-button')[0])
            },350)
     setTimeout(()=>{

        newContactBox.style.width = 94+"vw"

        newContactBox.style.height = 95+"vh"
        document.getElementsByClassName('close-button')[0].style.opacity = 1
        
      
     },1200)
      body.classList.add('blue')
     
    }
    
     
     //  
     //
}
function closeContactUs(target){

}