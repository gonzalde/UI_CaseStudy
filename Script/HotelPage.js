// Switches page to hotel review page.
function goToHotelReview() {
    window.location.replace("../HTML/HotelReview.html");
}

// Used for signing out and returning to the home-page
function restart() {
    deleteCookie("user");
    window.location.replace("../HTML/Landing.html");
}

// Sets a cookie with desired name, value, and date
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

// Deletes a cookie associated with name.
function deleteCookie(name) {
    console.log("Cookie deleted!");
    document.cookie = name + '=;expires=Thu, 09 Sep 1997 00:00:01 GMT; path=/';
};

// Switches page to advanced search.
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
function goBack(){
    window.history.back();
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
//Checks if cookie is present. 
function checkFavCookie() {
    var user = getCookie("favAdded");
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
    document.getElementById("backArrow").addEventListener("mouseover", function(){
        document.getElementById("backArrow").innerHTML = "&#9664;";
    })
    document.getElementById("backArrow").addEventListener("mouseout", function(){
        document.getElementById("backArrow").innerHTML = "&#9665;";
    })
    document.getElementById("addFavorites").addEventListener("click", function(){
        if(document.getElementById("addFavorites").classList.contains("remove")){
            document.getElementById("addFavorites").classList.remove("remove");
            document.getElementById("addFavorites").innerHTML = "Add to <br> Group Favorites";
            deleteCookie("favAdded");
            console.log("something happened")
        }else{
            document.getElementById("addFavorites").classList.add("remove");
            document.getElementById("addFavorites").innerHTML = "Remove from <br> Group Favorites";
            setCookie("favAdded", "true");
        }
    })
    
    if(checkFavCookie){
        document.getElementById("addFavorites").innerHTML = "Remove from <br> Group Favorites"
        document.getElementById("addFavorites").classList.add("remove");
    }else{
        document.getElementById("addFavorites").innerHTML = "Add to <br> Group Favorites"
    }
});