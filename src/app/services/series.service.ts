import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  // Inyecto el HttpClient
  private http = inject(HttpClient);
  
  // La URL de la API
  private url = 'https://peticiones.online/api/series';

  // Metodo para pedir todas las series de la API
  getAll(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  // Metodo para crear una serie nueva en la API
  create(serie: any): Observable<any> {
    return this.http.post<any>(this.url, serie);
  }
}
