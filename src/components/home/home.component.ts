import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardComponent } from '../Helpers/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DisplayUrlComponent } from '../Helpers/display-url/display-url.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    CardComponent,
    FormsModule,
    CommonModule,
    DisplayUrlComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  

  
}
