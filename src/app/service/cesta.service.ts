import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; //Esto hace que si el contenido cambia, otros componentes pueden reaccionar

@Injectable({
  providedIn: 'root',
})
export class CestaService {
  private cesta = new BehaviorSubject<any[]>(this.obtenerCestaLocal()); //En cesta se va a guardar la lista de productos en memoria
  cesta$ = this.cesta.asObservable(); //  Observable por si la cesta cambia

  private obtenerCestaLocal(): any[] {
    const guardada = localStorage.getItem('cesta'); //Busca en el local si hay una cesta guardada
    return guardada ? JSON.parse(guardada) : []; // Si la hay la convierte de tezto a array, sino devuelve una lista vacía
  }

  private actualizarStorage(cesta: any[]) {
    localStorage.setItem('cesta', JSON.stringify(cesta)); //Convierte la cesta en texto y la guarda en el local
  }

  agregarProducto(producto: any) {
    const actual = this.cesta.value; // Obtiene el valor de la cesta actual
    const nuevaCesta = [...actual, producto]; //Agrega el producto nuevo
    this.cesta.next(nuevaCesta); //Actualiza la cesta
    this.actualizarStorage(nuevaCesta); //La guarda en memoria y en el navegador
  }

  eliminarProducto(index: number) {
    const actual = this.cesta.value;
    actual.splice(index, 1); //Elimina el producto según su posición
    this.cesta.next([...actual]); //Actualiza la lista
    this.actualizarStorage(actual); //Actualiza, variable y almacenamiento
  }
  //Borra los productos del carrito
  limpiarCesta() {
    this.cesta.next([]);
    this.actualizarStorage([]);
  }
}
