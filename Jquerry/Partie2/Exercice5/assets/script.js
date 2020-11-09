$(document).ready(function(){     
    //Dès qu'on clique sur #green, on applique vert() au texte
    $("#green").mouseover(function(){
        $("#text").css('color', '#218838');
    });
    //Dès qu'on clique sur #red, on applique red() au texte
    $("#red").mouseover(function(){
        $("#text").css('color', '#c82333');
    });
    //Dès qu'on clique sur #blue, on applique blue() au texte
    $("#blue").mouseover(function(){
        $("#text").css('color', '#0069d9');
    });
    $("#blue").mouseout(function(){
        $("#text").css('color', 'black');
    });
    $("#red").mouseout(function(){
        $("#text").css('color', 'black');
    });
    $("#green").mouseout(function(){
        $("#text").css('color', 'black');
    });
});