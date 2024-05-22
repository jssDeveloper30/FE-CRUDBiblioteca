import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Libro } from '../../interfaces/libro';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



const listLibros: Libro[] = [
  {isbn: 9786070784811, autor: "Julio Verne", titulo:"Viaje al centro de la tierra", fechaPublicacion:"25/11/1864", categoria:"Aventura y ciencia ficcion", editorial:"Hetzel"},
  {isbn: 7515, autor: "Julio Verne", titulo:"Godzilla 2000", fechaPublicacion:"1997-11-11", categoria:"Aventura y ciencia ficcion", editorial:"Hetzel"},
  {isbn: 141411, autor: "Julio Verne", titulo:"Viaje al centro de la tierra", fechaPublicacion:"25/11/1864", categoria:"Aventura y ciencia ficcion", editorial:"Hetzel"},
  {isbn: 336561, autor: "Julio Verne", titulo:"Viaje al centro de la tierra", fechaPublicacion:"25/11/1864", categoria:"Aventura y ciencia ficcion", editorial:"Hetzel"},
  {isbn: 457457, autor: "Julio Verne", titulo:"Viaje al centro de la tierra", fechaPublicacion:"25/11/1864", categoria:"Aventura y ciencia ficcion", editorial:"Hetzel"},
  {isbn: 23564, autor: "Julio Verne", titulo:"Viaje al centro de la tierra", fechaPublicacion:"25/11/1864", categoria:"Aventura y ciencia ficcion", editorial:"Hetzel"},
  {isbn: 56784566, autor: "Julio Verne", titulo:"Viaje al centro de la tierra", fechaPublicacion:"25/11/1864", categoria:"Aventura y ciencia ficcion", editorial:"Hetzel"},
  {isbn: 5643747, autor: "Julio Verne", titulo:"Viaje al centro de la tierra", fechaPublicacion:"25/11/1864", categoria:"Aventura y ciencia ficcion", editorial:"Hetzel"},
  {isbn: 68999, autor: "Julio Verne", titulo:"Viaje al centro de la tierra", fechaPublicacion:"25/11/1864", categoria:"Aventura y ciencia ficcion", editorial:"Hetzel"}
];

@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.component.html',
  styleUrl: './listado-libros.component.css'
})
export class ListadoLibrosComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['isbn', 'autor','titulo','fechaPublicacion','categoria','editorial','acciones'];
  dataSource = new MatTableDataSource<Libro>(listLibros);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(){}
  ngOnInit():void{
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel="Libros por página";
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
