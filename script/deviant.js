////////////////////////////////////////////////////////////////////
//////  SHOWS ALL JS FUNCTIONS ON THIS SCREEN  //////////////////////////////////
////////////////////////////////////////////////////////////////////

////////////////  ALL JQUERY OBJECTS TO HIDE ON LOAD  ///////////////////////////
$('#askProfile').hide()
$('#askMore').hide()
$("#goBtn").show()
// $('#startBar').hide()
$('#mapBiggerDiv').show()
$('#mid-connect-bubble').hide()
$('.fa-eye').hide()
$('#street1-0').hide()
$('#street1-1').hide()
$('#street1-2').hide()
$('#street1-3').hide()
$('#street1-4').hide()
$('#street1-5').hide()
$('#street1-6').hide()
$('#street1-7').hide()
$('#street2-0').hide()
$('#return').hide()
$('#preview').hide()


////////////////////////////////////////////////////////////////////
// OTHER SCREEN FUNCTIONS (BACKSTORY/ PROFILE/ HELP)
////////////////////////////////////////////////////////////////////

//highlights words with the span on hover
$('#backstory span').hover(function(){
    $(this).css("color", "var(--background-dark-inverse)");
    $(this).css("background-color","gray");
    }, 
    function(){
    $(this).css("background-color", "rgba(20,20,20,1)");
});

let userName;

const getUserName = (userName) => {
    return userName
};

$('#nameSubmit').click(function(event){
    event.preventDefault()
    let $inputName = $('#nameInput').val()
    console.log($inputName);
    $('#newName').text($inputName);
    userName = $inputName;
    console.log($inputName);
    $('#nameInput').hide();
    $('#nameSubmit').hide();
    $('#deviant__img').css('margin','0 auto');
    //   $('#deviant__name').remove();
})

// CLICK MIDDLE SECTION TO CHOOSE TO PLAY OR SET UP PROFILE
// player clicks Yes- to 'Do you want to play?'
$('#goBtn').click(function(){
    $('#goBtn').hide(); 
    $('#startBar').show();
    $('#dontPlay').hide();
    $('#askProfile').show(); // show buttons to set up profile
    $('#challengeQs').hide();
    $('#askProfile').prepend(`<h4 #askQs>Great let's go! But first...Would you like to set up your profile?</h4>`).show();
 })
// player clicks No- to 'Do you want to play?'
$('#dontPlay').click(function(){
    $("#gif1").effect("shake", {direction: "up", times:4, distance: 10}, 300)
    $('#askPlay').append(`<h4 #askQs>Would you like to set up your profile?</h4>`)
    $('#askProfile').show() // show buttons to set up profile
    $('#askPlay').hide()
    // $('#challenge').hide()
})
// player clicks Yes to setUpProfile & profile section border lights up
$('#setUpProfile').click(function(){
    setInterval(function(){$("#deviant").css('border','3px groove cyan')}, 3000)
    $('#more').show()
    clearInterval(setInterval(function(){$("#deviant").css('border','none')}, 3000))
    $('#askProfile').hide()
})
// player clicks No to profile, shows gif, shows more options
$('#gif2').click(function(){
    // $("#gif1").effect("shake", {direction: "up", times:4, distance: 10}, 100)

    setInterval(function(){$("#deviant").css('border','3px groove cyan')}, 3000)
    $('#more').show()
    clearInterval(setInterval(function(){$("#deviant").css('border','none')}, 3000))    // highlights borders of info buttons
    $('#askProfile').hide()
})
// player clicks Later, entire section disappears
$('#later').click(function(){
    $('#askPlay').append(`<h4 #askQs>Would you like to set up your profile?</h4>`)
})


// + Info was clicked, h5 is appended to clarify
$('#goHelp').click(function(){
    $('#askMore').append(`<h5 #moreInfo .askQs>I'd like further clarification on <u>how to play?</u></h5>`);
    
})
// Player clicks new prompt and ? icon highlights
$('#moreInfo').click(function(){
    setInterval(function(){$('.highlightHelpI').css('border','3px groove cyan')}, 3000)
    clearInterval(setInterval(function(){$('.highlightHelpI').css('border','none')}, 3000));
    $('#gameChoiceButtons').hide()
    $('#askPlay').append(`<h4 #askQs>Look for the ? for more info.</h4>`)
})



////////////////////////////////////////////////////////////////////
//////// NAV BUTTONS //////////////
////////////////////////////////////////////////////////////////////

// ======================================
// --- BACKSTORY NAV --- 
$('#backstoryNav').click(function(event){
    $('#backstory').toggle("slow", function(){
        $('#backstory').css('border','2px 2px white')
    })
    $('#deviant__data').css('text-shadow','-1px 0px 2px var(--background)')
    // CLOSE PLAY INSTRUCTIONS
    $('.help__transmitter').hide("slow", function() {})
    // CLOSE MISSION INSTRUCTIONS
    $('.help__missions').hide("slow", function() {})
})

// ======================================
//  --- PROFILE NAV --- 
$('#userProfileNav').click(function(event){
    $('#deviant').css('border','1px solid teal');
    $('#deviant').css('background-color','rgba(0,0,5,.2)');
})

// =======================================
//  --- MISSIONS NAV & FOOTPRINTS ICON --- 
$('.help__missions').hide()
// MISSIONS NAV //
$('#missionNav').click(function(event){
    // $('.highlightHelpI').css('border','cyan')
    // TOGGLE MISSIONS INSTRUCTIONS
    $('.help__missions').toggle("slow", function() {})
    // CLOSE PLAY INSTRUCTIONS
    $('.help__transmitter').hide("slow", function() {})
    // CLOSE BACKSTORY INSTRUCTIONS
    $('#backstory').hide("slow", function(){
        $('#backstory').css('border','2px 2px white')
    })
})
// FOOTPRINTS ICON //
$('.fa-shoe-prints').click(function(event){
    // TOGGLE MISSION INSTRUCTIONS
    $('.help__missions').toggle("slow", function() {})
    // CLOSE PLAY INSTRUCTIONS
    $('.help__transmitter').hide("slow", function() {})
    // CLOSE BACKSTORY INSTRUCTIONS
    $('#backstory').hide("slow", function(){
        $('#backstory').css('border','2px 2px white')
    })
})

// ======================================
// --- PLAY? NAV & QUESTION MARK ICON ---
$('.help__transmitter').hide()
// PLAY? NAV //
$('#playNav').click(function(event){
    // TOGGLE PLAY INSTRUCTIONS
    $('.help__transmitter').toggle("slow", function() {});
    // CLOSE MISSION INSTRUCTIONS
    $('.help__missions').hide("slow", function() {})
    // CLOSE BACKSTORY INSTRUCTIONS
    $('#backstory').hide("slow", function(){
        $('#backstory').css('border','2px 2px white')
    })
})
// QUESTION MARK ICON //
$('.fa-question-circle').click(function(event){
    // TOGGLE PLAY INSTRUCTIONS
    $('.help__transmitter').toggle("slow", function() {});
    // CLOSE MISSION INSTRUCTIONS
    $('.help__missions').hide("slow", function() {})
    // CLOSE BACKSTORY INSTRUCTIONS
    $('#backstory').hide("slow", function(){
        $('#backstory').css('border','2px 2px white')
    })
})
// ======================================



////////////////////////////////////////////////////////////////////
// GAME PLAY FUNCTIONS  
////////////////////////////////////////////////////////////////////


const streets = [
    {
        streetType: "base",
        streetNumber : 0,
        numEQReq : 0,
        eachEQvalue : 0,
        accuracy : 0,
        damage : 0,
        abdaPromptPRE : [`${getUserName()}You've arrived, great! My name is Abda, I'm a tracker and decrypter. Put this earpiece on so you can hear me throughout training and your mission...`,`check... check... okay let's do this thing. Our transmitters are updated daily but there is still a portion of the code we have to manually input to pass identity checks in the street. Don't worry I'll show you how.`],
        robotPromptPRE : false,
        abdaPromptPOST : [``],
        robotPromptPOST : false,
        instructions : [`Can you find the missing code? 1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code. Once you've figured it out, how many equations can you write that equal that number? Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`],
        visited : false,
        heal : 50,
        image: "https://i.imgur.com/bxqYPzP.jpg",
        floaterImg : "https://i.imgur.com/2Ir5FZM.png",
    },
    {
        streetType: "quiz",
        streetNumber : 1,
        numEQReq : 3,
        eachEQvalue : 20,
        accuracy : 60,
        damage : -10,
        abdaPromptPRE: [`Your transmitter has been charged, let's get you ready too. Train with these codes first`,`You've been cleared for the field.`,`Feel ready to deliver this package without detection?.`,`Don't worry, I'll be with you the whole time tracking you from satelite`,`I should be able to detect when a cop-bot is near and other threats.`,`Keep in mind, if stopped for an identity check, you must reach the approved state or you'll be imprisoned, few have come back from that.`],
        robotPromptPRE : false,
        abdaPromptPOST : [``],
        robotPromptPOST: false,
        instructions : [`Can you find the missing code? 1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code. Once you've figured it out, how many equations can you write that equal that number? Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`],
        visited : false,
        heal : 50,
        image: "https://i.imgur.com/1j9xZzj.jpg",
        floaterImg : "",
    },
    {
        streetType: "street",
        streetNumber : 2,
        numEQReq : 3,
        eachEQvalue : 20,
        accuracy : 60,
        damage : -10,
        abdaPromptPRE: [`I see some movement in the next street`,`Stay alert but relax`,`Click the ID-Check button to begin decoding.`],
        robotPromptPRE : [`Citizen, stay where you are`,`What are you doing around these streets?`,`Transmitter please, protocol Identity Check Enabled`,`You're free to go, but don't be dilly dallying`,`Looks like you've been linked to rebel forces. Should've stayed home deviant.`],
        abdaPromptPOST : [``],
        robotPromptPOST: false,
        instructions : [`Can you find the missing code? 1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code. Once you've figured it out, how many equations can you write that equal that number? Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`],
        visited : false,
        heal : 30,
        image: "https://i.imgur.com/nDJKXMP.jpg",
        floaterImg : "",
    },
    {
        streetType: "street",
        streetNumber : 3,
        numEQReq : 3,
        eachEQvalue : 15,
        accuracy : 60,
        damage : -10,
        abdaPromptPRE: [`Watch out ahead!`,,`As we get closer to the rebel base you'll have to provide more codes, they're a lot stricter wherever there is more recorded deviant activity.`,`Don't worry you can do this.`,``],
        robotPromptPRE : [`Citizen, stay where you are`,`What are you doing around these streets?`,`Transmitter please, protocol Identity Check Enabled`,`You're free to go, but don't be dilly dallying`,`Looks like you've been linked to rebel forces. Should've stayed home deviant.`],
        abdaPromptPOST : [``],
        robotPromptPOST: false,
        instructions : [`Can you find the missing code? 1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code. Once you've figured it out, how many equations can you write that equal that number? Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`],
        visited : false,
        heal : 30,
        image: "https://i.imgur.com/i6Irk38.jpg",
        floaterImg : "",
    },
    {
        streetType: "street",
        streetNumber : 4,
        numEQReq : 3,
        eachEQvalue : 15,
        accuracy : 60,
        damage : -10,
        abdaPromptPRE: [`Ready yourself! There's been a disturbance in the area, more cop-bots than usual, we can't avoid them.`,``,``,``,``,``],
        robotPromptPRE : [`Citizen, stay where you are`,`What are you doing around these streets?`,`Transmitter please, protocol Identity Check Enabled`,`You're free to go, but don't be dilly dallying`,`Looks like you've been linked to rebel forces. Should've stayed home deviant.`],
        abdaPromptPOST : [``],
        robotPromptPOST: false,
        instructions : [`Can you find the missing code? 1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code. Once you've figured it out, how many equations can you write that equal that number? Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`],
        visited : false,
        heal : 30,
        image: "https://i.imgur.com/OomGERm.jpg",
        floaterImg : "",
    },
    {
        streetType: "street",
        streetNumber : 5,
        numEQReq : 3,
        eachEQvalue : 12,
        accuracy : 60,
        damage : -10,
        abdaPromptPRE: [`The difficult will again rise, get ready you provide more codes to reach approved status`],
        robotPromptPRE : [`Citizen, stay where you are`,`What are you doing around these streets?`,`Transmitter please, protocol Identity Check Enabled`,`You're free to go, but don't be dilly dallying`,`Looks like you've been linked to rebel forces. Should've stayed home deviant.`],
        abdaPromptPOST : [``],
        robotPromptPOST: false,
        instructions : [`Can you find the missing code? 1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code. Once you've figured it out, how many equations can you write that equal that number? Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`],
        visited : false,
        heal : 30,
        image: "https://i.imgur.com/P8ZihT8.jpg",
        floaterImg : "",
    },
    {
        streetType: "street",
        streetNumber : 6,
        numEQReq : 3,
        eachEQvalue : 10,
        accuracy : 60,
        damage : -10,
        abdaPromptPRE: [`We're getting close, the street detectors have been very sensitive so the slightest movement may alert a cop-bot`,``,``,``,``],
        robotPromptPRE : [`Citizen, stay where you are`,`What are you doing around these streets?`,`Transmitter please, protocol Identity Check Enabled`,`You're free to go, but don't be dilly dallying`,`Looks like you've been linked to rebel forces. Should've stayed home deviant.`],
        abdaPromptPOST : [``],
        robotPromptPOST: false,
        instructions : [`Can you find the missing code? 1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code. Once you've figured it out, how many equations can you write that equal that number? Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`],
        visited : false,
        heal : 30,
        image: "https://i.imgur.com/FP8hMvR.jpg",
        floaterImg : "",

    },
    {
        streetType: "rebelBase",
        streetNumber : 7,
        numEQReq : 3,
        eachEQvalue : 9,
        accuracy : 72,
        damage : -10,
        abdaPromptPRE: [`There's the guard, approach him slowly. They're not always the friendliest of rebels`,`Tell him you're here to deliver a resource to the Deviant Base`,`This guy's tough, you'll have to go through some extra screening.`,`Three codes, that's nothing compared to what we've already accomplished tonight.`],
        robotPromptPRE : [`State your business`,`I deny having any affiliation with this deviant force. How do we know you haven't been compromised?`,`Prove yourself. You'll be given three codes, if you pass all three, then maybe I'll believe you are a rebel-loyalist.`,`Alright, looks like you've been authorized for delivery. Come on in.`,`Get out of here imposter, before I call the cop-bots myself.`],
        abdaPromptPOST : [``],
        robotPromptPOST: false,
        instructions : [`Can you find the missing code? 1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code. Once you've figured it out, how many equations can you write that equal that number? Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`],
        visited : false,
        heal : 30,
        image: "https://i.imgur.com/RWz6I4u.jpg",
        floaterImg : "",
    },
    
]


let health = 0;
let currentStreet = 0;
let compIdChecks = 0;
let compMissions = 0;

//open map on click
$('.mapIcon').click(function(event){
    $('#play').show();
    $('#return').show();
    $('#preview').show();
    generateStreets();
    enterStreet();
    $('#openTransmitter').css("color","rgba(245, 235, 38, 1)");  // remove css after 5 seconds
})

//  ID CHECK BUTTON OPENS TRANSMITTER
$('#openTransmitter').click(function(event){
        $('.transmitterBothDisplays').css("bottom", "11.7vh").css("right","27vh")
        $('#openTransmitter').css("color","rgba(245, 235, 38, 1)");  // ref .mapIcon click => to remove css
        $('#playbtn').css("border","3px solid rgba(245, 235, 38, .5)");
    },
    function(event){
        $('.transmitterBothDisplays').css("bottom", "11.7vh").css("right","27vh")
        $('#openTransmitter').css("color","#93d8ec");  // ref .mapIcon click => to remove css
        
        // MAKE PLAY BUTTON PULSE
        $('#playbtn').css("border","3px solid rgba(245, 235, 38, .5)");
    }
)

// creates streets with their images, ability to click between streets using return next
const generateStreets = function(){
    $('#mapDiv').empty();

    for (let index=0; index < streets.length-1; index++){
        if(index === currentStreet){
            $('#mapDiv').append($(`<div class="street highlight"></div>`).css('background-image',`url(${streets[index].image})`));
        }else if (streets[index].visited){
            $('#mapDiv').append($(`<div class="street visited"></div>`).css('background-image',`url(${streets[index].image})`));
        }else {
            $('#mapDiv').append($(`<div class="street"></div>`).css('background-image',`url(${streets[index].image})`));
        }
    }
}

// A PROMPT showing how to use the scroll box (to check that coast is clear), click on robot to submit to id-check
// ADD FUNCTION & PROMPTS TO LOOK THROUGH THE SCREEN

$('#playbtn').click(function(event){
    $('#bubbleIntake').empty()
    $('#loadingBar').empty
    health = streets.health
    currentStreet = 0;
    $('#playbtn').css("color","rgba(245, 235, 38, 1)");

    
    $("#mid-connect-bubble").show()
    $('.fa-wave-square').fadeToggle("slow","swing",)
    $('.fa-wave-square').fadeToggle("slow","swing",)
    $('.fa-wave-square').fadeToggle("slow","swing",)
    $('.fa-wave-square').fadeToggle("slow","swing",)
    $('.fa-wave-square').show()

    $('.fa-eye').fadeToggle("slow","swing",)
    $('.fa-eye').fadeToggle("slow","swing",)
    $('.fa-eye').fadeToggle("slow","swing",)
    $('.fa-eye').fadeToggle("slow","swing",)
    $('.fa-eye').fadeToggle("slow","swing",)
    $('.fa-eye').fadeIn("slow",)
    $('.fa-eye').show
    // $('#abdaPromptLines').empty()
    // $('#robotPromptLines').empty()
    chooseEquation()
});


//// this is where to add prompts and other contexts from the room
const enterStreet = function(){
    let street = streets[currentStreet];

    if(street.visited){
        $('#abdaPromptLines').append(`<p class="adbaPrompt">We've already been down this street.</p>`)
    } else {
        // for(let i=0; i<=street.abdaPromptPRE.length;i++)
        $('#abdaPromptLines').prepend(`<p class="adbaPrompt">${street.abdaPromptPRE[0]}</p>`)
        // ASK DALTON WHY THIS SETINTERVAL FUNCTION DOESN'T WORK w/ the above for loop
        // setInterval(function() {$('#abdaPromptLines').prepend(`<p class="adbaPrompt">${street.abdaPromptPRE[i]}</p>`);}, 5000)
        
        // $('#abdaPromptLines').empty()
        // after 5 seconds 
        //
        //$('#abdaPromptLines').prepend(`<p class="adbaPrompt">${street.abdaPromptPre[i]}</p>`)
         //add delay somehow/ slide effect
        if (robotPrompt!== false){
            $('#robotPromptLines').append(`<p >${street.robotPromptPRE}</p>`)
            // $('#abdaPromptBar').empty
            $('#robotPromptLines').empty
        }
        $('#abdaPromptLines').append(`<p >You'll do great, get your transmitter out and prepare yourself for an identity check.</p>`)
        $('#startBar').show()
        $('#abdaPromptLines').append(`<p>${streets.instructions}</p>`)
        // compIdChecks++
        health = health-streets.damage+streets.heal;
        street++
        if (health <= 0) {
            console.log('Game Over!');
        }
        if(currentStreet === streets.length-1 && health>0){
            console.log("You win!!")
        }
        streets[currentStreet].visited = true;
    }
}


const nextStreet = function(){
    if(currentStreet < streets.length-1)
    currentStreet++
    generateStreets();
    enterStreet();
    console.log(currentStreet);
    $('#abdaPromptLines').empty()
    $('#robotPromptLines').empty()
    // $('.animationScroll').append((<img class="aniScroll" src="`${streets[index].image}`"/>))
}

const previousStreet = function(){
    if (currentStreet > 0) currentStreet--;
    generateStreets();
    enterStreet();
    console.log(currentStreet);
    $('#abdaPromptLines').empty()
    $('#robotPromptLines').empty()
}


$('#preview').on('click',nextStreet);
$('#return').on('click',previousStreet);





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////  /* .transmitter_screen */  /////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const greekAlpha = ["Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω",]

const EngAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]

const mathSymbols = ['+','-','*','/','^','√']

//  EQUATIONS CONSIST OF
// numbers1n100 mathSymbols numbers1n100 mathSymbols numbers1n100 solution

let a = 0
let b = 0
let c = 0
let d = 0

const makeAdditionEquationAND = function(base=11, symI){
    let aVar = 0;
    let bVar = 0;
    let cVar = 0;
    
    let add = mathSymbols[0];
    let cSym = mathSymbols[symI]
    let cFloor = Math.fround()

    for (let i=1; i<base; i++){
        aVar = Math.floor(Math.random()*base);
        bVar = Math.floor(Math.random()*base);
        cVar = Math.floor(Math.random()*base); 
    }

    if (symI === 0){
        let eQNoC = `${aVar} ${add} ${bVar} ${cSym} `
        let eQDisplay = `(${aVar}${add}${bVar})${cSym}(${cVar})`;
        let cSolu = aVar + bVar +cVar;
        console.log(`Bubble: ${eQNoC} = ${cSolu}`)

        console.log({eQDisplay, cSolu})
        $('#bubbleIntake').append(`<p id="newEQp">${eQNoC} (?) =  ${cSolu}</p>`);
        a = `${aVar}`
        b = `${bVar}`
        c = `${cVar}`
        d = `${cSolu}`
        console.log(`These are the variables for this round:  ${a} ${b} ${c} ${d}`);

    }else if (symI === 1){
        let eQNoC = `${aVar} ${add} ${bVar} ${cSym} `
        let eQDisplay = `(${aVar}${add}${bVar})${cSym}(${cVar})`;
        let cSolu = aVar + bVar - cVar;
        console.log(`Bubble: ${eQNoC} = ${cSolu}`)

        console.log({eQDisplay, cSolu});
        $('#bubbleIntake').append(`<p id="newEQp">${eQNoC} (?)  = ${cSolu}</p>`);
        a = `${aVar}`
        b = `${bVar}`
        c = `${cVar}`
        d = `${cSolu}`
        console.log(`These are the variables for this round:  ${a} ${b} ${c} ${d}`);

    }else if (symI === 2){
        let eQNoC = `${aVar} ${add} ${bVar} ${cSym} `
        let eQDisplay = `(${aVar}${add}${bVar})${cSym}(${cVar})`;
        let cSolu = aVar + bVar
        let answer = cSolu * cVar;
        console.log(`Bubble: ${eQNoC} = ${answer}`)

        console.log({eQDisplay, answer})
        $('#bubbleIntake').append(`<p id="newEQp">${eQNoC} (?)  = ${answer}</p>`);
        a = `${aVar}`
        b = `${bVar}`
        c = `${cVar}`
        d = `${answer}`
        console.log(`These are the variables for this round:  ${a} ${b} ${c} ${d}`);
    }
}   
    

// const basic1add = makeAdditionEquationAND(15, 0)        

const chooseEquation = () =>{
    if (compIdChecks === 0 && compMissions === 0){
        makeAdditionEquationAND(15, 0)
    } else if (compIdChecks === 1 && compMissions === 0){
        makeAdditionEquationAND(15, 0)
    } else if (compIdChecks === 2 && compMissions === 0){
        makeAdditionEquationAND(15, 1) 
    } else if (compIdChecks === 3 && compMissions === 0){
        makeAdditionEquationAND(15, 2)
    } else if (compIdChecks === 4 && compMissions === 0){
        makeAdditionEquationAND(15, 3)
    } else if (compIdChecks === 5 && compMissions === 0){
        makeAdditionEquationAND(20, 0)
    } else if (compIdChecks === 6 && compMissions === 0){
        makeAdditionEquationAND(20, 1)
    } else if (compIdChecks === 7 && compMissions === 0){
        makeAdditionEquationAND(20, 2)
    } else if (compIdChecks === 8 && compMissions === 0){
        makeAdditionEquationAND(15, 3)
    }
}
    







    // next make it add 1 to compIdChecks on every completed idCheck
    
    makeAdditionEquationAND(15, 0)     //if compIdChecks ===0 =>()




let $newEQs = ``
let $newPEQ = ``
let $displayPEQ = ``
let evalEq= []

// THIS LISTENS FOR A CLICK ON THE TRANSMITTER- DISPLAYS IT FIRST IN THE INPUT THEN ON THE LINE BELOW THE INPUT WHEN = IS CLICKED

let loadingBarPercentage = 0

const approvedCitizen = function(){

    if (loadingBarPercentage >=60){
            // highlight clearbtn to look like it's been clicked, 1/2 opacity deny
        $('.deny').css('opacity','50%');
        $('.clear').addClass('highlightClick');
        compIdChecks+=1
        $('#deviant__complete__idchx').text(compIdChecks);
        if(compIdChecks === 8 ){
            compMissions+=1
            $('#deviant__complete__msh').text(compMissions)
        }
        $('#preview').css("border","3px solid white");
            // move transmitter off right of the screen
            $('.transmitterBothDisplays').delay(2000).css("bottom", "11.7vh");
            $('.transmitterBothDisplays').delay(2000).css("right","-113vh");
            // highlight button to click next
        // // on next have backgorund of .aniScroll change to currentStreet.img
        
        /////////// SHOW MICAH & DALTON SCROLL BY UNEDITING THIS///////////////
        // $('.animationScroll').append((<img class="aniScroll"> src=`${streets[index].image}`))


        //slide away transmitter screen & bubble
        // prompt by Abda & robot   (create messages to be prior to play attempt, and after play attempt)
        // have prompts include new scores being added
        // add scores to completed missions both on screen and in global variables
        // give instruction to go to preview next street
        
        
    }
}


$(".symButt,.numButt,.bigBtnProb,.bigBtnSolu,#btnEquals").click(function( event ) {
    
    
    if ($(this).attr('id') !== 'btnEquals'){
        const inputvalue = $('input.newEQ').first().val()
        $('input.newEQ').first().val(inputvalue + $(this).text())
        // console.log("number & symbol buttons work");
        console.log($('input.newEQ'));
    }
    else {    
            // console.log('equals button works')
        $newEQs = $('input.newEQ').val()      // gab value of input
        $newPEQ = $('#newEQp').prepend(`<p>${$newEQs}</p>`)        // add the new p to user screen
            console.log($newPEQ);
        $('input.newEQ').val(``);                                  // reset the input to clear
            // formula to check cVar
        evalEq.push($newEQs)
        // loop for every index and check if symbol
        if ($newEQs.includes('+')){
            const storeEQonAdd = $newEQs.split('+')
            let total = 0
                total = parseInt(storeEQonAdd[0]) + parseInt(storeEQonAdd[1])
                console.log(total)
                console.log(storeEQonAdd)
                    if (c == total){
                        //turn green
                        correctAnswer = $('#idchecker__screen').prepend(`<p class="newEQ correct">${$newEQs}</p>`);
                        // createSquares(1)
                        $('#makeBoxes').append(`<square class="loading">5</square>`);
                        loadingBarPercentage+=5
                        // $('').
                        console.log(loadingBarPercentage)
                        $('.loadingBarPercentage').text(`${loadingBarPercentage}%`).css('color','white');
                        approvedCitizen()
                        // add the new li to idchk screen
                    }
                    else {
                        incorrectAnswer = $('#idchecker__screen').prepend(`<p class="newEQ incorrect">${$newEQs}</p>`)
                    }
        }
        else if ($newEQs.includes('-')){
        const storeEQonSub = $newEQs.split('-')
        let total = 0
            total = parseInt(storeEQonSub[0]) - parseInt(storeEQonSub[1])
            console.log(total)
            console.log(storeEQonSub)
                if (c == total){
                    //turn green
                    correctAnswer = $('#idchecker__screen').prepend(`<p class="newEQ correct">${$newEQs}</p>`);
                    
                    $('#makeBoxes').append(`<square class="loading">8</square>`);
                    loadingBarPercentage+=8
                    console.log(loadingBarPercentage)
                    $('.loadingBarPercentage').text(`${loadingBarPercentage}%`).css('color','white');
                    approvedCitizen()
                    // add the new li to idchk screen
                }
                else {
                    incorrectAnswer = $('#idchecker__screen').prepend(`<p class="newEQ incorrect">${$newEQs}</p>`)
                }
        }
        else if ($newEQs.includes('x')){
            const storeEQonMult = $newEQs.split('x')
            let total = 0
                total = parseInt(storeEQonMult[0]) * parseInt(storeEQonMult[1])
                console.log(total)
                console.log(storeEQonMult)
                    if (c == total){
                        //turn green
                        correctAnswer = $('#idchecker__screen').prepend(`<p class="newEQ correct">${$newEQs}</p>`);

                        $('#makeBoxes').append(`<square class="loading">12</square>`);
                        loadingBarPercentage+=12
                        console.log(loadingBarPercentage)
                        $('.loadingBarPercentage').text(`${loadingBarPercentage}%`).css('color','white');
                        approvedCitizen()
                        // add the new li to idchk screen
                    }
                    else {
                        incorrectAnswer = $('#idchecker__screen').prepend(`<p class="newEQ incorrect">${$newEQs}</p>`)
                    }
            }
        else if ($newEQs.includes('÷')){
            const storeEQonDiv = $newEQs.split('÷')
            let total = 0
                total = parseInt(storeEQonDiv[0]) / parseInt(storeEQonDiv[1])
                console.log(total)
                console.log(storeEQonDiv)
                    if (c == total){
                        //turn green
                        correctAnswer = $('#idchecker__screen').prepend(`<p class="newEQ correct">${$newEQs}</p>`);

                        $('#makeBoxes').append(`<square class="loading">17</square>`);
                        loadingBarPercentage+=17
                        console.log(loadingBarPercentage)
                        $('.loadingBarPercentage').text(`${loadingBarPercentage}%`).css('color','white');
                        approvedCitizen()
                        // add the new li to idchk screen
                    }
                    else {
                        incorrectAnswer = $('#idchecker__screen').prepend(`<p class="newEQ incorrect">${$newEQs}</p>`)
                    }
            }
        else if ($newEQs.includes('√')){
            const storeEQonSqrt = $newEQs.split('√')
            let total = 0
                total =  Math.sqrt(parseInt(storeEQonSqrt[0]))
                console.log(total)
                console.log(storeEQonSqrt)
                    if (c == total){
                        //turn green
                        correctAnswer = $('#idchecker__screen').prepend(`<p class="newEQ correct">${$newEQs}</p>`);
                        // add box in loadingBar
                        $('#makeBoxes').append(`<square class="loading">20</square>`);
                        loadingBarPercentage+=20
                        console.log(loadingBarPercentage)
                        $('.loadingBarPercentage').text(`${loadingBarPercentage}%`).css('color','white');
                        approvedCitizen()
                        // add the new li to idchk screen
                    }
                    else {
                        incorrectAnswer = $('#idchecker__screen').prepend(`<p class="newEQ incorrect">${$newEQs}</p>`)
                    }
            }
    }
    
});










// $('#makeBoxes').append(`<square class="loading"></square>`);
// loadingBarPercentage = 0
// $('.loadingBarPercentage').text(`${loadingBarPercentage}%`)
// add the new li to idchk screen

// const createSquares = function(numberOfSquares =10){
//     if (loadingBarPercentage <=59){
//         console.log("creating squares 1 square");
//         const $squaresContainer = $('#loadingBar');
//         for (let i=1; i<= numberOfSquares; i++){
//             const $square = $("<div class='square' />").css("background-color", 'greenyellow')
//             $squaresContainer.append($square);
//             loadingBarPercentage+20
//             $('.loadingBarPercentage').text(`${loadingBarPercentage}%`)
//         }
//     }
// }




// click map to open map
// click idcheck for transmitter to slide over
// CREATE SET UP ROUND  onclick PLAY btn
// set timer
// set loading bar = 0
// if round === 1
// 







// console.log(`This is $newEQs.$newEQs`);
// console.log(`This is $newEQs.join():`, $newEQs.join());

//check if c is equal to input

// $newEQs

// display color change approve/deny
// add points to both spots on deviant
// 
    // alert( event.currentTarget === this ); // true




///////////  DALTON'S CODE-- GOES UNDER, ELSE STATEMENT
//    evalEq.push($newEQs)
//         // loop for every index and check if symbol

//         const storeEQ = $newEQs.split('+')
//         let total = 0
//             total = parseInt(storeEQ[0]) + parseInt(storeEQ[1])
//             console.log(total)
//             console.log(storeEQ)
//                 if (c == total){
//                     //turn green
//                 correctAnswer = $('#idchecker__screen').prepend(`<li .newEQ>${$newEQs}</li>`).css("color",'green');   // add the new li to idchk screen
                    

//                 }
//                 else {
//                     incorrectAnswer = $('#idchecker__screen').prepend(`<li .newEQ>${$newEQs}</li>`).css("color",'red');
//                 }
//                 // $('#deviant__complete__idchx')++

























// I'd like further clarification on <u>how to play?</u></p>
// 
// make alert after 5 minutes to set up user name
// 
// player clicks Yes- to 'Do you want to play?'





// DIVISION ATTEMPTS

// else if(symI === 3){
    //     let eQNoC = `${aVar}${add}${bVar}${cSym}`
    //     let eQDisplay = `(${aVar}${add}${bVar})${cSym}(${cVar})`;
    //     let cSolu = aVar + bVar 
    //     let answer = cSolu / cVar
    //     console.log(`Bubble: ${eQNoC} = ${cSolu}`)
    //     console.log(`Can you find the missing code?`)
    //     console.log(`1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code. NEW RULE: if number is decimal round to the nearest whole number.`)
    //     console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
    //     console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)
    //     console.log({eQDisplay, cSolu})
    //     $('#bubble').append(`<p #bubEQ>${eQNoC} (?)  = ${answer}</p>`);
    //     const a = `${aVar}`
    //     const b = `${bVar}`
    //     const c = `${cVar}`
    //     const d = `${answer}Math.round(Math.floor(Math.random()*base))`
    //     console.log(`These are the variables for this round:  ${a} ${b} ${c} ${d}`);

    // }  

    // const a = `${aVar}`
    // const b = `${bVar}`
    // const c = `${cVar}`
    // const d = `${cSolu}`
    // console.log(`These are the variables for this round:  ${a} ${b} ${c} ${d}`);





// CHECK FOR missions
        // function isInt(d){
        //     if (d %1===0){
        //         const basic1div = makeAdditionEquationAND(11, 3)     //if compMissions ===3 =>()
        //     }
        //     else {
        //         const d = `${cSolu}Math.round(Math.floor(Math.random()*base))`
        //     }
        // }
        
        
        // if (a % 2 === 0 && b % 2 === 0){
            // const basic1div = makeAdditionEquationAND(11, 3)     //if compMissions ===3 =>()
        // }else if ((a + b)% 2 === 0) {
        //     const basic1div = makeAdditionEquationAND(11, 3)     //if compMissions ===3 =>()
        // }else if 
    







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






/* These are grouped click events */
