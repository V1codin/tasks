interface List {
  [key: string]: any;
  [prop: number]: any;
  name?: string;
  id: number;
  rest: List | null;
}
interface NewElement {
  [key: string]: any;
  [num: number]: any;
  name?: string;
  id?: number;
}
interface ListChild {
  list: List | null;
  add: Function;
  init: Function;
  reCalculate: Function;
  getElement: Function;
  changeElement: Function;
  size: Function;
}

class ListGenerator implements ListChild {
  list: List | null;

  constructor(namesArray: Array<string>) {
    this.list = null;

    this.init(namesArray);
  }

  init(namesArray: Array<string>): void {
    for (let i = 0; i <= namesArray.length - 1; i++) {
      this.list = {
        name: namesArray[i],
        id: i + 1,
        rest: this.list,
      };
    }
  }

  add(newElement: NewElement, insertBeforeId: number): void {
    if (this.list !== null && this.list.id < insertBeforeId) {
      return alert("There is no element with the id");
    } else if (this.list === null) {
      let node: any = {
        id: 1,
      };

      for (let key in newElement) {
        node[key] = newElement[key];
      }
      this.list = {
        ...node,
        rest: null,
      };

      return;
    } else {
      for (let node: any = this.list; node; node = node.rest) {
        if (node.id === insertBeforeId) {
          let rawRest = node.rest;

          node.rest = {
            ...node,
            rest: rawRest,
          };

          for (let item in node) {
            if (item !== "rest") {
              delete node[item];
            }
          }

          for (let key in newElement) {
            node[key] = newElement[key];
          }

          node.id = insertBeforeId;

          this.reCalculate(insertBeforeId);
          break;
        }
      }
      return;
    }
  }
  reCalculate(id: number): void {
    for (let node: any = this.list; node; node = node.rest) {
      if (node.id > id) {
        ++node.id;
      } else if (node.id === id) {
        ++node.id;
        break;
      }
    }
  }

  getElement(id: number): object | void {
    if (this.list !== null) {
      for (let node: any = this.list; node; node = node.rest) {
        if (node.id === id) {
          return node;
        }
      }
      return alert("There is no element with the id");
    }
  }

  changeElement(id: number, newElement: NewElement): boolean | void {
    if (this.list !== null) {
      for (let node: any = this.list; node; node = node.rest) {
        if (node.id === id) {
          for (let key in newElement) {
            node[key] = newElement[key];
            node.id = id;
          }
          return true;
        }
      }
      return alert("There is no element with the id");
    }
  }
  size() {
    if (this.list !== null) {
      return this.list.id;
    } else {
      console.log("List is empty");
      return 0;
    }
  }
}

const list: ListChild = new ListGenerator([]);

console.log(list);
