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

window.addEventListener(`load`, function () {
    document.querySelector("#form-login").addEventListener(`submit`, function (event) {
        event.preventDefault();
        fetch("main.html")
            .then(response => response.text())
            .then(html => {
                main.innerHTML = html;
                const cardContainer = document.querySelector('[card-container]');
                fetch("card.html")
                    .then(reponse => reponse.text())
                    .then(html => {
                        let cards = "";
                        for (let i = 0; i <= 4; i++) cards += html;
                        cardContainer.innerHTML = cards
                        const titulostarjetas = document.querySelectorAll('[titulo-tarjeta]')
                        const meses = ["enero-febrero", "febrero-marzo", "marzo-abril", "abril-mayo", "mayo-junio"]
                        for (let i in meses) titulostarjetas[i].innerHTML = meses[i]
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })
    })
})