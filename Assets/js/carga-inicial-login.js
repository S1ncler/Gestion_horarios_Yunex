const header = document.getElementById("header");
const main = document.getElementById("main");
const footer = document.getElementById("footer")

fetch("header-login.html")
    .then(response => response.text())
    .then(html => {
        header.innerHTML = html;
    })
    .catch(error => console.log(error));

fetch("login.html")
    .then(response => response.text())
    .then(html => {
        main.innerHTML = html;
    })
    .catch(error => console.log(error));

fetch("footer.html")
    .then(response => response.text())
    .then(html => {
        footer.innerHTML = html;
    })