import Prod from "../productions/Prod.js";

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

  firstRigthSide(Prod) {
    return Prod.rigthSide[0];
  }
}
