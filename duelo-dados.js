let boton = document.querySelector(".BttonJ1")
let boton2 = document.querySelector(".BttonJ2")
let audioEtiqueta = document.querySelector("audio")

boton.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "audio/dados.mp3")
    audioEtiqueta.play()
})
boton2.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "audio/dados.mp3")
    audioEtiqueta.play()
})