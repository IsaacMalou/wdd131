// Dynamically output the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

// Dynamically output the last modified date of the document
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modification: ${lastModifiedDate}`;