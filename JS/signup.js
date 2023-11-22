// document.getElementById('signup-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     var email = document.getElementById('email').value;
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     var confirmPassword = document.getElementById('confirm-password').value;

//     if (password !== confirmPassword) {
//         alert('Passwords do not match. Please try again.');
//         return;
//     }
//     // Validation passed, now you can send the form data to the server.
//     alert('Form submitted successfully.');

//     var agreeCheckbox = document.getElementById('agree').checked;

//     if (!agreeCheckbox.checked) {
//         alert('You must agree to Terms and Conditions.');
//         return;
//     }

//     // Kode untuk mengirim data SignUp ke server (API atau controller)
//     console.log('Signup with email:', email, 'username:', username, 'password:', password, 'and confirm password:', confirmPassword, 'with agree:', agreeCheckbox);
//     // console.log('Form data submitted successfully');
// });

document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Validate the form data
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    var agreeCheckbox = document.getElementById("agree").checked;

    if (!agreeCheckbox.checked) {
      alert("You must agree to Terms and Conditions.");
      return;
    }

    // Validation passed, now you can send the form data to the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "your_server_url_here", true); //isi your_server_url_here dengan URL server kita
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    var data = JSON.stringify({
      email: email,
      username: username,
      password: password,
    });

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);

        if (json.status === "success") {
          alert("Form submitted successfully.");
        } else {
          alert("Error: " + json.message);
        }
      }
    };

    xhr.send(data);
  });
