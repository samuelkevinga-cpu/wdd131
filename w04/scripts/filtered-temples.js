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
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Colonia Juarez Mexico",
    location: "Colonia Juarez, Mexico",
    dedicated: "1999, March, 7",
    area:  6800,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/colonia-juarez-chihuahua-mexico-temple/colonia-juarez-chihuahua-mexico-temple-35518.jpg"
  },
  {
    templeName: "Los Angeles California",
    location: "Los Angeles, California, United States",
    dedicated: "1956, March, 11",
    area: 110000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-67183.jpg"
  },
  {
    templeName: "Jordan River Utah",
    location: "South Jordan, Utah, United States",
    dedicated: "1981, January, 24",
    area: 102000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/jordan-river-utah-temple/jordan-river-utah-temple-3448.jpg"
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 107000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435.jpg"
  }

];
//Loop through the array and create "temple cards" for each temple by displaying:
//The name of the temple.
//The location of the temple.
//The date the temple was dedicated.
//The total area of the temple in square feet.
//The provided image of the temple (an absolute address), making sure to include an appropriate alt value such as the name of the temple.
//Use native lazy loading for each temple image.
const cardsGrid = document.querySelector(".cards-grid");
temples.forEach(temple => {
    const card = document.createElement("figure");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading= "lazy">
        <figcaption>
            <h2>${temple.templeName}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
        </figcaption>
    `;
    cardsGrid.appendChild(card);
});

// Respond to the main navigation menu items by filtering and displaying the temples as follows:
// Old – temples built before 1900
// New – temples built after 2000
// Large – temples larger than 90,000 square feet
// Small – temples smaller than 10,000 square feet
// Home – displays all the temples stored in the array.
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const filter = link.textContent;
        let filteredTemples = [];   
        switch (filter) {
            case "Old":
                filteredTemples = temples.filter(temple => {
                    const [year] = temple.dedicated.split(", ");
                    return parseInt(year) < 1900;
                });
                break;
            case "New":
                filteredTemples = temples.filter(temple => {
                    const [year] = temple.dedicated.split(", ");
                    return parseInt(year) > 2000;
                });
                break;
            case "Large":
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case "Small":
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            case "Home":
                filteredTemples = temples;
                break;
        }
        // Clear the existing cards
        cardsGrid.innerHTML = "";
        // Display the filtered temples
        filteredTemples.forEach(temple => {
            const card = document.createElement("figure");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
                <figcaption>
                    <h2>${temple.templeName}</h2>
                    <p>Location: ${temple.location}</p>
                    <p>Dedicated: ${temple.dedicated}</p>
                    <p>Area: ${temple.area} sq ft</p>
                </figcaption>
            `;
            cardsGrid.appendChild(card);
        });
    });
});