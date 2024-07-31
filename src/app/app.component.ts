import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocationComponent } from './actual-location-component/actual-location.component'
import { HeaderComponent } from "./header-component/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LocationComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi Aplicación Angular';
}


