import Prod from "../../productions/Prod.js";
import Grammar from "../../grammars/Grammar.js";

export function isTFirstRigth(array, Grammar) {
  for (let i = 0; i < array.length; i++) {
    const letter = Grammar.firstRigthSide(array[i]);
    if (letter === letter.toUpperCase() && letter !== "l") {
      //TODO Especificar que "l" será tomada como lambda.
      continue;
    } else {
      return false; //TODO Acá mandar un mensaje del porqué no es una gramática S.
    }
  }
  return true;
}
