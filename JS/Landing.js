
// Helper Functions

var signedIn = false;
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
            'email': document.getElementById('rEmail').value,
            'signedIn': "true"
        }
        setCookie(document.getElementById('rEmail').value, JSON.stringify(user));
        logIn();
    }
    else{
        restart();
    }
}

function logIn(){
    document.getElementById("signInButton").style.display = "none";
    document.getElementById("signOutButton").style.display = "block";
    document.getElementById("registerButton").innerHTML = "Profile";
    signedIn = true;
    updateLoggedInUI();
}

function updateLoggedInUI(){
    $('html, body').css('background-image', 'none'); 
    $('html, body').css('background-color', '#76B8FF'); 
    $('#quick-search-title').text("Where would you like to go?");
    var loginText = document.getElementById('logEmail').value;
    var userJSON = JSON.parse(getCookie(loginText));
    var loggedInName = userJSON["name"];
    $('#name-greeting').text("Hi "+loggedInName+",");
    $('#search-button').css('background-color', 'white'); 
    $('#search-button').css('border-color', 'white'); 
    $('#search-button').css('color', '#76B8FF'); 
    addPastTrips();
}

function addPastTrips(){
    $('#second-title').text("How about a past trip...");
    $(".experiences-group").hide();
    $(".past-trips-group").show();
}

//function to limity functionality to people who are not logged in
document.getElementById("hotelButton").addEventListener('click', limitUserHotels);
document.getElementById("experienceButton").addEventListener('click', limitUserExperience);

function limitUserExperience(){
    if(!signedIn){
        alert("Please sign in or register to access this page!");
    }else{
        window.location.replace("../HTML/AdvancedSearchExperience.html");
    }
}

function limitUserHotels(){
    if(!signedIn){
        alert("Please sign in or register to access this page!");
    }else{
        window.location.replace("../HTML/AdvancedSearchHotel.html");
    }
}
//end of limit functions


//function to validate if there is an email/password pair saved to cookies

document.getElementById("submitSignIn").addEventListener('click', validate);

function validate(){
    var loginText = document.getElementById('logEmail').value
    var user = getCookie(loginText);
    if(user!=""){
        userInfo = JSON.parse(user);
        if($('#logPassword').val()== userInfo["password"]){
            logIn();
        }else{
            alert("incorrect password");
        }
    }else{
        alert("no user associated with this email");
    }
}

// Performs log out.
document.getElementById("signOutButton").addEventListener('click', restart);

function restart() {
    document.getElementById("registerButton").innerHTML = "Register";
    signedIn = false;
    document.getElementById("signInButton").style.display = "block"
    document.getElementById("signOutButton").style.display = "none";
}