




$('#backstory span').hover(function(){
    $(this).css("color", "#90e0ef");
    $(this).css("background-color","gray");
    }, 
    function(){
    $(this).css("background-color", "rgba(20,20,20,1)");
  });



// When the user clicks anywhere outside of the modal, close it
// use this to close transmitter display
// use if statement to only close when id-check is over
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


const streets = [
    {
        streetType: "base",
        streetNumber : 0,
        numEQReq : 0,
        eachEQvalue : 0,
        accuracy : 0,
        damage : 0,
        abdaPrompt : [`You've arrived, great! My name is Abda, I'm a tracker and decrypter.Put this earpiece on so you can hear me throughout training and your mission... check, check, okay let's do this thing. Our transmitters are updated daily but there is still a portion of the code we have to manually input to pass identity checks in the street. Don't worry I'll show you how.`],
        robotPrompt: false,
        visited : false,
        heal : 50,

    },
    
    {
        streetType: "quiz",
        streetNumber : 1,
        numEQReq : 3,
        eachEQvalue : 20,
        accuracy : 60,
        damage : -10,
        abdaPrompt : [`Your transmitter has been charged, let's get you ready too. Train with these codes first`,`You've been cleared for the field.`,`Feel ready to deliver this package without detection?.`,`Don't worry, I'll be with you the whole time tracking you from satelite`,`I should be able to detect when a cop-bot is near and other threats.`,`Keep in mind, if stopped for an identity check, you must reach the approved state or you'll be imprisoned, few have come back from that.`],
        robotPrompt: false,
        visited : false,
        heal : 50,
    },
    {
        streetType: "street",
        streetNumber : 2,
        numEQReq : 3,
        eachEQvalue : 20,
        accuracy : 60,
        damage : -10,
        abdaPrompt : [`I see some movement in the next street`,`Stay alert but relax`,`Click begin transmission to begin decoding.`],
        robotPrompt : [`Citizen, stay where you are`,`What are you doing around these streets?`,`Transmitter please, protocol Identity Check Enabled`,`You're free to go, but don't be dilly dallying`,`Looks like you've been linked to rebel forces. Should've stayed home deviant.`],
        visited : false,
        heal : 30,
    },
    {
        streetType: "street",
        streetNumber : 3,
        numEQReq : 3,
        eachEQvalue : 15,
        accuracy : 60,
        damage : -10,
        abdaPrompt : [`Watch out ahead!`,,`As we get closer to the rebel base you'll have to provide more codes, they're a lot stricter wherever there is more recorded deviant activity.`,`Don't worry you can do this.`,``],
        robotPrompt : [`Citizen, stay where you are`,`What are you doing around these streets?`,`Transmitter please, protocol Identity Check Enabled`,`You're free to go, but don't be dilly dallying`,`Looks like you've been linked to rebel forces. Should've stayed home deviant.`],
        visited : false,
        heal : 30,
    },
    {
        streetType: "street",
        streetNumber : 4,
        numEQReq : 3,
        eachEQvalue : 15,
        accuracy : 60,
        damage : -10,
        abdaPrompt : [`Ready yourself! There's been a disturbance in the area, more cop-bots than usual, we can't avoid them.`,``,``,``,``,``],
        robotPrompt : [`Citizen, stay where you are`,`What are you doing around these streets?`,`Transmitter please, protocol Identity Check Enabled`,`You're free to go, but don't be dilly dallying`,`Looks like you've been linked to rebel forces. Should've stayed home deviant.`],
        visited : false,
        heal : 30,
    },
    {
        streetType: "street",
        streetNumber : 5,
        numEQReq : 3,
        eachEQvalue : 12,
        accuracy : 60,
        damage : -10,
        abdaPrompt : [`The difficult will again rise, get ready you provide more codes to reach approved status`],
        robotPrompt : [`Citizen, stay where you are`,`What are you doing around these streets?`,`Transmitter please, protocol Identity Check Enabled`,`You're free to go, but don't be dilly dallying`,`Looks like you've been linked to rebel forces. Should've stayed home deviant.`],
        visited : false,
        heal : 30,
    },
    {
        streetType: "street",
        streetNumber : 6,
        numEQReq : 3,
        eachEQvalue : 10,
        accuracy : 60,
        damage : -10,
        abdaPrompt : [`We're getting close, the street detectors have been very sensitive so the slightest movement may alert a cop-bot`,``,``,``,``],
        robotPrompt : [`Citizen, stay where you are`,`What are you doing around these streets?`,`Transmitter please, protocol Identity Check Enabled`,`You're free to go, but don't be dilly dallying`,`Looks like you've been linked to rebel forces. Should've stayed home deviant.`],
        visited : false,
        heal : 30,
    },
    {
        streetType: "rebelBase",
        streetNumber : 7,
        numEQReq : 3,
        eachEQvalue : 9,
        accuracy : 72,
        damage : -10,
        abdaPrompt : [`There's the guard, approach him slowly. They're not always the friendliest of rebels`,`Tell him you're here to deliver a resource to the Deviant Base`,`This guy's tough, you'll have to go through some extra screening.`,`Three codes, that's nothing compared to what we've already accomplished tonight.`],
        robotPrompt : [`State your business`,`I deny having any affiliation with this deviant force. How do we know you haven't been compromised?`,`Prove yourself. You'll be given three codes, if you pass all three, then maybe I'll believe you are a rebel-loyalist.`,`Alright, looks like you've been authorized for delivery. Come on in.`,`Get out of here imposter, before I call the cop-bots myself.`],
        visited : false,
        heal : 30,
    },

]

let health = 0;

let currentStreet = 0;



const generateStreets = function(){
    $('#mapDiv').empty();

    for (let index=0; index < streets.length-1; index++){
        if(index === currentStreet){
            $('#mapDiv').append('<div class="street highlight"></div>');
        }else if (streets[index].visited){
            $('#mapDiv').append('<div class="street visited"></div>');
        }else {
            $('#mapDiv').append('<div class="street"></div>')
        }
    }
}

// btns deny and approve


//// this is where to add prompts and other contexts from the room
const enterStreet = function(user){
    let street = streets[currentStreet];

    if(street.visited){
        $('#abdaPromptLines').append(`<p class="adbaPrompt">We've already been down this street.</p>`)
    } else {
        
        $('#abdaPromptLines').prepend(`<p class="adbaPrompt">${street.abdaPrompt}</p>`)
         //add delay somehow/ slide effect
        if (robotPrompt!== false){
            $('#robotPromptLines').append(`<p >${street.robotPrompt}</p>`)

            // $('#abdaPromptBar').empty
            $('#robotPromptLines').empty
        }
        $('#abdaPromptLines').append(`<p >You'll do great, get your transmitter out and prepare yourself for an identity check.</p>`)
        
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




