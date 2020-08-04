window.addEventListener('load', function () {
    botonesIniciando();
    if (!(localStorage.getItem("eUsuarios") == null)) {
        bCerrarYIniciar();
    }
    $("#todo").hide();
    $("#todoO").hide();
});

const arrayHorasDoctores = ["09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00",
    "16:00", "17:00", "18:00", "19:00",
    "20:00"];

const arrayHorasJF = ["09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00",
    "16:00", "17:00", "18:00", "19:00",
    "20:00", "21:00"];

const arrayHorasMV = ["09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00",
    "16:00", "17:00", "18:00", "19:00",
    "20:00", "21:00"];

const arrayHorasFA = ["09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00",
    "16:00", "17:00", "18:00", "19:00",
    "20:00", "21:00"];
//////////////////////////////////////////////////////////////////////////////////////////////////////////

var eUsuarios = localStorage.getItem("eUsuarios"); //Obtener datos de localStorage

eUsuarios = JSON.parse(eUsuarios); // Covertir a objeto
if (eUsuarios === null) { // Si no existe, creamos un array vacio.
    eUsuarios = []; // es es un  array
}

var UActivo = localStorage.getItem("UActivo"); //Obtener datos de localStorage

UActivo = JSON.parse(UActivo); // Covertir a objeto
if (UActivo === null) { // Si no existe, creamos un array vacio.
    UActivo = []; // es es un  array
}

var eDoctores = localStorage.getItem("eDoctores"); //Obtener datos de localStorage

eDoctores = JSON.parse(eDoctores); // Covertir a objeto
if (eDoctores === null) { // Si no existe, creamos un array vacio.
    eDoctores = []; // es es un  array
}

var eCitas = localStorage.getItem("eCitas"); //Obtener datos de localStorage

eCitas = JSON.parse(eCitas); // Covertir a objeto
if (eCitas === null) { // Si no existe, creamos un array vacio.
    eCitas = []; // es es un  array
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////


var bCO = document.querySelector('#bCO');

bCO.addEventListener('click', function () {
    $("#formPresencial").hide();
    $("#formOnline").show();
});

var bCP = document.querySelector('#bCP');

bCP.addEventListener('click', function () {
    $("#formPresencial").show();
    $("#formOnline").hide();
});

var cbLlenar = document.querySelector('#checkLlenarPresencial');
var checker = false;

cbLlenar.addEventListener('change', function () {
    if (this.checked) {
        $("#cbN").hide();
        $("#cbA").hide();
        $("#cbDF").hide();
        checker = true;
    } else {
        $("#cbN").show();
        $("#cbA").show();
        $("#cbDF").show();
    }
});

/////horas//////////

var fechaCitaP = document.querySelector('#FechaCitaP');
fechaCitaP.addEventListener('change', function () {
    var fec = $("#FechaCitaP").val();
    var doc = $("#cDoctor").val();
    $("option").remove(".opf");
    listarHorasDisp(doc, fec);
});



//////online///////////

var fechaCitaO = document.querySelector('#FechaCitaO');
fechaCitaO.addEventListener('change', function () {
    var fec = $("#FechaCitaO").val();
    var doc = $("#cDoctorO").val();
    $("option").remove(".opfO");
    listarHorasDispO(doc, fec);
});

////////fin horas///////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////

var bCerrar = document.querySelector('#unlogin');

bCerrar.addEventListener('click', function () {

    Eliminar(0, UActivo.length);

    location.href = "/login";

});

var bIniciar = document.querySelector('#login');

bIniciar.addEventListener('click', function () {

    location.href = "../../login2/index.html";

});


var bFarmacia = document.querySelector('#farmacia');

bFarmacia.addEventListener('click', function () {

    location.href = "../../farmacia/index.html";

});


var toggleDoc = document.querySelector('#cDoctor');
toggleDoc.addEventListener('change', function () {
    console.log($("#cDoctor").val());

    if (`${event.target.value}` == "Doctor") {
        $("#todo").hide();
    } else {
        $("#todo").show();
    }

    var fec = $("#FechaCitaP").val();
    var doc = $("#cDoctor").val();
    $("option").remove(".opf");
    listarHorasDisp(doc, fec);

});

var toggleDoc = document.querySelector('#cDoctorO');
toggleDoc.addEventListener('change', function () {
    console.log($("#cDoctorO").val());
    if (`${event.target.value}` == "Doctor") {
        $("#todoO").hide();
    } else {
        $("#todoO").show();
    }

    var fec = $("#FechaCitaO").val();
    var doc = $("#cDoctorO").val();
    $("option").remove(".opfO");
    listarHorasDispO(doc, fec);

});

var bCitaPresencial = document.querySelector('#sendCitaP');

bCitaPresencial.addEventListener('click', function () {

    var cNombres = $("#cNombres").val();
    var cApellidos = $("#cApellidos").val();
    var cDNI = $("#cDNI").val();
    var cFechaDeNacimiento = $("#cFechaDeNacimiento").val();
    var cEspecialidad = $("#cEspecialidad").val();
    var cMotivo = $("#cMotivo").val();
    var cFechaCita = $("#FechaCitaP").val();
    var cHoraCita = $("#HoraCitaP").val();
    var cDoctor = $("#cDoctor").val();

    var UA = JSON.parse(UActivo[0]);
    var usu = UA.Usuario;
    var id = UA.ID;

    if (checker) {
        //localstorage
        var eU = JSON.parse(eUsuarios[id]);
        var eN = eU.Nombres;
        var eA = eU.Apellidos;
        var eDNI = eU.DNI;
        var eFN = eU.FechaDeNacimiento;
        //Propios de Cita

        var newCita = JSON.stringify({
            TipoCita: "Presencial",
            Nombres: eN,
            Apellidos: eA,
            DNI: eDNI,
            FechaDeNacimiento: eFN,
            Especialidad: cEspecialidad,
            Motivo: cMotivo,
            FechaCita: cFechaCita,
            HoraCita: cHoraCita,
            Doctor: cDoctor,
            Usuario: usu,
            usuID: id
        });

    } else {

        var newCita = JSON.stringify({
            TipoCita: "Presencial",
            Nombres: cNombres,
            Apellidos: cApellidos,
            DNI: cDNI,
            FechaDeNacimiento: cFechaDeNacimiento,
            Especialidad: cEspecialidad,
            Motivo: cMotivo,
            FechaCita: cFechaCita,
            HoraCita: cHoraCita,
            Doctor: cDoctor,
            Usuario: usu,
            usuID: id
        });

    }

    if (!hValida()) {
        alert("Fecha no valida.");
    } else {
        if (FHDisponible(cDoctor, cFechaCita, cHoraCita)) {
            eCitas.push(newCita); // Guardar datos en el array definido globalmente
            localStorage.setItem("eCitas", JSON.stringify(eCitas));
            alert("Cita Presencial registrada.");
            location.reload();
        }else{
            alert("Esta hora esta ocupada");
        }
    }


});

var bCitaOnline = document.querySelector('#sendCitaO');

bCitaOnline.addEventListener('click', function () {

    var cEspecialidadO = $("#cEspecialidadO").val();
    var cMotivoO = $("#cMotivoO").val();
    var cFechaCitaO = $("#FechaCitaO").val();
    var cHoraCitaO = $("#HoraCitaO").val();
    var cDoctorO = $("#cDoctorO").val();

    var UA = JSON.parse(UActivo[0]);
    var usu = UA.Usuario;
    var id = UA.ID;

    var eU = JSON.parse(eUsuarios[id]);
    var eN = eU.Nombres;
    var eA = eU.Apellidos;
    var eDNI = eU.DNI;
    var eFN = eU.FechaDeNacimiento;

    var newCita = JSON.stringify({
        TipoCita: "Online",
        Nombres: eN,
        Apellidos: eA,
        DNI: eDNI,
        FechaDeNacimiento: eFN,
        Especialidad: cEspecialidadO,
        Motivo: cMotivoO,
        FechaCita: cFechaCitaO,
        HoraCita: cHoraCitaO,
        Doctor: cDoctorO,
        Usuario: usu,
        usuID: id
    });

    if (!hValidaO()) {
        alert("Hora de cita no valida.");
    } else {
        if (FHDisponible(cDoctorO, cFechaCitaO, cHoraCitaO)) {
            eCitas.push(newCita); // Guardar datos en el array definido globalmente
            localStorage.setItem("eCitas", JSON.stringify(eCitas));
            alert("Cita Online registrada.");
        } else {
            alert("Esta hora esta ocupada.");
        }
    }


});


//////////////////////////////////////////////////////////////////////////////////////////////////////////

function bCerrarYIniciar() {

    var UA = JSON.parse(UActivo[0]);
    var id = UA.ID;

    console.log(id);

    if (eUsuarios.length > id) {
        var f = JSON.parse(eUsuarios[id]);
        if (f.Estado == 1) {
            $("#login").hide();
            $("#unlogin").show();
        } else {
            $("#login").show();
            $("#unlogin").hide();
        }
    } else {
        var g = JSON.parse(eDoctores[id]);
        if (g.Estado == 1) {
            $("#login").hide();
            $("#unlogin").show();
        } else {
            $("#login").show();
            $("#unlogin").hide();
        }
    }

}

function botonesIniciando() {

    var cont = 0;
    for (var i in eUsuarios) {
        var f = JSON.parse(eUsuarios[i]);
        if (f.Estado == 0) {
            cont = cont + 1;
        }
    }

    if (cont == eUsuarios.length) {
        $("#login").show();
        $("#unlogin").hide()
    }

}

function CerrarSesion() {

    var UA = JSON.parse(UActivo[0]);
    var id = UA.ID;

    console.log(id);

    var x = JSON.parse(eUsuarios[id]);

    var xNombres = x.Nombres;
    var xApellidos = x.Apellidos;
    var xDNI = x.DNI;
    var xFechaNacimiento = x.FechaDeNacimiento;
    var xEmail = x.Email;
    var xUsuario = x.Usuario;
    var xContraseña = x.Contraseña;
    eUsuarios[i] = JSON.stringify({
        Nombres: xNombres,
        Apellidos: xApellidos,
        DNI: xDNI,
        FechaDeNacimiento: xFechaNacimiento.value,
        Email: xEmail,
        Usuario: xUsuario,
        Contraseña: xContraseña,
        Estado: 0,
    });
    localStorage.setItem("eUsuarios", JSON.stringify(eUsuarios));
}

function CrearMeet() {
    window.open('https://meet.google.com/new?hs=180&authuser=0', '_blank');
}

function Eliminar(e, p) {
    UActivo.splice(e, p); // Args (posición en el array, numero de items a eliminar) https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array
    localStorage.setItem("UActivo", JSON.stringify(UActivo));
}

function Eliminar2(e, p) {
    eCitas.splice(e, p); // Args (posición en el array, numero de items a eliminar) https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array
    localStorage.setItem("eCitas", JSON.stringify(eCitas));
}

function FHDisponible(doctor, fecha, hora) {

    var disponible = true;

    for (var i in eCitas) {
        var ci = JSON.parse(eCitas[i]);
        if (doctor == ci.Doctor) {
            if (fecha == ci.FechaCita) {
                if (hora == ci.HoraCita) {
                    disponible = false;
                }
            }
        }
    }

    return disponible;
}


function hValida() {

    var valida = false;
    var hora = $("#HoraCitaP").val();

    for (var i = 0; i < arrayHorasDoctores.length; i++) {
        if (hora == arrayHorasDoctores[i]) {
            valida = true;
        }
    }

    return valida;

}

function hValidaO() {

    var valida = false;
    var hora = $("#HoraCitaO").val();

    for (var i = 0; i < arrayHorasDoctores.length; i++) {
        if (hora == arrayHorasDoctores[i]) {
            valida = true;
        }
    }

    return valida;

}

function listarHorasDisp(doctor, fecha) {
    for (var i = 0; i < arrayHorasDoctores.length; i++) {
        if (FHDisponible(doctor, fecha, arrayHorasDoctores[i])) {
            $("#listaHoras").append(
                "<option class='opf'>" + arrayHorasDoctores[i] + "</option>"
            );
        }
    }
}

function listarHorasDispO(doctor, fecha) {
    for (var i = 0; i < arrayHorasDoctores.length; i++) {
        if (FHDisponible(doctor, fecha, arrayHorasDoctores[i])) {
            $("#listaHorasO").append(
                "<option class='opfO'>" + arrayHorasDoctores[i] + "</option>"
            );
        }
    }
}




///////////////////////

function fAValidJFO() {
    var valido = false;
    var fec = $("#cHJFO").val();

    for (var i = 0; i < arrayHorasJF.length; i++) {
        if (fec == arrayHorasJF[i]) {
            valido = true;
        }
    }


    return valido;
}

function fAValidMVO() {
    var valido = false;
    var fec = $("#cHMVO").val();

    for (var i = 0; i < arrayHorasMV.length; i++) {
        if (fec == arrayHorasMV[i]) {
            valido = true;
        }
    }


    return valido;
}

function fAValidFAO() {
    var valido = false;
    var fec = $("#cHFAO").val();

    for (var i = 0; i < arrayHorasFA.length; i++) {
        if (fec == arrayHorasFA[i]) {
            valido = true;
        }
    }


    return valido;
}

function listaHJFO() {

    var fecha = $("#cFJFO").val();
    var doc = $("#cDoctorO").val();

    for (var i = 0; i < arrayHorasJF.length; i++) {
        if (FHDisponible(doc, fecha, arrayHorasJF[i])) {
            $("#lHJFO").append(
                "<option class='opfO'>" + arrayHorasJF[i] + "</option>"
            );
        }
    }

}

function listaHMVO() {

    var fecha = $("#cFMVO").val();
    var doc = $("#cDoctorO").val();

    for (var i = 0; i < arrayHorasMV.length; i++) {
        if (FHDisponible(doc, fecha, arrayHorasMV[i])) {
            $("#lHMVO").append(
                "<option class='opfO'>" + arrayHorasMV[i] + "</option>"
            );
        }
    }

}

function listaHFAO() {


    var fecha = $("#cFFAO").val();
    var doc = $("#cDoctorO").val();

    for (var i = 0; i < arrayHorasFA.length; i++) {
        if (FHDisponible(doc, fecha, arrayHorasFA[i])) {
            $("#lHFAO").append(
                "<option class='opfO'>" + arrayHorasFA[i] + "</option>"
            );
        }
    }

}