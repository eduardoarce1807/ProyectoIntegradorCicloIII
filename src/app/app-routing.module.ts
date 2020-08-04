import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MedicorpComponent } from './components/medicorp/medicorp.component';
import { LoginGuard } from './guards/login.guard';
import { FarmaciaComponent } from './components/farmacia/farmacia.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  //demas rutas
  {
    path: 'medicorp',
    component: MedicorpComponent
  },
  {
    path: 'farmacia',
    component: FarmaciaComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  {
    path: 'detalles',
    component: ProductosComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
