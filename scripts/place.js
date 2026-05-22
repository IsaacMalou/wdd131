// 1. Footer Dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

// 2. Static Weather Variables for Juba
const temperature = 35; // °C
const windSpeed = 10;   // km/h

// 3. Wind Chill Calculation Function (Metric)
function calculateWindChill(temp, speed) {
    let windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
    return windChill.toFixed(1);
}

// 4. Conditional Logic
const windChillElement = document.getElementById("windChill");

// Metric requirements: Temp <= 10°C AND Wind Speed > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = calculateWindChill(temperature, windSpeed) + " °C";
} else {
    // Because Juba is 35°C, this path will run and correctly output N/A
    windChillElement.textContent = "N/A";
}