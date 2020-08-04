import { Component, OnInit } from '@angular/core';
import { JSService } from 'src/app/services/js.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private Scripts: JSService) {
    Scripts.CargaFarmaciaHeadCSS(["estilos","fontawesome/css/all"]);
    Scripts.CargaFarmaciaHeadCSSLink(["https://fonts.googleapis.com/css?family=Poppins","https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"]);
    Scripts.CargaFarmaciaScriptLink(["https://code.jquery.com/jquery-3.5.1.slim.min"],["sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"]);
    Scripts.CargaFarmaciaScript(["carrito","compra"]);
    Scripts.CargaFarmaciaScriptLink(["https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min"],["sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"]);
    Scripts.CargaFarmaciaScriptLink(["https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min"],["sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"]);
    
  }

  ngOnInit(): void {
  }

}
