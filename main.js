$(document).ready(function(){

    $('#my-list').on('click', 'li', function(){
        $(this).toggleClass('riscado');
    })
    
    $('form').submit(function(e){
        e.preventDefault();

        const captaTarefa = $('#form-task').val();

        $('#my-list').append('<li>' + captaTarefa + '</li>');

        $('#form-task').val('');
    })
})