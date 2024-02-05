import { Component } from '@angular/core';
import { CardComponent } from '../../Helpers/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-historical-homes',
  standalone: true,
  imports: [CardComponent,FormsModule,CommonModule],
  templateUrl: './historical-homes.component.html',
  styleUrl: './historical-homes.component.css'
})
export class HistoricalHomesComponent {
  places=[{
    name: 'Jog Falls',
    country: 'India',
    stars: 4.34,
    cost: 4000,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-666960593239525442/original/75139f74-4b40-44e1-9a0f-45a2677b41f4.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-666960593239525442/original/75139f74-4b40-44e1-9a0f-45a2677b41f4.jpeg?im_w=720',
    index: 0
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 4.93,
    cost: 11298,
    image1: 'https://a0.muscache.com/im/pictures/9e8d088f-54ee-463c-bd77-7a9d32e363de.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/9e8d088f-54ee-463c-bd77-7a9d32e363de.jpg?im_w=720',
    index: 1
  },
  {
    name: 'Agra',
    country: 'India',
    stars: 4.84,
    cost: 4565,
    image1: 'https://a0.muscache.com/im/pictures/b1d41ee1-034a-4ba5-900c-c5261995dc24.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/b1d41ee1-034a-4ba5-900c-c5261995dc24.jpg?im_w=720',
    index: 2
  },
  {
    name: 'Kalwar',
    country: 'India',
    stars: 4.51,
    cost: 90000,
    image1: 'https://a0.muscache.com/im/pictures/f928f26f-f9af-4f2e-aad3-5de5ee3950a8.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/f928f26f-f9af-4f2e-aad3-5de5ee3950a8.jpg?im_w=720',
    index: 3
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 4.84,
    cost: 51639,
    image1: 'https://a0.muscache.com/im/pictures/01e13f3f-b1ae-4d74-a6a2-92330210e535.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/01e13f3f-b1ae-4d74-a6a2-92330210e535.jpg?im_w=720',
    index: 4
  },
  {
    name: 'Dharampur',
    country: 'India',
    stars: 4.75,
    cost: 34235,
    image1: 'https://a0.muscache.com/im/pictures/e1ca45f2-eefe-4451-98e7-cdd179bac124.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/e1ca45f2-eefe-4451-98e7-cdd179bac124.jpg?im_w=720',
    index: 5
  },
  {
    name: 'Patan',
    country: 'India',
    stars: 4.11,
    cost: 11997,
    image1: 'https://a0.muscache.com/im/pictures/68d526f5-dce2-4a9e-ac74-81c48704f024.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/68d526f5-dce2-4a9e-ac74-81c48704f024.jpg?im_w=720',
    index: 6
  },
  {
    name: 'Village Kalakho (Area Kandoli)',
    country: 'India',
    stars: 4.83,
    cost: 9500,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-21446503/original/e5c3be57-eac4-485c-97fa-5d3aee97f61c.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-21446503/original/e5c3be57-eac4-485c-97fa-5d3aee97f61c.jpeg?im_w=720',
    index: 7
  },
  {
    name: 'Mandawa',
    country: 'India',
    stars: 4.7,
    cost: 5999,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-22499756/original/63f9dba8-55ac-4154-adbc-ae4770cfc0e8.png?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-22499756/original/63f9dba8-55ac-4154-adbc-ae4770cfc0e8.png?im_w=720',
    index: 8
  },
  {
    name: 'Kalwar',
    country: 'India',
    stars: 4.21,
    cost: 13600,
    image1: 'https://a0.muscache.com/im/pictures/9c7891e5-50d9-4ca8-a85a-d2a22b604a9a.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/9c7891e5-50d9-4ca8-a85a-d2a22b604a9a.jpg?im_w=720',
    index: 9
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 4.47,
    cost: 4008,
    image1: 'https://a0.muscache.com/im/pictures/1a26a6ee-8313-41f3-bf38-f9825bf142ea.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/1a26a6ee-8313-41f3-bf38-f9825bf142ea.jpg?im_w=720',
    index: 10
  },
  {
    name: 'Baldeyan',
    country: 'India',
    stars: 4.59,
    cost: 13693,
    image1: 'https://a0.muscache.com/im/pictures/e20b53e8-3ef7-449f-91f5-cf26eff193ad.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/e20b53e8-3ef7-449f-91f5-cf26eff193ad.jpg?im_w=720',
    index: 11
  },
  {
    name: 'Shimla',
    country: 'India',
    stars: 4.93,
    cost: 9129,
    image1: 'https://a0.muscache.com/im/pictures/541eb105-b820-4a89-b293-5746177d78ae.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/541eb105-b820-4a89-b293-5746177d78ae.jpg?im_w=720',
    index: 12
  },
  {
    name: 'Sohna',
    country: 'India',
    stars: 5,
    cost: 48636,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-22911643/original/de378162-8681-4edb-af9b-60bf68a0a216.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-22911643/original/de378162-8681-4edb-af9b-60bf68a0a216.jpeg?im_w=720',
    index: 13
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 4.82,
    cost: 4564,
    image1: 'https://a0.muscache.com/im/pictures/7dd1525c-77af-41e3-b22e-3c16d483ba69.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/7dd1525c-77af-41e3-b22e-3c16d483ba69.jpg?im_w=720',
    index: 14
  },
  {
    name: 'Sohna',
    country: 'India',
    stars: 4.77,
    cost: 22367,
    image1: 'https://a0.muscache.com/im/pictures/aa5e1548-9cf8-476c-82c1-18fb9be860ee.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/aa5e1548-9cf8-476c-82c1-18fb9be860ee.jpg?im_w=720',
    index: 15
  },
  {
    name: 'Makka Wala',
    country: 'India',
    stars: 4.92,
    cost: 7075,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-825885303692855435/original/6efe6791-bc8a-4fb2-8c49-39f28e04fc74.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-825885303692855435/original/6efe6791-bc8a-4fb2-8c49-39f28e04fc74.jpeg?im_w=720',
    index: 16
  },
  {
    name: 'Delhi',
    country: 'India',
    stars: 4.95,
    cost: 2639,
    image1: 'https://a0.muscache.com/im/pictures/6fadeaa5-f431-4eb2-91db-caca1c52e7fa.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/6fadeaa5-f431-4eb2-91db-caca1c52e7fa.jpg?im_w=720',
    index: 17
  },
  {
    name: 'Mussoorie',
    country: 'India',
    stars: 4.94,
    cost: 22852,
    image1: 'https://a0.muscache.com/im/pictures/27517139-a789-43f8-9c0c-3afc18087f7c.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/27517139-a789-43f8-9c0c-3afc18087f7c.jpg?im_w=720',
    index: 18
  },
  {
    name: 'Danta',
    country: 'India',
    stars: 4.21,
    cost: 6000,
    image1: 'https://a0.muscache.com/im/pictures/2c95c3f6-d156-4e8b-8d13-374e851934be.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/2c95c3f6-d156-4e8b-8d13-374e851934be.jpg?im_w=720',
    index: 19
  },
  {
    name: 'Agra',
    country: 'India',
    stars: 4.97,
    cost: 2999,
    image1: 'https://a0.muscache.com/im/pictures/87dde953-9d05-4038-b3b4-787aedcf2ea3.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/87dde953-9d05-4038-b3b4-787aedcf2ea3.jpg?im_w=720',
    index: 20
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 4.9,
    cost: 12500,
    image1: 'https://a0.muscache.com/im/pictures/cabc5a0c-5659-438d-ba0b-4ac1f08f9dca.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/cabc5a0c-5659-438d-ba0b-4ac1f08f9dca.jpg?im_w=720',
    index: 21
  },
  {
    name: 'Dharampur',
    country: 'India',
    stars: 5,
    cost: 32947,
    image1: 'https://a0.muscache.com/im/pictures/1a34812c-66d9-4dfc-b45d-7b8b2fa91441.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/1a34812c-66d9-4dfc-b45d-7b8b2fa91441.jpg?im_w=720',
    index: 22
  },
  {
    name: 'Mussoorie',
    country: 'India',
    stars: 4.47,
    cost: 47347,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-23601071/original/43483220-8d79-4391-8959-6ada72991b4a.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-23601071/original/43483220-8d79-4391-8959-6ada72991b4a.jpeg?im_w=720',
    index: 23
  },
  {
    name: 'New Delhi',
    country: 'India',
    stars: 4.95,
    cost: 7406,
    image1: 'https://a0.muscache.com/im/pictures/c42e18f9-30e2-4a46-bfd9-01f9090cb28d.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/c42e18f9-30e2-4a46-bfd9-01f9090cb28d.jpg?im_w=720',
    index: 24
  },
  {
    name: 'Shimla',
    country: 'India',
    stars: 4.52,
    cost: 10954,
    image1: 'https://a0.muscache.com/im/pictures/61b3d6a6-aed0-4eee-85b6-ae613260026c.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/61b3d6a6-aed0-4eee-85b6-ae613260026c.jpg?im_w=720',
    index: 25
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 5,
    cost: 8280,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-806985065508670955/original/07db9a67-beb9-4459-ad4e-27e0b1b88d8c.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-806985065508670955/original/07db9a67-beb9-4459-ad4e-27e0b1b88d8c.jpeg?im_w=720',
    index: 26
  },
  {
    name: 'Lotwara',
    country: 'India',
    stars: 4.42,
    cost: 7304,
    image1: 'https://a0.muscache.com/im/pictures/8a944e2a-1dff-4dea-ac77-42bc426028c7.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/8a944e2a-1dff-4dea-ac77-42bc426028c7.jpg?im_w=720',
    index: 27
  },
  {
    name: 'Shimla',
    country: 'India',
    stars: 5,
    cost: 18487,
    image1: 'https://a0.muscache.com/im/pictures/42b3a398-0b77-4489-aa92-de75f65bd854.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/42b3a398-0b77-4489-aa92-de75f65bd854.jpg?im_w=720',
    index: 28
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 5,
    cost: 4508,
    image1: 'https://a0.muscache.com/im/pictures/432cfe24-70f0-4d8d-b40d-2730461dfd40.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/432cfe24-70f0-4d8d-b40d-2730461dfd40.jpg?im_w=720',
    index: 29
  },
  {
    name: 'Agra',
    country: 'India',
    stars: 4.88,
    cost: 3699,
    image1: 'https://a0.muscache.com/im/pictures/51a15dde-eacf-47d4-b6d0-21f53d13dfdd.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/51a15dde-eacf-47d4-b6d0-21f53d13dfdd.jpg?im_w=720',
    index: 30
  },
  {
    name: 'Sanauli',
    country: 'India',
    stars: 4.66,
    cost: 5144,
    image1: 'https://a0.muscache.com/im/pictures/7be34553-d4a6-4fde-9c91-575d12b3aa3f.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/7be34553-d4a6-4fde-9c91-575d12b3aa3f.jpg?im_w=720',
    index: 31
  },
  {
    name: 'Kasauli',
    country: 'India',
    stars: 4.71,
    cost: 35450,
    image1: 'https://a0.muscache.com/im/pictures/21ecfd56-93d5-4731-8257-57d2b9b2d125.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/21ecfd56-93d5-4731-8257-57d2b9b2d125.jpg?im_w=720',
    index: 32
  },
  {
    name: 'New Delhi',
    country: 'India',
    stars: 5,
    cost: 7406,
    image1: 'https://a0.muscache.com/im/pictures/2cd1e2b4-ba65-4525-a966-fced59cd2b14.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/2cd1e2b4-ba65-4525-a966-fced59cd2b14.jpg?im_w=720',
    index: 33
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 4.96,
    cost: 2700,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-46252804/original/4f385806-f389-4d92-b07d-ce5e830b4be0.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-46252804/original/4f385806-f389-4d92-b07d-ce5e830b4be0.jpeg?im_w=720',
    index: 34
  },
  {
    name: 'Makka Wala',
    country: 'India',
    stars: 5,
    cost: 8445,
    image1: 'https://a0.muscache.com/im/pictures/bdd5d208-f8fd-475f-a01e-109752a546dd.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/bdd5d208-f8fd-475f-a01e-109752a546dd.jpg?im_w=720',
    index: 35
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 4.4,
    cost: 3438,
    image1: 'https://a0.muscache.com/im/pictures/cd3761f9-6730-4a5d-913c-4f2a4c20e742.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/cd3761f9-6730-4a5d-913c-4f2a4c20e742.jpg?im_w=720',
    index: 36
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 4.22,
    cost: 4008,
    image1: 'https://a0.muscache.com/im/pictures/cb86270b-6cac-4cd1-b6aa-955dfb11d5aa.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/cb86270b-6cac-4cd1-b6aa-955dfb11d5aa.jpg?im_w=720',
    index: 37
  },
  {
    name: 'New Delhi',
    country: 'India',
    stars: 4.88,
    cost: 3857,
    image1: 'https://a0.muscache.com/im/pictures/cde8fb8c-1269-47ee-b941-45e73530ac75.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/cde8fb8c-1269-47ee-b941-45e73530ac75.jpg?im_w=720',
    index: 38
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 4.79,
    cost: 4564,
    image1: 'https://a0.muscache.com/im/pictures/d9bc142c-6028-4d50-a884-a752e5a79490.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/d9bc142c-6028-4d50-a884-a752e5a79490.jpg?im_w=720',
    index: 39
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 4.78,
    cost: 3422,
    image1: 'https://a0.muscache.com/im/pictures/454710cc-6052-4669-9019-d347e87d9a26.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/454710cc-6052-4669-9019-d347e87d9a26.jpg?im_w=720',
    index: 40
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 4.83,
    cost: 7988,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-848521969968742794/original/d144ae98-5879-4f4a-a211-7067de022af2.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-848521969968742794/original/d144ae98-5879-4f4a-a211-7067de022af2.jpeg?im_w=720',
    index: 41
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 4.41,
    cost: 1710,
    image1: 'https://a0.muscache.com/im/pictures/95ad156d-b88d-48fc-950e-5b2a03daeb4e.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/95ad156d-b88d-48fc-950e-5b2a03daeb4e.jpg?im_w=720',
    index: 42
  },
  {
    name: 'Bhangarh',
    country: 'India',
    stars: 4.89,
    cost: 3438,
    image1: 'https://a0.muscache.com/im/pictures/e6dd8466-72ac-46c8-a3d8-8d7c7d403ccf.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/e6dd8466-72ac-46c8-a3d8-8d7c7d403ccf.jpg?im_w=720',
    index: 43
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 5,
    cost: 7418,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-589387123735807627/original/43cbf23b-25a2-46c6-b798-b4e00d8f54f8.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-589387123735807627/original/43cbf23b-25a2-46c6-b798-b4e00d8f54f8.jpeg?im_w=720',
    index: 44
  },
  {
    name: 'Agra',
    country: 'India',
    stars: 5,
    cost: 1141,
    image1: 'https://a0.muscache.com/im/pictures/dbea5178-96b2-44da-864e-975267258e72.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/dbea5178-96b2-44da-864e-975267258e72.jpg?im_w=720',
    index: 45
  },
  {
    name: 'Mussoorie,',
    country: 'India',
    stars: 5,
    cost: 17118,
    image1: 'https://a0.muscache.com/im/pictures/3f8ad9b9-b04a-4832-a752-df1ff013e54c.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/3f8ad9b9-b04a-4832-a752-df1ff013e54c.jpg?im_w=720',
    index: 46
  },
  {
    name: 'Agra',
    country: 'India',
    stars: 4.93,
    cost: 3999,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-5993659/original/0db7aa63-b085-42dc-8f4f-693c7c1ef3bd.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-5993659/original/0db7aa63-b085-42dc-8f4f-693c7c1ef3bd.jpeg?im_w=720',
    index: 47
  },
  {
    name: 'Natata',
    country: 'India',
    stars: 5,
    cost: 9500,
    image1: 'https://a0.muscache.com/im/pictures/49383668-6a00-41f0-9390-d655dd00f984.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/49383668-6a00-41f0-9390-d655dd00f984.jpg?im_w=720',
    index: 48
  },
  {
    name: 'Mandawa',
    country: 'India',
    stars: 4.36,
    cost: 19000,
    image1: 'https://a0.muscache.com/im/pictures/5e36d56d-0036-4e58-82fb-d944955549a4.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/5e36d56d-0036-4e58-82fb-d944955549a4.jpg?im_w=720',
    index: 49
  },
  {
    name: 'New Delhi',
    country: 'India',
    stars: 4.82,
    cost: 7406,
    image1: 'https://a0.muscache.com/im/pictures/0f62ca25-4738-448a-8e99-d43e6a2ffdb8.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/0f62ca25-4738-448a-8e99-d43e6a2ffdb8.jpg?im_w=720',
    index: 50
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 5,
    cost: 9500,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-17043997/original/ad24fae4-96d2-40f6-9590-2e7fd70345f2.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-17043997/original/ad24fae4-96d2-40f6-9590-2e7fd70345f2.jpeg?im_w=720',
    index: 51
  },
  {
    name: 'Marwa',
    country: 'India',
    stars: 5,
    cost: 5706,
    image1: 'https://a0.muscache.com/im/pictures/68047fb5-6262-43a0-947f-b9f6eaf6f765.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/68047fb5-6262-43a0-947f-b9f6eaf6f765.jpg?im_w=720',
    index: 52
  },
  {
    name: 'Agra',
    country: 'India',
    stars: 4.93,
    cost: 4500,
    image1: 'https://a0.muscache.com/im/pictures/ee834519-876b-4902-a4de-08cb3abcf697.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/ee834519-876b-4902-a4de-08cb3abcf697.jpg?im_w=720',
    index: 53
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 4.31,
    cost: 3438,
    image1: 'https://a0.muscache.com/im/pictures/d4fb5357-80f6-46c9-84e6-deda67fdfbcc.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/d4fb5357-80f6-46c9-84e6-deda67fdfbcc.jpg?im_w=720',
    index: 54
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 4.59,
    cost: 32866,
    image1: 'https://a0.muscache.com/im/pictures/90e33745-a3e5-479f-b66b-dfb25557be11.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/90e33745-a3e5-479f-b66b-dfb25557be11.jpg?im_w=720',
    index: 55
  },
  {
    name: 'Ramgarh Shekhawati',
    country: 'India',
    stars: 4.42,
    cost: 12500,
    image1: 'https://a0.muscache.com/im/pictures/76dc4605-fe64-4f38-8cba-47996b7266a3.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/76dc4605-fe64-4f38-8cba-47996b7266a3.jpg?im_w=720',
    index: 56
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 4.52,
    cost: 1369,
    image1: 'https://a0.muscache.com/im/pictures/8855c32e-12df-4bf7-9f94-a410689437b8.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/8855c32e-12df-4bf7-9f94-a410689437b8.jpg?im_w=720',
    index: 57
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 4.15,
    cost: 9700,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-51384332/original/75ad724c-195d-4802-8fed-a9a48ea8588a.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-51384332/original/75ad724c-195d-4802-8fed-a9a48ea8588a.jpeg?im_w=720',
    index: 58
  },
  {
    name: 'Jaipur',
    country: 'India',
    stars: 4.42,
    cost: 9500,
    image1: 'https://a0.muscache.com/im/pictures/3531a462-20f4-401d-8a3b-c7ad15d071ce.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/3531a462-20f4-401d-8a3b-c7ad15d071ce.jpg?im_w=720',
    index: 59
  }];

}
