function updateSearch (){
    var searchParams = window.location.search.substr(1).split("?");
    console.log(searchParams);
    var tripType = searchParams[0].split("=")[1];
    $("#trip-title").text(tripType+" Search Listings");
    var location = searchParams[1].split("=")[1].replace("%20"," ");
    $("#location-title").text(location);
    var checkin = searchParams[2].split("=")[1];
    var checkout = searchParams[3].split("=")[1];
    $("#stay-dates").text(checkin+"-"+checkout);
    var roomNumber = searchParams[4].split("=")[1];
    var guestsNumber = searchParams[5].split("=")[1];
    var guestsPerRoom = Math.ceil(parseInt(guestsNumber)/parseInt(roomNumber));
    $("#rooms-guests").text(roomNumber+" Room: "+guestsPerRoom+" Guest/Room");
}

// Used for signing out and returning to the home-page
function restart() {
    deleteCookie("user");
    window.location.replace("../HTML/Landing.html");
}

function deleteCookie(name) {
    console.log("Cookie deleted!");
    document.cookie = name + '=;expires=Thu, 09 Sep 1997 00:00:01 GMT; path=/';
};

function goToAdvancedSearch() {
    window.location.replace("../HTML/AdvancedSearch.html");
}

function goToHotel(){
    window.location.replace("../HTML/HotelPage.html");
}

function goBack() {
    window.history.back();
}

$(document).ready(function () {
    document.getElementById("signOut").addEventListener('click', restart);
    document.getElementById("advancedSearch").addEventListener('click', goToAdvancedSearch);
    updateSearch();
});

