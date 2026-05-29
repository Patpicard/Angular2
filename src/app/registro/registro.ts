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

  enviar() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      this.enviado = true;
      this.formulario.reset();
    }
  }
}