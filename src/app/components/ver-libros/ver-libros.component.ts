import { Component, OnDestroy, OnInit } from '@angular/core';
import { LibroService } from '../../services/libro.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, first } from 'rxjs';
import { Libro } from '../../interfaces/libro';

@Component({
  selector: 'app-ver-libros',
  templateUrl: './ver-libros.component.html',
  styleUrl: './ver-libros.component.css'
})
export class VerLibrosComponent implements OnInit, OnDestroy{
  isbn!: number;
  libro!: Libro;
  loading: boolean = false;

  routeSub!: Subscription;

  // libro$!: Observable<Libro> -- PIPE ASYNC

  constructor(private _libroService:LibroService, private aRoute: ActivatedRoute){
   this.isbn = parseInt(this.aRoute.snapshot.paramMap.get('isbn')!); // una opcion para obtener el id por ruta
  }

  ngOnInit(): void {
    // this.libro$ = this._libroService.getLibros(this.isbn); -- PIPE ASYNC
    // this.routeSub = this.aRoute.params.subscribe(data=>{
    // this.isbn = data['isbn'];
    
    // })
    this.obtenerLibro();
  }

  ngOnDestroy(): void {
    // this.routeSub.unsubscribe()
  }

  obtenerLibro(){
    this.loading = true;
    this._libroService.getLibros(this.isbn).subscribe(data =>{
      this.libro = data;
      this.loading = false;
      // next: (data) => {
      //   this.dataSource.data = data;
      // },
      // error: (e) => e,
      // complete: () => console.info('complete') 
  })
  }
}
