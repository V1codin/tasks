function bluePawn(element) {
  let movesArr = [];
  const str = "ABCDEFGH";

  let number;
  let temp;
  let char;
  let charIndex;

  let prev;
  let next;

  number = element.value.position.slice(1);
  char = element.value.position.slice(0, 1);

  if (parseInt(number) === 2) {
    for (let i = 3; i <= 4; i++) {
      movesArr.push(char + i);
    }

    return movesArr;
  } else {
    number++;
    movesArr.push(char + number);

    return movesArr;
  }
}

function yellowPawn(element) {
  let movesArr = [];
  const str = "ABCDEFGH";

  let number;
  let temp;
  let char;
  let charIndex;

  let prev;
  let next;

  number = element.value.position.slice(1);
  char = element.value.position.slice(0, 1);

  if (parseInt(number) === 7) {
    for (let i = 6; i >= 5; i--) {
      movesArr.push(char + i);
    }

    return movesArr;
  } else {
    number--;
    movesArr.push(char + number);

    return movesArr;
  }
}

function blueKing(element) {
  let movesArr = [];
  const str = "ABCDEFGH";

  let number;
  let temp;
  let char;
  let charIndex;

  let prev;
  let next;

  number = element.value.position.slice(1);
  char = element.value.position.slice(0, 1);
  charIndex = str.indexOf(char);
  prev = str[charIndex - 1];
  next = str[charIndex + 1];

  movesArr.push(prev + number);
  movesArr.push(next + number);

  number++;
  movesArr.push(prev + number);
  movesArr.push(next + number);
  movesArr.push(char + number);

  number -= 2;
  movesArr.push(prev + number);
  movesArr.push(next + number);
  movesArr.push(char + number);

  return movesArr;
}

function yellowKing(element) {
  let movesArr = [];
  const str = "ABCDEFGH";

  let number;
  let temp;
  let char;
  let charIndex;

  let prev;
  let next;

  number = element.value.position.slice(1);
  char = element.value.position.slice(0, 1);
  charIndex = str.indexOf(char);
  prev = str[charIndex - 1];
  next = str[charIndex + 1];

  movesArr.push(prev + number);
  movesArr.push(next + number);

  number++;
  movesArr.push(prev + number);
  movesArr.push(next + number);
  movesArr.push(char + number);

  number -= 2;
  movesArr.push(prev + number);
  movesArr.push(next + number);
  movesArr.push(char + number);

  return movesArr;
}

function blueCastle(element) {
  let movesArr = [];
  const str = "ABCDEFGH";

  let number;
  let temp;
  let char;
  let charIndex;

  let prev;
  let next;

  number = element.value.position.slice(1);
  char = element.value.position.slice(0, 1);
  charIndex = str.indexOf(char);
  prev = str[charIndex - 1];
  next = str[charIndex + 1];

  for (let i = 1; i <= 8; i++) {
    if (i === parseInt(number)) {
      for (let q = 0; q < str.length; q++) {
        movesArr.push(str[q] + number);
      }
    } else {
      movesArr.push(char + i);
    }
  }
  return movesArr;
}

function yellowCastle(element) {
  let movesArr = [];
  const str = "ABCDEFGH";

  let number;
  let temp;
  let char;
  let charIndex;

  let prev;
  let next;

  number = element.value.position.slice(1);
  char = element.value.position.slice(0, 1);
  charIndex = str.indexOf(char);
  prev = str[charIndex - 1];
  next = str[charIndex + 1];

  for (let i = 8; i >= 1; i--) {
    if (i === parseInt(number)) {
      for (let q = 0; q < str.length; q++) {
        movesArr.push(str[q] + number);
      }
    } else {
      movesArr.push(char + i);
    }
  }
  return movesArr;
}
function blueKnight(element) {
  let movesArr = [];
  const str = "ABCDEFGH";

  let number;
  let temp;
  let char;
  let charIndex;

  let prev;
  let next;

  number = element.value.position.slice(1);
  char = element.value.position.slice(0, 1);
  charIndex = str.indexOf(char);

  temp = parseInt(number) - 2;
  movesArr.push(str[charIndex - 1] + temp);
  movesArr.push(str[charIndex + 1] + temp);

  temp = parseInt(number) + 2;
  movesArr.push(str[charIndex - 1] + temp);
  movesArr.push(str[charIndex + 1] + temp);

  temp = parseInt(number) + 1;
  movesArr.push(str[charIndex - 2] + temp);
  movesArr.push(str[charIndex + 2] + temp);
  temp = parseInt(number) - 1;

  movesArr.push(str[charIndex - 2] + temp);
  movesArr.push(str[charIndex + 2] + temp);

  return movesArr;
}

function yellowKnight(element) {
  let movesArr = [];
  const str = "ABCDEFGH";

  let number;
  let temp;
  let char;
  let charIndex;

  let prev;
  let next;

  number = element.value.position.slice(1);
  char = element.value.position.slice(0, 1);
  charIndex = str.indexOf(char);

  temp = parseInt(number) - 2;
  movesArr.push(str[charIndex - 1] + temp);
  movesArr.push(str[charIndex + 1] + temp);

  temp = parseInt(number) + 2;
  movesArr.push(str[charIndex - 1] + temp);
  movesArr.push(str[charIndex + 1] + temp);

  temp = parseInt(number) + 1;
  movesArr.push(str[charIndex - 2] + temp);
  movesArr.push(str[charIndex + 2] + temp);
  temp = parseInt(number) - 1;

  movesArr.push(str[charIndex - 2] + temp);
  movesArr.push(str[charIndex + 2] + temp);

  return movesArr;
}
function blueBishop(element) {
  let movesArr = [];
  const str = "ABCDEFGH";

  let number;
  let temp;
  let char;
  let charIndex;

  let prev;
  let next;

  number = element.value.position.slice(1);
  char = element.value.position.slice(0, 1);
  charIndex = str.indexOf(char);

  //to top
  for (let i = 1; i <= 8; i++) {
    temp = i + parseInt(number);

    if (str[charIndex + i] !== undefined) {
      movesArr.push(str[charIndex + i] + temp);
    } else {
      break;
    }
  }

  for (let i = 1; i <= 8; i++) {
    temp = i + parseInt(number);

    if (str[charIndex - i] !== undefined) {
      movesArr.push(str[charIndex - i] + temp);
    } else {
      break;
    }
  }

  //to bottom

  /*
  for (let i = parseInt(number) - 1; i > 0; i--) {
    console.log("number: ", number);
    console.log(i);
    if (str[charIndex - i] !== undefined) {
      movesArr.push(str[charIndex + i] + i);
    } else {
      break;
    }
  }
  */
  /*
  for (let i = 1; i <= 8; i++) {
    temp = parseInt(number) - i;

    if (str[charIndex - i] !== undefined) {
      movesArr.push(str[charIndex - i] + temp);
    } else {
      break;
    }
  }
  

  for (let i = 1; i <= 8; i++) {
    temp = parseInt(number) - i;

    if (str[charIndex - i] !== undefined) {
      movesArr.push(str[charIndex + i] + temp);
    } else {
      break;
    }
  }

  */
  return movesArr;
}

function yellowBishop(element) {
  let movesArr = [];
  const str = "ABCDEFGH";

  let number;
  let temp;
  let char;
  let charIndex;

  let prev;
  let next;

  number = element.value.position.slice(1);
  char = element.value.position.slice(0, 1);
  charIndex = str.indexOf(char);

  for (let i = 1; i <= 8; i++) {
    temp = i + parseInt(number);

    if (str[charIndex + i] !== undefined) {
      movesArr.push(str[charIndex + i] + temp);
    } else {
      break;
    }
  }

  for (let i = 1; i <= 8; i++) {
    temp = i + parseInt(number);

    if (str[charIndex - i] !== undefined) {
      movesArr.push(str[charIndex - i] + temp);
    } else {
      break;
    }
  }

  for (let i = 1; i <= 8; i++) {
    temp = parseInt(number) - i;

    if (str[charIndex - i] !== undefined) {
      movesArr.push(str[charIndex - i] + temp);
    } else {
      break;
    }
  }

  for (let i = 1; i <= 8; i++) {
    temp = parseInt(number) - i;

    if (str[charIndex - i] !== undefined) {
      movesArr.push(str[charIndex + i] + temp);
    } else {
      break;
    }
  }

  return movesArr;
}

export default function (element) {
  let movesArr = [];
  const str = "ABCDEFGH";

  let number;
  let temp;
  let char;
  let charIndex;

  let prev;
  let next;

  switch (element.value.figure) {
    case "blue pawn":
      return bluePawn(element);
    /*
      number = element.value.position.slice(1);
      char = element.value.position.slice(0, 1);

      if (parseInt(number) === 2) {
        for (let i = 3; i <= 4; i++) {
          movesArr.push(char + i);
        }

        return movesArr;
      } else {
        number++;
        movesArr.push(char + number);

        return movesArr;
      }
      */
    case "yellow pawn":
      return yellowPawn(element);
    /*
      number = element.value.position.slice(1);
      char = element.value.position.slice(0, 1);

      if (parseInt(number) === 7) {
        for (let i = 6; i >= 5; i--) {
          movesArr.push(char + i);
        }

        return movesArr;
      } else {
        number--;
        movesArr.push(char + number);

        return movesArr;
      }
      */

    case "blue king":
      return blueKing(element);
    /*
      number = element.value.position.slice(1);
      char = element.value.position.slice(0, 1);
      charIndex = str.indexOf(char);
      prev = str[charIndex - 1];
      next = str[charIndex + 1];

      movesArr.push(prev + number);
      movesArr.push(next + number);

      number++;
      movesArr.push(prev + number);
      movesArr.push(next + number);
      movesArr.push(char + number);

      number -= 2;
      movesArr.push(prev + number);
      movesArr.push(next + number);
      movesArr.push(char + number);

      return movesArr;
      */

    case "yellow king":
      return yellowKing(element);

    /*
      number = element.value.position.slice(1);
      char = element.value.position.slice(0, 1);
      charIndex = str.indexOf(char);
      prev = str[charIndex - 1];
      next = str[charIndex + 1];

      movesArr.push(prev + number);
      movesArr.push(next + number);

      number++;
      movesArr.push(prev + number);
      movesArr.push(next + number);
      movesArr.push(char + number);

      number -= 2;
      movesArr.push(prev + number);
      movesArr.push(next + number);
      movesArr.push(char + number);

      return movesArr;
      */

    case "blue castle":
      return blueCastle(element);

    /*
      number = element.value.position.slice(1);
      char = element.value.position.slice(0, 1);
      charIndex = str.indexOf(char);
      prev = str[charIndex - 1];
      next = str[charIndex + 1];

      for (let i = 1; i <= 8; i++) {
        if (i === parseInt(number)) {
          for (let q = 0; q < str.length; q++) {
            movesArr.push(str[q] + number);
          }
        } else {
          movesArr.push(char + i);
        }
      }
      return movesArr;
      */

    case "yellow castle":
      return yellowCastle(element);

    /*
      number = element.value.position.slice(1);
      char = element.value.position.slice(0, 1);
      charIndex = str.indexOf(char);
      prev = str[charIndex - 1];
      next = str[charIndex + 1];

      for (let i = 8; i >= 1; i--) {
        if (i === parseInt(number)) {
          for (let q = 0; q < str.length; q++) {
            movesArr.push(str[q] + number);
          }
        } else {
          movesArr.push(char + i);
        }
      }
      return movesArr;
      */

    case "blue knight":
      return blueKnight(element);

    /*
      number = element.value.position.slice(1);
      char = element.value.position.slice(0, 1);
      charIndex = str.indexOf(char);

      temp = parseInt(number) - 2;
      movesArr.push(str[charIndex - 1] + temp);
      movesArr.push(str[charIndex + 1] + temp);

      temp = parseInt(number) + 2;
      movesArr.push(str[charIndex - 1] + temp);
      movesArr.push(str[charIndex + 1] + temp);

      temp = parseInt(number) + 1;
      movesArr.push(str[charIndex - 2] + temp);
      movesArr.push(str[charIndex + 2] + temp);
      temp = parseInt(number) - 1;

      movesArr.push(str[charIndex - 2] + temp);
      movesArr.push(str[charIndex + 2] + temp);

      return movesArr;
      */

    case "yellow knight":
      return yellowKnight(element);

    /*
      number = element.value.position.slice(1);
      char = element.value.position.slice(0, 1);
      charIndex = str.indexOf(char);

      temp = parseInt(number) - 2;
      movesArr.push(str[charIndex - 1] + temp);
      movesArr.push(str[charIndex + 1] + temp);

      temp = parseInt(number) + 2;
      movesArr.push(str[charIndex - 1] + temp);
      movesArr.push(str[charIndex + 1] + temp);

      temp = parseInt(number) + 1;
      movesArr.push(str[charIndex - 2] + temp);
      movesArr.push(str[charIndex + 2] + temp);
      temp = parseInt(number) - 1;

      movesArr.push(str[charIndex - 2] + temp);
      movesArr.push(str[charIndex + 2] + temp);

      return movesArr;
      */

    case "blue bishop":
      return blueBishop(element);

    /*
      number = element.value.position.slice(1);
      char = element.value.position.slice(0, 1);
      charIndex = str.indexOf(char);

      for (let i = 1; i <= 8; i++) {
        temp = i + parseInt(number);

        if (str[charIndex + i] !== undefined) {
          movesArr.push(str[charIndex + i] + temp);
        } else {
          break;
        }
      }

      for (let i = 1; i <= 8; i++) {
        temp = i + parseInt(number);

        if (str[charIndex - i] !== undefined) {
          movesArr.push(str[charIndex - i] + temp);
        } else {
          break;
        }
      }

      for (let i = 1; i <= 8; i++) {
        temp = parseInt(number) - i;

        if (str[charIndex - i] !== undefined) {
          movesArr.push(str[charIndex - i] + temp);
        } else {
          break;
        }
      }

      for (let i = 1; i <= 8; i++) {
        temp = parseInt(number) - i;

        if (str[charIndex - i] !== undefined) {
          movesArr.push(str[charIndex + i] + temp);
        } else {
          break;
        }
      }


      return movesArr;
      */
    case "yellow bishop":
      //   return yellowBishop(element);
      number = element.value.position.slice(1);
      char = element.value.position.slice(0, 1);
      charIndex = str.indexOf(char);

      //to top
      for (let i = 1; i <= 8; i++) {
        temp = i + parseInt(number);

        if (str[charIndex + i] !== undefined) {
          movesArr.push(str[charIndex + i] + temp);
        } else {
          break;
        }
      }

      for (let i = 1; i <= 8; i++) {
        temp = i + parseInt(number);

        if (str[charIndex - i] !== undefined) {
          movesArr.push(str[charIndex - i] + temp);
        } else {
          break;
        }
      }

      // to bottom
      for (let i = parseInt(number) - 1; i > 0; i--) {
        if (str[charIndex - i] !== undefined) {
          movesArr.push(str[charIndex + i] + i);
        } else {
          break;
        }
      }

      for (let i = 1; i <= 8; i++) {
        temp = parseInt(number) - i;

        if (str[charIndex - i] !== undefined) {
          movesArr.push(str[charIndex + i] + temp);
        } else {
          break;
        }
      }

      return movesArr;

    default:
      movesArr.length = 0;
      return movesArr;
  }
}
