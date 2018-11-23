console.log('hey it looks like it worked! Happy Hacking!');
ready(function () {
  //Mimics the bootstrap JS to open navBar
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
  }; //See more first block


  document.getElementById("firt-block-more-info").onclick = () => {
    let firstBlock = document.getElementById('first-block');
    let newFirstBlock = firstBlock.cloneNode(true);
    newFirstBlock.style.position = "absolute";
    newFirstBlock.style.top = 0;
    newFirstBlock.style.height = "80vh";
    newFirstBlock.style.width = "70vw";
    newFirstBlock.style.left = 0;
    newFirstBlock.style.backgroundColor = "purple";
    document.body.appendChild(newFirstBlock);
    firstBlock.remove();
    newFirstBlock.innerHTML = loadTemplate('./pages/template-page.html');
  };

  async function loadTemplate(targetUrl) {
    const res = await fetch(targetUrl); // const reader = res.body.getReader()
    // let result = await reader.read()
    // while(!result.done){
    //    const value = result.value;
    //   total += value.length;
    //   console.log('Received chunk', value);
    //   // get the next result
    //   result = await reader.read();
    // }
    // console.log(result)

    return 'lol'; // .then(res=>{console.log(res)})
    // .catch(err=>{console.log('err' + err)})
    // const stream  = await function(reader){
    //     return new ReadableStream({
    //     start(controller) {
    //       return pump();
    //       function pump() {
    //         return reader.read().then(({ done, value }) => {
    //           // When no more data needs to be consumed, close the stream
    //           if (done) {
    //               controller.close();
    //               return;
    //           }
    //           // Enqueue the next data chunk into our target stream
    //           controller.enqueue(value);
    //           return pump();
    //             });
    //           }
    //         }  
    //       })
    // }
    // const streamResponse =  new Response(stream)
    // const abuf =  response.arrayBuffer()
    // return content = String.fromCharCode.apply(null, new Uint8Array(abuf))
    // .then(stream => {console.log(stream);})
    // .then(response => { console.log(response); return })
    // .then(abuf =>   String.fromCharCode.apply(null, new Uint8Array(abuf))
    //   // return URL.createObjectURL(blob)
    // )
    // .then(content => {console.log(content);console.log(targetDiv);targetDiv.innerHTML = content})
    // .catch(err => console.error(err));
  }
}); //Thanks to http://youmightnotneedjquery.com/#ready

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