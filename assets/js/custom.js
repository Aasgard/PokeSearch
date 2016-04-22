$(document).ready(function() {
    var windowHeight = $(document).height();
    var wrapperLoaderHeight = $("#loader_pokemon_details_wrapper").height();
    var middleScreenV = windowHeight-wrapperLoaderHeight;
    $('#loader_pokemon_details_wrapper').css('margin-top',(middleScreenV/2-200))

    /*$(window).resize(function(){
        $('#loader_pokemon_details_wrapper').css('margin-top',(middleScreenV/2)-200)
    })*/
});