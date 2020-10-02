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
} from "./moves";

export default function (element) {
  let movesArr = [];

  switch (element.value.figure) {
    case "blue pawn":
      return bluePawn(element);

    case "yellow pawn":
      return yellowPawn(element);

    case "blue king":
      return blueKing(element);

    case "yellow king":
      return yellowKing(element);

    case "blue castle":
      return blueCastle(element);

    case "yellow castle":
      return yellowCastle(element);

    case "blue knight":
      return blueKnight(element);

    case "yellow knight":
      return yellowKnight(element);

    case "blue bishop":
      return blueBishop(element);

    case "yellow bishop":
      return yellowBishop(element);

    default:
      movesArr.length = 0;
      return movesArr;
  }
}
