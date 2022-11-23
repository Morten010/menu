$(function(){

    $('#toggle-menu').on('click', function(){
        $(this).parent().parent().toggleClass('active')
        console.log('click');
    })

});