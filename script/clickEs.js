/* These are grouped click events */

// $('#askProfile').hide()
// $('#askMore').hide()

$('#start').click(function(){
    $('#askPlay').append(`<p>Great let's go! But first...Would you like to set up your profile?</p>`)
    $('#askPlay').hide();
    $('#askProfile').show(); // show buttons to set up profile
    $('#challenge').hide()
})

// player clicks No- to 'Do you want to play?'
$('#dontPlay').click(function(){
    $("#gif1").effect("shake", {direction: "up", times:4, distance: 10}, 1000)
    $('#askPlay').append(`<p>Would you like to set up your profile?</p>`)
    $('#askProfile').hide()
    $('#challenge').hide()
    $('#askProfile').show() // show buttons to set up profile
})

// player clicks Yes to setUpProfile & profile section border lights up
$('#setUpProfile').click(function(){
    setInterval(function(){$("#deviant").css('border','3px groove cyan')}, 5000)
    $('#askProfile').hide()
    $('#more').show()
    clearInterval(setInterval(function(){$("#deviant").css('border','3px groove cyan')}, 5000))
})
// player clicks No to profile, shows gif, shows more options
$('#gif2').click(function(){
    $("#gif1").effect("shake", {direction: "up", times:4, distance: 10}, 1000)

    setInterval(function(){$("#deviant").css('border','3px groove cyan')}, 5000)
    $('#askProfile').hide()
    $('#more').show()
    clearInterval(setInterval(function(){$("#deviant").css('border','3px groove cyan')}, 5000))    // highlights borders of info buttons
})
// player clicks Later, entire section disappears
$('#later').click(function(){
    $('#gameChoiceButtons').hide()
})
// player clicks Not Sure and is prompted & foot print icon highlights
$('helpQ').click(function(){
    setInterval(function(){$('highlightHelpI').css('border','3px groove cyan')}, 5000)
    clearInterval(setInterval(function(){$('highlightHelpI').css('border','3px groove cyan')}, 5000));
    $('#gameChoiceButtons').hide()
})
// + Info was clicked, h5 is appended to clarify
$('goHelp').click(function(){
    $('#askMore').append(`<h5 #moreInfo>I'd like further clarification on <u>how to play?</u></h5>`);
    $('#gameChoiceButtons').hide()
})
// Player clicks new prompt and ? icon highlights
$('#moreInfo').click(function(){
    setInterval(function(){$('highlightHelpI').css('border','3px groove cyan')}, 5000)
    clearInterval(setInterval(function(){$('highlightHelpI').css('border','3px groove cyan')}, 5000));
    $('#gameChoiceButtons').hide()
})
