function mySubmit() {
    const UserName = document.getElementById("userName").value;
    const Password = document.getElementById("password").value;

    if (UserName == 'Mamun' && Password == '12345') {
        window.location.href = 'index.html';
    }

}
