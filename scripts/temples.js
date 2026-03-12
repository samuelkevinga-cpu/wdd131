const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Last modified date of the document
const lastModifiedPara = document.getElementById("lastModified");
if (lastModifiedPara) {
    lastModifiedPara.textContent = "Last Modified: " + document.lastModified;
}

// Hamburger menu toggle
const hamburguerBtn = document.getElementById("hamburger-btn");
const navUl = document.querySelector("nav ul");
hamburguerBtn.addEventListener("click", () => {
    //Toggle the "open" class on the body element
    navUl.classList.toggle("open");
    //Also check if the menu is open or closed, and change the button text to ✕ when open and back to ☰ when closed
    if (navUl.classList.contains("open"))   {
        hamburguerBtn.textContent = "✕";
    } else {
        hamburguerBtn.textContent = "☰";
    }
});