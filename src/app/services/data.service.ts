import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  isLogged: boolean;

  info: any = {};
  products: any[] = [];

  constructor(public http: HttpClient) {
    this.cargaLocal();
  }

  public cargaLocal() {
    this.http.get("https://proyectointegradorcicloiii.firebaseio.com/Productos.json")
      .subscribe(data => {
        console.log(data);
        this.info = data;
      });
  }

}
