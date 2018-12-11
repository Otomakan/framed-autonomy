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
    openFirstBlock()

  })

function openFirstBlock(){
    let body = document.body
      document.getElementById("first-block-more-info").onclick =()=>{
      console.log('clock')
      let firstBlock = document.getElementById('first-block')
      let firstBlockText = firstBlock.childNodes
        let bodyWrapper = document.getElementsByClassName('body-wrapper')[0]
      for(var i=0; i<firstBlockText.length; i++) {

      firstBlockText[i].style.transition = "opacity 0.3s"  
             firstBlockText[i].style.opacity = 0
      }
       let newFirstBlock = firstBlock.cloneNode(true)
      newFirstBlock.innerHTML = ""
      newFirstBlock.id = "stick-out-page"
      newFirstBlock.style.position = "absolute"
      newFirstBlock.style.top = firstBlock.getBoundingClientRect().top +'px'
      newFirstBlock.style.width = firstBlock.offsetWidth +'px'
      newFirstBlock.style.height = firstBlock.offsetHeight +'px'
      // "100vw"
      newFirstBlock.style.left = firstBlock.getBoundingClientRect().left +'px'
      newFirstBlock.style.transition =  "all 1s"
      newFirstBlock.style.backgroundColor = "white"
       loadTemplate(newFirstBlock,'/pages/my-template.html')
      
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
      },350)
     setTimeout(()=>{

        newFirstBlock.style.width = 94+"vw"

        newFirstBlock.style.height = 100+"vh"
     },1200)
      body.classList.add('blue')
      console.log('done')
     // Change history when div is clicked
      // window.history.pushState({page:'my template'},'my template page', '/pages/my-template.html')
      // customHistoryFIFO.push(window.location.href)
    }
}
function closeFirstBlock(target){
   let newFirstBlock = document.getElementById('stick-out-page')
   let firstBlock = document.getElementById('first-block')
    target.onclick=((e)=>{
      console.log(newFirstBlock)
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
              firstBlockText[i].style.transition = "opacity 1s"  
             firstBlockText[i].style.opacity = 1
      }
      newFirstBlock.remove()
      },1500)
      e.target.removeAttribute("onclick");
      console.log('done1')
    })

}
