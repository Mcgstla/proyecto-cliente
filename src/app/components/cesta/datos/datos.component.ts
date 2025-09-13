import { Component, Inject, PLATFORM_ID } from '@angular/core'; //Esto determina en qué plataforma se esta ejecutando la aplicación
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente } from '../../../model/clientes';
import { isPlatformBrowser } from '@angular/common'; //Permite saber si la aplicación está siendo ejecutada en el navegador
import { ClientesService } from 'app/service/clientes.service'; //Servicio que maneja la lógica relacionada con los clientes

@Component({
  selector: 'app-datos',
  standalone: false,
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css',
})
export class DatosComponent {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object,
    private clientesService: ClientesService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  isBrowser: boolean = false;
  cliente: Cliente[] = [];
  direccionSeleccionada: number | null = null;

  ngOnInit(): void {
    this.cliente = this.clientesService.obtenerClientes();
  }

  // Método para eliminar un cliente específico
  eliminarCliente(i: number) {
    this.clientesService.eliminarCliente(i);
    this.cliente = this.clientesService.obtenerClientes();

    Swal.fire({
      title: 'Cliente eliminado',
      icon: 'success',
    });
  }

  pago() {
    //Método que se ejecuta cuando el cliente intenta proceder con el pago
    if (this.direccionSeleccionada !== null) {
      this.router.navigate(['/principal/pago']);
    }
  }
}
