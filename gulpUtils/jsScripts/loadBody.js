if(!document.body){

	document.open();
	function loadBody(){
		 fetch('../utils/headernav.html').then(res=>{
			res.arrayBuffer().then((ab)=>{
	          	let myString =  String.fromCharCode.apply(null, new Uint8Array(ab))  
	        	document.write(myString);
			 	console.log(content);
				document.write(content);
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