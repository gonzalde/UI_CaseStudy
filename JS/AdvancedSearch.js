
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

function searchListings(){
    var tripType = $("#tripType option:selected").text();
    var location = $("#location").val();
    if(location==""){
        alert("Please add a location!");
        return;
    }
    var checkin = new Date($("#checkin").val());
    console.log(checkin);
    if(checkin=="Invalid Date"){
        alert("Please add a check in date!");
        return;
    }
    var checkinDate = checkin.toLocaleDateString();
    var checkout = new Date($("#checkout").val());
    if(checkout=="Invalid Date"){
        alert("Please add a check out date!");
        return;
    }
    var checkoutDate = checkout.toLocaleDateString();
    var roomNumber = ($("#roomNumber").val()=="5+")?"5":$("#roomNumber").val();
    var adultNumber = ($("#adultNumber").val()=="5+")?"5":$("#adultNumber").val();
    var childNumber = ($("#childNumber").val()=="5+")?"5":$("#childNumber").val();
    var guestsNumber = parseInt(adultNumber)+parseInt(childNumber);
    window.location.replace("../HTML/SearchListings.html?type="+tripType+"?location="+location+
    "?checkin="+checkinDate+"?checkout="+checkoutDate+"?rooms="+roomNumber+"?guests="+guestsNumber);
}

$(document).ready(function () {
    document.getElementById("signOut").addEventListener('click', restart);
    $("#favorites-title").css("color", "#646464");
    $("#favorites-title").css("text-decoration", "underline");
    if(checkCookie()){
        document.getElementById("groupFavBank").classList.remove("hidden");
    }
});

