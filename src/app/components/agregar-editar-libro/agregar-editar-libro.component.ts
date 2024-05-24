import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Libro } from '../../interfaces/libro';

@Component({
  selector: 'app-agregar-editar-libro',
  templateUrl: './agregar-editar-libro.component.html',
  styleUrl: './agregar-editar-libro.component.css'
})
export class AgregarEditarLibroComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      isbn:['', Validators.required],
      autor:['', Validators.required],
      titulo:['', Validators.required],
      fechaPublicacion:['', Validators.required],
      categoria:['', Validators.required],
      editorial:['', Validators.required]
    })
  }

  ngOnInit(): void { 
  }
  
  agregarLibro(){
    // const isbn = this.form.get('isbn')?.value;
    const isbn = this.form.value.isbn;

    const libro: Libro = {
      isbn:this.form.value.isbn,
      autor: this.form.value.autor,
      titulo: this.form.value.titulo,
      fechaPublicacion: this.form.value.fechaPublicacion,
      categoria: this.form.value.categoria,
      editorial: this.form.value.editorial
    }
    console.log(libro)
  }
}


