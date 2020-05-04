import Prod from "../productions/Prod.js";
import Grammar from "../grammars/Grammar.js";
import { isTFirstRigth } from "../utils/grammarCond/isTFirstRigth.js";
import { leftSideEquals } from "../utils/grammarCond/leftSideEquals.js";
import Node from "../../Node/Node.js";

export default class Sgrammar {
  constructor(Grammar) {
    this.Grammar = Grammar;
  }

  isGrammarS(Grammar) {
    const array = Grammar.getArrayGramm();
    const cond1 = isTFirstRigth(array, Grammar);
    const cond2 = leftSideEquals(array, Grammar);
    if (cond1 && cond2) return true;
    else return false;
  }
}

const node1 = new Node("S", "N");
const node2 = new Node("A", "N");
const node3 = new Node("B", "N");
//Acá tengo los lados izquierdos.
const node4 = new Node("a", "T");
const node5 = new Node("B", "N");
const node6 = new Node("b", "T");
const node7 = new Node("b", "T");

const prod1 = new Prod("1", node1, [node4, node5, node6]);
const prod2 = new Prod("2", node1, [node6, node5, node4]);
const prod3 = new Prod("3", node1, [node5, node6, node7]);
const prod4 = new Prod("4", node2, [node2, node3, node7]);
const prod5 = new Prod("5", node3, [node1, node7, node4]);
const gramm = new Grammar();
gramm.insertProd(prod1);
gramm.insertProd(prod2);
gramm.insertProd(prod3);
gramm.insertProd(prod4);
gramm.insertProd(prod5);
const s = new Sgrammar(gramm);
const res = s.isGrammarS(gramm);
console.log(res);
