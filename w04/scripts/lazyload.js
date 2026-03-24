//Include a footer with content of your choice and display the date the document was last modified using JavaScript.
const LastModified = document.querySelector("#lastModified");
const lastModifiedDate = new Date(document.lastModified);
const options = { year: "numeric", month : "long", day : "numeric" };
LastModified.textContent = `Last Modified: ${lastModifiedDate.toLocaleDateString("en-US", options)}`;