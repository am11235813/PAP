window.addEventListener("resize", resizedWindow);
resizedWindow();
function toggleMenuDropdown() {
    // if the menu is down, set the 4 other buttons' display to 'none', set dropdown's text to ascii char for down arrow
    // if the menu is up, set the 4 other buttons' display to 'block', set dropdown's text to ascii char for up arrow
    if(document.getElementById("dropdownButton").innerHTML == "\\/") {
        document.getElementById("dropdownButton").innerHTML = "/\\";
        document.getElementById("homeButton").style.display = "block";
        document.getElementById("forumButton").style.display = "block";
        document.getElementById("miscButton").style.display = "block";
        document.getElementById("contactButton").style.display = "block";
    } else {
        document.getElementById("dropdownButton").innerHTML = "\\/";
        document.getElementById("homeButton").style.display = "none";
        document.getElementById("forumButton").style.display = "none";
        document.getElementById("miscButton").style.display = "none";
        document.getElementById("contactButton").style.display = "none";
    }
}

function resizedWindow() {
    if(window.innerWidth <= 400) {
        document.getElementById("dropdownButton").style.display = "block";
        document.getElementById("dropdownButton").innerHTML = "\\/";
        document.getElementById("homeButton").style.display = "none";
        document.getElementById("forumButton").style.display = "none";
        document.getElementById("miscButton").style.display = "none";
        document.getElementById("contactButton").style.display = "none";
    } else {
        document.getElementById("dropdownButton").style.display = "none";
        document.getElementById("homeButton").style.display = "block";
        document.getElementById("forumButton").style.display = "block";
        document.getElementById("miscButton").style.display = "block";
        document.getElementById("contactButton").style.display = "block";
    }
    // if the window width is less than 400px, set the display of the dropdown button to 'block', and change its text to ascii char for down arrow
    //          then set the 4 other buttons' display to 'none'
    // otherwise, set the display of the dropdown button to 'none'
    //          then set the 4 other buttons' display to 'block'
}