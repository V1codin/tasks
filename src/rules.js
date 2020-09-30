class Rules {
  constructor({ squares, figures, selectedFigure, columns }) {
    this.props = {
      squares,
      figures,
      selectedFigure,
      columns,
    };

    this.valid = null;
    this.figureToAppent = null;
    this.initialSquare = null;

    // this.posibleMoves = [];
    this.initRules();
  }

  initRules() {
    this.props.figures.forEach((el) => {
      el.ondragstart = this.dragStart.bind(this);
      el.ondragend = this.dragEnd.bind(this);
    });
  }
  calculatePosibleMoves(element) {
    console.log("element: ", element);

    return [];

    /*
    const res = null;

    this.posibleMoves.push(res);
    */
  }

  moveValidation(figureElement) {
    const checker = figureElement.parentElement.value.selected;
    this.initialSquare = figureElement.parentElement;
    // console.dir(figureElement.parentElement.value.position);

    let posibleMoves = this.calculatePosibleMoves(figureElement).length
      ? this.calculatePosibleMoves(figureElement)
      : ["E3", "E4"];

    const nodePosibles = this.props.squares.filter((item) =>
      posibleMoves.includes(item.value.position) ? item : null
    );

    if (posibleMoves && checker) {
      nodePosibles.forEach((el) => {
        el.ondragenter = this.dragEnterSquares;
        el.ondragleave = this.dragLeaveSquares;
        el.ondragover = this.dragOverSquares;
        el.ondrop = this.dropSquares.bind(this);
      });

      this.figureToAppent = figureElement;

      return {
        nodePosibles,
        posibleMoves,
        checker,
      };
    } else {
      return {
        checker,
      };
    }
  }

  dragStart(e) {
    this.valid = this.moveValidation(e.target);

    setTimeout(() => {
      e.target.classList.add("hidden");
    }, 50);
  }

  dragEnd(e) {
    if (this.valid.checker) {
      e.target.classList.add("display");
      e.target.classList.remove("hidden");
      this.initialSquare.value.selected = false;
    } else {
      console.log("back to initial state");
      e.target.classList.remove("hidden");
      e.target.classList.remove("square_grey");
    }
  }
  dragOverSquares(e) {
    e.preventDefault();
  }

  dragEnterSquares(e) {
    e.target.classList.add("square_borderIn");
    e.target.classList.remove("square_grey");
  }
  dragLeaveSquares(e) {
    e.target.classList.remove("square_borderIn");
    e.target.classList.add("square_grey");
  }
  dropSquares(e) {
    e.target.classList.remove("square_borderIn");
    this.figureToAppent.classList.remove("square_grey");
    e.target.append(this.figureToAppent);

    this.figureToAppent.value.position = e.target.value.position;
    this.figureToAppent.onclick = (e) => console.log(e.target.value);
    this.figureToAppent = null;
  }
}

export default Rules;
