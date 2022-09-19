# 🔎 Github User Search App

![GitHub last commit](https://img.shields.io/github/last-commit/maxkdavis/github-user-search)


## Welcome! 👋🏻

Thank you for viewing my solution to this Frontend Mentor coding challenge.

## Screenshots

<img width="419" alt="Screen Shot 2022-02-27 at 2 45 24 PM" src="https://user-images.githubusercontent.com/7098417/155899262-538477dd-4cc1-428f-9a47-2c08afcd5b48.png">

<img width="399" alt="Screen Shot 2022-02-27 at 2 45 35 PM" src="https://user-images.githubusercontent.com/7098417/155899263-1670357f-f8d3-478d-b1d5-8f40889caee7.png">

<img width="656" alt="Screen Shot 2022-02-27 at 2 45 47 PM" src="https://user-images.githubusercontent.com/7098417/155899265-bdf60623-3be7-4503-8863-f5493bef755e.png">

<img width="840" alt="Screen Shot 2022-02-27 at 2 45 59 PM" src="https://user-images.githubusercontent.com/7098417/155899268-729d423c-9528-4e64-bed9-9f53b19f9551.png">

## Links

-   Live URL: https://maxkdavis-github-user-finder.netlify.app/

## My process

Started out with semantic HTML structure on a mobile-first design. Incorporated CSS Media Qeuries to create responsive layouts for both tablet and desktop devices. The overall layout of the app was built using CSS Flexbox. I used CSS grid to organize the social media links once the layout expanded to larger screen sizes. A combination of CSS and Javascript was used to create the dark/light theme toggler.

I relied heavily on Javasctript to handle click and submit events. Based on the user input provided, the application would fetch data from the github API specific to that user. The data would then populate accordingly on the elements throughout the app.

The GitHub users API endpoint is `https://api.github.com/users/:username`.

### Expected behaviour per Challenge requirements

-   On first load, show the profile information for Octocat

-   Display an error message (as shown in the design) if no user is found when a new search is made.

-   If a GitHub user hasn't added their name, show their username where the name would be without the `@` symbol and again below with the `@` symbol.

-   If a GitHub user's bio is empty, show the text "This profile has no bio" with transparency added (as shown in the design).

-   If any of the location, website, twitter, or company properties are empty, show the text "Not Available" with transparency added (as shown in the design).

-   Website, twitter, and company information should all be links to those resources. For the company link, it should remove the `@` symbol and link to the company page on GitHub.
