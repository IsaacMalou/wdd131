// 1. Array of Temple Objects (Includes 3 custom additions with working URLs at the bottom)
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Custom Addition 1
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 119619,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-768119-wallpaper.jpg"
    },
    // Custom Addition 2
    {
        templeName: "Vernal Utah",
        location: "Vernal, Utah, United States",
        dedicated: "1997, November, 2",
        area: 38771,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/vernal-utah/400x250/vernal-temple-lds-82531-wallpaper.jpg"
    },
    // Custom Addition 3
    {
        templeName: "Bountiful Utah",
        location: "Bountiful, Utah, United States",
        dedicated: "1995, January, 8",
        area: 104000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-766347-wallpaper.jpg"
    }
];

// 2. Select HTML Elements
const container = document.getElementById("temple-container");

// 3. Function to Generate Temple Cards
function displayTemples(templeList) {
    // Clear out the container first so we don't keep adding to the bottom
    container.innerHTML = "";

    // Loop through the provided array and build HTML for each one
    templeList.forEach(temple => {
        let figure = document.createElement("figure");
        figure.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Size:</strong> ${temple.area} sq ft</p>
            </figcaption>
        `;
        container.appendChild(figure);
    });
}

// 4. Set Up Filter Buttons
document.getElementById("home").addEventListener("click", () => displayTemples(temples));
document.getElementById("old").addEventListener("click", () => displayTemples(temples.filter(t => parseInt(t.dedicated) < 1900)));
document.getElementById("new").addEventListener("click", () => displayTemples(temples.filter(t => parseInt(t.dedicated) > 2000)));
document.getElementById("large").addEventListener("click", () => displayTemples(temples.filter(t => t.area > 90000)));
document.getElementById("small").addEventListener("click", () => displayTemples(temples.filter(t => t.area < 10000)));

// 5. Run Initial Setup when the page loads
document.addEventListener("DOMContentLoaded", () => {
    // Dates for Footer
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

    // Hamburger Menu Logic
    const menuButton = document.getElementById("menu");
    const navigation = document.querySelector("nav");
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("show");
        menuButton.classList.toggle("open");
    });

    // Display all temples immediately when the page loads
    displayTemples(temples);
});