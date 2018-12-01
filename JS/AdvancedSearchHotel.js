// Used for signing out and returning to the home-page
function restart() {
    deleteCookie("user");
    window.location.replace("../HTML/Landing.html");
}

function deleteCookie(name) {
    console.log("Cookie deleted!");
    document.cookie = name + '=;expires=Thu, 09 Sep 1997 00:00:01 GMT; path=/';
};

// Adds keywords
var keywordCounter = 0;
function addKeyword() {
    if (!checkKeyword()) {
        window.alert("All keywords need to be filled.")
        return;
    }
    var tagName = "pref_" + keywordCounter;
    keywordCounter++;
    $(".pref-list").append("<div id=\"" + tagName + "\" class=\"keyword-option\"><p contenteditable=\"true\">Add Keyword</p><i class=\"fa fa-times\" onclick=\"removeKeyword(" + tagName + ")\"></i></div>");
}

// Removes Keyword
function removeKeyword(idTag) {
    $("#" + idTag.id).remove();
}

// Checks if their are valid preferences
function checkKeyword() {
    for (var i = 0; i < keywordCounter; ++i) {
        if ($("#pref_" + i).length) {
            var text = $("#pref_" + i).text();
            if (text == "Add Keyword" || text == '') {
                return false;
            }
        }
    }
    return true;
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
    $("#favorites-title").css("color", "#646464");
    $("#favorites-title").css("text-decoration", "underline");
});

