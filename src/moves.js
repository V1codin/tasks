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

export function blueCastle(element) {
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

export function yellowCastle(element) {
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
