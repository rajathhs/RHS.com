const headerElement = document.getElementById("header");
const heroElement = document.getElementById("hero");

   // Use XMLHttpRequest for older browsers

function loadSectionContent(elementId, filePath) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", filePath, true); // Asynchronous request
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            elementId.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

// fetch("main/header/header.html")
//     .then(response => response.text())
//     .then(htmlContent => {
//         headerElement.innerHTML = htmlContent;
//     })
//     .catch(error => console.error(error))

loadSectionContent(heroElement, "main/hero/hero.html");
loadSectionContent(headerElement, "main/header/header.html");




