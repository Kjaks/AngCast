import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocationComponent } from './actual-location/actual-location.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LocationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi Aplicación Angular';
}


