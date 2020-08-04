var pS = localStorage.getItem("pS"); //Obtener datos de localStorage

pS = JSON.parse(pS); // Covertir a objeto
if (pS === null) { // Si no existe, creamos un array vacio.
    pS = []; // es es un  array
}

var arrayxd = [];

window.addEventListener('load', function () {

    $.ajax('https://proyectointegradorcicloiii.firebaseio.com/Productos.json', {
        dataType: 'json',
        contentType: 'application/json',
        cache: false
    })

        .done(function (respuesta) {
            console.log(respuesta);
            var html;
            arrayxd = respuesta;
            console.log(arrayxd);

            $.each(respuesta, function (index, elemento) {
                var x = JSON.parse(pS[0]);
                if (elemento.ID == x.ID) {
                    html = '<div class="container" style="box-shadow: 0 8px 16px rgba(0, 0, 0, 0.45);">';
                    html += '<div class="row">';
                    html += '<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 no-padding">';
                    html += '<div class="card-img">';
                    html += '<img src="' + elemento.SrcImg + '" style="width: 100%;" alt="">'
                    html += '</div>';
                    html += '</div>';
                    html += '<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 no-padding">';
                    html += '<div class="card-info">';
                    html += '<div class="card-text">';
                    html += '<h2>' + elemento.Mini + '</h2>';
                    html += '<h5>' + elemento.Nombre + '</h5>';
                    html += '<br>';
                    html += '<h4 class="precio"><span class"">' + elemento.Precio + '</span> PEN</h4>';
                    html += '<hr>';

                    if (elemento.Descripcion == null) {
                        if (elemento.Contraindicaciones == null) {
                            if (elemento.Composicion == null) {
                                if (elemento.Advertencia != null) {
                                    html += '<h3>Advertencia</h3>';
                                    html += '<p>' + elemento.Advertencia + '</p>';
                                }
                            } else {
                                html += '<h3>Composición</h3>';
                                html += '<p>' + elemento.Composicion + '</p>';
                            }
                        } else {
                            html += '<h3>Contraindicaciones</h3>';
                            html += '<p>' + elemento.Contraindicaciones + '</p>';
                        }
                    } else {
                        html += '<h3>Descipción</h3>';
                        html += '<p>' + elemento.Descripcion + '</p>';
                    }

                    html += '<hr>';
                    html += '<button style="width: 100%;" data-id="' + elemento.ID + '" class="agregar-carrito2">Agregar al carrito</button>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';

                    $('#lista-productos').append(html);
                }
            })

        });


});

function det() {
    location.href = "/detalles";
}