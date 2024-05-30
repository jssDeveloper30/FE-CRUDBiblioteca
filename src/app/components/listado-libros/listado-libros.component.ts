import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Libro } from '../../interfaces/libro';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { timeout } from 'rxjs';
import { LibroService } from '../../services/libro.service';
import { error } from 'console';





@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.component.html',
  styleUrl: './listado-libros.component.css'
})
export class ListadoLibrosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['isbn', 'autor', 'titulo', 'fechaPublicacion', 'categoria', 'editorial', 'acciones'];
  dataSource = new MatTableDataSource<Libro>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar, private _libroService:LibroService) {

  }

  ngOnInit(): void {
    this.obtenerLibros();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if(this.dataSource.data.length > 0){
    this.paginator._intl.itemsPerPageLabel = "Libros por página";
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // obtenerLibros(){
  //   this.loading = true;
  //   this._libroService.getLibros().subscribe(data => {
  //     this.loading= false;
  //     this.dataSource.data = data;
  //   }, error => {
  //     this.loading = false;
  //     alert('opps ocurrio un error')
  //   })
  // }

  obtenerLibros(){
    this.loading = true;
    this._libroService.getLibro().subscribe({
      next: (data) => {
        this.loading= false;
        this.dataSource.data = data;
      },
      error: (e) => this.loading= false,
      complete: () => console.info('complete') 
  })
  }

  eliminarLibro(isbn: number) {
    this.loading = true;
    this._libroService.deleteLibro(isbn).subscribe(()=>{
      this.mensajeExito();
      this.loading = false;
      this.obtenerLibros(); 
    })

  }

  mensajeExito(){
    this._snackBar.open('El libro fue eliminado con exito', '', {
      duration: 3000,
      horizontalPosition: 'right'
    });
  }
}
