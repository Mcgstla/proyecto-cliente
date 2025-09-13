import { Router } from '@angular/router';
import { ClientesService } from '../../../service/clientes.service';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Cliente } from 'app/model/clientes';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-clientes',
  standalone: false,
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
})
export class ClientesComponent {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object,
    private clientesService: ClientesService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  isBrowser: boolean = false;

  nombre = ''; //Se guardan los datos del formulario, lo que el usuario escribe
  apellidos = '';
  identificacion = '';
  tipoIdentificacion = '';
  direccion = '';
  cpostal = '';
  pais = '';
  provincia = '';
  municipio = '';
  email = '';
  telefono = '';
  comentarios = '';

  patternIdentificacion: string = ''; //Para verificar el formato del documento

  direccionSeleccionada: number | null = null;

  avisoInfo: boolean = false;

  infoPedido() {
    //Envía un aviso al usuario para que rellene todos los campos
    if (!this.avisoInfo) {
      this.avisoInfo = true;
      Swal.fire({
        icon: 'info',
        text: 'Complete correctamente todos los campos',
      });
    }
  }
  agregarElemento(miFormulario: NgForm) {
    const cliente: Cliente = {
      nombre: this.nombre, //Crea un cliente
      apellidos: this.apellidos,
      identificacion: `${this.tipoIdentificacion} ${this.identificacion}`,
      direccion: this.direccion,
      cpostal: Number(this.cpostal),
      pais: this.pais,
      provincia: this.provincia,
      municipio: this.municipio,
      email: this.email,
      telefono: Number(this.telefono),
      comentarios: this.comentarios,
    };

    this.clientesService.guardarCliente(cliente); //Guarda el cliente
    Swal.fire({
      icon: 'success',
      title: 'Cliente agregado correctamente',
    });

    miFormulario.resetForm(); //Limpia el formulario
  }

  ngOnInit() {
    this.actualizarPattern(); //El método se llama al iniciar el componente y cuando cambiar el tipo de identificacion
  }

  actualizarPattern() {
    switch (this.tipoIdentificacion) {
      case 'DNI':
        this.patternIdentificacion = '^[0-9]{8}[A-Za-z]$'; // 8 números y 1 letra
        break;
      case 'NIE':
        this.patternIdentificacion = '^[XYZ][0-9]{7}[A-Za-z]$'; // Letra inicial, 7 números y 1 letra
        break;
      case 'Pasaporte':
        this.patternIdentificacion = '^[A-Z]{3}[0-9]{6}$'; // 3 letras y 6 números
        break;
      default:
        this.patternIdentificacion = ''; // acepta cualquier cosa si no hay selección
    }
  }
}
