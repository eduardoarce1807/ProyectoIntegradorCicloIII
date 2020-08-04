window.addEventListener('load', function(){

    $.ajax('https://proyectointegradorcicloiii.firebaseio.com/Doctores.json', {
        dataType: 'json',
        contentType: 'application/json',
        cache: false
    })

    .done(function(respuesta){
        console.log(respuesta);
        var html;

        $.each(respuesta, function(index, elemento){
            html = '<option>Dr. '+elemento.Nombres+' '+elemento.Apellidos+'</option>';
            $('#cDoctor').append(html);
            $('#cDoctorO').append(html);
        })

    });


});