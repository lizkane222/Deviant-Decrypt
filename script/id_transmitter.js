// /* .transmitter_screen */
// $('#askProfile').hide()
// $('#askMore').hide()
// $("#goBtn").show()
// // $('#startBar').hide()
// $('#mapBiggerDiv').show()
// $('#mid-connect-bubble').hide()
// $('.fa-eye').hide()
// $('#street1-0').hide()
// $('#street1-1').hide()
// $('#street1-2').hide()
// $('#street1-3').hide()
// $('#street1-4').hide()
// $('#street1-5').hide()
// $('#street1-6').hide()
// $('#street1-7').hide()
// $('#street2-0').hide()

// const greekAlpha = ["Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω",]

// const EngAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]

// const mathSymbols = ['+','-','*','/','^','√']

// //  EQUATIONS CONSIST OF
// // numbers1n100 mathSymbols numbers1n100 mathSymbols numbers1n100 solution

// let a = 0
// let b = 0
// let c = 0
// let d = 0

// const makeAdditionEquationAND = function(base=11, symI){
//     let aVar = 0;
//     let bVar = 0;
//     let cVar = 0;
    
//     let add = mathSymbols[0];
//     let cSym = mathSymbols[symI]
//     let cFloor = Math.fround()

//     for (let i=1; i<base; i++){
//         aVar = Math.floor(Math.random()*base);
//         bVar = Math.floor(Math.random()*base);
//         cVar = Math.floor(Math.random()*base); 
//     }

//     if (symI === 0){
//         let eQNoC = `${aVar}${add}${bVar}`
//         let eQDisplay = `(${aVar}${add}${bVar})${cSym}(${cVar})`;
//         let cSolu = aVar + bVar +cVar;
//         console.log(`Bubble: ${eQNoC} = ${cSolu}`)

//         console.log({eQDisplay, cSolu})
//         $('#bubbleIntake').append(`<p id="newEQp">${eQNoC} (?) =  ${cSolu}</p>`);
//         a = `${aVar}`
//         b = `${bVar}`
//         c = `${cVar}`
//         d = `${cSolu}`
//         console.log(`These are the variables for this round:  ${a} ${b} ${c} ${d}`);

//     }else if (symI === 1){
//         let eQNoC = `${aVar}${add}${bVar}`
//         let eQDisplay = `(${aVar}${add}${bVar})${cSym}(${cVar})`;
//         let cSolu = aVar + bVar - cVar;
//         console.log(`Bubble: ${eQNoC} = ${cSolu}`)

//         console.log({eQDisplay, cSolu});
//         $('#bubbleIntake').append(`<p id="newEQp">${eQNoC} (?)  = ${cSolu}</p>`);
//         a = `${aVar}`
//         b = `${bVar}`
//         c = `${cVar}`
//         d = `${cSolu}`
//         console.log(`These are the variables for this round:  ${a} ${b} ${c} ${d}`);

//     }else if (symI === 2){
//         let eQNoC = `${aVar}${add}${bVar}`
//         let eQDisplay = `(${aVar}${add}${bVar})${cSym}(${cVar})`;
//         let cSolu = aVar + bVar
//         let answer = cSolu * cVar;
//         console.log(`Bubble: ${eQNoC} = ${answer}`)

//         console.log({eQDisplay, answer})
//         $('#bubbleIntake').append(`<p id="newEQp">${eQNoC} (?)  = ${answer}</p>`);
//         a = `${aVar}`
//         b = `${bVar}`
//         c = `${cVar}`
//         d = `${answer}`
//         console.log(`These are the variables for this round:  ${a} ${b} ${c} ${d}`);
//     }
// }   
    

// // const basic1add = makeAdditionEquationAND(15, 0)        

// const chooseEquation = () =>{
//     if (compIdChecks === 0 && compMissions === 0){
//         makeAdditionEquationAND(15, 0)
//     } else if (compIdChecks === 1 && compMissions === 0){
//         makeAdditionEquationAND(15, 0)
//     } else if (compIdChecks === 2 && compMissions === 0){
//         makeAdditionEquationAND(15, 1) 
//     } else if (compIdChecks === 3 && compMissions === 0){
//         makeAdditionEquationAND(15, 2)
//     } else if (compIdChecks === 4 && compMissions === 0){
//         makeAdditionEquationAND(15, 3)
//     } else if (compIdChecks === 5 && compMissions === 0){
//         makeAdditionEquationAND(20, 0)
//     } else if (compIdChecks === 6 && compMissions === 0){
//         makeAdditionEquationAND(20, 1)
//     } else if (compIdChecks === 7 && compMissions === 0){
//         makeAdditionEquationAND(20, 2)
//     } else if (compIdChecks === 8 && compMissions === 0){
//         makeAdditionEquationAND(15, 3)
//     }
// }
    







//     // next make it add 1 to compIdChecks on every completed idCheck
    
//     makeAdditionEquationAND(15, 0)     //if compIdChecks ===0 =>()




// let $newEQs = ``
// let $newPEQ = ``
// let $displayPEQ = ``
// let evalEq= []

// // THIS LISTENS FOR A CLICK ON THE TRANSMITTER- DISPLAYS IT FIRST IN THE INPUT THEN ON THE LINE BELOW THE INPUT WHEN = IS CLICKED

// let loadingBarPercentage = 0

// const approvedCitizen = function(){

//     if (loadingBarPercentage >=60){
//             // highlight clearbtn to look like it's been clicked, 1/2 opacity deny
//         $('.deny').css('opacity','50%');
//         $('.clear').addClass('highlightClick');
//         compIdChecks++
//         $('#deviant__complete__idchx')= compIdChecks;
//         if(compIdChecks =8 ){
//             compMissions++
//             $('#deviant__complete__msh').join(compMissions)
//         }
//             // move transmitter off right of the screen
//         $('.transmitterBothDisplays').css("bottom", "11.7vh").css("right","-113vh");
//             // highlight button to click next
//         $('#preview').css("border","3px solid white");
//         // // on next have backgorund of .aniScroll change to currentStreet.img
        
//         /////////// SHOW MICAH & DALTON SCROLL BY UNEDITING THIS///////////////
//         // $('.animationScroll').append((<img class="aniScroll"> src=`${streets[index].image}`))


//         //slide away transmitter screen & bubble
//         // prompt by Abda & robot   (create messages to be prior to play attempt, and after play attempt)
//         // have prompts include new scores being added
//         // add scores to completed missions both on screen and in global variables
//         // give instruction to go to preview next street
        
        
//     }
// }


// $(".symButt,.numButt,.bigBtnProb,.bigBtnSolu,#btnEquals").click(function( event ) {
    
    
//     if ($(this).attr('id') !== 'btnEquals'){
//         const inputvalue = $('input.newEQ').first().val()
//         $('input.newEQ').first().val(inputvalue + $(this).text())
//         // console.log("number & symbol buttons work");
//         console.log($('input.newEQ'));
//     }
//     else {    
//             // console.log('equals button works')
//         $newEQs = $('input.newEQ').val()      // gab value of input
//         $newPEQ = $('#newEQp').prepend(`<p>${$newEQs}</p>`)        // add the new p to user screen
//             console.log($newPEQ);
//         $('input.newEQ').val(``);                                  // reset the input to clear
//             // formula to check cVar
//         evalEq.push($newEQs)
//         // loop for every index and check if symbol
//         if ($newEQs.includes('+')){
//             const storeEQonAdd = $newEQs.split('+')
//             let total = 0
//                 total = parseInt(storeEQonAdd[0]) + parseInt(storeEQonAdd[1])
//                 console.log(total)
//                 console.log(storeEQonAdd)
//                     if (c == total){
//                         //turn green
//                         correctAnswer = $('#idchecker__screen').prepend(`<p class="newEQ correct">${$newEQs}</p>`);
//                         // createSquares(1)
//                         $('#makeBoxes').append(`<square class="loading">5</square>`);
//                         loadingBarPercentage+=5
//                         // $('').
//                         console.log(loadingBarPercentage)
//                         $('.loadingBarPercentage').text(`${loadingBarPercentage}%`).css('color','white');
//                         approvedCitizen()
//                         // add the new li to idchk screen
//                     }
//                     else {
//                         incorrectAnswer = $('#idchecker__screen').prepend(`<p class="newEQ incorrect">${$newEQs}</p>`)
//                     }
//         }
//         else if ($newEQs.includes('-')){
//         const storeEQonSub = $newEQs.split('-')
//         let total = 0
//             total = parseInt(storeEQonSub[0]) - parseInt(storeEQonSub[1])
//             console.log(total)
//             console.log(storeEQonSub)
//                 if (c == total){
//                     //turn green
//                     correctAnswer = $('#idchecker__screen').prepend(`<p class="newEQ correct">${$newEQs}</p>`);
                    
//                     $('#makeBoxes').append(`<square class="loading">8</square>`);
//                     loadingBarPercentage+=8
//                     console.log(loadingBarPercentage)
//                     $('.loadingBarPercentage').text(`${loadingBarPercentage}%`).css('color','white');
//                     approvedCitizen()
//                     // add the new li to idchk screen
//                 }
//                 else {
//                     incorrectAnswer = $('#idchecker__screen').prepend(`<p class="newEQ incorrect">${$newEQs}</p>`)
//                 }
//         }
//         else if ($newEQs.includes('x')){
//             const storeEQonMult = $newEQs.split('x')
//             let total = 0
//                 total = parseInt(storeEQonMult[0]) * parseInt(storeEQonMult[1])
//                 console.log(total)
//                 console.log(storeEQonMult)
//                     if (c == total){
//                         //turn green
//                         correctAnswer = $('#idchecker__screen').prepend(`<p class="newEQ correct">${$newEQs}</p>`);

//                         $('#makeBoxes').append(`<square class="loading">12</square>`);
//                         loadingBarPercentage+=12
//                         console.log(loadingBarPercentage)
//                         $('.loadingBarPercentage').text(`${loadingBarPercentage}%`).css('color','white');
//                         approvedCitizen()
//                         // add the new li to idchk screen
//                     }
//                     else {
//                         incorrectAnswer = $('#idchecker__screen').prepend(`<p class="newEQ incorrect">${$newEQs}</p>`)
//                     }
//             }
//         else if ($newEQs.includes('÷')){
//             const storeEQonDiv = $newEQs.split('÷')
//             let total = 0
//                 total = parseInt(storeEQonDiv[0]) / parseInt(storeEQonDiv[1])
//                 console.log(total)
//                 console.log(storeEQonDiv)
//                     if (c == total){
//                         //turn green
//                         correctAnswer = $('#idchecker__screen').prepend(`<p class="newEQ correct">${$newEQs}</p>`);

//                         $('#makeBoxes').append(`<square class="loading">17</square>`);
//                         loadingBarPercentage+=17
//                         console.log(loadingBarPercentage)
//                         $('.loadingBarPercentage').text(`${loadingBarPercentage}%`).css('color','white');
//                         approvedCitizen()
//                         // add the new li to idchk screen
//                     }
//                     else {
//                         incorrectAnswer = $('#idchecker__screen').prepend(`<p class="newEQ incorrect">${$newEQs}</p>`)
//                     }
//             }
//         else if ($newEQs.includes('√')){
//             const storeEQonSqrt = $newEQs.split('√')
//             let total = 0
//                 total =  Math.sqrt(parseInt(storeEQonSqrt[0]))
//                 console.log(total)
//                 console.log(storeEQonSqrt)
//                     if (c == total){
//                         //turn green
//                         correctAnswer = $('#idchecker__screen').prepend(`<p class="newEQ correct">${$newEQs}</p>`);
//                         // add box in loadingBar
//                         $('#makeBoxes').append(`<square class="loading">20</square>`);
//                         loadingBarPercentage+=20
//                         console.log(loadingBarPercentage)
//                         $('.loadingBarPercentage').text(`${loadingBarPercentage}%`).css('color','white');
//                         approvedCitizen()
//                         // add the new li to idchk screen
//                     }
//                     else {
//                         incorrectAnswer = $('#idchecker__screen').prepend(`<p class="newEQ incorrect">${$newEQs}</p>`)
//                     }
//             }
//     }
    
// });










// // $('#makeBoxes').append(`<square class="loading"></square>`);
// // loadingBarPercentage = 0
// // $('.loadingBarPercentage').text(`${loadingBarPercentage}%`)
// // add the new li to idchk screen

// // const createSquares = function(numberOfSquares =10){
// //     if (loadingBarPercentage <=59){
// //         console.log("creating squares 1 square");
// //         const $squaresContainer = $('#loadingBar');
// //         for (let i=1; i<= numberOfSquares; i++){
// //             const $square = $("<div class='square' />").css("background-color", 'greenyellow')
// //             $squaresContainer.append($square);
// //             loadingBarPercentage+20
// //             $('.loadingBarPercentage').text(`${loadingBarPercentage}%`)
// //         }
// //     }
// // }




// // click map to open map
// // click idcheck for transmitter to slide over
// // CREATE SET UP ROUND  onclick PLAY btn
// // set timer
// // set loading bar = 0
// // if round === 1
// // 







// // console.log(`This is $newEQs.$newEQs`);
// // console.log(`This is $newEQs.join():`, $newEQs.join());

// //check if c is equal to input

// // $newEQs

// // display color change approve/deny
// // add points to both spots on deviant
// // 
//     // alert( event.currentTarget === this ); // true




// ///////////  DALTON'S CODE-- GOES UNDER, ELSE STATEMENT
// //    evalEq.push($newEQs)
// //         // loop for every index and check if symbol

// //         const storeEQ = $newEQs.split('+')
// //         let total = 0
// //             total = parseInt(storeEQ[0]) + parseInt(storeEQ[1])
// //             console.log(total)
// //             console.log(storeEQ)
// //                 if (c == total){
// //                     //turn green
// //                 correctAnswer = $('#idchecker__screen').prepend(`<li .newEQ>${$newEQs}</li>`).css("color",'green');   // add the new li to idchk screen
                    

// //                 }
// //                 else {
// //                     incorrectAnswer = $('#idchecker__screen').prepend(`<li .newEQ>${$newEQs}</li>`).css("color",'red');
// //                 }
// //                 // $('#deviant__complete__idchx')++

























// // I'd like further clarification on <u>how to play?</u></p>
// // 
// // make alert after 5 minutes to set up user name
// // 
// // player clicks Yes- to 'Do you want to play?'





// // DIVISION ATTEMPTS

// // else if(symI === 3){
//     //     let eQNoC = `${aVar}${add}${bVar}`
//     //     let eQDisplay = `(${aVar}${add}${bVar})${cSym}(${cVar})`;
//     //     let cSolu = aVar + bVar 
//     //     let answer = cSolu / cVar
//     //     console.log(`Bubble: ${eQNoC} = ${cSolu}`)
//     //     console.log(`Can you find the missing code?`)
//     //     console.log(`1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code. NEW RULE: if number is decimal round to the nearest whole number.`)
//     //     console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
//     //     console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)
//     //     console.log({eQDisplay, cSolu})
//     //     $('#bubble').append(`<p #bubEQ>${eQNoC} (?)  = ${answer}</p>`);
//     //     const a = `${aVar}`
//     //     const b = `${bVar}`
//     //     const c = `${cVar}`
//     //     const d = `${answer}Math.round(Math.floor(Math.random()*base))`
//     //     console.log(`These are the variables for this round:  ${a} ${b} ${c} ${d}`);

//     // }  

//     // const a = `${aVar}`
//     // const b = `${bVar}`
//     // const c = `${cVar}`
//     // const d = `${cSolu}`
//     // console.log(`These are the variables for this round:  ${a} ${b} ${c} ${d}`);





// // CHECK FOR missions
//         // function isInt(d){
//         //     if (d %1===0){
//         //         const basic1div = makeAdditionEquationAND(11, 3)     //if compMissions ===3 =>()
//         //     }
//         //     else {
//         //         const d = `${cSolu}Math.round(Math.floor(Math.random()*base))`
//         //     }
//         // }
        
        
//         // if (a % 2 === 0 && b % 2 === 0){
//             // const basic1div = makeAdditionEquationAND(11, 3)     //if compMissions ===3 =>()
//         // }else if ((a + b)% 2 === 0) {
//         //     const basic1div = makeAdditionEquationAND(11, 3)     //if compMissions ===3 =>()
//         // }else if 
    







// //     }
// //     if (symI === add){
// //         addition()
// //         console.log(`Bubble: ${eQNoC} = ${cSolu}`)

// //     }else if (symI === sub){
// //         subtraction()
// //         console.log(`Bubble: ${eQNoC} = ${cSolu}`)

// //     }else if (symI === mult){
// //         multiplication()
// //         console.log(`Bubble: ${eQNoC} = ${cSolu}`)

// //     }else if(symI === div){
// //         division()
// //         console.log(`Bubble: ${eQNoC} = ${cSolu}`)

// //     }

// //     console.log(`Can you find the missing code?`)
// //     console.log(`1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code.`)
// //     console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
// // console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)



// //     console.log({equationDisplay, solutionDisplay})
// //     console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
// //     console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)


// // const basic1sub = makeAdditionEquationAND(11, 4) /* a+b to pow of c */
// // const basic1sub = makeAdditionEquationAND(11, 4) /* a+b  */

// // const makeSubtractionEquationAND = function(base=11, symI){
// //     let a = 0;
// //     let add = mathSymbols[1];
// //     let b = 0;
// //     let c = 0;
// //     let cSym = mathSymbols[symI]
    
// //     for (let i=1; i<base; i++){
// //         a = Math.floor(Math.random()*base);
// //         b = Math.floor(Math.random()*base);
// //         c = Math.floor(Math.random()*11); 
// //         /* modify base for C to change second  */
// //     }
// //     let equationNoC = `${a}${add}${b}`
// //     let equationDisplay = `${a}${add}${b}${cSym}(${c})`
// //     let solutionDisplay = a + b + c
// //     // console.log(equationDisplay)
// //     // console.log(solutionDisplay)
// //     console.log({equationDisplay, solutionDisplay})
// //     console.log(`Bubble: ${equationNoC} = ${solutionDisplay}`)
// //     console.log(`Can you find the missing code?`)
// //     console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
// //     console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)
// // }


// // const basic2add = makeAdditionEquationAND(11, 0)
// // const basic2sub = makeAdditionEquationAND(11, 1)
// // const basic2mult = makeAdditionEquationAND(11, 2)
// // const basic2div = makeAdditionEquationAND(11, 3)


// // const makeMultiplicationEquationAND = function(base=11, symI){
// //     let a = 0;
// //     let add = mathSymbols[2];
// //     let b = 0;
// //     let c = 0;
// //     let cSym = mathSymbols[symI]
    
// //     for (let i=1; i<base; i++){
// //         a = Math.floor(Math.random()*base);
// //         b = Math.floor(Math.random()*base);
// //         c = Math.floor(Math.random()*11); 
// //         /* modify base for C to change second  */
// //     }
// //     let equationNoC = `${a}${add}${b}`
// //     let equationDisplay = `${a}${add}${b}${cSym}(${c})`
// //     let solutionDisplay = a + b + c
// //     // console.log(equationDisplay)
// //     // console.log(solutionDisplay)
// //     console.log({equationDisplay, solutionDisplay})
// //     console.log(`Bubble: ${equationNoC} = ${solutionDisplay}`)
// //     console.log(`Can you find the missing code?`)
// //     console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
// //     console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)
// // }


// // const basic3add = makeAdditionEquationAND(11, 0)
// // const basic3sub = makeAdditionEquationAND(11, 1)
// // const basic3mult = makeAdditionEquationAND(11, 2)
// // const basic3div = makeAdditionEquationAND(11, 3)



// // const makeDivisionEquationAND = function(base=11, symI){
// //     let a = 0;
// //     let add = mathSymbols[3];
// //     let b = 0;
// //     let c = 0;
// //     let cSym = mathSymbols[symI]
    
// //     for (let i=1; i<base; i++){
// //         a = Math.floor(Math.random()*base);
// //         b = Math.floor(Math.random()*base);
// //         c = Math.floor(Math.random()*11); 
// //         /* modify base for C to change second  */
// //     }
// //     let equationNoC = `${a}${add}${b}`
// //     let equationDisplay = `${a}${add}${b}${cSym}(${c})`
// //     let solutionDisplay = a + b + c
// //     // console.log(equationDisplay)
// //     // console.log(solutionDisplay)
// //     console.log({equationDisplay, solutionDisplay})
// //     console.log(`Bubble: ${equationNoC} = ${solutionDisplay}`)
// //     console.log(`Can you find the missing code?`)
// //     console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
// //     console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)

// // }


// // const basic4add = makeAdditionEquationAND(11, 0)
// // const basic4sub = makeAdditionEquationAND(11, 1)
// // const basic4mult = makeAdditionEquationAND(11, 2)
// // const basic4div = makeAdditionEquationAND(11, 3)






// /* These are grouped click events */
