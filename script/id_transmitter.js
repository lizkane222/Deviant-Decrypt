/* .transmitter_screen */
/*  */



const greekAlpha = ["Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω",]


const EngAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]

const mathSymbols = ['+','-','*','/','^','√']


/* EQUATIONS CONSIST OF
numbers1n100 mathSymbols numbers1n100 mathSymbols numbers1n100 solution
*/

const makeAdditionEquationAND = function(base=11, symI){
    let a = 0;
    let b = 0;
    let c = 0;
    
    let add = mathSymbols[0];
    // let sub = mathSymbols[1];
    // let mult = mathSymbols[2];
    // let div = mathSymbols[3]
    let cSym = mathSymbols[symI]
    let cFloor = Math.fround()
    
    for (let i=1; i<base; i++){
        a = Math.floor(Math.random()*base);
        b = Math.floor(Math.random()*base);
        c = Math.floor(Math.random()*base); 
        /* modify base for C to change second  */
    }

    if (symI === 0){
        let eQNoC = `${a}${add}${b}`
        let eQDisplay = `(${a}${add}${b})${cSym}(${c})`;
        let cSolu = a + b +c;
        console.log(`Bubble: ${eQNoC} = ${cSolu}`)
        console.log(`Can you find the missing code?`)
        console.log(`1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code.`)
        console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
        console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)
        console.log({eQDisplay, cSolu})
    }else if (symI === 1){
        let eQNoC = `${a}${add}${b}`
        let eQDisplay = `(${a}${add}${b})${cSym}(${c})`;
        let cSolu = a + b - c;
        console.log(`Bubble: ${eQNoC} = ${cSolu}`)
        console.log(`Can you find the missing code?`)
        console.log(`1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code.`)
        console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
        console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)
        console.log({eQDisplay, cSolu})
    }else if (symI === 2){
        let eQNoC = `${a}${add}${b}`
        let eQDisplay = `(${a}${add}${b})${cSym}(${c})`;
        let cSolu = a + b
        let answer = cSolu * c;
        console.log(`Bubble: ${eQNoC} = ${answer}`)
        console.log(`Can you find the missing code?`)
        console.log(`1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code.`)
        console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
        console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)
        console.log({eQDisplay, answer})

    }else if(symI === 3){
        let eQNoC = `${a}${add}${b}`
        let eQDisplay = `(${a}${add}${b})${cSym}(${c})`;
        let cSolu = a + b / c;
        console.log(`Bubble: ${eQNoC} = ${cSolu}`)
        console.log(`Can you find the missing code?`)
        console.log(`1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code.`)
        console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
        console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)
        console.log({eQDisplay, cSolu})
    }  
}


const basic1add = makeAdditionEquationAND(11, 0)
// const basic1sub = makeAdditionEquationAND(11, 1)
// const basic1mult = makeAdditionEquationAND(11, 2)
// const basic1div = makeAdditionEquationAND(11, 3)


// $('input .newEQ')

// class ButtonEQ{
//     constructor(btnID, btnClass, btnValue,){
//         this.btnID = btnID 
//         this.btnClass = btnClass 
//         this.btnValue = btnValue
//     }

//     getBtnValue(){
//         $('this.btnID').click(function(e){
//             $('input .newEQ').attr('this.value')
//             console.log(`print ${btnValue}`)
//         }



const createNewEQ = () => {
    console.log(`let's make some button click event listeners`)
}

// $('.newEQ').before()
// $('transmitter__screen').text('')

// listen for click in transmitter  (target)




// identify click in transmitter (current target)



// display that element's innertext in my input bar
// 
// 
// 
// 
// 




//     }
//     if (symI === add){
//         addition()
//         console.log(`Bubble: ${eQNoC} = ${cSolu}`)

//     }else if (symI === sub){
//         subtraction()
//         console.log(`Bubble: ${eQNoC} = ${cSolu}`)

//     }else if (symI === mult){
//         multiplication()
//         console.log(`Bubble: ${eQNoC} = ${cSolu}`)

//     }else if(symI === div){
//         division()
//         console.log(`Bubble: ${eQNoC} = ${cSolu}`)

//     }

//     console.log(`Can you find the missing code?`)
//     console.log(`1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code.`)
//     console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
// console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)



//     console.log({equationDisplay, solutionDisplay})
//     console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
//     console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)


// const basic1sub = makeAdditionEquationAND(11, 4) /* a+b to pow of c */
// const basic1sub = makeAdditionEquationAND(11, 4) /* a+b  */

// const makeSubtractionEquationAND = function(base=11, symI){
//     let a = 0;
//     let add = mathSymbols[1];
//     let b = 0;
//     let c = 0;
//     let cSym = mathSymbols[symI]
    
//     for (let i=1; i<base; i++){
//         a = Math.floor(Math.random()*base);
//         b = Math.floor(Math.random()*base);
//         c = Math.floor(Math.random()*11); 
//         /* modify base for C to change second  */
//     }
//     let equationNoC = `${a}${add}${b}`
//     let equationDisplay = `${a}${add}${b}${cSym}(${c})`
//     let solutionDisplay = a + b + c
//     // console.log(equationDisplay)
//     // console.log(solutionDisplay)
//     console.log({equationDisplay, solutionDisplay})
//     console.log(`Bubble: ${equationNoC} = ${solutionDisplay}`)
//     console.log(`Can you find the missing code?`)
//     console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
//     console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)
// }


// const basic2add = makeAdditionEquationAND(11, 0)
// const basic2sub = makeAdditionEquationAND(11, 1)
// const basic2mult = makeAdditionEquationAND(11, 2)
// const basic2div = makeAdditionEquationAND(11, 3)


// const makeMultiplicationEquationAND = function(base=11, symI){
//     let a = 0;
//     let add = mathSymbols[2];
//     let b = 0;
//     let c = 0;
//     let cSym = mathSymbols[symI]
    
//     for (let i=1; i<base; i++){
//         a = Math.floor(Math.random()*base);
//         b = Math.floor(Math.random()*base);
//         c = Math.floor(Math.random()*11); 
//         /* modify base for C to change second  */
//     }
//     let equationNoC = `${a}${add}${b}`
//     let equationDisplay = `${a}${add}${b}${cSym}(${c})`
//     let solutionDisplay = a + b + c
//     // console.log(equationDisplay)
//     // console.log(solutionDisplay)
//     console.log({equationDisplay, solutionDisplay})
//     console.log(`Bubble: ${equationNoC} = ${solutionDisplay}`)
//     console.log(`Can you find the missing code?`)
//     console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
//     console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)
// }


// const basic3add = makeAdditionEquationAND(11, 0)
// const basic3sub = makeAdditionEquationAND(11, 1)
// const basic3mult = makeAdditionEquationAND(11, 2)
// const basic3div = makeAdditionEquationAND(11, 3)



// const makeDivisionEquationAND = function(base=11, symI){
//     let a = 0;
//     let add = mathSymbols[3];
//     let b = 0;
//     let c = 0;
//     let cSym = mathSymbols[symI]
    
//     for (let i=1; i<base; i++){
//         a = Math.floor(Math.random()*base);
//         b = Math.floor(Math.random()*base);
//         c = Math.floor(Math.random()*11); 
//         /* modify base for C to change second  */
//     }
//     let equationNoC = `${a}${add}${b}`
//     let equationDisplay = `${a}${add}${b}${cSym}(${c})`
//     let solutionDisplay = a + b + c
//     // console.log(equationDisplay)
//     // console.log(solutionDisplay)
//     console.log({equationDisplay, solutionDisplay})
//     console.log(`Bubble: ${equationNoC} = ${solutionDisplay}`)
//     console.log(`Can you find the missing code?`)
//     console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
//     console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)

// }


// const basic4add = makeAdditionEquationAND(11, 0)
// const basic4sub = makeAdditionEquationAND(11, 1)
// const basic4mult = makeAdditionEquationAND(11, 2)
// const basic4div = makeAdditionEquationAND(11, 3)






