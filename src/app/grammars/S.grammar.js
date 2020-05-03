import Prod from "../productions/Prod.js";
import Grammar from "../grammars/Grammar.js";

export default class Sgrammar {
  constructor(Grammar) {
    this.Grammar = Grammar;
  }

  isGrammarS(Grammar) {
    const array = Grammar.getArrayGramm();
    console.log(array); //TODO No me reconoce el arrelgo, está vacío.
    for (let i = 0; i < array.length; i++) {
      const letter = Grammar.firstRigthSide(array[i]);
    }
  }
}

const prod1 = new Prod("1", "S", "Adc");
const prod2 = new Prod("2", "A", "bjl");
const gramm = new Grammar();
const s = new Sgrammar(gramm);
s.isGrammarS(gramm);
