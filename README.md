# framed-autonomy
A dynamic website with only static pages

This is a simpy gulp based static website generator. 

Simply install and run gulp. Gulp will take care of generating the site as your file changes and running it in a local server. 

Gulp parses the Javascript and CSS so each page has a unique JS and CSS file associated with it. (Apparently what I'm doing with the CSS is tree shaking but I'm not sure sure, and it's not that complex)

Write your page templates in src/content/templates and the content of you page in a JSON format in src/content/contentJSON.
Gulp will read your template file and replace each ##key## in the template by the key provided in the JSON file. 

Don't forget to tell Gulp which template you are using in the JSON file. Here is an example 

```
{
	"template": "template-page",
	"title":"Template Page",
	"subtitle":"A Page about templates",
	"content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lore"
}
```

The folder structure in contentJSON will become the structure of your website. 
