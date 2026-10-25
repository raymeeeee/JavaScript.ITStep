let box = $('#box'), box2 = $('#box2')
$('a').click(function(){
switch($(this).text()){
 case 'fadeIn()':  box.fadeIn( 'slow'); break;
 case 'fadeOut()':  box.fadeOut( 500); break;
 case 'fadeTo()':  box.fadeTo( 500, 0.3); break;
 case 'antiFadeTo':  box.fadeTo( 500, 1); break;
 case 'animate()':  box2.animate( {width: '200', height: 200, top: 100, left:'+=20'}, 1500); break;
 case '2animate()':  box2.animate( {width: '200'}, 500).animate({ height: 200}, 500).animate( {top: 100}, 500 ).animate({left:'+=20'}, 500); break;
 case 'stop()':  box2.stop(true)
}
})

//console.log($('a').text())