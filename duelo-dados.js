let boton = document.querySelector(".BttonJ1")
let boton2 = document.querySelector(".BttonJ2")
let botonR = document.querySelector(".Reiniciar button")
let rondas = document.querySelector(".Rondas #RonTur")
let mp=document.querySelector(".Rondas #MP")
const dado1 = document.querySelector(".dado")
const dado2 = document.querySelector(".dado2")
let ronda = 1;
let turno =1;
let ganador="";
let puntuacionJ1=0;
let puntuacionJ2=0;
const MejorPuntuacion=localStorage.getItem('MejorPuntuacion');
let audioEtiqueta = document.querySelector("audio")
const time = 2;
boton2.disabled=true;
actualizarRonda();


//Listener especifico para cada boton, en ambos se deshabilita el propio boton despues de
//lanzar los dados y se habilita el boton contrario, ademas, reproduce un sonido de dados
boton.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "audio/dados.mp3")
    boton.disabled=true;
    boton2.disabled=false;
    turno=turno+1;


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
                console.log(`randomValue: ${randomValue}`);

                puntuacionJ1+=randomValue;
                console.log(`puntuacionJ1: ${puntuacionJ1}`);
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
                actualizarRonda();
            }, 80);
        }, 100); 
        
    }, 100);

})

boton2.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "audio/dados.mp3")
    boton.disabled=false;
    boton2.disabled=true;
    turno=1;
    ronda=ronda+1;

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
                console.log(`randomValue: ${randomValue}`);
                puntuacionJ2+=randomValue;
                console.log(`puntuacionJ2: ${puntuacionJ2}`);
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
                actualizarRonda();
            }, 80);
        }, 100); 
        
    }, 100);

})

//Listener para boton que reinicia la pagina 
botonR.addEventListener("click", ()=>{
    location.reload(true);
})
//Mostramos la mejor puntuación registrada del localStorage
if(MejorPuntuacion!= null){
    mp.innerText="\nMejor Puntuación: "+MejorPuntuacion;
}
//Actualizamos el texto de turnos y rondas, esta funcion es llamada por cada boton despues de un lanzamiento
//Una vez finalicen las 3 rondas el juego termina
function actualizarRonda(){
    rondas.innerText="Ronda: "+ronda+"\n  Turno: Jugador "+turno;
    if (ronda==4) {
        if (puntuacionJ1>puntuacionJ2) {
            ganador="Jugador 1";
            localStorage.setItem('MejorPuntuacion',puntuacionJ1);
        }
        else if(puntuacionJ1==puntuacionJ2){
            ganador="Empate";
        }
        else{
            ganador="Jugador 2";
            localStorage.setItem('MejorPuntuacion',puntuacionJ2);
        }
        rondas.innerText="FIN DEL JUEGO!!! \n Ganador:"+ganador;
        boton.disabled=true;
        boton2.disabled=true;
    }
}