
const listener = (e)=>{
	console.log(e)
	let newLocation = window.location
	console.log(window.location)
	
}
const pushUrl = (href) => {
  // history.pushState({}, '', href);
  // window.dispatchEvent(new Event('popstate'));

};
window.addEventListener('popstate', listener);
