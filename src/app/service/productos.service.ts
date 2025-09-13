import { Injectable } from '@angular/core'; //Esto es para que este archivo se pueda usar como servicio en otras partes de la app
import { HttpClient } from '@angular/common/http'; //Importa la herramienta que nos deja hacer peticiones HHTP
import { Observable } from 'rxjs'; //Esto espera a que lleguen los datos desde la API

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  //Se crea la variable privada para la url de la API
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  //Creamos el método para obtener los productos, devuelve un observable para recibir los datos cuando esten listos
  obtenerProductos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
