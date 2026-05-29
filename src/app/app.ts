import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
 
import { ReactiveFormsModule } from '@angular/forms'; // Importación necesaria para formularios
import { RegistroComponent } from './registro/registro'; 
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, 
    ReactiveFormsModule,  
    RegistroComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


 
export class App {
  protected readonly title = signal('Proyecto-Clase-2');
}
