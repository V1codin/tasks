import Setts from "./setts.json";

class Initialization {
  constructor(setts) {
    this.squares = [];
    this.setts = setts;
    this.selectedFigure = null;

    this.columns = document.querySelectorAll(".column");
    this.squares = [];

    this.getSquares();
  }

  getSquares() {
    this.columns.forEach((el) => {
      const square = el.querySelectorAll(".square");

      for (let i = 0; i < square.length; i++) {
        this.squares.push(square[i]);
      }

      square.forEach((item, index) => {
        let data = item.parentElement.dataset.columnletter;
        let num = this.setts.nums[index];

        item.value = {
          position: data + num,
          selected: false,
          initialFigure: "",
          figure: "",
          id: index,
        };

        item.onclick = (e) => {
          this.selectedFigure = e.target;

          e.target.value.selected = !e.target.value.selected;

          console.log(e.target.value);
        };
      });
    });
  }

  placeFigures() {
    const horse = this.squares.filter((item) => {
      if (
        item.value.position === "B1" ||
        item.value.position === "B8" ||
        item.value.position === "G8" ||
        item.value.position === "G1"
      ) {
        return item;
      }
    });
    horse.forEach((item) => {
      const figure = document.createElement("img");
      figure.classList.add("figure");
      figure.src = "/img/horse.png";

      item.append(figure);
    });

    console.log("horse", horse);
  }
}

const chess = new Initialization(Setts);

chess.placeFigures();
