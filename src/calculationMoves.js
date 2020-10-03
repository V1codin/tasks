import {
  bluePawn,
  yellowPawn,
  blueKing,
  yellowKing,
  blueCastle,
  yellowCastle,
  blueKnight,
  yellowKnight,
  blueBishop,
  yellowBishop,
  blueQueen,
  yellowQueen,
} from "./moves";

export default function (element, squaresObj = {}) {
  const squares = { ...squaresObj };
  let movesArr = [];

  switch (element.value.figure) {
    case "blue pawn":
      return bluePawn(element, squares);

    case "yellow pawn":
      return yellowPawn(element, squares);

    case "blue king":
      return blueKing(element, squares);

    case "yellow king":
      return yellowKing(element, squares);

    case "blue castle":
      return blueCastle(element, squares);

    case "yellow castle":
      return yellowCastle(element, squares);

    case "blue knight":
      return blueKnight(element, squares);

    case "yellow knight":
      return yellowKnight(element, squares);

    case "blue bishop":
      return blueBishop(element, squares);

    case "yellow bishop":
      return yellowBishop(element, squares);

    case "blue queen":
      return blueQueen(element, squares);

    case "yellow queen":
      return yellowQueen(element, squares);

    default:
      movesArr.length = 0;
      return movesArr;
  }
}
