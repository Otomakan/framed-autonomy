{
	src:{
		js:{
			pages:{
				Here we have js files which should be associated to specific templates
			}
		}
		assets:{

		}
		content:{
			utils:{
				Here we have files which are not modified but added to certain pages
				eg: headerLoader to display page in ajax or normal
			},
			jsonContent:{
				Here we have the files which will have the visible text
				thes are json files which should alway starts with a "template"
				The template is used to find the html template in which to incorporate the text
			},
			templates:{
				Here we have the html files they should just have the elements inside the body of the page
			}
		}
	}
}