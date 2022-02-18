//Github API: https://api.github.com/users/

//Select the <form> search bar:
const formSearch = document.getElementById("form-search");
//Select the <input> inside the form
const userInput = document.getElementById("username");
//Image for the user avatar
const userAvatar = document.querySelector(".avatar-container");
const nameContainer = document.querySelector(".name");
//div containing the user's bio
const userBio = document.querySelector(".user-bio");
const reposData = document.querySelector(".repos");
const followersData = document.querySelector(".followers");
const followingData = document.querySelector(".following");

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

function checkBio(userbio) {
    if (userbio.bio === null || userbio.bio === "") {
        return (userBio.children[0].textContent = "This profile has no bio");
    } else {
        return (userBio.children[0].textContent = `${userbio.bio}`);
    }
}

//add an event listener to capture the user's input value when FORM is submitted
//It's the form that's submitted, not the input
formSearch.addEventListener("submit", (e) => {
    e.preventDefault();

    let searchResults = userInput.value.trim();

    //use search results to complete your fetch API GET request
    fetch(`https://api.github.com/users/${searchResults}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            userAvatar.innerHTML = `
            <img src="${data.avatar_url}" class="avatar" alt="github user profile image" />
            `;

            nameContainer.querySelector(".user-name").textContent = data.name;
            nameContainer.querySelector(".user-login").textContent = `@${data.login} `;

            formatDate(data);
            checkBio(data);

            reposData.textContent = data.public_repos;
            followersData.textContent = data.followers;
            followingData.textContent = data.following;
        });
});

//check a function that checks if there's anything in the bio. if yes, append to <p>
//if no, default string to "This profile has no bio"
