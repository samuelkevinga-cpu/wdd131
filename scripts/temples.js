const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Last modified date of the document
const lastModifiedPara = document.getElementById("lastModified");
if (lastModifiedPara) {
    lastModifiedPara.textContent = "Last Modified: " + document.lastModified;
}