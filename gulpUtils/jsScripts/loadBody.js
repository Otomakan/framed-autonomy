if(!document.body){
	console.log(document)
	console.log(!document.body)
	document.open();
	document.body = document.createElement("body");
	function loadBody(){
		 fetch('/utils/headernav.html').then(res=>{
			res.arrayBuffer().then((ab)=>{
	          	let myString =  String.fromCharCode.apply(null, new Uint8Array(ab))  
				document.body.innerHTML = myString
				document.body.innerHTML+=content
			 	// console.log(content);
				document.write(myString + content)
				document.close();
        	})
		}).catch(e=>{
			console.log(e);
		})
	}
	loadBody()
}
else{
	let scriptTag = document.getElementsByTagName('script');
	scriptTag = scriptTag[scriptTag.length - 1];
	const parentTag = scriptTag.parentNode
	console.log(parentTag)
	const childEl = document.create('div')
	childEl.innerHTML = content
	consolelog(childEl)
	parentTag.appendChild(childEl)
}