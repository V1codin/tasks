class PuntoSwitcher {
  constructor(inputClass, textAreaClass) {
    this.input = document.querySelector(`.${inputClass}`);
    this.input.oninput = this.checker.bind(this);
    this.out = document.querySelector(`.${textAreaClass}`);
    this.inputLanguage = document.querySelector(".inpLanguage");
    this.ruMask = /^[а-яА-Я\s.,]{0,}$/;
    this.enMask = /^[a-zA-Z\s.,[{}:;"'<>?!\/\]\&\-]{0,}$/;

    this.dictionary = {
      "!": "!",
      "?": "?",
      "&": "?",
      "-": "-",

      q: "й",
      w: "ц",
      e: "у",
      r: "к",
      t: "е",
      y: "н",
      u: "г",
      i: "ш",
      o: "щ",
      p: "з",
      "[": "х",
      "]": "ъ",
      a: "ф",
      s: "ы",
      d: "в",
      f: "а",
      g: "п",
      h: "р",
      j: "о",
      k: "л",
      l: "д",
      ";": "ж",
      "'": "э",
      z: "я",
      x: "ч",
      c: "с",
      v: "м",
      b: "и",
      n: "т",
      m: "ь",
      ",": "б",
      ".": "ю",
      "/": ".",
      " ": " ",

      Q: "Й",
      W: "Ц",
      E: "У",
      R: "К",
      T: "Е",
      Y: "Н",
      U: "Г",
      I: "Ш",
      O: "Щ",
      P: "З",
      "{": "Х",
      "}": "Ъ",
      A: "Ф",
      S: "Ы",
      D: "В",
      F: "А",
      G: "П",
      H: "Р",
      J: "О",
      K: "Л",
      L: "Д",
      ":": "Ж",
      '"': "Э",
      Z: "Я",
      X: "Ч",
      C: "С",
      V: "М",
      B: "И",
      N: "Т",
      M: "Ь",
      "<": "Б",
      ">": "Ю",
    };
  }
  checker(e) {
    const value = this.input.value ? this.input.value : "";

    if (value === "") {
      this.out.innerHTML = "";
      this.inputLanguage.innerText = "";
    }

    this.inputLanguage.innerText = this.ruMask.test(value)
      ? "Ru"
      : this.enMask.test(value)
      ? "Eng"
      : "Unknown language";

    let res = e.data;

    if (res !== null) {
      if (this.enMask.test(value)) {
        let temp = e.data;
        res = this.dictionary[temp];
      }
      this.out.innerHTML += res;
    } else {
      this.out.innerHTML = this.out.innerHTML.slice(
        0,
        this.out.innerHTML.length - 1
      );
    }
  }
}

const res = new PuntoSwitcher("input", "textArea");
