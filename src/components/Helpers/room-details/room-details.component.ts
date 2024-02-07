import { Component } from '@angular/core';
import { SemiBarComponent } from '../semi-bar/semi-bar.component';

@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [SemiBarComponent],
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.css'
})
export class RoomDetailsComponent {
  image1='https://a0.muscache.com/im/pictures/miso/Hosting-1031554768675775307/original/59532ba1-ad11-40f6-9810-bd945aa4764c.jpeg?im_w=720';
  image2= 'https://a0.muscache.com/im/pictures/miso/Hosting-902874877805496675/original/363fe94d-1726-464b-84eb-6d6b35c5b2a4.jpeg?im_w=720';
}
