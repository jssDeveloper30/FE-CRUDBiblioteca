import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private myAppurl: string = environment.endpoint
  private myApiUrl: string = 'api/Libro/';

  constructor(private http: HttpClient) { }

  getLibro(): Observable<Libro[]>{
    return this.http.get<Libro[]>(`${this.myAppurl}${this.myApiUrl}`);
  }

  getLibros(isbn: number): Observable<Libro>
  {
    return this.http.get<Libro>(`${this.myAppurl}${this.myApiUrl}${isbn}`);
  }

  deleteLibro(isbn: number): Observable<void>
  {
    return this.http.delete<void>(`${this.myAppurl}${this.myApiUrl}${isbn}`)
  }
}
