import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // Verifica si el codigo se ejecuta en el navegador y no en el servidor
import { Cliente } from '../model/clientes';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private localStorageKey = 'clientes'; //Aquí es donde se guardaran los clientes
  private isBrowser: boolean; //Variable para saber si se esta navegando o no

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId); //Esto va a detectar si el codigo se está ejecutando en el navegador
  }

  obtenerClientes(): Cliente[] {
    if (!this.isBrowser) return [];
    const data = localStorage.getItem(this.localStorageKey); //Lee los datos guardados, los convierte de texto a lista de objetos y si no hay nada, devuelve una lista vacía
    return data ? JSON.parse(data) : [];
  }

  guardarCliente(cliente: Cliente): void {
    if (!this.isBrowser) return;
    const clientes = this.obtenerClientes(); //Toma un nuevo cliente
    clientes.push(cliente); //Lo agrega a la lista que ya había
    localStorage.setItem(this.localStorageKey, JSON.stringify(clientes)); //Guarda una nueva lista en el localStorage
  }

  eliminarCliente(index: number): void {
    if (!this.isBrowser) return;
    const clientes = this.obtenerClientes();
    clientes.splice(index, 1); //Borra el cliente en la posición indicada
    localStorage.setItem(this.localStorageKey, JSON.stringify(clientes)); //Guarda la lista actualizada en localStorage
  }
}
