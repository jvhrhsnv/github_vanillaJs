let dayNight = document.querySelector(".day-night__btn");
dayNightIcon = document.querySelector(".day-night__btn .fa-solid");
dayNightText = document.querySelector(".day-night-text");

// changeThemeElements
let body = document.querySelector("body");
siteName = document.querySelector(".site__name");
searchBar = document.querySelector(".search-bar");
main = document.querySelector("main");
userInfoName = document.querySelector(".user-info__name");
userInfoBio = document.querySelector(".user-info__bio");
userReposFollowersFollowing = document.querySelector(
  ".user-repos-followers-following"
);
joinDateParagraph = document.querySelector(".join-date__paragraph");
userP = document.querySelectorAll(".user-repos-followers-following p");
userH1 = document.querySelectorAll(".user-repos-followers-following h1");
link = document.querySelector('.link');
inputSearch = document.querySelector('#search');

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
    userP.forEach(element => {
        element.classList.toggle("day-dim-text");
    });
    userH1.forEach((element) => {
      element.classList.toggle("day-dark-text");
    });
    link.classList.toggle('day-dim-text');
    inputSearch.classList.toggle('day-dark-text');
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


fetch('')