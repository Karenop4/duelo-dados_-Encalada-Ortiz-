# Duelo de Dados
El proyecto presenta un pequeño juego en el que los jugadores se turnan para lanzar un dado,  
después de cada lanzamiento su puntuación se registra en un marcador. 
## Reglas:  
Empezando por el jugador 1, se lanza el dado y este registra un numero al azar, una vez que se muestra el numero  
es el turno del jugador 2. Después de 3 Rondas(1 turno cada jugador) el jugador que haya registrado la mayor puntuación gana.
## Funcionamiento:  
Cada jugador cuenta con su propio espacio y dado diferenciado.  
![](Recursos/Imagenes%20README/PanelDados.png)  
El turno y ronda actual se presentan en la parte superior de la pagina.  
![](Recursos/Imagenes%20README/TR.png)  
Además, los botones de lanzamiento se deshabilitan una vez finalizado el turno (tambien al finalizar el juego).  
A continuación se presenta como se muestra la pantalla una vez finalizada la partida.  
![](Recursos/Imagenes%20README/Final.png)    
  
## Caracteristicas extra:  
Los jugadores pueden usar la tecla "Barra Espaciadora" para realizar el lanzamiento.  
Los dados reproducen un sonido al lanzarse.  
La mejor puntuación es guardada en LocalStorage y se muestra en la parte superior.  
Los jugadores pueden personalizar sus nombres.  
