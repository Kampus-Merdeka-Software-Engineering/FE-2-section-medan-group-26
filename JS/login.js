document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var rememberMe = document.getElementById('remember-me').checked;

    // Kode untuk mengirim data login ke server (API atau controller)
    console.log('Login with email:', email, 'and password:', password, 'with remember me:', rememberMe);
});