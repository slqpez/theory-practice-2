import Prod from "../../productions/Prod.js";
import Grammar from "../../grammars/Grammar.js";

export function isTFirstRigth(array, Grammar) {
  for (let i = 0; i < array.length; i++) {
    const type = Grammar.firstRigthSideType(array[i]);
    const value = Grammar.firstRigthSideValue(array[i]);

    if (type !== "N" && value !== "l") {
      continue;
    }
    //TODO Especificar que "l" será tomada como lambda.
    else {
      console.log(
        `No es una gramática S, ya que el lado derecho de la producción ${i +
          1}, empieza con un no terminal(N).`
      );

      return false;
    }
  }
  return true;
}
