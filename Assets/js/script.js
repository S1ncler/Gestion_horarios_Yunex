// se obtiene la etiqueta header del index en una variable para guardar facilmente el contenido en el mismo
const header = document.getElementById("header");
// se obtiene la etiqueta main del index en una variable para guardar facilmente el contenido en el mismo
const main = document.getElementById("main");
// se obtiene la etiqueta footer del index en una variable para guardar facilmente el contenido en el mismo
const footer = document.getElementById("footer");

// se trae el codigo del header para el login y se pone dentro de la etiqueta login
fetch("header-login.html")
    // se obtiene el codigo y se pasa a texto
    .then(response => response.text())
    // se guarda el texto en la etiqueta correcta
    .then(html => {
        header.innerHTML = html;
    })
    // se captura el error en caso de que ocurra
    .catch(error => console.log(error));

// se trae el codigo del login para guardarlo en su etiqueta correspondiente
fetch("login.html")
    // se obtiene el codigo y se pasa a texto
    .then(response => response.text())
    // se guarda el texto en la etiqueta correcta
    .then(html => {
        main.innerHTML = html;
    })
    // se captura el error en caso de que ocurra
    .catch(error => console.log(error));

// se trae el codigo del footer para guardarlo en su etiqueta correspondiente
fetch("footer.html")
    // se obtiene el codigo y se pasa a texto
    .then(response => response.text())
    // se guarda el texto en la etiqueta correcta
    .then(html => {
        footer.innerHTML = html;
    })
    // se captura el error en caso de que ocurra
    .catch(error => console.log(error));


// funcion que se carga apenas se carga la pagina
window.addEventListener(`load`, function () {
    // se crea una funcion para el elemento form que captura el login
    document.querySelector("#form-login").addEventListener(`submit`, function (event) {
        // se evita que la pagina se recargue al darle click al boton
        event.preventDefault();
        // se trae el contenido del main
        fetch("main.html")
            .then(response => response.text())
            .then(html => {
                // se guarda el contenido main en la etiqueta correspondiente
                main.innerHTML = html;
                // se selecciona la etiqueta que va a contener las tarjetas
                const cardContainer = document.querySelector('[card-container]');
                // se trae el codigo html de la tarjeta
                fetch("card.html")
                    .then(reponse => reponse.text())
                    .then(html => {
                        // se crea una variable para almacenar todas las tarjetas
                        let cards = "";
                        const meses = ["enero-febrero", "febrero-marzo", "marzo-abril", "abril-mayo", "mayo-junio"]
                        // se crea la cantidad de tarjetas que sean necesarias
                        for (let i = 0; i < meses.length; i++) cards += html;
                        // se guardan las tarjetas en sus respectivos contenedores
                        cardContainer.innerHTML = cards
                        // se trae la etiqueta en la que lleva el nombre de la tarjeta
                        const titulostarjetas = document.querySelectorAll('[titulo-tarjeta]')
                        // se pone el nombre correspondiente a cada tarjeta                   
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