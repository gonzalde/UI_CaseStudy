//Sets individual cookie such as the Username cookie or the Email cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

//Gets the value associated with a cookie name
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
//Checks to see if a cookie under a given name exists
function checkRepeatCookie() {
    var user = getCookie(document.getElementById('rEmail').value);
    if (user != "") {
        alert("There is already an account associated with this email!");
        return false;
    } else {
        return true;
    }
}
// Checks if user is in session.
function checkCookie() {
    var user = getCookie("user");
    console.log(user);
    if (user == "") {
        return false;
    } else {
        return true;
    }
}
// Creates a cookie for logged in user
function createCookies(evt) {
    evt.preventDefault();
    if (checkRepeatCookie()) {
        var user = {
            'name': document.getElementById('rName').value,
            'password': document.getElementById('rPassword').value,
            'phone': document.getElementById('rPhone').value,
            'email': document.getElementById('rEmail').value,
            'signedIn': "true"
        }
        setCookie(document.getElementById('rEmail').value, JSON.stringify(user));
        setCookie('user', document.getElementById('rEmail').value);
        logIn();
    }
    else {
        restart();
    }
}
// Performs login.
function logIn() {
    document.getElementById("signInButton").style.display = "none";
    document.getElementById("signOut").style.display = "block";
    document.getElementById("registerButton").innerHTML = "Profile";
    console.log(document.cookie);
    updateLoggedInUI();
}

function updateLoggedInUI() {
    $('html, body').css('background-image', 'none');
    $('html, body').css('background-color', '#BE92A2');
    $('#quick-search-title').text("Where would you like to go?");
    var cookieKey = getCookie("user");
    var userJSON = JSON.parse(getCookie(cookieKey));
    var loggedInName = userJSON["name"];
    $('#name-greeting').text("Hi " + loggedInName + ",");
    addPastTrips();
}

function addPastTrips() {
    $('#second-title').text("How about a past trip...");
    $(".experiences-group").hide();
    $(".past-trips-group").show();
}

function limitUserAdvancedSearch() {
    if (!checkCookie()) {
        alert("Please sign in or register to access this page!");
    } else {
        window.location.replace("../HTML/AdvancedSearch.html");
    }
}
//end of limit functions

//function to validate if there is an email/password pair saved to cookies
function validate() {
    var loginText = document.getElementById('logEmail').value
    var user = getCookie(loginText);
    if (user != "") {
        userInfo = JSON.parse(user);
        if ($('#logPassword').val() == userInfo["password"]) {
            setCookie('user', loginText);
            logIn();
        } else {
            alert("Incorrect password!");
        }
    } else {
        alert("No user associated with this email!");
    }
}


function restart() {
    deleteCookie("user");
    $('html, body').css('background-image', 'url("../Assets/landingBackground.png")');
    $('#name-greeting').text("");
    $('#quick-search-title').text("Have a place in mind?");
    $('#search-button').css('background-color', '#76B8FF');
    $('#search-button').css('border-color', '#76B8FF');
    $('#search-button').css('color', 'white');
    $('#second-title').text("Maybe a curated experience...");
    $(".past-trips-group").hide();
    $(".experiences-group").show();
    document.getElementById("registerButton").innerHTML = "Register";
    document.getElementById("signInButton").style.display = "block"
    document.getElementById("signOut").style.display = "none";
}

function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 09 Sep 1997 00:00:01 GMT; path=/';
};


$(document).ready(function () {
    console.log('page loaded');
    checkLogin();
    //function that actually creates cookies
    document.getElementById("saveCookies").addEventListener('click', createCookies);
    //Function to limity functionality to people who are not logged in
    document.getElementById("advancedSearch").addEventListener('click', limitUserAdvancedSearch);
    // Performs log out.
    document.getElementById("signOut").addEventListener('click', restart);
    document.getElementById("submitSignIn").addEventListener('click', validate);
});


function checkLogin() {
    if (checkCookie()) {
        console.log("cookie present");
        logIn();
    }
    else {
        console.log("no cookies");
        restart();
    }
}