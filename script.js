var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".sidebar");

menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
}