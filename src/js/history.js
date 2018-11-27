
let customHistoryFIFO = [window.location.href]
var listener = function listener(e) {
  console.log(e);
  var newLocation = window.location;
  console.log(window.location);
  customHistoryFIFO.push(window.location.href)
   loadTemplate(document.body,window.location.href)
    
  console.log(customHistoryFIFO)
};

var pushUrl = function pushUrl(href) {// history.pushState({}, '', href);
  // window.dispatchEvent(new Event('popstate'));
};

window.addEventListener('popstate', listener);