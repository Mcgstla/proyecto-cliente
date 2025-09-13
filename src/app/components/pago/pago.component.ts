import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  standalone: false,
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.css',
})
export class PagoComponent {
  constructor(private router: Router) {} //Se inyecta para poder usarlo dentro de este componente y cambiar de página sin recargar

  volver() {
    this.router.navigate(['/productos']); //Función que lleva al usuario a la ruta de productos
  }
}
