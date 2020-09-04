/* .transmitter_screen */
/*  */



const greekAlpha = ["Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω",]


const EngAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]

const mathSymbols = ['+','-','*','/','^','√']


//  EQUATIONS CONSIST OF
// numbers1n100 mathSymbols numbers1n100 mathSymbols numbers1n100 solution


const a = 0
const b = 0
const c = 0
const d = 0

const makeAdditionEquationAND = function(base=11, symI){
    let aVar = 0;
    let bVar = 0;
    let cVar = 0;
    
    let add = mathSymbols[0];
    // let sub = mathSymbols[1];
    // let mult = mathSymbols[2];
    // let div = mathSymbols[3]
    let cSym = mathSymbols[symI]
    let cFloor = Math.fround()
    
    for (let i=1; i<base; i++){
        aVar = Math.floor(Math.random()*base);
        bVar = Math.floor(Math.random()*base);
        cVar = Math.floor(Math.random()*base); 
    }

    if (symI === 0){
        let eQNoC = `${aVar}${add}${bVar}`
        let eQDisplay = `(${aVar}${add}${bVar})${cSym}(${cVar})`;
        let cSolu = aVar + bVar +cVar;
        console.log(`Bubble: ${eQNoC} = ${cSolu}`)
        console.log(`Can you find the missing code?`)
        console.log(`1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code.`)
        console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
        console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)
        console.log({eQDisplay, cSolu})
        $('bubble').append(`<p .bubEQ>${eQNoC} = ${cSolu}</p>`);

    }else if (symI === 1){
        let eQNoC = `${aVar}${add}${bVar}`
        let eQDisplay = `(${aVar}${add}${bVar})${cSym}(${cVar})`;
        let cSolu = aVar + bVar - cVar;
        console.log(`Bubble: ${eQNoC} = ${cSolu}`)
        console.log(`Can you find the missing code?`)
        console.log(`1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code.`)
        console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
        console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)
        console.log({eQDisplay, cSolu});
        $('bubble').append(`<p .bubEQ>${eQNoC} = ${cSolu}</p>`);

    }else if (symI === 2){
        let eQNoC = `${aVar}${add}${bVar}`
        let eQDisplay = `(${aVar}${add}${bVar})${cSym}(${cVar})`;
        let cSolu = aVar + bVar
        let answer = cSolu * cVar;
        console.log(`Bubble: ${eQNoC} = ${answer}`)
        console.log(`Can you find the missing code?`)
        console.log(`1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code.`)
        console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
        console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)
        console.log({eQDisplay, answer})
        $('bubble').append(`<p .bubEQ>${eQNoC} = ${cSolu}</p>`);


    }else if(symI === 3){
        let eQNoC = `${aVar}${add}${bVar}`
        let eQDisplay = `(${aVar}${add}${bVar})${cSym}(${cVar})`;
        let cSolu = aVar + bVar / cVar;
        console.log(`Bubble: ${eQNoC} = ${cSolu}`)
        console.log(`Can you find the missing code?`)
        console.log(`1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code.`)
        console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
        console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)
        console.log({eQDisplay, cSolu})
        $('bubble').append(`<p .bubEQ>${eQNoC} = ${cSolu}</p>`);

    }  
}
const basic1add = makeAdditionEquationAND(11, 0)        //if deviant__complete__msh ===0 then run this function;




let compMissions = 0;

// let $checkCompMissions = $('#deviant__complete__msh').val(compMissions);

//find button for YES I want to play
$('#letsPlay').click(function(event){
    alert( event.currentTarget === this ); // true
    // link this to the start button in the left column
    if ($('compMissions')===0){
        const basic1add = makeAdditionEquationAND(11, 0)        //if deviant__complete__msh ===0 then run this function;
    } else if ($('compMissions')===1){
        const basic1sub = makeAdditionEquationAND(11, 1)     //ifcheckCompMissions ===1 then run this function;
    } else if ($('compMissions')===2){
        const basic1mult = makeAdditionEquationAND(11, 2)    //ifcheckCompMissions ===2 then run this function;
    }else if ($('compMissions')===3){
        const basic1div = makeAdditionEquationAND(11, 3)     //if deviant__complete__msh ===3 then run this function;
    }
});



// $('.newEQ').before()
// $('transmitter__screen').text('')


// $('input .newEQ') = []

// THIS LISTENS FOR A CLICK ON THE TRANSMITTER- DISPLAYS IT FIRST IN THE INPUT THEN ON THE LINE BELOW THE INPUT WHEN = IS CLICKED
$( ".symButt_left,.numButt,.symButt_right,.bigBtnProb,.bigBtnSolu,#btnEquals" ).click(function( event ) {
    console.log("my number buttons and symbol buttons work");

    if ($(this).attr('id') !== 'btnEquals'){
        const inputvalue = $('input.newEQ').first().val()
        $('input.newEQ').first().val(inputvalue + $(this).text())
        console.log($('input.newEQ'));
    }
    else {    
        console.log('equals button works')
        const $newEQs = $('input.newEQ').val()
            console.log($newEQs);
        const $newPEQ = $('ul').prepend(`<li>${$newEQs}</li>`);
            console.log($newPEQ);
            console.log('trying to put eq on line')
            $('input.newEQ').val(``);
            // $($newEQs).val='';
        
    }
    // alert( event.currentTarget === this ); // true
    
});






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






