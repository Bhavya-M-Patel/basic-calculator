/**
 * Calculator object provides different methods
*/
let Calculator = {
    /**
     * @param {any} Number1 is a Operand 1
     * @param {any} Number2 is a Operand 2
     * @returns {Number} Returns addition of Number1 and Number2 
     *          if both are numbers else return String error message
     */
    sum(Number1, Number2) {
        if (!isNaN(Number1) && !isNaN(Number2)){
            
            //Calculate and return Answer
            let answer = Number(Number1) + Number(Number2);
            return answer;
        }
        
        //Return Error msg if arguments are not number
        else return "Enter numbers only";
    },

    /**
     * @param {any} Number1 is a Operand 1
     * @param {any} Number2 is a Operand 2
     * @returns {Number} Returns Division of Number1 and Number2 
     *          if both are numbers else return String error message
     */
    division(Number1, Number2) {
        if (!isNaN(Number1) && !isNaN(Number2)){
            
            //Calculate and return Answer
            let answer = Number(Number1) / Number(Number2);
            return answer;
        }
        //Return Error msg if arguments are not number
        else return "Enter numbers only";
    },

    /**
     * @param {any} Number1 is a Operand 1
     * @param {any} Number2 is a Operand 2
     * @returns {Number} Returns subtraction Number2 from Number1
     *          if both are numbers else return String error message
     */
    subtract(Number1, Number2) {
        if (!isNaN(Number1) && !isNaN(Number2)){
            
            //Calculate and return Answer
            let answer = Number(Number1) - Number(Number2);
            return answer;
        }
        
        //Return Error msg if arguments are not number
        else return "Enter numbers only";
    },

    /**
     * @param {any} Number1 is a Operand 1
     * @param {any} Number2 is a Operand 2
     * @returns {Number} Returns multiplication of Number1 and Number2 
     *          if both are numbers else return String error message
     */
    multiply(Number1, Number2) {
        if (!isNaN(Number1) && !isNaN(Number2)){
            
            //Calculate and return Answer
            let answer = Number(Number1) * Number(Number2);
            return answer;
        }
        
        //Return Error msg if arguments are not number
        else return "Enter numbers only";
    },
}