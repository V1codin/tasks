import calc from "./calculationMoves";

class Rules {
  constructor({
    squares,
    figures,
    selectedFigure,
    columns,
    posibleMoves,
    cancelSelections,
    squaresObject,
  }) {
    this.props = {
      squares,
      figures,
      selectedFigure,
      columns,
      posibleMoves,
      cancelSelections,
      squaresObject,
    };

    this.valid = null;
    this.figureToAppent = null;
    this.initialSquare = null;
    this.calculation = calc;

    this.availableSquares = [];

    this.initRules();
  }

  initRules() {
    this.props.squares.forEach((item) => {
      this.selecting(item);
    });
  }

  selecting(element) {
    element.onclick = (e) => {
      if (e.target.className.includes("square")) {
        this.props.selectedFigure = e.target;
        const figure = this.props.selectedFigure.firstChild;

        this.props.squares.forEach((item) => {
          item.value.selected = false;

          item.classList.add("square_grey");

          item.classList.remove("square_border");
        });

        if (figure !== null) {
          // this.availableSquares = this.calculation(figure, this.props.squares);
          let moves = [
            ...new Set(this.calculation(figure, this.props.squaresObject)),
          ];

          console.log(`moves for: ${figure.value.figure}`, moves);

          this.availableSquares = moves;

          for (let item of this.availableSquares) {
            this.props.squares.forEach((el) => {
              if (el.value.id === item) {
                el.classList.remove("square_grey");
              }
            });
          }

          figure.setAttribute("draggable", true);

          figure.ondragstart = this.dragStart.bind(this);
          figure.ondragend = this.dragEnd.bind(this);
        }

        e.target.classList.add("square_border");
        e.target.value.selected = true;
        e.target.classList.remove("square_grey");

        // move function
      } else {
        return false;
      }
    };
  }

  moveValidation(figureElement) {
    const checker = figureElement.parentElement.value.selected;
    this.initialSquare = figureElement.parentElement;
    // console.dir(figureElement.parentElement.value.position);

    const nodePosibles = this.props.squares.filter((item) =>
      this.availableSquares.includes(item.value.position) ? item : null
    );

    if (this.availableSquares.length && checker) {
      this.props.squares.forEach((item) => {
        item.ondragenter = null;
        item.ondragleave = null;
        item.ondragover = null;
        item.ondrop = null;
      });

      nodePosibles.forEach((el) => {
        el.ondragenter = this.dragEnterSquares;
        el.ondragleave = this.dragLeaveSquares;
        el.ondragover = this.dragOverSquares;
        el.ondrop = this.dropSquares.bind(this);
      });

      this.figureToAppent = figureElement;

      return {
        nodePosibles,
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
      //   console.log("back to initial state");
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
    // e.target.classList.add("square_grey");
  }

  dropSquares(e) {
    this.props.selectedFigure.value.figure = "";

    this.props.squares.forEach((item) =>
      item.classList.remove("square_borderIn")
    );

    this.figureToAppent.classList.remove("square_grey");

    if (e.target.className === "square") {
      e.target.append(this.figureToAppent);

      e.target.value.figure = this.figureToAppent.value.figure;
    } else {
      console.log("not square");

      e.target.append(this.figureToAppent);

      // e.target.parentElement.insertBefore(this.figureToAppent, e.target);

      // console.dir(e.target.parentElement);
    }

    this.figureToAppent.value.position = e.target.value.position;
    // this.figureToAppent.onclick = (e) => console.log(e.target.value);
    this.figureToAppent = null;

    setTimeout(() => {
      this.props.cancelSelections();
    }, 500);
  }
}

export default Rules;
