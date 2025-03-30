let boton = document.querySelector(".BttonJ1")
let boton2 = document.querySelector(".BttonJ2")
let botonR = document.querySelector(".Reiniciar button")
let rondas = document.querySelector(".Rondas #RonTur")
let inputJ1 = document.getElementById("InputJ1")
let inputJ2 = document.getElementById("InputJ2")
let mp = document.querySelector(".Rondas #MP")
const dado1 = document.querySelector(".dado")
const dado2 = document.querySelector(".dado2")
let ronda = 1;
let turno = "Jugador 1";
let ganador = "";
let puntuacionJ1 = 0;
let puntuacionJ2 = 0;
let MejorPuntuacion = localStorage.getItem('MejorPuntuacion');
let audioEtiqueta = document.querySelector("audio")
const time = 2;
boton2.disabled = true;
//Variables para definir la puntuacion de cada jugador
let Pj1 = document.querySelector(".panel #J1")
let Pj2 = document.querySelector(".panel #J2")
let j1 = 0;
let j2 = 0;
let i = 1;

actualizarRonda();
escribirPunt();
//Listener especifico para cada boton, en ambos se deshabilita el propio boton despues de
//lanzar los dados y se habilita el boton contrario, ademas, reproduce un sonido de dados
boton.addEventListener("click", () => {

    if(ronda==4){
        boton.disabled = true;
        boton2.disabled = true;
        return;
    }

    audioEtiqueta.setAttribute("src", "Recursos/dados.mp3")
    boton.disabled = true;
    
    dado1.style.transition = '';
    dado1.style.transform = `translateY(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;

    setTimeout(() => {
        dado1.style.transition = `transform 0.5s`;
        dado1.style.transform = `translateY(-50px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;

        setTimeout(() => {
            audioEtiqueta.play()
            setTimeout(() => {
                dado1.style.transition = `transform ${time}s`;
                let randomValue = Math.floor((Math.random() * 6) + 1);
                puntuacionJ1 += randomValue;
                j1 = randomValue;
                escribirPunt();
                switch (randomValue) {
                    case 1:
                        dado1.style.transform = `translateY(50px) rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
                        break;
                    case 2:
                        dado1.style.transform = `translateY(50px) rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
                        break;
                    case 3:
                        dado1.style.transform = `translateY(50px) rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
                        break;
                    case 4:
                        dado1.style.transform = `translateY(50px) rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
                        break;
                    case 5:
                        dado1.style.transform = `translateY(50px) rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`;
                        break;
                    case 6:
                        dado1.style.transform = `translateY(50px) rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
                        break;
                };
                setTimeout(() => {
                    escribirPunt(i,1);
                    j1 = 0;
                    actualizarRonda();
                    boton2.disabled = false;
                    
                }, 2000);
            }, 80);
        }, 100);
        turno = inputJ2.value;
    }, 100);
})

boton2.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "Recursos/dados.mp3")
    boton2.disabled = true;
    
    ronda = ronda + 1;

    dado2.style.transition = '';
    dado2.style.transform = `translateY(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;

    setTimeout(() => {
        dado2.style.transition = `transform 0.5s`;
        dado2.style.transform = `translateY(-50px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;

        setTimeout(() => {
            audioEtiqueta.play()
            setTimeout(() => {
                dado2.style.transition = `transform ${time}s`;
                let randomValue = Math.floor((Math.random() * 6) + 1);
                puntuacionJ2 += randomValue;
                j2 = randomValue;
                switch (randomValue) {
                    case 1:
                        dado2.style.transform = `translateY(50px) rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
                        break;
                    case 2:
                        dado2.style.transform = `translateY(50px) rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
                        break;
                    case 3:
                        dado2.style.transform = `translateY(50px) rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
                        break;
                    case 4:
                        dado2.style.transform = `translateY(50px) rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
                        break;
                    case 5:
                        dado2.style.transform = `translateY(50px) rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`;
                        break;
                    case 6:
                        dado2.style.transform = `translateY(50px) rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
                        break;
                };
                setTimeout(() => {
                    escribirPunt(i,2);
                    j2 = 0;
                    i += 1;
                    actualizarRonda();
                    boton.disabled = false;
                    
                }, 2000);
            }, 80);
        }, 100);
        turno = inputJ1.value;
    }, 100);
})
//Listener para que se lancen los dados una vez se pulse la barra espaciadora
document.addEventListener("keydown", function (e) {
    if (e.which === 32) {
        e.preventDefault();
        if (boton.disabled == false) {
            boton.click();
        }       
        else if (boton2.disabled == false) {
            boton2.click();
        }
    }
});
//Listener para boton que reinicia la pagina 
botonR.addEventListener("click", () => {
    location.reload(true);
});

//Listener para actualizar el nombre del Turno cuando se ingresa el nombre del jugador 1
inputJ1.addEventListener("input", () => {
    turno = inputJ1.value || "Jugador 1";
    rondas.innerText = "Ronda: " + ronda + "\n  Turno: " + turno;
});

//Mostramos la mejor puntuación registrada del localStorage
if (MejorPuntuacion != null) {
    mp.innerText = "\nMejor Puntuación: " + MejorPuntuacion;
}
//Actualizamos el texto de turnos y rondas, esta funcion es llamada por cada boton despues de un lanzamiento
//Una vez finalicen las 3 rondas el juego termina
function actualizarRonda() {
    rondas.innerText = "Ronda: " + ronda + "\n  Turno: " + turno;
    if (ronda == 4) {
        if (puntuacionJ1 > puntuacionJ2) {
            ganador = inputJ1.value;
            mejorPunt(puntuacionJ1);
        }
        else if (puntuacionJ1 == puntuacionJ2) {
            ganador = "Empate";
        }
        else {
            ganador = inputJ2.value;
            mejorPunt(puntuacionJ2);
        }
        rondas.innerText = "FIN DEL JUEGO!!! \n Ganador:" + ganador;
    }
}
//Funcion para sobreescribir la mejor puntuacion registrada
function mejorPunt(puntos) {
    if (puntos > localStorage.getItem('MejorPuntuacion')) {
        localStorage.setItem('MejorPuntuacion', puntos);
        MejorPuntuacion = puntos;
    }
    mp.innerText = "\nMejor Puntuación: " + MejorPuntuacion;
}
//Funcion para escribir el puntaje en cada ronda
function escribirPunt(contador, jugador) {
    switch (jugador) {
        case 1:
            switch (contador) {
                case 1:
                    Pj1.innerHTML = "<br>Ronda 1: " + j1
                    break;
                case 2:
                    Pj1.innerHTML += "<br>Ronda 2: " + j1
                    break;
                case 3:
                    Pj1.innerHTML += "<br>Ronda 3: " + j1 + "<br><strong>Puntuación:</strong> " + puntuacionJ1
            }
            break;
        case 2:
            switch (contador) {
                case 1:
                    Pj2.innerHTML = "<br>Ronda 1: " + j2
                    break;
                case 2:
                    Pj2.innerHTML += "<br>Ronda 2: " + j2
                    break;
                case 3:
                    Pj2.innerHTML += "<br>Ronda 3: " + j2 + "<br><strong>Puntuación:</strong> " + puntuacionJ2
            }

            break;
    }
}
