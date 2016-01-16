
$(document).ready(function(){
    $('#fade-block').mouseenter(function(){
        $('#fade-block').fadeTo('fast',0.5);
    });
    $('#fade-block').mouseleave(function(){
        $('#fade-block').fadeTo('fast', 1); 
    });
    
    $('#button').mouseenter(function(){
        $('#button').fadeTo('fast',0.5);
    });
    $('#button').mouseleave(function(){
        $('#button').fadeTo('fast', 1); 
    });
    
   
});