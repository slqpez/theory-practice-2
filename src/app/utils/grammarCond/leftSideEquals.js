import Grammar from "../../grammars/Grammar.js";
import Prod from "../../productions/Prod.js";

export function leftSideEquals(array, Grammar) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      const firstLeftSide = Grammar.getValueLeftSide(array[i]); //TODO Solo reconoce por parejas.
      const auxLeftSide = Grammar.getValueLeftSide(array[j]);
      if (i !== j) {
        if (firstLeftSide === auxLeftSide) {
          if (
            Grammar.firstRigthSideValue(array[i]) !==
            Grammar.firstRigthSideValue(array[j])
          )
            continue;
          else {
            console.log(
              `No es una gramática S, ya que en las producciones ${i +
                1} y ${j +
                1} hay símbolos iguales en el lado izquierdo, pero sus lados derechos empiezan con igual terminal(T).`
            );

            return false;
          }
        } else continue;
      } else continue;
    }
  }

  return true;
}
