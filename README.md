# Personal vCard and GitHub Portfolio template

This is a free to use template for a personal website where you can display your cv and skill.
It's divided in two sections: 
* *About Me* : Page presenting yourself, displaying education, professional experiences, IT and language skills
* *Portfolio* : Page that shows your GitHub repositories

The objective of this template is to be as **modular and automated** as possible, with some **simple changes** to specific files
you will be able to customize it. All the GitHub data is pulled directly through APIs calls, once you set up a directory in GitHub it will be automatically 
added to the website (depending on the setting you chose).

This website has been made for any screen, Desktop, Tablet or Mobile!

>**If you find this Template useful please leave a star to the [original repository](https://github.com/lou6891/personal_portfolio_template)!**

Example in action = [Luca's vCard](https://www.lucaconti.io)!

## Table of Contents

- [Technology Used](#Technology-Used)
- [How to use it](#How-to-use-it)
- [How to Deploy on GitHub pages](#How-to-Deploy-on-GitHub-pages)
- [Credits](#Credits)
- [License](#License)


---

## Technology Used
This website was created in React, you will need to install it to run the project
(for non-technical to run it locally and have a preview the command is npm start, cd in the project's folder)

### Dependencies Installed:
- crypto-js
- gh-pages

--- 

## How to use it
### 0. Install React and the project's dependencies
To start using it, you must install [React](https://reactjs.org/) on your machine, then run npm install in the project's folder to install
the dependencies it uses to run

###  1. Setting up GitHub

To set up your GitHub information go to src\parameters\data.
Here you can find all the personal data you may want to add.

>To connect to your GitHub add your username to GitHub_name field

The data retrieved by the APIs are:
1. GitHub picture
2. Repository data (for each ):
    - Name
    - Description
    - Created date
    - Size
    - Languages
    - Social Media Preview
      
(To modify the information displayed by the site, directly modify these fields on GitHUb)

###  2. Setting up Personal Information

In the same file of the GitHUb name (src\parameters\data), the other fields control
the data of the About Me section, clearer instructions are in the file.

> If you do not want to include a section, substitute the content with null.

#### Adding a new IT Skill Img
To add a new IT skill img, apart from the one in the current list go to /src/parameters/languageSymbols.js
There you find a dictionary, where the **key = name of the skill** and the **value = img**.

> That dictionary is also used to show the languages used by your GitHUb repository, when adding a new skill that you also used in a repo
> use the same name that GitHub assign to it

The images are taken from https://devicon.dev/, remember to add the style, key and alt as explained in the file.

###  3. Website settings

In the file settings (src\parameters\settings) are present some specific setting that control some parts of the website.
They are:
- Modify the pixel width that manage the transaction between Desktop, Tablet and Mobile lesions of the website
- Modify the number of repositories to show, and sort them by a specific criteria and chose the repositories not to show repositories
  **Important** : The API will get all your repositories, remove the unwanted ones ,sort them and then keep only the number you want,
  for more granular setting you will have to create your own algorithm in the src/components/body/Body.js file or 
  in the /src/components/body/sorting_functions.js file
- Modify the landing page

###  4. Modify theme colors and other CSS variables

To modify the graphics of the website and the CSS variables that mange it, go to
/src/App.css. 
There you can modify:
- the colors used by the light and dark theme
- font sizes
- Other graphics settings

### 5. Modify the website icon, name and description

To modify the name, icon and description of the website to the public folder.

To modify the icon, change the standard react files with your icon file.
Be carefully, the new icon must have the same name and dimensions of the old ones.
EX: if you want to change logo192.img, you have to make a logo 192x192 px called logo192.img.

To modify the website name, description go to the /public/index.html:
- In line 10 you may add your personalized description
- In line 27 you may add your personalized name
Then go to \public\manifest.json and modify short_name and name there

---

## How to Deploy on GitHub pages

1. Clone this repo
2. Modify it
3. Create a repository called `YOUR_GITHUB_NAME.github.io`
4. Modify the HOMEPAGE field in package.json with `https://YOUR_GITHUB_NAME.github.io` (line 2) 
5. git init on this project
6. Add, commit the file/changes
7. `npm run deploy` (it may take a few seconds to apply changes)

Full documentation on [Deployment on github pages](https://create-react-app.dev/docs/deployment/#github-pages)

### Deploy with custom domain

Guide I used, and from which I took these steps [Add a Custom Domain Guide](https://jinnabalu.medium.com/godaddy-domain-with-github-pages-62aed906d4ef)

1. Buy a domain
2. In the DNS management add as type A IPs
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
3. In the DNS management add  CNAME type, name = www, value = YOUR.GITHUB.IO
4. In the repository to go setting/pages, scroll to custom domain, write the domain there
5. In the \public folder add a file called CNAME containing a single line with your domain in it

---

## Credits
The general design and colors of this website were inspired by the vCard portfolio made by
[codewithsadee](https://github.com/codewithsadee).

This website was made by [lou6891](https://github.com/lou6891)

---

## License
Use this template as you like.
However, if you do not modify the structure or graphics we kindly as you to keep the credits
since hours of work went into it.

