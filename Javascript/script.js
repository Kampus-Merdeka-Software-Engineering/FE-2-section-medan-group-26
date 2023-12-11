const mobilemenu = document.querySelector(".mobile");
const menuBtn = document.querySelector(".menuBtn");
let menuBtnDisplay = true;

menuBtn.addEventListener("click", function () {
  mobilemenu.classList.toggle("hidden");
});

const submenuLinks = document.querySelectorAll(
  ".mobile li:not(:first-child) a"
);

submenuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const mobileMenu = document.querySelector(".mobile");

    mobileMenu.classList.add("hidden");
  });
});

document.querySelector(".arrow-up").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const header = document.getElementById("navbar");
const footer = document.getElementById("footer");

fetch("./navbar.html")
  .then((snap) => snap.text())
  .then((result) => {
    navbar.innerHtml = result;
  });

const submitButton = document.querySelector(".submit-comment");
const commentInput = document.getElementById("comment-input");
const commentList = document.querySelector(".comment-list");
const usernameInput = document.getElementById("username");

function addComment() {
  const commentText = commentInput.value.trim();
  const username = usernameInput.value.trim();

  if (commentText && username) {
    const li = document.createElement("li");
    li.innerHTML = `<b><span style="color: #102362">${username}</span></b>
                    <hr>
                    <br>
                    ${commentText}`;
    li.classList.add("comment-item");
    commentList.appendChild(li);

    commentInput.value = "";
    usernameInput.value = "";
  } else {
    Swal.fire("Please fill out the username and comment!");
  }
}

submitButton.addEventListener("click", addComment);
