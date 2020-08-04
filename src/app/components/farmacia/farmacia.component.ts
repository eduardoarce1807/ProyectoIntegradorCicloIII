import { Component, OnInit } from '@angular/core';
import { JSService } from 'src/app/services/js.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-farmacia',
  templateUrl: './farmacia.component.html',
  styleUrls: ['./farmacia.component.css']
})
export class FarmaciaComponent implements OnInit {

  productos: String[];

  constructor(private Scripts: JSService, public Data: DataService) {
    Scripts.CargaFarmaciaScriptLink2(["https://code.jquery.com/jquery-3.5.1.min"]);
    Scripts.CargaFarmaciaScript(["carrito","script", "main", "custom"]);
    Scripts.CargaFarmaciaHeadCSS(["estilos","fontawesome/css/all"]);
    Scripts.CargaFarmaciaHeadCSSLink(["https://fonts.googleapis.com/css?family=Poppins","https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"]);
    
    Scripts.CargaFarmaciaScriptLink(["https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min"],["sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"]);
    Scripts.CargaFarmaciaScriptLink(["https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min"],["sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"]);
  
    
  
  }

  ngOnInit(): void {
  }

}
