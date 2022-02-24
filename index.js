//Github API: https://api.github.com/users/
//Select the <form> search bar:
const formSearch = document.getElementById("form-search");
//Select the search area div
const searchArea = document.getElementById("search-area");
//Select the <input> inside the form
const userInput = document.getElementById("username");
//Image for the user avatar
const userAvatar = document.querySelector(".avatar-container");
const nameContainer = document.querySelector(".name");
//div containing the user's bio
const profile = document.getElementById("profile");
const userBio = document.querySelector(".user-bio");
const userStats = document.querySelector(".user-stats");
const statLabels = document.querySelectorAll(".label");
const reposData = document.querySelector(".repos");
const followersData = document.querySelector(".followers");
const followingData = document.querySelector(".following");
const locationData = document.querySelector(".location");
const blogData = document.querySelector(".blog");
const twitterData = document.querySelector(".twitter_username");
const twitterLink = document.querySelector(".twitter_link");
const companyData = document.querySelector(".company");

//theme toggler
const themeIcon = document.querySelector(".theme-icon");

themeIcon.onclick = function () {
    document.body.classList.toggle("dark");
    formSearch.classList.toggle("dark");
    userInput.classList.toggle("dark");
    profile.classList.toggle("dark");
    userBio.children[0].classList.toggle("dark");
    nameContainer.children[2].classList.toggle("dark");
    userStats.classList.toggle("dark");

    statLabels.forEach((el) => {
        el.classList.toggle("dark");
    });

    if (document.body.classList.contains("dark")) {
        themeIcon.src = "starter-code/assets/icon-sun.svg";
    } else {
        themeIcon.src = "starter-code/assets/icon-moon.svg";
    }
};

function formatDate(date) {
    const calendar = new Map([
        [1, "Jan"],
        [2, "Feb"],
        [3, "Mar"],
        [4, "Apr"],
        [5, "May"],
        [6, "Jun"],
        [7, "Jul"],
        [8, "Aug"],
        [9, "Sep"],
        [10, "Oct"],
        [11, "Nov"],
        [12, "Dec"],
    ]);

    let day = date.created_at.slice(8, 10);
    let year = date.created_at.slice(0, 4);
    let month = parseInt(date.created_at.slice(5, 7));
    let monthNew = calendar.get(month);
    let formattedDate = `Joined ${day} ${monthNew} ${year}`;
    return (nameContainer.querySelector(".create-date").textContent = formattedDate);
}

function hasName(data) {
    if (data.name === null) {
        nameContainer.querySelector(".user-name").textContent = data.login;
    } else {
        nameContainer.querySelector(".user-name").textContent = data.name;
    }
}

function checkBio(userbio) {
    if (userbio.bio === null || userbio.bio === "") {
        return (userBio.children[0].textContent = "This profile has no bio");
    } else {
        return (userBio.children[0].textContent = `${userbio.bio}`);
    }
}

function checkLocation(data, locationData) {
    if (data.location === null) {
        locationData.classList.add("empty");
        return (locationData.children[1].textContent = "Not Available");
    } else {
        locationData.classList.remove("empty");
        return (locationData.children[1].textContent = `${data.location}`);
    }
}

function checkBlog(data, blogData) {
    if (data.blog === "") {
        blogData.classList.add("empty");
        return (blogData.children[1].textContent = "Not Available");
    } else {
        blogData.classList.remove("empty");
        blogData.children[0].href = data.blog;
        return (blogData.children[1].textContent = `${data.blog}`);
    }
}

function checkTwitter(data, twitterData) {
    if (data.twitter_username === null) {
        twitterData.classList.add("empty");
        return (twitterData.children[1].textContent = "Not Available");
    } else {
        twitterData.classList.remove("empty");
        twitterData.children[0].href = `http://twitter.com/${data.twitter_username}`;
        return (twitterData.children[1].textContent = `${data.twitter_username}`);
    }
}

function checkCompany(data, companyData) {
    if (data.company === null) {
        companyData.classList.add("empty");
        return (companyData.children[1].textContent = "Not Available");
    } else {
        companyData.classList.remove("empty");
        companyData.children[0].href = `https://github.com/${data.company.substring(1)}`;
        return (companyData.children[1].textContent = `${data.company}`);
    }
}

//On first load, show the profile information for Octocat
window.addEventListener("load", () => {
    fetch(`https://api.github.com/users/octocat`)
        .then((response) => response.json())
        .then((data) => {
            userAvatar.innerHTML = `<img src="${data.avatar_url}" class="avatar" alt="github user profile image" />`;

            hasName(data);
            nameContainer.querySelector(".user-login").textContent = `@${data.login} `;

            formatDate(data);
            checkBio(data);

            reposData.textContent = data.public_repos;
            followersData.textContent = data.followers;
            followingData.textContent = data.following;

            checkLocation(data, locationData);
            checkBlog(data, blogData);
            checkTwitter(data, twitterData);
            checkCompany(data, companyData);
        });
});

//add an event listener to capture the user's input value when FORM is submitted
//It's the form that's submitted, not the input
formSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    let searchResults = userInput.value.trim();

    if (searchResults === "") {
        searchArea.children[1].classList.add("error");
        document.getElementById("username").placeholder = "";
    }
    //use search results to complete your fetch API GET request
    fetch(`https://api.github.com/users/${searchResults}`)
        .then((response) => {
            console.log(response);
            if (!response.ok) {
                throw Error("Something went wrong");
            }
            return response.json();
        })
        .then((data) => {
            searchArea.children[1].classList.remove("error");
            userAvatar.innerHTML = `<img src="${data.avatar_url}" class="avatar" alt="github user profile image" />`;

            hasName(data);
            nameContainer.querySelector(".user-login").textContent = `@${data.login} `;

            formatDate(data);
            checkBio(data);

            reposData.textContent = data.public_repos;
            followersData.textContent = data.followers;
            followingData.textContent = data.following;

            checkLocation(data, locationData);
            checkBlog(data, blogData);
            checkTwitter(data, twitterData);
            checkCompany(data, companyData);
        })
        .catch((err) => {
            searchArea.children[1].classList.add("error");
            document.getElementById("username").placeholder = "";
        });
});
