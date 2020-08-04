var pS = localStorage.getItem("pS"); //Obtener datos de localStorage

pS = JSON.parse(pS); // Covertir a objeto
if (pS === null) { // Si no existe, creamos un array vacio.
    pS = []; // es es un  array
}

$(document).ready(function () {
	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function () {
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct() {
			$('.product-item').hide();
		} setTimeout(hideProduct, 400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct() {
			$('.product-item[category="' + catProduct + '"]').show();
			$('.product-item[category="' + catProduct + '"]').css('transform', 'scale(1)');
		} setTimeout(showProduct, 400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function () {
		function showAll() {
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll, 400);
	});

	vaciarpS(0, pS.length);

});

function vaciarpS(e, p) {
	pS.splice(e, p); // Args (posición en el array, numero de items a eliminar) https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array
	localStorage.setItem("pS", JSON.stringify(pS));
}