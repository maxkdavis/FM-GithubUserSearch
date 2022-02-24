# Github User Search App

## Welcome! 👋🏻

Thank you for viewing my solution to this Frontend Mentor coding challenge.

## Screenshots

<img width="413" alt="Screen Shot 2022-02-24 at 2 16 41 PM" src="https://user-images.githubusercontent.com/7098417/155602531-7595e81d-64b0-4c9f-ac37-65d6ecdb70be.png">

<img width="630" alt="Screen Shot 2022-02-24 at 2 16 54 PM" src="https://user-images.githubusercontent.com/7098417/155602537-c120e105-4e0e-46c9-b4ce-8a4f0c734f20.png">

<img width="811" alt="Screen Shot 2022-02-24 at 2 17 05 PM" src="https://user-images.githubusercontent.com/7098417/155602544-96d82e20-e526-4e1d-996a-78c11e817b98.png">

## Links

-   Live URL:

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
