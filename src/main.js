import Setts from "./setts.json";
import Initialization from "./initialisation";
import Rules from "./rules";

const chess = new Initialization(Setts);
const rules = new Rules(chess);
