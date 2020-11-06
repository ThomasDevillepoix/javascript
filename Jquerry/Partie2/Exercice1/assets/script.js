$(function(){
    $('#imgIsle').hover( //2 functions pour 2 changements de taille
        function() {
        $('#imgIsle').css('width', '800px', 'height', '800px');
        },
         function() {
            $('#imgIsle').css('width', '400px', 'height', '400px');
         })
});
