import { NgModule } from '@angular/core'; //Crea un módulo en Angular
import {
  BrowserModule, //Para que el proyecto funcione en el navegador web
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //Para usar formularios en Angular
import { HttpClient, HttpClientModule } from '@angular/common/http'; //Para que la app se conecte con servidorers por HTTP

import { AppRoutingModule } from './app-routing.module'; //Este archivo es el que maneja las rutas
import { AppComponent } from './app.component'; //Componente principal de la app, lo que contiene todo
import { ProductosComponent } from './components/productos/productos.component'; //Este y el resto de componentes es lo que se importa para que Angular lo reconozca y se pueda usar, este muestra los prodcutos

import { NosotrosComponent } from './components/nosotros/nosotros.component'; //Muestra la información de contacto
import { CestaComponent } from './components/cesta/cesta.component'; //Muestra la cesta de compra
import { DatosComponent } from './components/cesta/datos/datos.component'; //Muestra los datos guardados
import { PrincipalComponent } from './components/principal/principal.component'; //Muestra la página principal
import { NavbarComponent } from './shared/navbar/navbar.component'; //Muestra la barra de navegación
import { ConNavbarComponent } from './layouts/con-navbar/con-navbar.component';
import { SinNavbarComponent } from './layouts/sin-navbar/sin-navbar.component'; //Este y el de arriba muestra con o sin la barra de navegación
import { PagoComponent } from './components/pago/pago.component'; // Muestra la página de pago
import { ClientesComponent } from './components/cesta/clientes/clientes.component'; //Muestra el espacio donde los clientes rellenan sus datos

@NgModule({
  declarations: [
    //Aquí le decimos a Angular  que componentes vamos a usar
    AppComponent,
    ProductosComponent,

    NosotrosComponent,
    CestaComponent,
    DatosComponent,
    PrincipalComponent,
    NavbarComponent,
    ConNavbarComponent,
    SinNavbarComponent,
    PagoComponent,
    ClientesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule], //Aquí le decimos que herramientas externas vamos a necesitar
  providers: [
    //provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
