if(!document.nav){
	document.open();
	async function loadBody(){
		try{const res=await fetch('./headernav.html'); 
		const reader=res.body.getReader();
		 let result=await reader.read(); 
		 console.log('blo'); 
		 while(!result.done){
		 	document.write((String.fromCharCode.apply(null, new Uint8Array(result.value))));
		 	result=await reader.read();
		 };
		 console.log(content);
		 document.write(content);
		 document.close();}
		 catch(e){
		 console.log(e)}};
		 loadBody().then(()=>{console.log('med');})
}else{
	let scriptTag = document.getElementsByTagName('script');
	scriptTag = scriptTag[scriptTag.length - 1];
	const parentTag = scriptTag.parentNode;
	const childEl = document.create('div')
	childEl.innerHTML = content
	parentTag.appendChild(childEl)
}