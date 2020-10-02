export function bluePawn(element) {
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

export function yellowPawn(element) {
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

export function blueKing(element) {
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
}

export function yellowKing(element) {
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
}

export function blueCastle(element, squaresArr) {
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

    if (
      temp.firstChild &&
      temp.firstChild.value.color !== element.value.color
    ) {
      movesArr.push(char + i);
      break;
    } else if (
      temp.firstChild &&
      temp.firstChild.value.color === element.value.color
    ) {
      break;
    }

    movesArr.push(char + i);
  }

  for (let q = charIndex + 1; q < str.length; q++) {
    let pos = str[q] + number;
    let temp = squares.find((el) => el.value.position === pos);

    if (
      temp.firstChild &&
      temp.firstChild.value.color !== element.value.color
    ) {
      movesArr.push(pos);
      break;
    } else if (
      temp.firstChild &&
      temp.firstChild.value.color === element.value.color
    ) {
      break;
    }

    movesArr.push(str[q] + number);
  }

  for (let q = charIndex - 1; q >= 0; q--) {
    let pos = str[q] + number;
    let temp = squares.find((el) => el.value.position === pos);

    if (
      temp.firstChild &&
      temp.firstChild.value.color !== element.value.color
    ) {
      movesArr.push(pos);
      break;
    } else if (
      temp.firstChild &&
      temp.firstChild.value.color === element.value.color
    ) {
      break;
    }

    movesArr.push(pos);
  }

  for (let i = parseInt(number) - 1; i >= 1; i--) {
    let pos = char + i;
    let temp = squares.find((el) => el.value.position === pos);

    if (
      temp.firstChild &&
      temp.firstChild.value.color !== element.value.color
    ) {
      movesArr.push(pos);
      break;
    } else if (
      temp.firstChild &&
      temp.firstChild.value.color === element.value.color
    ) {
      break;
    }

    movesArr.push(pos);
  }

  return movesArr;
}

export function yellowCastle(element, squaresArr) {
  let squares = [...squaresArr];
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
export function blueKnight(element) {
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
}

export function yellowKnight(element) {
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
}
export function blueBishop(element) {
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
}

export function yellowBishop(element) {
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
}

export function blueQueen(element) {
  const pos = element.value.position;
  let temp = [...blueCastle(element), ...blueBishop(element)];
  const movesArr = temp.filter((item) => item !== pos);

  return movesArr;
}

export function yellowQueen(element) {
  const pos = element.value.position;
  let temp = [...yellowCastle(element), ...yellowBishop(element)];
  const movesArr = temp.filter((item) => item !== pos);

  return movesArr;
}
