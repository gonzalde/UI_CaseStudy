function goToHotelReview() {
    window.location.replace("../HTML/HotelReview.html");
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

//Checks if cookie is present. 
function checkCookie() {
    var user = getCookie("user");
    console.log(user);
    if (user == "") {
        return false;
    } else {
        return true;
    }
}

$(document).ready(function () {
    console.log('page loaded');
    document.getElementById("advancedSearch").addEventListener('click', goToAdvancedSearch);
    document.getElementById("signOut").addEventListener('click', restart);
});