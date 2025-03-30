let boton = document.querySelector(".BttonJ1")
let boton2 = document.querySelector(".BttonJ2")
let botonR = document.querySelector(".Reiniciar button")
let rondas = document.querySelector(".Rondas #RonTur")
let mp=document.querySelector(".Rondas #MP")
let ronda = 1;
let turno =1;
let ganador="";
let puntuacionJ1=1;
let puntuacionJ2=0;
const MejorPuntuacion=localStorage.getItem('MejorPuntuacion');
let audioEtiqueta = document.querySelector("audio")
boton2.disabled=true;
actualizarRonda();


//Listener especifico para cada boton, en ambos se deshabilita el propio boton despues de
//lanzar los dados y se habilita el boton contrario, ademas, reproduce un sonido de dados
boton.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "audio/dados.mp3")
    audioEtiqueta.play()
    boton.disabled=true;
    boton2.disabled=false;
    turno=turno+1;
    actualizarRonda();
})
boton2.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "audio/dados.mp3")
    audioEtiqueta.play()
    boton.disabled=false;
    boton2.disabled=true;
    turno=1;
    ronda=ronda+1;
    actualizarRonda();
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