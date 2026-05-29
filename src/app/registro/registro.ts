import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
import { CommonModule } from '@angular/common'; // <--- para q no joda el warnig
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule
  ],
  templateUrl: './registro.html', 
  styleUrl: './registro.css'
})

//El CLI no genera el formato x.component.sarasa como dice el apunte
export class RegistroComponent {
  formulario: FormGroup;
  enviado = false;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['']
    });
  }
 // a ver est de  la lista de errores para el *ngFor
  obtenerErroresNombre(): string[] {
    const errores: string[] = [];
    const control = this.formulario.get('nombre');
    if (control?.errors?.['required']) errores.push('El nombre es obligatorio.');
    if (control?.errors?.['minlength']) errores.push('Debe tener al menos 3 caracteres.');
    return errores;
  }

  obtenerErroresEmail(): string[] {
    const errores: string[] = [];
    const control = this.formulario.get('email');
    if (control?.errors?.['required']) errores.push('El email es obligatorio.');
    if (control?.errors?.['email']) errores.push('El formato de email no es válido.');
    return errores;
  }

  
  enviar() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      this.enviado = true;
      this.formulario.reset();
    }
  }
}