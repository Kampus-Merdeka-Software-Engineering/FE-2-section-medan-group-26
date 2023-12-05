// untuk tombol search

// untuk tombol bar reponsive
const mobilemenu = document.querySelector(".mobile");
const menuBtn = document.querySelector(".menuBtn");
let menuBtnDisplay = true;

menuBtn.addEventListener("click", function () {
  mobilemenu.classList.toggle("hidden");
  console.log("Tombol Menu diklik!");
});

// penggabungan

const header = document.getElementById("navbar");
const footer = document.getElementById("footer");

fetch("./navbar.html")
  .then((snap) => snap.text())
  .then((result) => {
    navbar.innerHtml = result;
  });

// Untuk kolom komentar
// Select elements
const submitButton = document.querySelector(".submit-comment");
const commentInput = document.getElementById("comment-input");
const commentList = document.querySelector(".comment-list");
const usernameInput = document.getElementById("username");

// Function to add comment
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

    // Clear the input fields
    commentInput.value = "";
    usernameInput.value = "";
  } else {
    Swal.fire("Please fill out the username and comment!");
  }
}

// Add event listener
submitButton.addEventListener("click", addComment);
