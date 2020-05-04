import Grammar from "../../grammars/Grammar.js";
import Prod from "../../productions/Prod.js";

export function leftSideEquals(array, Grammar) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      const firstLeftSide = array[i].getLeftSide();
      const auxLeftSide = array[j].getLeftSide();
      if (i !== j) {
        if (firstLeftSide === auxLeftSide) {
          if (
            Grammar.firstRigthSide(array[i]) !==
            Grammar.firstRigthSide(array[j])
          )
            continue;
          else return false;
        } else continue;
      } else continue;
    }
  }

  return true;
}
