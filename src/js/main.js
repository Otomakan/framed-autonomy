


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
          //Eleminating all the scripts and useless data
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
  .catch(e=>{console.log("There was an error" + console.log(e))})
  // const res = await fetch(targetUrl)
  // const reader = res.body.getReader()
  // let result = await reader.read()
  // console.log(result.)
  // Maybe use blobs by creating a reader then read as texthttp://qnimate.com/an-introduction-to-javascript-blobs-and-file-interface/ but creating blob just uses up client memory

}
ready(function(){
  let navbarBar = document.getElementsByClassName('navbar')[0]
  console.log(document.getElementsByClassName('navbar')[0])
    // navbarBar.style.cssText = "top"+document.getElementById('navigation-bar').getBoundingClientRect().top 'px;'
    navbarBar.style.cssText = "visibility:visible;"
    //Imitate Bootstrap show without important the whole library
    let contentNav = document.getElementById('navbarNavAltMarkup')
    let buttonNav = document.getElementsByClassName('navbar-toggler')[0]
    let navBarNav = document.getElementsByClassName('navbar-nav')[0]
    let aboutBox = document.getElementById('about-box')
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
    // const navItems = document.getElementsByClassName('menu-nav-link')
    // for(let i = 0 ; i< navItems.length;i++){
    //   navItems[i].onclick=((e)=>{
    //     e.stopPropagation()
    //     return preventLoad(e)
    // });
    // }

    // Dropdown menu behavior
    const dropDown =  document.getElementsByClassName("dropdown")

    for(let i=0; i <dropDown.length; i++){
      dropDown[i].onclick = (e)=>{
        if(e.currentTarget.classList.contains('show')){
          e.currentTarget.classList.remove('show')
          e.currentTarget.firstChild.setAttribute('aria-expanded','false')
          e.currentTarget.getElementsByClassName('dropdown-menu')[0].classList.remove('show')
       }
        else{
          e.currentTarget.classList.add('show')
          e.currentTarget.firstChild.setAttribute('aria-expanded','true')
          e.currentTarget.getElementsByClassName('dropdown-menu')[0].classList.add('show')
        }
      }
    }
})

const preventLoad = function (e){
        console.log(e.target)
        console.log('working!')
        let targetUrl = e.target.getAttribute('href')
        let targ = e.target.getAttribute('href')
        fetch(targetUrl).then(res=>{
        res.arrayBuffer().then((ab)=>{
          // for(let i =0; i<ab.length; i++){
            let myString =  String.fromCharCode.apply(null, new Uint8Array(ab))  // }
            console.log(typeof myString)
            //Eleminating all the 
            // targ.html = myString
            // document.createElement("div")
            // Thanks to https://stackoverflow.com/questions/42160519/how-to-delete-all-the-html-body-elements-except-some-specific-elements Developer Guy
            let  bodyChildElements = document.body.childNodes

              for(let i=0; i<bodyChildElements.length;i++){
                  if(bodyChildElements[i].tagName != ("NAV"))
                      document.body.removeChild(bodyChildElements[i])
                  
              }
            // document.body.removeChild(document.getElementsByClassName('body-wrapper')[0])

            document.body.innerHTML += myString.match(/(content=\")([^]+)\"/)[0].replace(/(content=\")/,"").slice(0, -1)

        })
      })
        return false
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


    var Dropdown = function( element, option ) {
      
    // initialization element
    element = queryElement(element);
  
    // set option
    this.persist = option === true || element[getAttribute]('data-persist') === 'true' || false;
  
    // constants, event targets, strings
    var self = this, children = 'children',
      parent = element[parentNode],
      component = 'dropdown', open = 'open',
      relatedTarget = null,
      menu = queryElement('.dropdown-menu', parent),
      menuItems = (function(){
        var set = menu[children], newSet = [];
        for ( var i=0; i<set[length]; i++ ){
          set[i][children][length] && (set[i][children][0].tagName === 'A' && newSet[push](set[i][children][0]));
          set[i].tagName === 'A' && newSet[push](set[i]);
        }
        return newSet;
      })(),
  
      // preventDefault on empty anchor links
      preventEmptyAnchor = function(anchor){
        (anchor.href && anchor.href.slice(-1) === '#' || anchor[parentNode] && anchor[parentNode].href 
          && anchor[parentNode].href.slice(-1) === '#') && this[preventDefault]();    
      },
  
      // toggle dismissible events
      toggleDismiss = function(){
        var type = element[open] ? on : off;
        type(DOC, clickEvent, dismissHandler); 
        type(DOC, keydownEvent, preventScroll);
        type(DOC, keyupEvent, keyHandler);
      },
  
      // handlers
      dismissHandler = function(e) {
        var eventTarget = e[target], hasData = eventTarget && (stringDropdown in eventTarget || stringDropdown in eventTarget[parentNode]);
        if ( (eventTarget === menu || menu[contains](eventTarget)) && (self.persist || hasData) ) { return; }
        else {
          relatedTarget = eventTarget === element || element[contains](eventTarget) ? element : null;
          hide();
        }
        preventEmptyAnchor.call(e,eventTarget);
      },
      clickHandler = function(e) {
        relatedTarget = element;
        show();
        preventEmptyAnchor.call(e,e[target]);
      },
      preventScroll = function(e){
        var key = e.which || e.keyCode;
        if( key === 38 || key === 40 ) { e[preventDefault](); }
      },
      keyHandler = function(e){
        var key = e.which || e.keyCode,
          activeItem = DOC.activeElement,
          idx = menuItems[indexOf](activeItem),
          isSameElement = activeItem === element,
          isInsideMenu = menu[contains](activeItem),
          isMenuItem = activeItem[parentNode] === menu || activeItem[parentNode][parentNode] === menu;          
  
        if ( isMenuItem || isSameElement ) { // navigate up | down
          idx = isSameElement ? 0 
                              : key === 38 ? (idx>1?idx-1:0)
                              : key === 40 ? (idx<menuItems[length]-1?idx+1:idx) : idx;
          menuItems[idx] && setFocus(menuItems[idx]);
        }
        if ( (menuItems[length] && isMenuItem // menu has items
              || !menuItems[length] && (isInsideMenu || isSameElement)  // menu might be a form
              || !isInsideMenu ) // or the focused element is not in the menu at all
              && element[open] && key === 27  // menu must be open
        ) {
          self.toggle();
          relatedTarget = null;
        }
      },
  
      // private methods
      show = function() {
        bootstrapCustomEvent.call(parent, showEvent, component, relatedTarget);
        addClass(menu,showClass);
        addClass(parent,showClass);
        element[setAttribute](ariaExpanded,true);
        bootstrapCustomEvent.call(parent, shownEvent, component, relatedTarget);
        element[open] = true;
        off(element, clickEvent, clickHandler);
        setTimeout(function(){
          setFocus( menu[getElementsByTagName]('INPUT')[0] || element ); // focus the first input item | element
          toggleDismiss();
        },1);
      },
      hide = function() {
        bootstrapCustomEvent.call(parent, hideEvent, component, relatedTarget);
        removeClass(menu,showClass);
        removeClass(parent,showClass);
        element[setAttribute](ariaExpanded,false);
        bootstrapCustomEvent.call(parent, hiddenEvent, component, relatedTarget);
        element[open] = false;
        toggleDismiss();
        setFocus(element);
        setTimeout(function(){ on(element, clickEvent, clickHandler); },1);
      };
  
    // set initial state to closed
    element[open] = false;
  
    // public methods
    this.toggle = function() {
      if (hasClass(parent,showClass) && element[open]) { hide(); } 
      else { show(); }
    };
  
    // init
    if ( !(stringDropdown in element) ) { // prevent adding event handlers twice
      !tabindex in menu && menu[setAttribute](tabindex, '0'); // Fix onblur on Chrome | Safari
      on(element, clickEvent, clickHandler);
    }
  
    element[stringDropdown] = self;
  };