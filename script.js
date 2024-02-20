document.addEventListener("DOMContentLoaded", function() {
    const toggleMenuBtn = document.querySelector(".fa-bars");
    const sidebarMenu = document.getElementById("sidebar-menu");
    const closeMenuBtn = document.getElementById("close-menu");

    toggleMenuBtn.addEventListener("click", function() {
        sidebarMenu.style.left = "0";
    });

    closeMenuBtn.addEventListener("click", function() {
        sidebarMenu.style.left = "-250px";
    });
});

