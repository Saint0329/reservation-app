import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavberComponent } from "./common/navber/navber.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavberComponent]
})
export class AppComponent {
  title = 'reservation-app';
}
