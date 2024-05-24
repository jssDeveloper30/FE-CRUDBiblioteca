import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    console.log(this.form)
  }
}


