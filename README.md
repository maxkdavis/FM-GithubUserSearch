# 🔎 Github User Search (Devfinder)

![GitHub last commit](https://img.shields.io/github/last-commit/maxkdavis/github-user-search)

## Quickly lookup and explore Github users
[Devfinder](https://maxkdavis-github-user-finder.netlify.app/) is a web app for retrieving and visualizing GitHub user data. Enter a GitHub username into the search bar and view their profile information as well as links to their Twitter homepage, personal website, and blog posts!  

![Image of Devfinder App](https://user-images.githubusercontent.com/7098417/155899262-538477dd-4cc1-428f-9a47-2c08afcd5b48.png)

### Links
- See live demo of [Devfinder](https://maxkdavis-github-user-finder.netlify.app/)
- This site was built using [Netlify](https://www.netlify.com/)

### How I Built This
Devfinder is a web and mobile-friendly application that integrates GitHub's REST API to retrieve information from GitHub users. Here is the GitHub users API endpoint:
```
https://api.github.com/users/:username
```
After capturing the user's input, the `fetch()` command is used to request and parse the returned JSON data. 

Programming tools I used to build this app:
- HTML
- CSS (`@media` and `flexbox` for responsive layouts)
- Javascript (`fetch()` and `querySelector()`)
- REST API
- VS Code Editor

### Product Requirements
-   On first load, the app will default to show Octocat's profile information
-   Display an error message (as shown in the design) if no user is found when a new search is made
-   If a GitHub user hasn't added their name, Devfinder will show their username where the name would be without the `@` symbol and again below with the `@` symbol
-   If a GitHub user's bio is empty, Devfidner will show the text "This profile has no bio"
-   If any of the location, website, twitter, or company properties are empty, Defvinder will show the text "Not Available"
-   Website, twitter, and company information should all be links to those resources. For the company link, it should remove the `@` symbol and link to the company page on GitHub.


### Features
- Built-in CSS fucntions will adjust to the layout, sizing and placement of elements on the user's viewing device.
- Click the icon (☀️/🌑) on the top-right to toggle between dark and light themes
