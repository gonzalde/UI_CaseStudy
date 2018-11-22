
// Helper Functions

//sets individual cookie such as the Username cookie or the Email cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/"; 
}

//gets the value associated with a cookie name
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
//checks to see if a cookie under a given name exists
function checkCookie() {
    var user = getCookie(document.getElementById('rEmail').value);
    if (user != "") {
        alert("there is already an account associated with that email");
        return false;
    } else {
        return true;
    }
}

//end of helper functions

//function that actually creates cookies
document.getElementById("saveCookies").addEventListener('click', createCookies);

function createCookies(evt) {
    evt.preventDefault();

    if(checkCookie()){
        var user = {
            'name' : document.getElementById('rName').value,
            'password' : document.getElementById('rPassword').value,
            'phone': document.getElementById('rPhone').value,
            'email': document.getElementById('rEmail').value
        }
        setCookie(document.getElementById('rEmail').value, JSON.stringify(user));
        logIn(document.getElementById('rEmail').value);
        signedIn();
    }
    else{
        restart();
    }
}