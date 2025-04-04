export function play(player1: string, player2: string): number {

  player1 = player1.trim()
  player1 = player1.toLowerCase()

  player2 = player2.trim()
  player2 = player2.toLowerCase()

  let result: number;
  if (player1 == player2)
  {
    result = 0
  }

  else if (player1 === "scissors" && player2 === "paper") {
    result = 1;
  } else if (player1 === "rock" && player2 === "scissors") {
    result = 1;
  } else if (player1 === "paper" && player2 === "rock") {
    result = 1;
  }

  else if (player2 === "scissors" && player1 === "paper") {
    result = 2;
  } else if (player2 === "rock" && player1 === "scissors") {
    result = 2;
  } else if (player2 === "paper" && player1 === "rock") {
    result = 2;
  }

  return result;
}