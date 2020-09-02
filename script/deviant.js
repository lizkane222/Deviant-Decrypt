// Get the modal

let $modal = 


// let $encryption = $('#encryption')


// // Get the modal
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

$('.trigger').hover(function(){
    $(".myModal").css("display", "block");
    $("img01").src = (this).src;
    $("#caption").text = (this).alt;
    $(this).css("color", "#90e0ef");
    $(this).css("background-color","gray");
    
    }, 
    function(){
    $(this).css("background-color", "#03045e");
    $('.modal').css("display", "none");
});






// When the user clicks anywhere outside of the modal, close it
// use this to close transmitter display
// use if statement to only close when id-check is over
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }




