/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function menu() {
    var x = document.getElementById("topnav");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }
  