import { Component, OnInit } from '@angular/core';

import { ProductosService } from 'app/service/productos.service'; // Esta importacion es el servicio que obtiene los productos
import Swal from 'sweetalert2'; //Importación para mostrar ventanas de alerta
import { Router } from '@angular/router'; //Importacion del router para navegar a otras páginas
import { CestaService } from 'app/service/cesta.service'; //Servicio de la cesta

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent implements OnInit {
  productos: any[] = []; // Aquí se guardará la lista de productos que se van a mostrar

  constructor(
    private productosService: ProductosService, //Este constructor inyecta los servicio de productos para obtener los productos de la API
    private cestaService: CestaService, // Servicio para añadir productos a la cesta
    private router: Router //Para navegar a otras rutas
  ) {}

  ngOnInit(): void {
    //Método que se ejecuta automáticamente cuando se inicia el componente, llama a cargarProductos para obtener los productos
    this.cargarProductos();
  }

  // Este método es para cargar los productos desde el servicio
  cargarProductos() {
    this.productosService.obtenerProductos().subscribe(
      (data) => {
        //Llama al servicio
        if (data && data.products) {
          //Si existe respuesta y tiene el campo llamado products
          this.productos = data.products; //Guarda los productos recibidos en esa variable
        } else {
          console.error('No se encontraron productos en la respuesta'); // Si no hay productos muestra el error
        }
      },
      (error) => {
        console.error('Error al obtener productos:', error); // Manejo de errores
        Swal.fire('Error al cargar productos');
      }
    );
  }

  agregarAlCarrito(producto: any) {
    this.cestaService.agregarProducto(producto); // Método que cuando hace clic en añadir a la cesta, llama al servicio de cesta para añadir el producto
    Swal.fire('Producto añadido a la cesta'); //Alerta que dice que se ha añadido
  }
}
