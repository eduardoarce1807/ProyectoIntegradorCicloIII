
window.addEventListener('load', function () {
    if (obtenerProductosLocalStorage().length === 0) { // Si no existe, creamos un array vacio.
    } else {
        location.href = "/medicorp";
    }
    $("#alerta").hide();
});

let accesoAdmin = false;

var eUsuarios = localStorage.getItem("eUsuarios"); //Obtener datos de localStorage

eUsuarios = JSON.parse(eUsuarios); // Covertir a objeto
if (eUsuarios === null) { // Si no existe, creamos un array vacio.
    eUsuarios = []; // es es un  array
}

var eDoctores = localStorage.getItem("eDoctores"); //Obtener datos de localStorage

eDoctores = JSON.parse(eDoctores); // Covertir a objeto
if (eDoctores === null) { // Si no existe, creamos un array vacio.
    eDoctores = []; // es es un  array
}

var UActivo = localStorage.getItem("UActivo"); //Obtener datos de localStorage

UActivo = JSON.parse(UActivo); // Covertir a objeto
if (UActivo === null) { // Si no existe, creamos un array vacio.
    UActivo = []; // es es un  array
}

////////////////////////////////////////////////////////////////////////////

var bRegistrar = document.querySelector('#btnRegistrar');
var bAcceder = document.querySelector('#btnAcceder');

bRegistrar.addEventListener('click', function () {

    var eNombres = $("#txtNombres").val();
    var eApellidos = $("#txtApellidos").val();
    var eDNI = $("#txtDNI").val();
    var eFechaNacimiento = $("#txtFechaNacimiento").val();
    var eEmail = $("#txtEmail").val();
    var eUsuario = $("#txtUsuario").val();
    var eContraseña = $("#txtContraseña").val();

    var newUsu = JSON.stringify({
        Nombres: eNombres,
        Apellidos: eApellidos,
        DNI: eDNI,
        FechaDeNacimiento: eFechaNacimiento,
        Email: eEmail,
        Usuario: eUsuario,
        Contraseña: eContraseña,
        Estado: 0,
    });
    eUsuarios.push(newUsu); // Guardar datos en el array definido globalmente
    localStorage.setItem("eUsuarios", JSON.stringify(eUsuarios));
    alert("Usuario creado.");

});

bAcceder.addEventListener('click', function () {

    $("#alerta").show();

    var eUsuario = $("#txtUsuarioLogin").val();
    var eContraseña = $("#txtContraseñaLogin").val();

    if (Verificar(eUsuario, eContraseña)) {
        location.href = "/medicorp";
    }else{
        if (VerificarAdmin(eUsuario, eContraseña)) {
            location.href = "/dashboard";
        }else{
            alert("Credenciales Incorrectas");
        }
    }



});

//Comprobar que hay elementos en el LS
function obtenerProductosLocalStorage() {
    let productoLS;

    //Comprobar si hay algo en LS
    if (localStorage.getItem('UActivo') === null) {
        productoLS = [];
    }
    else {
        productoLS = JSON.parse(localStorage.getItem('UActivo'));
    }
    return productoLS;
}


function Verificar(eUsu, eCont) {

    var acceso = false;

    for (var i in eUsuarios) {
        var x = JSON.parse(eUsuarios[i]);
        if (eUsu == x.Usuario) {
            if (eCont == x.Contraseña) {

                acceso = true;

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
                    FechaDeNacimiento: xFechaNacimiento,
                    Email: xEmail,
                    Usuario: xUsuario,
                    Contraseña: xContraseña,
                    Estado: 1,
                });
                localStorage.setItem("eUsuarios", JSON.stringify(eUsuarios));

                var uActivo = JSON.stringify({
                    Nombres: xNombres,
                    Apellidos: xApellidos,
                    DNI: xDNI,
                    FechaDeNacimiento: xFechaNacimiento,
                    Email: xEmail,
                    Usuario: xUsuario,
                    Contraseña: xContraseña,
                    Estado: 1,
                    ID: i,
                });
                UActivo.push(uActivo);
                localStorage.setItem("UActivo", JSON.stringify(UActivo));
            }
        }
    }
    return acceso;
}

function VerificarDoc(eUsu, eCont) {

    var acceso = false;

    for (var i in eDoctores) {
        var x = JSON.parse(eDoctores[i]);
        if (eUsu == x.Usuario) {
            if (eCont == x.Contraseña) {

                acceso = true;

                var xNombres = x.Nombres;
                var xApellidos = x.Apellidos;
                var xDNI = x.DNI;
                var xFechaNacimiento = x.FechaDeNacimiento;
                var xEmail = x.Email;
                var xUsuario = x.Usuario;
                var xContraseña = x.Contraseña;
                eDoctores[i] = JSON.stringify({
                    Nombres: xNombres,
                    Apellidos: xApellidos,
                    DNI: xDNI,
                    FechaDeNacimiento: xFechaNacimiento,
                    Email: xEmail,
                    Usuario: xUsuario,
                    Contraseña: xContraseña,
                    Estado: 1,
                });
                localStorage.setItem("eDoctores", JSON.stringify(eDoctores));

                var uActivo = JSON.stringify({
                    Nombres: xNombres,
                    Apellidos: xApellidos,
                    DNI: xDNI,
                    FechaDeNacimiento: xFechaNacimiento,
                    Email: xEmail,
                    Usuario: xUsuario,
                    Contraseña: xContraseña,
                    Estado: 1,
                    ID: i,
                });
                UActivo.push(uActivo);
                localStorage.setItem("UActivo", JSON.stringify(UActivo));
            }
        }
    }
    return acceso;
}

function VerificarAdmin(us, cont) {

    $.ajax('https://proyectointegradorcicloiii.firebaseio.com/Admins.json', {
        dataType: 'json',
        contentType: 'application/json',
        cache: false
    }).done(function (respuesta) {
        console.log(respuesta);

        $.each(respuesta, function (index, elemento) {

            if (us == elemento.Usuario) {
                if (cont == elemento.Contraseña) {
                    accesoAdmin = true;

                    var uActivo = JSON.stringify({
                        Nombres: elemento.Nombres,
                        Apellidos: elemento.Apellidos,
                        DNI: elemento.DNI,
                        FechaDeNacimiento: elemento.FecNac,
                        Email: elemento.Email,
                        Usuario: elemento.Usuario,
                        Contraseña: elemento.Contraseña,
                        Estado: 1,
                        ID: elemento.ID,
                    });
                    UActivo.push(uActivo);
                    localStorage.setItem("UActivo", JSON.stringify(UActivo));

                }
            }

        });


    });

    return accesoAdmin;

}

function aux() {

    var doc1 = JSON.stringify({
        Nombres: "Julio",
        Apellidos: 'Fernández',
        DNI: '01011001',
        FechaDeNacimiento: '1985-04-19',
        Email: 'julio.fernandez@example.com',
        Usuario: 'julioF',
        Contraseña: '123',
        Estado: 0,
    });
    eDoctores.push(doc1); // Guardar datos en el array definido globalmente
    localStorage.setItem("eDoctores", JSON.stringify(eDoctores));

    var doc2 = JSON.stringify({
        Nombres: 'Manuel',
        Apellidos: 'Vásquez',
        DNI: '01011010',
        FechaDeNacimiento: '1988-09-21',
        Email: 'manuel.vasquez@example.com',
        Usuario: 'manuelV',
        Contraseña: '123',
        Estado: 0,
    });
    eDoctores.push(doc2); // Guardar datos en el array definido globalmente
    localStorage.setItem("eDoctores", JSON.stringify(eDoctores));

    var doc3 = JSON.stringify({
        Nombres: 'Fleming',
        Apellidos: 'Aponte',
        DNI: '01011001',
        FechaDeNacimiento: '1982-06-13',
        Email: 'fleming.aponte@example.com',
        Usuario: 'flemingA',
        Contraseña: '123',
        Estado: 0,
    });
    eDoctores.push(doc3); // Guardar datos en el array definido globalmente
    localStorage.setItem("eDoctores", JSON.stringify(eDoctores));

}