$(document).ready(function () {
    // listar();
    // $('#tabla').DataTable();
});

var bUsuarios = document.querySelector("#bUsuarios");
bUsuarios.addEventListener('click', function () {
    lUsuarios();
    $('#tUsuarios').DataTable();
});

var bDoctores = document.querySelector("#bDoctores");
bDoctores.addEventListener('click', function () {
    lDoctores();
    $('#tDoctores').DataTable();
});

var bCitas = document.querySelector("#bCitas");
bCitas.addEventListener('click', function () {
    lCitas();
    $('#tCitas').DataTable();
});

var eUsuarios = localStorage.getItem("eUsuarios"); //Obtener datos de localStorage

eUsuarios = JSON.parse(eUsuarios); // Covertir a objeto
if (eUsuarios === null) { // Si no existe, creamos un array vacio.
    eUsuarios = []; // es es un  array
}

var eCitas = localStorage.getItem("eCitas"); //Obtener datos de localStorage

eCitas = JSON.parse(eCitas); // Covertir a objeto
if (eCitas === null) { // Si no existe, creamos un array vacio.
    eCitas = []; // es es un  array
}

function lUsuarios() {

    for (var i in eUsuarios) {
        var d = JSON.parse(eUsuarios[i]);
        $("#tUsuarios").append(
            "<tr style='text-align: center;'>" +
            "<td>" + i + "</td>" +
            "<td>" + d.Nombres + "</td>" +
            "<td>" + d.Apellidos + "</td>" +
            "<td>" + d.DNI + "</td>" +
            "<td>" + d.FechaDeNacimiento + "</td>" +
            "<td>" + d.Email + "</td>" +
            "<td>" + d.Usuario + "</td>" +
            "<td>" + d.Contraseña + "</td>" +
            "</tr>"
        );
    }

}

function lCitas() {

    for (var i in eCitas) {
        var c = JSON.parse(eCitas[i]);
        $("#tCitas").append(
            "<tr style='text-align: center;'>" +
            "<td>" + i + "</td>" +
            "<td>" + c.TipoCita + "</td>" +
            "<td>" + c.Nombres + "</td>" +
            "<td>" + c.Apellidos + "</td>" +
            "<td>" + c.DNI + "</td>" +
            "<td>" + c.FechaDeNacimiento + "</td>" +
            "<td>" + c.Especialidad + "</td>" +
            "<td>" + c.Motivo + "</td>" +
            "<td>" + c.FechaCita + "</td>" +
            "<td>" + c.HoraCita + "</td>" +
            "<td>" + c.Doctor + "</td>" +
            "<td>" + c.Usuario + "</td>" +
            "</tr>"
        );

    }

}

function lDoctores() {

    $.ajax('https://proyectointegradorcicloiii.firebaseio.com/Doctores.json', {
        dataType: 'json',
        contentType: 'application/json',
        cache: false
    })

        .done(function (respuesta) {
            console.log(respuesta);
            var html;

            $.each(respuesta, function (index, elemento) {
                html = '<tr style="text-align: center;">';

                html += '<td>' + elemento.ID + '</td>';
                html += '<td>' + elemento.Nombres + '</td>';
                html += '<td>' + elemento.Apellidos + '</td>';
                html += '<td>' + elemento.DNI + '</td>';
                html += '<td>' + elemento.FecNac + '</td>';
                html += '<td>' + elemento.Email + '</td>';
                html += '<td>' + elemento.Usuario + '</td>';
                html += '<td>' + elemento.Contraseña + '</td>';

                html += '</tr>';
                $('#tDoctores').append(html);
            })

        });

}