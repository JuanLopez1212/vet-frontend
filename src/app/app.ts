import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './pages/public/layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, RouterModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
}
