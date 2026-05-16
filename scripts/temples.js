// Dynamic Footer Dates
document.addEventListener("DOMContentLoaded", () => {
    // Populate Copyright Year
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Populate Last Modified Date
    const lastModifiedParagraph = document.getElementById("lastModified");
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
    }

    // Hamburger Menu Functionality
    const menuButton = document.getElementById("menu");
    const navigation = document.querySelector("nav");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            navigation.classList.toggle("show");
            menuButton.classList.toggle("open");
        });
    }
});