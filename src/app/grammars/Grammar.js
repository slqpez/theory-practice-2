import Prod from "../productions/Prod.js";
import Node from "../../Node/Node.js";

export default class Grammar {
  constructor() {
    this.arrayGrammar = [];
  }

  insertProd(Prod) {
    this.arrayGrammar.push(Prod);
  }

  getArrayGramm() {
    return this.arrayGrammar;
  }

  getValueLeftSide(Prod) {
    return Prod.getLeftSide().getValue();
  }

  firstRigthSideType(Prod) {
    return Prod.getRigthSide()[0].getType(); //Me va a devolver el tipo del primer nodo del lado derecho.
  }
  firstRigthSideValue(Prod) {
    return Prod.getRigthSide()[0].getValue(); //Me va a devolver el valor del primer nodo del lado derecho.
  }
}
