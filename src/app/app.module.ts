import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

//Modulos
import { SharedModule } from './shared/shared.module';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarLibroComponent } from './components/agregar-editar-libro/agregar-editar-libro.component';
import { ListadoLibrosComponent } from './components/listado-libros/listado-libros.component';
import { VerLibrosComponent } from './components/ver-libros/ver-libros.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';





@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarLibroComponent,
    ListadoLibrosComponent,
    VerLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
