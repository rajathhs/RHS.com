const headerElement = document.getElementById("header");
const heroElement = document.getElementById("hero");
const aboutMeElement = document.getElementById("about");
const factElement = document.getElementById("facts");
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

loadSectionContent(heroElement, "main/hero.html");
loadSectionContent(headerElement, "main/header.html");
loadSectionContent(aboutMeElement, "main/aboutMe.html");
loadSectionContent(factElement, "main/facts.html");
loadSectionContent(skills, "main/skills.html");
loadSectionContent(resume, "main/resume.html");
// loadSectionContent(portfolio, "main/portfolio.html");
// loadSectionContent(services, "main/services.html");
// loadSectionContent(testimonials, "main/testimonials.html");
loadSectionContent(contact, "main/contact.html");
loadSectionContent(footer, "main/footer.html");




