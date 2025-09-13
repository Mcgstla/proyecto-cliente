import { Component, OnInit } from '@angular/core';
import { CestaService } from 'app/service/cesta.service';

@Component({
  selector: 'app-cesta',
  standalone: false,
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css',
})
export class CestaComponent implements OnInit {
  cesta: any[] = []; //Almacena los productos que el usuario ha agregado a la cesta
  constructor(private cestaService: CestaService) {} // El servicio es inyectado en el constructor del componente
  ngOnInit(): void {
    this.cestaService.cesta$.subscribe((datos) => {
      //Este método se ejecuta cuando el componente se inizializa, se suscribe al observable cesta$
      this.cesta = datos; // Cuando el servicio emita un nuevo valor, el componente actualiza su propiedad cesta con los datos nuevos
    });
  }

  eliminarProducto(index: number) {
    this.cestaService.eliminarProducto(index); //Métpdp que elimina el producto de la cesta
  }

  get total(): number {
    return this.cesta.reduce((suma, producto) => suma + producto.price, 0); //Calcula el total de los productos de la cesta
  }
}
