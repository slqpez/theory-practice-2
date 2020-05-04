import Prod from "../productions/Prod.js";
import Grammar from "../grammars/Grammar.js";
import { isTFirstRigth } from "../utils/grammarCond/isTFirstRigth.js";
import { leftSideEquals } from "../utils/grammarCond/leftSideEquals.js";

export default class Sgrammar {
  constructor(Grammar) {
    this.Grammar = Grammar;
  }

  isGrammarS(Grammar) {
    const array = Grammar.getArrayGramm();
    const cond1 = isTFirstRigth(array, Grammar);
    const cond2 = leftSideEquals(array, Grammar);
    //if(cond1 && cond2 && )
    console.log(cond1);

    return cond1;
  }
}

const prod1 = new Prod("1", "S", ["a", "a", "B"]);
const prod2 = new Prod("2", "A", ["b", "D", "e"]);
const prod3 = new Prod("3", "A", ["c", "D", "e"]);
const prod4 = new Prod("4", "B", ["b", "D", "e"]);
const prod5 = new Prod("5", "A", ["d", "D", "e"]);
const gramm = new Grammar();
gramm.insertProd(prod1);
gramm.insertProd(prod2);
gramm.insertProd(prod3);
gramm.insertProd(prod4);
gramm.insertProd(prod5);
const s = new Sgrammar(gramm);
s.isGrammarS(gramm);
