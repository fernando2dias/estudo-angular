import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'Fernando Dias';
  userData = {
    email: 'fernando3dias@gmail.com',
    role: 'admin'
  }

  title = 'curso-angular';
}
