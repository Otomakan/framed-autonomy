const fs = require('fs')
const {promisify} = require("util")
const readFile = promisify(fs.readFile)

// var babel = require("@babel/core");
const transform = require("@babel/core").transform;
const babel = require("@babel/core");

function loadBody (cb) {
	let content = ""
 	content = fs.readFileSync('/Users/macuser/Documents/TechDocs/mmp/new_site/yeo/gulpUtils/jsScripts/loadBody.js')
	//Let's babelify this girl
	console.log(content) 
	content =  babel.transform(content.toString(),{
  		"presets": ["@babel/preset-env"]
	})

	content  = content.code.replace(/\"/g, "\'")
	// console.log(content)
	// console.log(content)
	//Removing next line or white space
	 return  content.replace(/(>\s+|\s+<)|(\n)/g,"")
	}
	
module.exports = {
	loadBody: loadBody,

}