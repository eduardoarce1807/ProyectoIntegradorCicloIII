import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//servicios
import { DataService } from './services/data.service';
import {JSService} from './services/js.service';

import { LoginGuard } from './guards/login.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MedicorpComponent } from './components/medicorp/medicorp.component';
import { FarmaciaComponent } from './components/farmacia/farmacia.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductosComponent } from './components/productos/productos.component';
import { UsuariosComponent } from './components/dashboard/usuarios/usuarios.component';
import { TopbarComponent } from './components/dashboard/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MedicorpComponent,
    FarmaciaComponent,
    CarritoComponent,
    ProductosComponent,
    UsuariosComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    JSService,
    DataService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
