# UK SKA Regional Centre website user guide
The webpage is created using Jekyll theme [Minimal Mistakes guide](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/) as a basic template. The template modifications have been made directly to the HTML and CSS in this repository. New features and pages make use of liquid to populate information from the various data sources (pages and yml files) to dynamically add content.

To edit the site locally, one needs to have the Jekyll static generator installed on the local system.

The pages are written in markdown. A guide for using markdown in github. This affects how the page is formatted (fonts, tables, links etc). 
- [Minimal mistakes formatting sheet](https://mmistakes.github.io/minimal-mistakes/docs/utility-classes/)
- https://www.markdownguide.org/getting-started/
- https://www.markdownguide.org/cheat-sheet/
- https://pages.github.com/
- Youtube tutorial : [Jekyll - Static Site Generator](https://www.youtube.com/playlist?list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB)
- 
  ## Adding new content
  Posts on the website are divided into 3 categories: News, Events, and Vacancies (webinars are considered Events). New content should always be created in a new branch which has a name using the following convention: posttype_YY-MM-DD_initial. This branch should then be deleted **after** it has been merged into the main branch.

1. Open `_posts` folder 
![image](https://github.com/uksrc/uksrc.github.io/assets/60702218/935f9ab1-4e85-45b7-b22a-ce5ac269072e)

2. Create new file in the relevant directory
- Create a new file in the correct post directory
- Name the file using the following convention: YYYY-MM-DD-meaningful-title.md
- If you want the post to be published at a later time point, use XXX instead of the date. 
![image](https://github.com/uksrc/uksrc.github.io/assets/60702218/5cbef117-19bb-4e67-80e1-f61fc8831649)


3. Edit the front matter markdown file (.md)
- copy and update (e.g. new title) the Front matter from the appropriate template (which can be found in the `templates`) into the top of the new post file. This is the text between the --- is not rendered on the webpage. The front matter allows page-specific variables to be included at the top of a page.
-  ![image](https://github.com/uksrc/uksrc.github.io/assets/60702218/139e5357-80e0-4a77-af14-341d781a4074)
-  Learn more : https://mmistakes.github.io/minimal-mistakes/docs/posts/

4. Any images to be associated with the post should be uploaded to `assets/images/<posttype>`. For some post types, there is an option to include the path to the image in the Front Matter, this will enable the image to be visible in the News Carousel on the website Home page, the image will also be placed at the top of the post page. Other images can be included inline with the main content using markdown syntax.

5. Add the main content to the page
- using markdown syntax, add the main content to the page
- include who, what, where and how in the news and article and how it relates to UKSRC (e.g. team member contributing to the teaching, someone presenting, using our hpc resources).

6. Publish the page
 -  Press commit changes (green button)
   ![image](https://github.com/uksrc/uksrc.github.io/assets/60702218/4eb87556-a9bc-4f33-926b-a0c4e52c28a3)
 - Once you are happy that all the changes have been made, you can make a pull request, this must be reviewed by another member of the website team before it is approved and merged with the master branch.
  
## Adding and updating main webpages 
This should only be done in consultation with the website team. Same as for adding posts, this should be done as a branch using the same naming convention.

If a more specialised page is required, please chat to the website team as this could require building a new HMTL/CSS layout.

1. Open `_pages` folder
![image](https://github.com/uksrc/uksrc.github.io/assets/60702218/76b5cbf4-89b7-417e-9d6f-0fbd801453b4)

2. To edit a page click on the pencil icon
-  ![image](https://github.com/uksrc/uksrc.github.io/assets/60702218/75b33eb1-88cc-4b2c-ade5-4d3f2f333ef1)
 
3. Create new file 
- Create a new file
![image](https://github.com/uksrc/uksrc.github.io/assets/60702218/b4b37b70-ce43-4dfd-bd21-13cd998f37c4)
- give it a "meaninful-title.md"
- Add front matter to the page:
```
---
title: ""
layout: single 
permalink: /link-name/
---
```

4.  Publish the page
 -  Press commit changes (green button)
   ![image](https://github.com/uksrc/uksrc.github.io/assets/60702218/4eb87556-a9bc-4f33-926b-a0c4e52c28a3)
 - This will be reviewed by a different member of the website team before it is merged into the main branch.
