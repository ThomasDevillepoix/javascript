$(document).ready(function(){     
    //Dès qu'on clique sur #hide, on applique hide() au titre
    $("#hide").click(function(){
        $("#texte").hide();
    });
    
    //Dès qu'on clique sur #show, on applique show() au titre
    $("#show").click(function(){
        $("#texte").show();
    });
});