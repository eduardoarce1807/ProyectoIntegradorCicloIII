window.addEventListener('load', function(){

    $.ajax('../../assets/medicorp/js/doctores.json', {
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