window.addEventListener('load', function(){

    $.ajax('../../assets/farmacia/js/informacion.json', {
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
            html += '<a style="width: 70%; float: left;" href="#" class="btn btn-primary" data-id="'+ elemento.ID +'">Detalles</a>';
            html += '<a style="width: 25%; float: right;" href="#" class="btn btn-primary agregar-carrito"><i class="fas fa-cart-plus"></i></a>';
            html += '</div>';
            html += '</div>';
            html += '</div>';

            

            $('#lista-productos').append(html);

        })

    });


});
