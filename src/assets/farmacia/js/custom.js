window.addEventListener('load', function(){

    $.ajax('https://proyectointegradorcicloiii.firebaseio.com/Productos.json', {
        dataType: 'json',
        contentType: 'application/json',
        cache: false
    })

    .done(function(respuesta){
        console.log(respuesta);
        var html;

        $.each(respuesta, function(index, elemento){
            html = '<div class="product-item" category="'+ elemento.Categoria +'">';
            html += '<img src="'+ elemento.SrcImg +'">';
            html += '<div class="card-body">';
            html += '<h6 class="mini">'+ elemento.Mini +'</h6>'
            html += '<h5 class="card-title" id="titu">'+ elemento.Nombre +'</h5>';
            html += '<h4 style="font-size: 14pt;" class="precio"><span class="">'+ elemento.Precio +'</span> PEN</h4>';
            html += '<div style="overflow: hidden;">';
            html += '<button style="width: 70%; float: left;" onclick="det()" class="btn btn-dark detallesP" data-id="'+ elemento.ID +'">Detalles</button>';
            html += '<button style="width: 25%; float: right;" class="btn btn-dark agregar-carrito"><i class="fas fa-cart-plus"></i></button>';
            html += '</div>';
            html += '</div>';
            html += '</div>';

            

            $('#lista-productos').append(html);

        })

    });


});

function det(){
    location.href = "/detalles";
}