import { Component } from '@angular/core';
import { CardComponent } from '../../Helpers/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-treehouses',
  standalone: true,
  imports: [CardComponent,FormsModule,CommonModule],
  templateUrl: './treehouses.component.html',
  styleUrl: './treehouses.component.css'
})
export class TreehousesComponent {
  places=[];

}
