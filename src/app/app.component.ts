import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DataBind';
  contador: number = 0;

  decrementar(): void {
    this.contador--;
  }

  incrementar(): void {
    this.contador++;
  }

  limpar(): void {
    this.contador = 0
  }
}


