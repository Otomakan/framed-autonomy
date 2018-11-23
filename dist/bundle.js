const listener = e => {
  console.log(e);
  let newLocation = window.location;
  console.log(window.location);
};

const pushUrl = href => {// history.pushState({}, '', href);
  // window.dispatchEvent(new Event('popstate'));
};

window.addEventListener('popstate', listener);
console.log('hey it looks like it worked! Happy Hacking!');
ready(function () {
  let body = document.body; //Mimics the bootstrap JS to open navBar

  let buttonNav = document.getElementsByClassName('navbar-toggler')[0];
  let navBarNav = document.getElementsByClassName('navbar-nav')[0];
  let contentNav = document.getElementById('navbarNavAltMarkup');
  let show = false;

  buttonNav.onclick = () => {
    show = !show; //Check the status of the show variable and add or remove show class accordingly

    if (show) {
      contentNav.classList.add('show');
      navBarNav.classList.add('show');
    } else {
      contentNav.classList.remove('show');
      navBarNav.classList.remove('show');
    }
  }; //Navigation Bar Links
  // document.
  //See more first block


  document.getElementById("first-block-more-info").onclick = () => {
    let firstBlock = document.getElementById('first-block');
    let newFirstBlock = firstBlock.cloneNode(true);
    newFirstBlock.style.position = "absolute";
    newFirstBlock.style.top = 0;
    newFirstBlock.style.height = "80vh";
    newFirstBlock.style.width = "100vw";
    newFirstBlock.style.left = 0;
    firstBlock.remove();

    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }

    body.classList.add('blue');
    document.body.appendChild(newFirstBlock);
    loadTemplate(newFirstBlock, './pages/template-page.html');
  };
}); //This function is used to load some HTML from targetUrl, 
// and replace the content of targetDiv with it.

async function loadTemplate(targetDiv, targetUrl, targetContent) {
  targetDiv.innerHTML = "";
  const res = await fetch(targetUrl);
  const reader = res.body.getReader();
  let result = await reader.read(); // console.log(result.)
  // Maybe use blobs by creating a reader then read as texthttp://qnimate.com/an-introduction-to-javascript-blobs-and-file-interface/ but creating blob just uses up client memory

  let content = "";

  while (!result.done) {
    //Converting to Array Buffer to a String
    targetDiv.innerHTML += String.fromCharCode.apply(null, new Uint8Array(result.value)); // cIn case we have more coming in

    result = await reader.read();
  }
} //Thanks to http://youmightnotneedjquery.com/#ready


function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState != 'loading') fn();
    });
  }
}

if ('serviceWorker' in navigator) {
  // Supported!
  console.log('Supported');
}