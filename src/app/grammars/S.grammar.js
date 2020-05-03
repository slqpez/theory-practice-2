import Prod from "../productions/Prod.js";
import Grammar from "../grammars/Grammar.js";
import { isTFirstRigth } from "../utils/grammarCond/isTFirstRigth.js";

export default class Sgrammar {
  constructor(Grammar) {
    this.Grammar = Grammar;
  }

  isGrammarS(Grammar) {
    const array = Grammar.getArrayGramm();
    const res1 = isTFirstRigth(array, Grammar);

    return res1;
  }
}

const prod1 = new Prod("1", "S", ["A", "b", "B"]);
const prod2 = new Prod("2", "A", ["B", "D", "e"]);
const prod3 = new Prod("2", "A", ["C", "D", "e"]);
const gramm = new Grammar();
gramm.insertProd(prod1);
gramm.insertProd(prod2);
gramm.insertProd(prod3);
const s = new Sgrammar(gramm);
s.isGrammarS(gramm);
