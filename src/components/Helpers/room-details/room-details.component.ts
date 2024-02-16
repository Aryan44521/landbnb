import { Component } from '@angular/core';
import { SemiBarComponent } from '../semi-bar/semi-bar.component';
import { PopupComponent } from '../popup/popup.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [SemiBarComponent, PopupComponent, FormsModule, CommonModule],
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.css',
})
export class RoomDetailsComponent {
  image1 =
    'https://a0.muscache.com/im/pictures/miso/Hosting-1031554768675775307/original/59532ba1-ad11-40f6-9810-bd945aa4764c.jpeg?im_w=720';
  image2 =
    'https://a0.muscache.com/im/pictures/miso/Hosting-902874877805496675/original/363fe94d-1726-464b-84eb-6d6b35c5b2a4.jpeg?im_w=720';
  reviewText =
    'this listing is exceptional. it is very very well located and matches the description and photos perfectly.We went to Dubai mall or Burj Khalifa on foot in 20 minutes. if you visit Dubai the location is ideal because its a downtown area allowing you to go to different places with ease.the apartment is perfectly equipped, the provision of tea towels in the kitchen would be a plus.we just had a little problem on arrival, there were not the linens for the extra bed but Karolin had them delivered quickly but the flat sheets were missing.i would recommend this listing 1000%';

  pop = false;

  showPop() {
    this.pop = true;
  }

  closePop() {
    this.pop = false;
  }

  reviewList = [
    {
      name: 'Raj',
      reviewText:
        'The place was awesome..had a peaceful sleep and people were so kind andhelpful. Food(Dinner)was yummy and breakfast was so satisfying with pure cow milk chai…I just love chai overthere had two times continuously. Aunty was so cute and Pawan was very helpful and kind boy.100% satisfaction. The only concern was location that was far away to visit white run and other attractive places of Bhuj. Everything was perfect except that. Gonna visit again.',
      response: 'we are very happy to serve you',
    },
    {
      name: 'Natalia',
      reviewText:
        'Stayed for a couple of days at this place. Nestled in the midst of nature with birds andflowers all around, its a peaceful place to sit back and relax and maybe have a sip of wine or two A special mention of Mr Rajesh for his constant attention to our needs, local recommendations and his delicious Poha. There are two friendly dogs to keep company; I wish I had more time to spend here',
      response: '',
    },
    {
      name: 'Ronnie',
      reviewText:
        'this listing is exceptional. it is very very well located and matches the description and photos perfectly.We went to Dubai mall or Burj Khalifa on foot in 20 minutes. if you visit Dubai the location is ideal because its a downtown area allowing you to go to different places with ease.the apartment is perfectly equipped, the provision of tea towels in the kitchen would be a plus.we just had a little problem on arrival, there were not the linens for the extra bed but Karolin had them delivered quickly but the flat sheets were missing.i would recommend this listing 1000%',
      response: 'my pleasure visit us again',
    },
    {
      name: 'Anil',
      reviewText:
        'Wonderful location and even more beautiful views from the balcony. The apartment is in one of the prime location and has view to Burj Khalifa from the balcony. The metro station is not walkable but that was not a concern for me as I mostly made use of taxis which are easily available. The communication from the team was enough and on time.',
      response: '',
    },
    {
      name: 'Susuan',
      reviewText: 'noice',
      response: '',
    },
  ];
}
