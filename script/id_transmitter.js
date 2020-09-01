/* .transmitter_screen */
/*  */

const greekAlpha = ["Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω",]

const mathSymbols = ['+','-','*','/','^','√']



/* EQUATIONS CONSIST OF
numbers1n100 mathSymbols numbers1n100 solution
*/

const makeAdditionEquationAND = function(base=11, symI){
    let a = 0;
    let add = mathSymbols[0];
    let b = 0;
    let c = 0;
    let cSym = mathSymbols[symI]
    
    for (let i=1; i<base; i++){
        a = Math.floor(Math.random()*base);
        b = Math.floor(Math.random()*base);
        c = Math.floor(Math.random()*11); 
        /* modify base for C to change second  */
    }
    let equationNoC = `${a}${add}${b}`
    let equationDisplay = `${a}${add}${b}${cSym}(${c})`
    let solutionDisplay = a + b + c
    // console.log(equationDisplay)
    // console.log(solutionDisplay)
    console.log({equationDisplay, solutionDisplay})
}
const basic1add = makeAdditionEquationAND(11, 0)
const basic1sub = makeAdditionEquationAND(11, 1)
const basic1mult = makeAdditionEquationAND(11, 2)
const basic1div = makeAdditionEquationAND(11, 3)
// const basic1sub = makeAdditionEquationAND(11, 4) /* a+b to pow of c */
// const basic1sub = makeAdditionEquationAND(11, 4) /* a+b  */

const makeSubtractionEquationAND = function(base=11, symI){
    let a = 0;
    let add = mathSymbols[1];
    let b = 0;
    let c = 0;
    let cSym = mathSymbols[symI]
    
    for (let i=1; i<base; i++){
        a = Math.floor(Math.random()*base);
        b = Math.floor(Math.random()*base);
        c = Math.floor(Math.random()*11); 
        /* modify base for C to change second  */
    }
    let equationNoC = `${a}${add}${b}`
    let equationDisplay = `${a}${add}${b}${cSym}(${c})`
    let solutionDisplay = a + b + c
    // console.log(equationDisplay)
    // console.log(solutionDisplay)
    console.log({equationDisplay, solutionDisplay})
}


const basic2add = makeAdditionEquationAND(11, 0)
const basic2sub = makeAdditionEquationAND(11, 1)
const basic2mult = makeAdditionEquationAND(11, 2)
const basic2div = makeAdditionEquationAND(11, 3)


const makeMultiplicationEquationAND = function(base=11, symI){
    let a = 0;
    let add = mathSymbols[2];
    let b = 0;
    let c = 0;
    let cSym = mathSymbols[symI]
    
    for (let i=1; i<base; i++){
        a = Math.floor(Math.random()*base);
        b = Math.floor(Math.random()*base);
        c = Math.floor(Math.random()*11); 
        /* modify base for C to change second  */
    }
    let equationNoC = `${a}${add}${b}`
    let equationDisplay = `${a}${add}${b}${cSym}(${c})`
    let solutionDisplay = a + b + c
    // console.log(equationDisplay)
    // console.log(solutionDisplay)
    console.log({equationDisplay, solutionDisplay})
}


const basic3add = makeAdditionEquationAND(11, 0)
const basic3sub = makeAdditionEquationAND(11, 1)
const basic3mult = makeAdditionEquationAND(11, 2)
const basic3div = makeAdditionEquationAND(11, 3)



const makeDivisionEquationAND = function(base=11, symI){
    let a = 0;
    let add = mathSymbols[3];
    let b = 0;
    let c = 0;
    let cSym = mathSymbols[symI]
    
    for (let i=1; i<base; i++){
        a = Math.floor(Math.random()*base);
        b = Math.floor(Math.random()*base);
        c = Math.floor(Math.random()*11); 
        /* modify base for C to change second  */
    }
    let equationNoC = `${a}${add}${b}`
    let equationDisplay = `${a}${add}${b}${cSym}(${c})`
    let solutionDisplay = a + b + c
    // console.log(equationDisplay)
    // console.log(solutionDisplay)
    console.log({equationDisplay, solutionDisplay})
}


const basic4add = makeAdditionEquationAND(11, 0)
const basic4sub = makeAdditionEquationAND(11, 1)
const basic4mult = makeAdditionEquationAND(11, 2)
const basic4div = makeAdditionEquationAND(11, 3)












// a + b + c = solution
// is user input = c

// a + b  user_input = solution


// }


// class equations {
//     onstructor(problem, code, solution){
//     this.problem = problem;
//     this.code = code;
//     this.solution = solution;
//     }

    


// }






// const additionObj = {
//     1: {problem: 2+3,
//     solution: 5,},

//     2: {problem: 3+4,
//     solution: 7,},

//     3: {problem: 4+5,
//     solution: 9,},

//     4: {problem: 5+6,
//     solution: 11,},

//     5: {problem: 6+7,
//     solution: 13,},

//     6: {problem: 7+8,
//     solution: 15,},

//     7: {problem: 8+9,
//     solution: 17,},

//     8: {problem: 9+10,
//     solution: 19,},

//     9: {problem: 2+4,
//     solution: 6,},

//     10: {problem: 3+5,
//     solution: 8,},

//     11: {problem: 4+6,
//     solution: 10,},

//     12: {problem: 5+7,
//     solution: 12,},

//     13: {problem: 6+8,
//     solution: 14,},

//     14: {problem: 7+9,
//     solution: 16,},

//     15: {problem: 8+10,
//     solution: 18,},

//     16: {problem: 9+11,
//     solution: 20,},

//     17: {problem: 2+5,
//     solution: 7,},

//     18: {problem: 3+6,
//     solution: 9,},

//     19: {problem: 4+7,
//     solution: 11,},

//     20: {problem: 5+8,
//     solution: 13,},

//     21: {problem: 6+9,
//     solution: ,},

//     22: {problem: 7+10,
//     solution: },

//     23: {problem: 8+11,
//     solution: },

//     24: {problem: 9+12,
//     solution: },

//     25: {problem: 2+6,
//     solution: },

//     26: {problem: 3+7,
//     solution: },

//     27: {problem: 4+8,
//     solution: },

//     28: {problem: 5+9,
//     solution: },

//     29: {problem: 6+10,
//     solution: },

//     30: {problem: 7+11,
//     solution: },

//     31 : {problem: 8+12,
//     solution: +,},
   
//     32: {problem: 9+13,
//     solution: },

//     33: {problem: 2+7,
//     solution: },

//     34: {problem: 3+8,
//     solution: },

//     35: {problem: 4+9,
//     solution: },

//     36: {problem: 5+10,
//     solution: },

//     37: {problem: 6+11,
//     solution: },

//     38: {problem: 7+12,
//     solution: },

//     39: {problem: 8+13,
//     solution: },

//     40: {problem: 9+14,
//     solution: },
    
//     41: {problem: 2+8,
//     solution: +,},
   
//     42: {problem: 3+9,
//     solution: },

//     43: {problem: 4+10,
//     solution: },

//     44: {problem: 5+11,
//     solution: },

//     45: {problem: 6+12,
//     solution: },

//     46: {problem: 7+13,
//     solution: },

//     47: {problem: 8+14,
//     solution: },

//     48: {problem: 9+15,
//     solution: },

//     49: {problem: 2+9,
//     solution: },

//     50: {problem: 3+10,
//     solution: },
    
//     51: {problem: 4+11,
//     solution: +,},
   
//     52: {problem: 5+12,
//     solution: },

//     53: {problem: 6+13,
//     solution: },

//     54: {problem: 7+14,
//     solution: },

//     55: {problem: 8+15,
//     solution: },

//     56: {problem: 9+16,
//     solution: },

//     57: {problem: 2+10,
//     solution: },

//     58: {problem: 3+11,
//     solution: },

//     59: {problem: 4+12,
//     solution: },

//     60: {problem: 5+13,
//     solution: },

//     61: {problem: 6+14,
//     solution: +,},
   
//     62: {problem: 7+15,
//     solution: },

//     63: {problem: 8+16,
//     solution: },

//     64: {problem: 9+17,
//     solution: },

//     65: {problem: 8+17,
//     solution: },

//     66: {problem: 9+18,
//     solution: },

//     67: {problem: +,
//     solution: },

//     68: {problem: +,
//     solution: },

//     69: {problem: +,
//     solution: },

//     70: {problem: +,
//     solution: },
//      : {problem: +,
//     solution: +,},
   
//     72: {problem: +,
//     solution: },

//     73: {problem: +,
//     solution: },

//     74: {problem: +,
//     solution: },

//     75: {problem: +,
//     solution: },

//     76: {problem: +,
//     solution: },

//     77: {problem: +,
//     solution: },

//     78: {problem: +,
//     solution: },

//     79: {problem: +,
//     solution: },

//     80: {problem: +,
//     solution: },
//      : {problem: +,
//     solution: +,},
   
//     82: {problem: +,
//     solution: },

//     83: {problem: +,
//     solution: },

//     84: {problem: +,
//     solution: },

//     85: {problem: +,
//     solution: },

//     86: {problem: +,
//     solution: },

//     87: {problem: +,
//     solution: },

//     88: {problem: +,
//     solution: },

//     89: {problem: +,
//     solution: },

//     90: {problem: +,
//     solution: },
//      : {problem: +,
//     solution: +,},
   
//     92: {problem: +,
//     solution: },

//     93: {problem: +,
//     solution: },

//     94: {problem: +,
//     solution: },

//     95: {problem: +,
//     solution: },

//     96: {problem: +,
//     solution: },

//     97: {problem: +,
//     solution: },

//     98: {problem: +,
//     solution: },

//     99: {problem: +,
//     solution: },

//     100: {problem: +,
//     solution: },
// }