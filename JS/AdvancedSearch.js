
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

$(document).ready(function () {
    document.getElementById("signOut").addEventListener('click', restart);
    $("#favorites-title").css("color", "#646464");
    $("#favorites-title").css("text-decoration", "underline");
});

