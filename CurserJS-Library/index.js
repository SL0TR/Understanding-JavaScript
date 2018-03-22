$('#login').click(function(){

    var loginCurser = C$('John', 'Doe')

    $('#logindiv').hide()

    loginCurser.setLang($('#lang').val()).HTMLCursing('#greeting', true).log()

})