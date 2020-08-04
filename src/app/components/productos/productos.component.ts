import { Component, OnInit } from '@angular/core';
import { JSService } from 'src/app/services/js.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private Scripts: JSService) {
    Scripts.CargaFarmaciaScriptLink2(["https://code.jquery.com/jquery-3.5.1.min"]);
    Scripts.CargaFarmaciaScriptLink(["https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min"],["sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"]);
    Scripts.CargaFarmaciaHeadCSSLink(["https://fonts.googleapis.com/css?family=Roboto:400,500,700,900", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"]);
    Scripts.CargaFarmaciaHeadCSS(["../productos/css/styles", "fontawesome/css/all"]);
    Scripts.CargaFarmaciaScript(["carrito","main"]);
    Scripts.CargaProductoScript(["custom"]);
  }

  ngOnInit(): void {
  }

}
