ready(function(){
  let body = document.body

    //See more first block
    openFirstBlock()

  })

function openFirstBlock(){
    let body = document.body
      document.getElementById("first-block-more-info").onclick =()=>{
      console.log('clock')
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
      newFirstBlock.style.position = "absolute"
      newFirstBlock.style.top = firstBlock.getBoundingClientRect().top +'px'
      newFirstBlock.style.width = firstBlock.offsetWidth +'px'
      newFirstBlock.style.height = firstBlock.offsetHeight +'px'
      newFirstBlock.style.overflowY = "scroll"
      // "100vw"
      newFirstBlock.style.left = firstBlock.getBoundingClientRect().left +'px'
      newFirstBlock.style.transition =  "all 1s"
      newFirstBlock.style.backgroundColor = "white"
       loadTemplate(newFirstBlock,'/pages/my-template.html')

      closeButton.onclick = function(){
        console.log("CLICK")
      }
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

        closeFirstBlock(document.getElementsByClassName('close-button')[0])
            },350)
     setTimeout(()=>{

        newFirstBlock.style.width = 94+"vw"

        newFirstBlock.style.height = 100+"vh"
        document.getElementsByClassName('close-button')[0].style.opacity = 1
        
  
     },1200)
      body.classList.add('blue')
      console.log('done')

     

     // Change history when div is clicked
      // window.history.pushState({page:'my template'},'my template page', '/pages/my-template.html')
      // customHistoryFIFO.push(window.location.href)
    }
}
function closeFirstBlock(target){
  console.log('setting close for ')
  console.log(target)
   let newFirstBlock = document.getElementById('stick-out-page')
   let firstBlock = document.getElementById('first-block')
    target.onclick=((e)=>{
      newFirstBlock.style.left = 0
      newFirstBlock.style.top = 0
      newFirstBlock.style.width = firstBlock.offsetWidth + "px"
      newFirstBlock.style.height = firstBlock.offsetHeight +"px"
      let newFirstBlockText = newFirstBlock.childNodes[2].childNodes
      for(let i=0; i<newFirstBlockText.length; i++) {
        console.log(newFirstBlockText[i])
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
    console.log(target.onclick)

}
