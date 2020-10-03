export function bluePawn(element, squaresObj) {
  const squares = { ...squaresObj };

  let movesArr = [];
  const str = "ABCDEFGH";

  let number;
  let char;
  let charIndex;
  let res;

  number = element.value.position.slice(1);
  char = element.value.position.slice(0, 1);
  charIndex = str.indexOf(char);

  if (parseInt(number) === 2) {
    for (let i = 3; i <= 4; i++) {
      if (i === 3) {
        if (
          squares[str[charIndex - 1] + i] !== undefined &&
          squares[str[charIndex - 1] + i].value.figure !== "" &&
          squares[str[charIndex - 1] + i].firstChild.value.color !==
            element.value.color
        ) {
          movesArr.push(str[charIndex - 1] + i);
        }
        if (
          squares[str[charIndex + 1] + i] !== undefined &&
          squares[str[charIndex + 1] + i].value.figure !== "" &&
          squares[str[charIndex + 1] + i].firstChild.value.color !==
            element.value.color
        ) {
          movesArr.push(str[charIndex + 1] + i);
        }
        if (
          squares[str[charIndex] + i] !== undefined &&
          squares[str[charIndex] + i].value.figure !== "" &&
          (squares[str[charIndex] + i].firstChild.value.color !==
            element.value.color ||
            squares[str[charIndex] + i].firstChild.value.color ===
              element.value.color)
        ) {
          break;
        }
      }
      movesArr.push(char + i);
    }

    return movesArr;
  } else {
    number++;
    res = char + number;
    if (
      squares[str[charIndex - 1] + number] !== undefined &&
      squares[str[charIndex - 1] + number].value.figure !== "" &&
      squares[str[charIndex - 1] + number].firstChild.value.color !==
        element.value.color
    ) {
      movesArr.push(str[charIndex - 1] + number);
    }
    if (
      squares[str[charIndex + 1] + number] !== undefined &&
      squares[str[charIndex + 1] + number].value.figure !== "" &&
      squares[str[charIndex + 1] + number].firstChild.value.color !==
        element.value.color
    ) {
      movesArr.push(str[charIndex + 1] + number);
    }
    if (squares[res] !== undefined && squares[res].value.figure === "") {
      movesArr.push(res);
    }

    return movesArr;
  }
}

export function yellowPawn(element, squaresObj) {
  const squares = { ...squaresObj };

  let movesArr = [];
  const str = "ABCDEFGH";

  let number;
  let char;
  let charIndex;
  let res;

  number = element.value.position.slice(1);
  char = element.value.position.slice(0, 1);
  charIndex = str.indexOf(char);

  if (parseInt(number) === 7) {
    for (let i = 6; i >= 5; i--) {
      if (i === 6) {
        if (
          squares[str[charIndex - 1] + i] !== undefined &&
          squares[str[charIndex - 1] + i].value.figure !== "" &&
          squares[str[charIndex - 1] + i].firstChild.value.color !==
            element.value.color
        ) {
          movesArr.push(str[charIndex - 1] + i);
        }
        if (
          squares[str[charIndex + 1] + i] !== undefined &&
          squares[str[charIndex + 1] + i].value.figure !== "" &&
          squares[str[charIndex + 1] + i].firstChild.value.color !==
            element.value.color
        ) {
          movesArr.push(str[charIndex + 1] + i);
        }
        if (
          squares[str[charIndex] + i] !== undefined &&
          squares[str[charIndex] + i].value.figure !== "" &&
          (squares[str[charIndex] + i].firstChild.value.color !==
            element.value.color ||
            squares[str[charIndex] + i].firstChild.value.color ===
              element.value.color)
        ) {
          break;
        }
      }
      movesArr.push(char + i);
    }

    return movesArr;
  } else {
    number--;
    res = char + number;
    if (
      squares[str[charIndex - 1] + number] !== undefined &&
      squares[str[charIndex - 1] + number].value.figure !== "" &&
      squares[str[charIndex - 1] + number].firstChild.value.color !==
        element.value.color
    ) {
      movesArr.push(str[charIndex - 1] + number);
    }
    if (
      squares[str[charIndex + 1] + number] !== undefined &&
      squares[str[charIndex + 1] + number].value.figure !== "" &&
      squares[str[charIndex + 1] + number].firstChild.value.color !==
        element.value.color
    ) {
      movesArr.push(str[charIndex + 1] + number);
    }
    if (squares[res] !== undefined && squares[res].value.figure === "") {
      movesArr.push(res);
    }

    return movesArr;
  }
}

export function blueKing(element, squaresObj) {
  const squares = { ...squaresObj };

  let movesArr = [];
  let temp = [];
  const str = "ABCDEFGH";

  let number;
  let char;
  let charIndex;

  let prev;
  let next;

  number = element.value.position.slice(1);
  char = element.value.position.slice(0, 1);
  charIndex = str.indexOf(char);
  prev = str[charIndex - 1] ? str[charIndex - 1] : "";
  next = str[charIndex + 1] ? str[charIndex + 1] : "";

  temp.push(prev + number);
  temp.push(next + number);

  number++;
  temp.push(prev + number);
  temp.push(next + number);
  temp.push(char + number);

  number -= 2;
  temp.push(prev + number);
  temp.push(next + number);
  temp.push(char + number);

  temp = temp.filter((item) => !Number.isNaN(item) && item.length > 1);

  movesArr = temp.filter((item) => {
    if (squares[item] !== undefined && squares[item].value.figure === "") {
      return item;
    } else if (
      squares[item] !== undefined &&
      squares[item].value.figure !== "" &&
      squares[item].firstChild.value.color !== element.value.color
    ) {
      return item;
    } else {
      return false;
    }
  });

  return movesArr;
}

export function yellowKing(element, squaresObj) {
  const squares = { ...squaresObj };

  return blueKing(element, squares);

  /*
  let movesArr = [];
  let temp = [];
  const str = "ABCDEFGH";

  let number;
  let char;
  let charIndex;

  let prev;
  let next;

  number = element.value.position.slice(1);
  char = element.value.position.slice(0, 1);
  charIndex = str.indexOf(char);
  prev = str[charIndex - 1] ? str[charIndex - 1] : "";
  next = str[charIndex + 1] ? str[charIndex + 1] : "";

  temp.push(prev + number);
  temp.push(next + number);

  number++;
  temp.push(prev + number);
  temp.push(next + number);
  temp.push(char + number);

  number -= 2;
  temp.push(prev + number);
  temp.push(next + number);
  temp.push(char + number);

  movesArr = temp.filter((item) => !Number.isNaN(item) && item.length > 1);

  return movesArr;
  */
}

export function blueCastle(element, squaresObj) {
  let movesArr = [];
  let squares = { ...squaresObj };

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

  for (let i = parseInt(number) + 1; i <= 8; i++) {
    let pos = char + i;
    let temp = squares[pos];

    if (
      temp !== undefined &&
      temp.firstChild &&
      temp.firstChild.value.color !== element.value.color
    ) {
      movesArr.push(char + i);
      break;
    } else if (
      temp !== undefined &&
      temp.firstChild &&
      temp.firstChild.value.color === element.value.color
    ) {
      break;
    }

    movesArr.push(char + i);
  }

  for (let i = parseInt(number) + 1; i <= 8; i++) {
    let pos = char + i;
    let temp = squares[pos];

    if (
      temp !== undefined &&
      temp.firstChild &&
      temp.firstChild.value.color !== element.value.color
    ) {
      movesArr.push(char + i);
      break;
    } else if (
      temp !== undefined &&
      temp.firstChild &&
      temp.firstChild.value.color === element.value.color
    ) {
      break;
    }

    movesArr.push(char + i);
  }

  for (let q = charIndex + 1; q < str.length; q++) {
    let pos = str[q] + number;
    let temp = squares[pos];

    if (
      temp !== undefined &&
      temp.firstChild &&
      temp.firstChild.value.color !== element.value.color
    ) {
      movesArr.push(pos);
      break;
    } else if (
      temp !== undefined &&
      temp.firstChild &&
      temp.firstChild.value.color === element.value.color
    ) {
      break;
    }

    movesArr.push(str[q] + number);
  }

  for (let q = charIndex - 1; q >= 0; q--) {
    let pos = str[q] + number;
    let temp = squares[pos];

    if (
      temp !== undefined &&
      temp.firstChild &&
      temp.firstChild.value.color !== element.value.color
    ) {
      movesArr.push(pos);
      break;
    } else if (
      temp !== undefined &&
      temp.firstChild &&
      temp.firstChild.value.color === element.value.color
    ) {
      break;
    }

    movesArr.push(pos);
  }

  for (let i = parseInt(number) - 1; i >= 1; i--) {
    let pos = char + i;
    let temp = squares[pos];

    if (
      temp !== undefined &&
      temp.firstChild &&
      temp.firstChild.value.color !== element.value.color
    ) {
      movesArr.push(pos);
      break;
    } else if (
      temp !== undefined &&
      temp.firstChild &&
      temp.firstChild.value.color === element.value.color
    ) {
      break;
    }

    movesArr.push(pos);
  }
  return movesArr;
}

export function yellowCastle(element, squaresObj) {
  let squares = { ...squaresObj };
  return blueCastle(element, squares);
  /*
  let movesArr = [];
  let squares = [...squaresArr];

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

  for (let i = parseInt(number) + 1; i <= 8; i++) {
    let pos = char + i;
    let temp = squares.find((el) => el.value.position === pos);
    if (temp.firstChild) {
      movesArr.push(char + i);
      break;
    }
    movesArr.push(char + i);
  }

  for (let q = charIndex + 1; q < str.length; q++) {
    let pos = str[q] + number;
    let temp = squares.find((el) => el.value.position === pos);

    if (temp.firstChild) {
      movesArr.push(pos);
      break;
    }

    movesArr.push(pos);
    movesArr.push(str[q] + number);
  }

  for (let q = charIndex - 1; q >= 0; q--) {
    let pos = str[q] + number;
    let temp = squares.find((el) => el.value.position === pos);

    if (temp.firstChild) {
      movesArr.push(pos);
      break;
    }

    movesArr.push(pos);
    movesArr.push(str[q] + number);
  }

  for (let i = parseInt(number) - 1; i >= 1; i--) {
    let pos = char + i;
    let temp = squares.find((el) => el.value.position === pos);
    if (temp.firstChild) {
      movesArr.push(pos);
      break;
    }
    movesArr.push(pos);
  }

  return movesArr;

  */
}
export function blueKnight(element, squaresObj) {
  let squares = { ...squaresObj };

  let movesArr = [];
  let tempArr = [];
  const str = "ABCDEFGH";

  let number;
  let temp;
  let char;
  let charIndex;
  let res;

  let checkingSquare;
  let next;

  number = element.value.position.slice(1);
  char = element.value.position.slice(0, 1);
  charIndex = str.indexOf(char);

  temp = parseInt(number) - 2;

  res = str[charIndex - 1] + temp;
  tempArr.push(res);

  res = str[charIndex + 1] + temp;
  tempArr.push(res);

  temp = parseInt(number) + 2;

  res = str[charIndex - 1] + temp;
  tempArr.push(res);

  res = str[charIndex + 1] + temp;
  tempArr.push(res);

  temp = parseInt(number) + 1;

  res = str[charIndex - 2] + temp;
  tempArr.push(res);

  res = str[charIndex + 2] + temp;
  tempArr.push(res);

  temp = parseInt(number) - 1;

  res = str[charIndex - 2] + temp;
  tempArr.push(res);

  res = str[charIndex + 2] + temp;
  tempArr.push(res);

  tempArr = tempArr.filter((item) => !Number.isNaN(item) && item.length === 2);
  movesArr = tempArr.filter((item) => {
    if (squares[item] !== undefined && squares[item].value.figure === "") {
      return item;
    } else if (
      squares[item] !== undefined &&
      squares[item].firstChild.value.color !== element.value.color
    ) {
      return item;
    } else {
      return false;
    }
  });

  return movesArr;
}

export function yellowKnight(element, squaresObj) {
  let squares = { ...squaresObj };

  return blueKnight(element, squares);

  /*
  let movesArr = [];
  let tempArr = [];
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
  tempArr.push(str[charIndex - 1] + temp);
  tempArr.push(str[charIndex + 1] + temp);

  temp = parseInt(number) + 2;
  tempArr.push(str[charIndex - 1] + temp);
  tempArr.push(str[charIndex + 1] + temp);

  temp = parseInt(number) + 1;
  tempArr.push(str[charIndex - 2] + temp);
  tempArr.push(str[charIndex + 2] + temp);
  temp = parseInt(number) - 1;

  tempArr.push(str[charIndex - 2] + temp);
  tempArr.push(str[charIndex + 2] + temp);

  movesArr = tempArr.filter((item) => !Number.isNaN(item) && item.length === 2);

  return movesArr;
  */
}
export function blueBishop(element, squaresObj) {
  let squares = { ...squaresObj };

  let movesArr = [];

  let tempArr = [];
  const str = "ABCDEFGH";

  let number;
  let temp;
  let char;
  let charIndex;
  let res;

  let prev;
  let next;

  number = element.value.position.slice(1);
  char = element.value.position.slice(0, 1);
  charIndex = str.indexOf(char);

  //to top
  for (let i = 1; i <= 8; i++) {
    temp = i + parseInt(number);
    res = str[charIndex + i] + temp;

    if (str[charIndex + i] !== undefined && temp <= 8) {
      if (
        squares[res] !== undefined &&
        squares[res].value.figure !== "" &&
        squares[res].firstChild.value.color !== element.value.color
      ) {
        tempArr.push(res);
        break;
      } else if (
        squares[res] !== undefined &&
        squares[res].value.figure !== "" &&
        squares[res].firstChild.value.color === element.value.color
      ) {
        break;
      }
      tempArr.push(res);
    } else {
      break;
    }
  }

  for (let i = 1; i <= 8; i++) {
    temp = i + parseInt(number);
    res = str[charIndex - i] + temp;

    if (str[charIndex - i] !== undefined && temp <= 8) {
      if (
        squares[res] !== undefined &&
        squares[res].value.figure !== "" &&
        squares[res].firstChild.value.color !== element.value.color
      ) {
        tempArr.push(res);
        break;
      } else if (
        squares[res] !== undefined &&
        squares[res].value.figure !== "" &&
        squares[res].firstChild.value.color === element.value.color
      ) {
        break;
      }
      tempArr.push(res);
    } else {
      break;
    }
  }

  //to bottom

  for (let i = parseInt(number) - 1; i > 0; i--) {
    if (typeof str[charIndex + i] !== undefined) {
      let num = parseInt(number) - i;
      let res = str[charIndex + num] + i;
      if (!Number.isNaN(res)) {
        if (
          squares[res] !== undefined &&
          squares[res].value.figure !== "" &&
          squares[res].firstChild.value.color !== element.value.color
        ) {
          tempArr.push(res);
          break;
        } else if (
          squares[res] !== undefined &&
          squares[res].value.figure !== "" &&
          squares[res].firstChild.value.color === element.value.color
        ) {
          break;
        }
        tempArr.push(res);
      }
    }
  }

  for (let i = parseInt(number) - 1; i > 0; i--) {
    if (typeof str[charIndex + i] !== undefined) {
      let num = parseInt(number) - i;
      let res = str[charIndex - num] + i;
      if (!Number.isNaN(res)) {
        if (
          squares[res] !== undefined &&
          squares[res].value.figure !== "" &&
          squares[res].firstChild.value.color !== element.value.color
        ) {
          tempArr.push(res);
          break;
        } else if (
          squares[res] !== undefined &&
          squares[res].value.figure !== "" &&
          squares[res].firstChild.value.color === element.value.color
        ) {
          break;
        }
        tempArr.push(res);
      }
    }
  }

  movesArr = [...tempArr];

  return movesArr;
}

export function yellowBishop(element, squaresObj) {
  let squares = { ...squaresObj };
  return blueBishop(element, squares);

  /*
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

    if (str[charIndex + i] !== undefined && temp <= 8) {
      movesArr.push(str[charIndex + i] + temp);
    } else {
      break;
    }
  }

  for (let i = 1; i <= 8; i++) {
    temp = i + parseInt(number);

    if (str[charIndex - i] !== undefined && temp <= 8) {
      movesArr.push(str[charIndex - i] + temp);
    } else {
      break;
    }
  }
  //to bottom
  for (let i = parseInt(number) - 1; i > 0; i--) {
    if (typeof str[charIndex + i] !== undefined) {
      let num = parseInt(number) - i;
      let res = str[charIndex + i] + num;
      if (!Number.isNaN(res)) {
        movesArr.push(res);
      }
    }
  }

  for (let i = parseInt(number) - 1; i > 0; i--) {
    if (typeof str[charIndex + i] !== undefined) {
      let num = parseInt(number) - i;
      let res = str[charIndex - i] + num;
      if (!Number.isNaN(res)) {
        movesArr.push(res);
      }
    }
  }

  return movesArr;
  */
}

export function blueQueen(element, squaresObj) {
  let squares = { ...squaresObj };
  const pos = element.value.position;
  let temp = [...blueCastle(element, squares), ...blueBishop(element, squares)];
  const movesArr = temp.filter((item) => item !== pos);

  return movesArr;
}

export function yellowQueen(element, squaresObj) {
  let squares = { ...squaresObj };
  const pos = element.value.position;
  let temp = [
    ...yellowCastle(element, squares),
    ...yellowBishop(element, squares),
  ];
  const movesArr = temp.filter((item) => item !== pos);

  return movesArr;
}
