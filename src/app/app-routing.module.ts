import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { ListadoLibrosComponent } from './components/listado-libros/listado-libros.component';
import { AgregarEditarLibroComponent } from './components/agregar-editar-libro/agregar-editar-libro.component';
import { VerLibrosComponent } from './components/ver-libros/ver-libros.component';

// Rutas
const routes: Routes = [
  { path: '', redirectTo: 'listLibros', pathMatch: 'full'},
  { path: 'listLibros', component: ListadoLibrosComponent },
  { path: 'agregarLibro', component: AgregarEditarLibroComponent },
  { path: 'verLibro/:isbn', component: VerLibrosComponent },
  { path: 'editarLibro/:isbn', component: AgregarEditarLibroComponent },
  { path: '**', redirectTo: 'listLibros', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
