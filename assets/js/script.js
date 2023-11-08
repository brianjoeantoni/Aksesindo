function dropLanguage() {
  document.getElementById("container-dropdown").classList.toggle("block");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("block")) {
        openDropdown.classList.remove("block");
      }
    }
  }
};
