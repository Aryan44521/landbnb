import { Component } from '@angular/core';
import { CardComponent } from '../../Helpers/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
@Component({
  selector: 'app-farms',
  standalone: true,
  imports: [CardComponent,FormsModule,CommonModule,NavbarComponent],
  templateUrl: './farms.component.html',
  styleUrl: './farms.component.css'
})
export class FarmsComponent {
  places=[ {
    name: 'Nashik',
    country: 'India',
    stars: 4.86,
    cost: 5706,
    image1: 'https://a0.muscache.com/im/pictures/d8d629d7-9307-4b24-a8ae-b01d95e36124.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/d8d629d7-9307-4b24-a8ae-b01d95e36124.jpg?im_w=720',
    index: 0
  },
  {
    name: 'Tarur',
    country: 'India',
    stars: 4.12,
    cost: 22824,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-675108014847583143/original/a40ae4d9-6f8d-45d4-9994-5a004d31bcea.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-675108014847583143/original/a40ae4d9-6f8d-45d4-9994-5a004d31bcea.jpeg?im_w=720',
    index: 1
  },
  {
    name: 'Anjar',
    country: 'India',
    stars: 4.69,
    cost: 21600,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-657011800148868945/original/a1083c29-58e1-4acf-b79d-14da9dad3d26.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-657011800148868945/original/a1083c29-58e1-4acf-b79d-14da9dad3d26.jpeg?im_w=720',
    index: 2
  },
  {
    name: 'Mahableshwar',
    country: 'India',
    stars: 4.4,
    cost: 13694,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-53371625/original/d7e122cd-be64-4e42-b182-02ef3beb352f.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-53371625/original/d7e122cd-be64-4e42-b182-02ef3beb352f.jpeg?im_w=720',
    index: 3
  },
  {
    name: 'Raia',
    country: 'India',
    stars: 4.89,
    cost: 4352,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-49020640/original/6e99ce14-6367-438c-8de6-1ada415f7ce6.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-49020640/original/6e99ce14-6367-438c-8de6-1ada415f7ce6.jpeg?im_w=720',
    index: 4
  },
  {
    name: 'Velhe',
    country: 'Torna-Rajgad',
    stars: 4.88,
    cost: 16649,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-37391116/original/85be0a7f-c5c3-462a-8c3e-36c20ae744ef.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-37391116/original/85be0a7f-c5c3-462a-8c3e-36c20ae744ef.jpeg?im_w=720',
    index: 5
  },
  {
    name: 'Avalas',
    country: 'India',
    stars: 4.86,
    cost: 2967,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-50647280/original/835e0c25-e982-45d7-a185-96ec53c9cf57.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-50647280/original/835e0c25-e982-45d7-a185-96ec53c9cf57.jpeg?im_w=720',
    index: 6
  },
  {
    name: 'Nashik',
    country: 'India',
    stars: 4.9,
    cost: 3309,
    image1: 'https://a0.muscache.com/im/pictures/54569497-8461-431f-853d-13011b0a950a.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/54569497-8461-431f-853d-13011b0a950a.jpg?im_w=720',
    index: 7
  },
  {
    name: 'Varca',
    country: 'India',
    stars: 4.84,
    cost: 6800,
    image1: 'https://a0.muscache.com/im/pictures/ca281249-0530-495f-9cba-e9a20cb39575.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/ca281249-0530-495f-9cba-e9a20cb39575.jpg?im_w=720',
    index: 8
  },
  {
    name: 'Vagator',
    country: 'Anjuna',
    stars: 4.98,
    cost: 14333,
    image1: 'https://a0.muscache.com/im/pictures/ea583252-63e8-4f0d-a65c-cdd6af64d211.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/ea583252-63e8-4f0d-a65c-cdd6af64d211.jpg?im_w=720',
    index: 9
  },
  {
    name: 'Kanakamamidi',
    country: 'India',
    stars: 4.88,
    cost: 10089,
    image1: 'https://a0.muscache.com/im/pictures/41b29ba9-e8fb-4b5c-8c2a-ec38bedf3bf0.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/41b29ba9-e8fb-4b5c-8c2a-ec38bedf3bf0.jpg?im_w=720',
    index: 10
  },
  {
    name: 'Nandi Hills',
    country: 'India',
    stars: 4.81,
    cost: 6744,
    image1: 'https://a0.muscache.com/im/pictures/0a17f6c1-7edc-407f-9f14-85926890d51b.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/0a17f6c1-7edc-407f-9f14-85926890d51b.jpg?im_w=720',
    index: 11
  },
  {
    name: 'Pen',
    country: 'India',
    stars: 4.93,
    cost: 12324,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/5918f741-2cbb-4e49-b18c-f07ad8ca4573.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/5918f741-2cbb-4e49-b18c-f07ad8ca4573.jpeg?im_w=720',
    index: 12
  },
  {
    name: 'Panchgani',
    country: 'India',
    stars: 4.88,
    cost: 6826,
    image1: 'https://a0.muscache.com/im/pictures/e2bdc16c-c581-48a7-92f4-fc9a02eed2e4.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/e2bdc16c-c581-48a7-92f4-fc9a02eed2e4.jpg?im_w=720',
    index: 13
  },
  {
    name: 'Hyderabad',
    country: 'India',
    stars: 4.8,
    cost: 7988,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-26476736/original/41552365-d1c7-414b-b66a-99e4be28e88a.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-26476736/original/41552365-d1c7-414b-b66a-99e4be28e88a.jpeg?im_w=720',
    index: 14
  },
  {
    name: 'Nashik',
    country: 'India',
    stars: 4.86,
    cost: 6405,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-51641768/original/cfebdf3e-395b-46ac-a050-7827f30663cf.png?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-51641768/original/cfebdf3e-395b-46ac-a050-7827f30663cf.png?im_w=720',
    index: 15
  },
  {
    name: 'Salej',
    country: 'India',
    stars: 4.9,
    cost: 10042,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-621253027229299769/original/261aeb00-d67a-4113-9cbd-db655081bae3.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-621253027229299769/original/261aeb00-d67a-4113-9cbd-db655081bae3.jpeg?im_w=720',
    index: 16
  },
  {
    name: 'Karjat',
    country: 'India',
    stars: 4.83,
    cost: 5017,
    image1: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MjIxODI3NDM%3D/original/0464980a-bb7f-41d3-a877-44a9528c2994.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MjIxODI3NDM%3D/original/0464980a-bb7f-41d3-a877-44a9528c2994.jpeg?im_w=720',
    index: 17
  },
  {
    name: 'Chikmagalur',
    country: 'India',
    stars: 4.9,
    cost: 5253,
    image1: 'https://a0.muscache.com/im/pictures/a0543160-3eaa-4cf5-b8d8-4deed327531e.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/a0543160-3eaa-4cf5-b8d8-4deed327531e.jpg?im_w=720',
    index: 18
  },
  {
    name: 'Baindur',
    country: 'India',
    stars: 4.93,
    cost: 8870,
    image1: 'https://a0.muscache.com/im/pictures/e86f80b6-c805-4879-a09a-9656a17bc75b.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/e86f80b6-c805-4879-a09a-9656a17bc75b.jpg?im_w=720',
    index: 19
  },
  {
    name: 'South Goa',
    country: 'India',
    stars: 4.88,
    cost: 8559,
    image1: 'https://a0.muscache.com/im/pictures/acf322a2-1c1e-4436-809a-51f0634bf650.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/acf322a2-1c1e-4436-809a-51f0634bf650.jpg?im_w=720',
    index: 20
  },
  {
    name: 'Panchgani',
    country: 'India',
    stars: 4.89,
    cost: 4685,
    image1: 'https://a0.muscache.com/im/pictures/c55a2969-b6b6-4ce5-a3a1-ebe31836cfdf.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/c55a2969-b6b6-4ce5-a3a1-ebe31836cfdf.jpg?im_w=720',
    index: 21
  },
  {
    name: 'Dahanu',
    country: 'India',
    stars: 4.92,
    cost: 5406,
    image1: 'https://a0.muscache.com/im/pictures/326438d1-2e40-4e48-b722-3aae95141b91.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/326438d1-2e40-4e48-b722-3aae95141b91.jpg?im_w=720',
    index: 22
  }];

}
