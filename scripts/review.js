document.addEventListener("DOMContentLoaded", () => {
    // 1. Handle LocalStorage Tracking
    // Retrieve the current count, or default to 0 if it doesn't exist
    let reviewCount = Number(window.localStorage.getItem("reviewCounter")) || 0;

    // Increment the count by 1 since they just successfully submitted a form
    reviewCount++;

    // Save the new count back to local storage
    window.localStorage.setItem("reviewCounter", reviewCount);

    // Display the count on the page
    document.getElementById("reviewCount").textContent = reviewCount;

    // 2. Set Footer Dates
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
});