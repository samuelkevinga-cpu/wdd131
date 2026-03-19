//get currentYear and lastModified elements
const currentYearElement = document.getElementById("currentYear");
const lastModifiedElement = document.getElementById("lastModified");

//get current year and last modified date
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
//set the text content of the elements
currentYearElement.textContent = currentYear;
lastModifiedElement.textContent = lastModified;

const temperature = 18;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}
if (temperature <= 10 && windSpeed > 4.8) {
    document.getElementById("windChill").textContent = calculateWindChill(temperature, windSpeed) + " °C";
} else {
    document.getElementById("windChill").textContent = "N/A";
}

