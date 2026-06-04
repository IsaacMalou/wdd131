// form.js - Handles dynamic population of product dropdown and footer information
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamically Populate Product Dropdown
    const productSelect = document.getElementById("productName");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1); // Capitalizes the first letter for better UI
        productSelect.appendChild(option);
    });

    // 2. Set Footer Dates
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
});