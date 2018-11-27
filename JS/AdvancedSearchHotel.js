// Used for signing out and returning to the home-page
function restart(){
    window.location.replace("../HTML/Landing.html");
}

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
        if($("#pref_" + i).length){
            var text = $("#pref_" + i).text();
            if (text == "Add Keyword" || text == '') {
                return false;
            }
        }
    }
    return true;
}
