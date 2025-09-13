import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nosotros',
  standalone: false,
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css',
})
export class NosotrosComponent {
  //Variables que guardan los datos que el usuario escribe en el formulario
  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  enviarFormulario() {
    //Método, cuando el usuario pulsa el botón, se muestra el mensaje de exito
    Swal.fire({
      title: 'Formulario Enviado',
      text: 'Tu formulario ha sido enviado correctamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  }
}
