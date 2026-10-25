// $('.slideBox').hover(function(){
//     $(this).find('img').fadeOut(500);
// },
// function(){
//     $(this).find('img').fadeIn(500);
// })

$('.slideBox').hover(function(){
    $(this).find('img').stop().animate({top: -325},500)
},
function(){
    $(this).find('img').stop().animate({top: 0},500)
})