export default class Initialization {
  constructor(setts) {
    this.setts = setts;

    this.squares = [];
    this.selectedFigure = null;
    this.figures = [];
    this.columns = document.querySelectorAll(".column");

    document.querySelector(".table").onmouseleave = () => {
      this.selectedFigure = null;
      this.cancelSelections();

      this.squares.forEach((item) => {
        item.classList.remove("square_grey");
        item.classList.remove("square_border");
      });

      this.figures.forEach((item) => item.setAttribute("draggable", false));
    };

    this.getSquares();
    this.placeFigures();
  }

  getSquares() {
    this.columns.forEach((el) => {
      const square = el.querySelectorAll(".square");

      for (let i = 0; i < square.length; i++) {
        this.squares.push(square[i]);
      }

      square.forEach((item, index) => {
        let data =
          item.parentElement.dataset.columnletter + this.setts.nums[index];

        item.name = data;
        item.value = this.setts.staticValues[data];
      });
    });
  }

  placeFigures() {
    /*
    this.placePawnsToTable("blue");
    this.placePawnsToTable("yellow");

    
    this.placeCastlesToTable("blue");
    this.placeCastlesToTable("yellow");
 
    this.placeKnightsToTable("blue");
    this.placeKnightsToTable("yellow");

    */
    this.placeBishopsToTable("blue");
    this.placeBishopsToTable("yellow");

    this.placeQueensToTable("blue");
    this.placeQueensToTable("yellow");

    this.placeKingsToTable("blue");
    this.placeKingsToTable("yellow");
  }

  addingFigureToValue(id, figure, figures) {
    const item = figures.filter((item) => item.value.id === id)[0];
    item.value.figure = figure;
  }

  placeKnightsToTable(color) {
    if (color === "blue") {
      const knight = this.squares.filter((item) => {
        if (item.value.position === "B1" || item.value.position === "G1") {
          return item;
        }
      });

      knight.forEach((item) => {
        const figure = document.createElement("img");
        figure.classList.add("figure");
        figure.src = "/img/knight2.png";
        figure.value = this.setts.figuresValue[item.name];

        figure.value.color = color;
        figure.value.initialFigure = "knight";

        this.figures.push(figure);

        item.append(figure);

        this.addingFigureToValue(figure.value.id, "blue knight", this.figures);
        item.value.initialFigure = "blue knight";
        item.value.figure = "blue knight";
      });
    } else {
      const knight = this.squares.filter((item) => {
        if (item.value.position === "B8" || item.value.position === "G8") {
          return item;
        }
      });

      knight.forEach((item) => {
        const figure = document.createElement("img");
        figure.classList.add("figure");
        figure.src = "/img/knight.png";
        figure.value = this.setts.figuresValue[item.name];

        figure.value.color = color;
        figure.value.initialFigure = "knight";

        this.figures.push(figure);

        item.append(figure);

        this.addingFigureToValue(
          figure.value.id,
          "yellow knight",
          this.figures
        );
        item.value.initialFigure = "yellow knight";
        item.value.figure = "yellow knight";
      });
    }
    return true;
  }
  placeCastlesToTable(color) {
    if (color === "blue") {
      const castle = this.squares.filter((item) => {
        if (item.value.position === "A1" || item.value.position === "H1") {
          return item;
        }
      });

      castle.forEach((item) => {
        const figure = document.createElement("img");
        figure.classList.add("figure");
        figure.src = "/img/castle2.png";
        figure.value = this.setts.figuresValue[item.name];

        figure.value.color = color;
        figure.value.initialFigure = "castle";

        this.figures.push(figure);

        item.append(figure);
        this.addingFigureToValue(figure.value.id, "blue castle", this.figures);

        item.value.initialFigure = "blue castle";
        item.value.figure = "blue castle";
      });
    } else {
      const castle = this.squares.filter((item) => {
        if (item.value.position === "A8" || item.value.position === "H8") {
          return item;
        }
      });

      castle.forEach((item) => {
        const figure = document.createElement("img");
        figure.classList.add("figure");
        figure.src = "/img/castle.png";
        figure.value = this.setts.figuresValue[item.name];

        figure.value.color = color;
        figure.value.initialFigure = "castle";

        this.figures.push(figure);

        item.append(figure);
        this.addingFigureToValue(
          figure.value.id,
          "yellow castle",
          this.figures
        );

        item.value.initialFigure = "yellow castle";
        item.value.figure = "yellow castle";
      });
    }
    return true;
  }
  placePawnsToTable(color) {
    if (color === "blue") {
      const pawn = this.squares.filter((item) => {
        if (
          item.value.position === "A2" ||
          item.value.position === "B2" ||
          item.value.position === "C2" ||
          item.value.position === "D2" ||
          item.value.position === "E2" ||
          item.value.position === "F2" ||
          item.value.position === "G2" ||
          item.value.position === "H2"
        ) {
          return item;
        }
      });

      pawn.forEach((item) => {
        const figure = document.createElement("img");
        figure.classList.add("figure");
        figure.src = "/img/pawn2.png";
        figure.value = this.setts.figuresValue[item.name];

        figure.value.color = color;
        figure.value.initialFigure = "pawn";

        this.figures.push(figure);

        item.append(figure);

        this.addingFigureToValue(figure.value.id, "blue pawn", this.figures);

        item.value.initialFigure = "blue pawn";
        item.value.figure = "blue pawn";
      });
    } else {
      const pawn = this.squares.filter((item) => {
        if (
          item.value.position === "A7" ||
          item.value.position === "B7" ||
          item.value.position === "C7" ||
          item.value.position === "D7" ||
          item.value.position === "E7" ||
          item.value.position === "F7" ||
          item.value.position === "G7" ||
          item.value.position === "H7"
        ) {
          return item;
        }
      });

      pawn.forEach((item) => {
        const figure = document.createElement("img");
        figure.classList.add("figure");
        figure.src = "/img/pawn.png";
        figure.value = this.setts.figuresValue[item.name];

        figure.value.color = color;
        figure.value.initialFigure = "pawn";

        this.figures.push(figure);

        item.append(figure);
        this.addingFigureToValue(figure.value.id, "yellow pawn", this.figures);

        item.value.initialFigure = "yellow pawn";
        item.value.figure = "yellow pawn";
      });
    }
    return true;
  }
  placeBishopsToTable(color) {
    if (color === "blue") {
      const bishop = this.squares.filter((item) => {
        if (item.value.position === "C1" || item.value.position === "F1") {
          return item;
        }
      });

      bishop.forEach((item) => {
        const figure = document.createElement("img");
        figure.classList.add("figure");
        figure.src = "/img/bishop2.png";
        figure.value = this.setts.figuresValue[item.name];

        figure.value.color = color;
        figure.value.initialFigure = "bishop";

        this.figures.push(figure);

        item.append(figure);
        this.addingFigureToValue(figure.value.id, "blue bishop", this.figures);

        item.value.initialFigure = "blue bishop";
        item.value.figure = "blue bishop";
      });
    } else {
      const bishop = this.squares.filter((item) => {
        if (item.value.position === "C8" || item.value.position === "F8") {
          return item;
        }
      });

      bishop.forEach((item) => {
        const figure = document.createElement("img");
        figure.classList.add("figure");
        figure.src = "/img/bishop.png";
        figure.value = this.setts.figuresValue[item.name];

        figure.value.color = color;
        figure.value.initialFigure = "bishop";

        this.figures.push(figure);

        item.append(figure);
        this.addingFigureToValue(
          figure.value.id,
          "yellow bishop",
          this.figures
        );

        item.value.initialFigure = "yellow bishop";
        item.value.figure = "yellow bishop";
      });
    }
  }
  placeQueensToTable(color) {
    if (color === "blue") {
      const queen = this.squares.filter((item) => {
        if (item.value.position === "D1") {
          return item;
        }
      });

      queen.forEach((item) => {
        const figure = document.createElement("img");
        figure.classList.add("figure");
        figure.src = "/img/queen2.png";
        figure.value = this.setts.figuresValue[item.name];

        figure.value.color = color;
        figure.value.initialFigure = "queen";

        this.figures.push(figure);

        item.append(figure);
        this.addingFigureToValue(figure.value.id, "blue queen", this.figures);

        item.value.initialFigure = "blue queen";
        item.value.figure = "blue queen";
      });
    } else {
      const queen = this.squares.filter((item) => {
        if (item.value.position === "D8") {
          return item;
        }
      });

      queen.forEach((item) => {
        const figure = document.createElement("img");
        figure.classList.add("figure");
        figure.src = "/img/queen.png";
        figure.value = this.setts.figuresValue[item.name];

        figure.value.color = color;
        figure.value.initialFigure = "queen";

        this.figures.push(figure);

        item.append(figure);
        this.addingFigureToValue(figure.value.id, "yellow queen", this.figures);

        item.value.initialFigure = "yellow queen";
        item.value.figure = "yellow queen";
      });
    }
  }
  placeKingsToTable(color) {
    if (color === "blue") {
      const king = this.squares.filter((item) => {
        if (item.value.position === "E1") {
          return item;
        }
      });

      king.forEach((item) => {
        const figure = document.createElement("img");
        figure.classList.add("figure");
        figure.src = "/img/king2.png";
        figure.value = this.setts.figuresValue[item.name];

        figure.value.color = color;
        figure.value.initialFigure = "king";

        this.figures.push(figure);

        item.append(figure);
        this.addingFigureToValue(figure.value.id, "blue king", this.figures);

        item.value.initialFigure = "blue king";
        item.value.figure = "blue king";
      });
    } else {
      const king = this.squares.filter((item) => {
        if (item.value.position === "E8") {
          return item;
        }
      });

      king.forEach((item) => {
        const figure = document.createElement("img");
        figure.classList.add("figure");
        figure.src = "/img/king.png";
        figure.value = this.setts.figuresValue[item.name];

        figure.value.color = color;
        figure.value.initialFigure = "king";

        this.figures.push(figure);

        item.append(figure);
        this.addingFigureToValue(figure.value.id, "yellow king", this.figures);

        item.value.initialFigure = "yellow king";
        item.value.figure = "yellow king";
      });
    }
  }
  cancelSelections() {
    this.squares.forEach((item) => {
      item.value.selected = false;
      if (item.firstChild) {
        item.firstChild.ondragstart = null;
        item.firstChild.ondragend = null;
      }
    });

    this.figures.forEach((item) => item.classList.remove("square_grey"));
  }

  posibleMoves(value) {
    console.log("posible moves");
  }
}
