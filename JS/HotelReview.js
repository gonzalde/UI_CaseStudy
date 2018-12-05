// Used for signing out and returning to the home-page
function restart() {
  deleteCookie("user");
  window.location.replace("../HTML/Landing.html");
}

function deleteCookie(name) {
  console.log("Cookie deleted!");
  document.cookie = name + '=;expires=Thu, 09 Sep 1997 00:00:01 GMT; path=/';
};

function limitUserAdvancedSearch() {
  if (!checkCookie()) {
    alert("Please sign in or register to access this page!");
  } else {
    window.location.replace("../HTML/AdvancedSearch.html");
  }
}

function goToHotel(){
  window.location.replace("../HTML/HotelPage.html");
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
  document.getElementById("advancedSearch").addEventListener('click', limitUserAdvancedSearch);
  document.getElementById("signOut").addEventListener('click', restart);
  document.getElementById("backArrow").addEventListener("mouseover", function () {
    document.getElementById("backArrow").innerHTML = "&#9664;";
  })
  document.getElementById("backArrow").addEventListener("mouseout", function () {
    document.getElementById("backArrow").innerHTML = "&#9665;";
  })
});