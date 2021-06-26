// Desafío Cachipún Contra la Máquina

let userScore = 0; // Guardará las partidas ganadas por el usuario
let machineScore = 0; // Guardará las partidas ganadas por la máquina
const repetitions = prompt("Ingrese la cantidad de partidas que desea jugar:");
const repetitionsQty = Number.parseInt(repetitions);

console.log(`El usuario quiere jugar ${repetitionsQty} partidas`);

for (let count = 1; count <= repetitionsQty; count = count + 1) {
  //pedir una respuesta
  const userMove = prompt(
    "Ingresa alguna de las siguientes opciones: Piedra, Papel o Tijera"
  );

  const randomMoveIndex = Math.floor(Math.random() * 3) + 1; // aleatorio entre 1 y 3

  let machineMove = "";

  if (randomMoveIndex === 1) {
    machineMove = "Piedra";
  } else if (randomMoveIndex === 2) {
    machineMove = "Papel";
  } else if (randomMoveIndex === 3) {
    machineMove = "Tijera";
  } else {
    console.error(`La opcion randomMoveIndex no es valida: ${randomMoveIndex}`);
  }

  let winner = ""; // Máquina - Usuario - Empate - No válido

  if (machineMove === "Piedra") {
    if (userMove === "Papel") {
      winner = "Usuario";
    } else if (userMove === "Tijera") {
      winner = "Máquina";
    } else {
      winner = "Empate";
    }
  } else if (machineMove === "Papel") {
    if (userMove === "Tijera") {
      winner = "Usuario";
    } else if (userMove === "Piedra") {
      winner = "Máquina";
    } else {
      winner = "Empate";
    }
  } else if (machineMove === "Tijera") {
    if (userMove === "Piedra") {
      winner = "Usuario";
    } else if (userMove === "Papel") {
      winner = "Máquina";
    } else {
      winner = "Empate";
    }
  } else {
    winner = "Partida no válida";
  }

  // mostrar el resultado
  console.log({ userMove, machineMove });
  console.log(`El ganador es: ${winner}`);
  console.log({ count });

  // Acumulador del Resultado de las partidas
  if (winner === "Usuario") {
    userScore += 1;
  } else if (winner === "Máquina") {
    machineScore += 1;
  } else {
    userScore += 0;
  }

  // Para saber quién va ganando
  console.log({ userScore });
  console.log({ machineScore });

  // Impresión de los resultados de cada partida
  if (winner === "Empate") {
    document.write(
      `Partida ${count} >>> Usuario elige: ${userMove} - Máquina elige ${machineMove} >>> Empate<br>`
    );
  } else {
    document.write(
      `Partida ${count} >>> Usuario elige: ${userMove} - Máquina elige ${machineMove} >>> Gana: ${winner} <br>`
    );
  }
}

// Resultado del Juego (considera el resultado de todas las partidas)

if (userScore > machineScore) {
  document.write(`<br><br>¡Felicitaciones! has ganado el juego :)<br>`);
  document.write(
    `El resultado del juego es: Usuario ${userScore} - ${machineScore} Máquina`
  );
} else if (userScore === machineScore) {
  document.write(`<br><br>¡El juego ha terminado en empate!<br>`);
  document.write(
    `El resultado del juego es: Usuario ${userScore} - ${machineScore} Máquina`
  );
} else {
  document.write(`<br><br>¡Lo siento! la Máquina te ha ganado :(<br>`);
  document.write(
    `El resultado del juego es: Usuario ${userScore} - ${machineScore} Máquina`
  );
}
