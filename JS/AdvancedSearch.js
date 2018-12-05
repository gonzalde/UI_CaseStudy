
// Used for signing out and returning to the home-page
function restart() {
    deleteCookie("user");
    window.location.replace("../HTML/Landing.html");
}

function deleteCookie(name) {
    console.log("Cookie deleted!");
    document.cookie = name + '=;expires=Thu, 09 Sep 1997 00:00:01 GMT; path=/';
};

function goToHotel(){
    window.location.replace("../HTML/HotelPage.html");
}

function getFavorites() {
    $(".group-favorites-group").hide();
    $(".favorites-group").show();
    $("#favorites-title").css("color", "#646464");
    $("#favorites-title").css("text-decoration", "underline");
    $("#group-favorites-title").css("color", "white");
    $("#group-favorites-title").css("text-decoration", "none");
}

function getGroupFavorites() {
    $(".favorites-group").hide();
    $(".group-favorites-group").show();
    $("#group-favorites-title").css("color", "#646464");
    $("#group-favorites-title").css("text-decoration", "underline");
    $("#favorites-title").css("color", "white");
    $("#favorites-title").css("text-decoration", "none");
}

function checkCookie() {
    var user = getCookie("favAdded");
    console.log(user);
    if (user == "") {
        return false;
    } else {
        return true;
    }
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

$(document).ready(function () {
    document.getElementById("signOut").addEventListener('click', restart);
    $("#favorites-title").css("color", "#646464");
    $("#favorites-title").css("text-decoration", "underline");
    if(checkCookie()){
        document.getElementById("groupFavBank").classList.remove("hidden");
    }
});

