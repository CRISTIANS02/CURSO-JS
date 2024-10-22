function crearTableroAjedrez() {
    let tablero = "";
    for (let fila = 1; fila <= 8; fila++) {
      for (let columna = 1; columna <= 8; columna++) {
        // Alternamos entre espacios y # en cada casilla
        tablero += (fila + columna) % 2 === 0 ? " " : "#";
      }
      tablero += "\n"; 
    }
    return tablero;
  }
  

  console.log(crearTableroAjedrez());