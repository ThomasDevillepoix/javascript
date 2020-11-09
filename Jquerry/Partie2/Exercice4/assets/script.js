$(document).ready(function(){     
    //Dès qu'on clique sur #green, on applique vert() au texte
    $("#green").click(function(){
        $("#text").css('color', '#218838');
    });
    //Dès qu'on clique sur #red, on applique red() au texte
    $("#red").click(function(){
        $("#text").css('color', '#c82333');
    });
    //Dès qu'on clique sur #blue, on applique blue() au texte
    $("#blue").click(function(){
        $("#text").css('color', '#0069d9');
    });
});