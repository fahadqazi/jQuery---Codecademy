
$(document).ready(function(){
    $('#fade-block').mouseenter(function(){
        $('#fade-block').fadeTo('fast',0.5);
    });
    $('#fade-block').mouseleave(function(){
        $('#fade-block').fadeTo('fast', 1); 
    });
    
    $('#button').mouseenter(function(){
        $('#button').fadeTo('fast',1);
    });
    $('#button').mouseleave(function(){
        $('#button').fadeTo('fast', 0.5); 
    });
    
//   $('click').click(function(){
//        $('.vanish').fadeOut('slow');
//   });  
    
   $('#click').click(function() {
        $('.vanish').fadeOut('slow');
    });
    
    $('#click-blue').click(function() {
        $('.blue').fadeOut('slow');
    });
    
    $('.red, .pink').fadeOut('slow', 0);
    
    $('.blue-box').click(function(){
        $(this).fadeOut('slow');
    })
});

