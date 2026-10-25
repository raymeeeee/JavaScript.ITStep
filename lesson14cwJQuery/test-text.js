// $(document).ready(function(){
 
// // $('.block').css('border-left', '4px solid red');
// $('.block').css({'border-left': '4px solid red', fontSize: "1.1em"});
// })
 
// $(function(){
 
// // $('.block').css('border-left', '4px solid red');
// $('.block').css({'border-left': '4px solid red', fontSize: "1.1em"});
// })
 
// jQuery(function(){
 
// // $('.block').css('border-left', '4px solid red');
// $('.block').css({'border-left': '4px solid red', fontSize: "1.1em"});
// })

// ///


// $('.block').click(function(){
//   $(this).css('font-size', "1em")
//   console.log($(this))
// })


// $('img').prop({'src':'https://picsum.photos/600/300?grayscale',
//   title: 'Temporary Photo',
// }).removeAttr("alt");
// $('img').data('author','Nikita')
// console.log($('img').data('author'))

// $('.text:contains("five")').css('background-color', 'orange')

// $('.text').hide(2000); //slideUp, fadeOut - different anim
 
// //elem.classList.add('standart')
 
$('.text').hide();
$('.plus').click(function () {
    $(this).toggleClass('minus');
    $(this).next().slideToggle(1000)
})

 