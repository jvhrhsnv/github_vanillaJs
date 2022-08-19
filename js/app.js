let dayNight = document.querySelector(".day-night__btn"),
  dayNightIcon = document.querySelector(".day-night__btn .fa-solid"),
  dayNightText = document.querySelector(".day-night-text");

// changeThemeElements
let body = document.querySelector("body"),
  siteName = document.querySelector(".site__name"),
  searchBar = document.querySelector(".search-bar"),
  main = document.querySelector("main"),
  userInfoName = document.querySelector(".user-info__name"),
  userInfoBio = document.querySelector(".user-info__bio"),
  userReposFollowersFollowing = document.querySelector(
    ".user-repos-followers-following"
  ),
  joinDateParagraph = document.querySelector(".join-date__paragraph"),
  userP = document.querySelectorAll(".user-repos-followers-following p"),
  userH1 = document.querySelectorAll(".user-repos-followers-following h1"),
  link = document.querySelector(".link"),
  inputSearch = document.querySelector("#search");

// change content with Api
let userName = document.querySelector(".user-info__username"),
  avatar = document.querySelector(".avatar"),
  userRepos = document.querySelector(".user__repos-h1"),
  followers = document.querySelector(".user__followers-h1"),
  following = document.querySelector(".user__following-h1");

dayNight.addEventListener("click", changeTheme);

function changeTheme() {
  if (dayNightIcon.classList.contains("fa-sun")) {
    dayNightText.textContent = "lumos!";
    dayNightIcon.classList.remove("fa-sun");
    dayNightIcon.classList.add("fa-moon");

    body.classList.toggle("day-dim-background");
    siteName.classList.toggle("day-dark-text");
    searchBar.classList.toggle("day-dark-background");
    main.classList.toggle("day-dark-background");
    userInfoName.classList.toggle("day-dark-text");
    userInfoBio.classList.toggle("day-dark-text");
    userReposFollowersFollowing.classList.toggle("day-dim-background");
    joinDateParagraph.classList.toggle("day-dim-text");
    userP.forEach((element) => {
      element.classList.toggle("day-dim-text");
    });
    userH1.forEach((element) => {
      element.classList.toggle("day-dark-text");
    });
    link.classList.toggle("day-dim-text");
    inputSearch.classList.toggle("day-dark-text");
  } else {
    dayNightText.textContent = "knox!";
    dayNightIcon.classList.remove("fa-moon");
    dayNightIcon.classList.add("fa-sun");

    body.classList.toggle("day-dim-background");
    siteName.classList.toggle("day-dark-text");
    searchBar.classList.toggle("day-dark-background");
    main.classList.toggle("day-dark-background");
    userInfoName.classList.toggle("day-dark-text");
    userInfoBio.classList.toggle("day-dark-text");
    userReposFollowersFollowing.classList.toggle("day-dim-background");
    joinDateParagraph.classList.toggle("day-dim-text");
    userP.forEach((element) => {
      element.classList.toggle("day-dim-text");
    });
    userH1.forEach((element) => {
      element.classList.toggle("day-dark-text");
    });
    link.classList.toggle("day-dim-text");
    inputSearch.classList.toggle("day-dark-text");
  }
}

let searchBtn = document.querySelector(".search__button button");

function apiSearch(params) {
  fetch(`https://api.github.com/users/${inputSearch.value}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.message == "Not Found") {
        console.log("Not Found");
      } else {
        userInfoName.textContent = data.name;
        userInfoBio.textContent = data.bio;
        userName.textContent = data.login;
        joinDateParagraph.textContent = new Date(
          data.created_at
        ).toDateString();
        avatar.src = data.avatar_url;
        userRepos.textContent = data.public_repos;
        followers.textContent = data.followers;
        following.textContent = data.following;


        console.log(data);
        inputSearch.value = "";
      }
    });
}
searchBtn.addEventListener("click", apiSearch);

window.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    apiSearch();
  }
});

