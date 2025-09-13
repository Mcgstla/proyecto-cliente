import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { CestaComponent } from './components/cesta/cesta.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { DatosComponent } from './components/cesta/datos/datos.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ConNavbarComponent } from './layouts/con-navbar/con-navbar.component';
import { SinNavbarComponent } from './layouts/sin-navbar/sin-navbar.component';
import { PagoComponent } from './components/pago/pago.component';
import { ClientesComponent } from './components/cesta/clientes/clientes.component';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' }, //Ruta raíz vacía, redirige a la página principal

  {
    path: 'principal',
    component: SinNavbarComponent,
    children: [
      { path: '', component: PrincipalComponent },
      { path: 'pago', component: PagoComponent },
    ],
  }, //Rutas que se tienen que mostrar sin barra de navegación

  {
    path: '',
    component: ConNavbarComponent,
    children: [
      { path: 'productos', component: ProductosComponent },
      { path: 'cesta', component: CestaComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'datos', component: DatosComponent },
      { path: 'clientes', component: ClientesComponent },
    ],
  }, //Rutas que se tienen que mostrar con la barra de navegación

  { path: '**', redirectTo: '/principal' }, //Si escribimos una ruta que no existe, angular nos manda a la principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
