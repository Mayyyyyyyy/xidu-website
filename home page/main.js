
//Login-page

function logPassword(){
    var x = document.getElementById("password1");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");

    if(x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}
function registerPassword() {
    var x = document.getElementById("password2");
    var y = document.getElementById("hide3");
    var z = document.getElementById("hide4");

    if (x.type === 'password') {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}
function showLoginpage(){
    var x = document.getElementById('login');
    var y = document.getElementById('login-page');
    x.addEventListener('click',()=>{
        y.style.display="block";
    })
}
showLoginpage();
