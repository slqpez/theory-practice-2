import Grammar from "../../grammars/Grammar.js"
import Prod from "../../productions/Prod.js"

exports function leftSideEquals(array, Grammar) {
    const firstLeftSide = array[0].getLeftSide();
    for (let i = 1; i < array.length; i++) {
        const auxLeftSide = array[i].getLeftSide();
        if(firstLeftSide === auxLeftSide){
            //TODO Necesito la posisción de las producciones.
            if(){

            }
        }

        
    }
}