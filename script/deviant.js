// Get the modal



// let $encryption = $('#encryption')

$('#backstory a').hover(function(){
    $(this).css("color", "#90e0ef");
    $(this).css("background-color","yellow");
    }, 
    function(){
    $(this).css("background-color", "#03045e");
  });


// Get the modal
// let modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");

// $(".trigger").on('click', function(){
//     $('#myModal').css("display", "block");
//     $("#img01").src = (this).src;
//     $("#caption").text = (this).alt;
// });



// class triggerModal {
//     constructor(triggerID, imgNumID, captionID, ){
//         this.modal = $('.modal');
//         this.myModal = $('.myModal')
//         this.triggerClass= $('.trigger');
//         this.triggerID = triggerID
//         this.imgNumID = imgNumID;
//         this.captionID = captionID;
//     }
//     modalMaker() {
//         $(this.triggerID).hover(function(){
//             $(this.modal).css("display", "block");
//             $(this.imgNumID).src = (this).src;
//             $(this.captionID).text = (this).alt;
//             $(this.triggerClass).css("color", "#90e0ef");
//             $(this.triggerClass).css("background-color","gray");      
//             }, 
//             function(){
//             $(this.triggerClass).css("background-color", "#03045e");
//             $(this.myModal).css("display", "none");
//     });
//     }
// }

// const phantomWars = new triggerModal($('#phantomWars'),$('#img00'),$('#caption00'));

// // phantomWars.modalMaker()



$('#firstTrigger').hover(function(){
    $(".modal").css("display", "block");
    $("img01").src = (this).src;
    // $("#caption01").text = (this).alt;
    $(this).css("color", "#90e0ef");
    $(this).css("background-color","gray");
    
    }, 
    function(){
    $(this).css("background-color", "#03045e");
    $('.myModal').css("display", "none");
});






// When the user clicks anywhere outside of the modal, close it
// use this to close transmitter display
// use if statement to only close when id-check is over
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }




