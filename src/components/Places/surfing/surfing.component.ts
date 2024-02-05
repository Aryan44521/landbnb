import { Component } from '@angular/core';
import { CardComponent } from '../../Helpers/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-surfing',
  standalone: true,
  imports: [CardComponent,FormsModule,CommonModule],
  templateUrl: './surfing.component.html',
  styleUrl: './surfing.component.css'
})
export class SurfingComponent {
  places=[ {
    name: 'Paklok',
    country: 'Thailand',
    stars: 5,
    cost: 148988,
    image1: 'https://a0.muscache.com/im/pictures/a1d94df4-0001-47ef-a45e-21db63919e79.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/83a9a315-bbd2-4151-a41d-fc630199fc34.jpg?im_w=720',
    index: 0
  },
  {
    name: 'Vypin',
    country: 'India',
    stars: 4.88,
    cost: 34235,
    image1: 'https://a0.muscache.com/im/pictures/3cc9ce44-4819-4efa-928d-81a9347c2890.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/ca00ad80-b009-47ca-835c-af26edc2ff49.jpg?im_w=720',
    index: 1
  },
  {
    name: 'Ko Samui District',
    country: 'Thailand',
    stars: 5,
    cost: 45421,
    image1: 'https://a0.muscache.com/im/pictures/hosting/Hosting-994173166305934113/original/ca38db23-df90-4aef-8b86-70f794761327.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-896715066253376414/original/d6d1932c-3d2c-49ab-bf6f-a912c4d7fc92.jpeg?im_w=720',
    index: 2
  },
  {
    name: 'Phuket',
    country: 'Thailand',
    stars: 4.7,
    cost: 102069,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-812489515735850680/original/346a0b04-701f-4188-82f2-b99b6450a1fc.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-909042687689701997/original/a676e3e8-75c3-4509-b0df-532bdde3abd6.jpeg?im_w=720',
    index: 3
  },
  {
    name: 'Tambon Bo Nok',
    country: 'Thailand',
    stars: 4.13,
    cost: 91696,
    image1: 'https://a0.muscache.com/im/pictures/1dcef69f-089d-457b-8916-5362867f0068.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/2c334f81-5e21-48fd-b3c0-a9939ab59737.jpg?im_w=720',
    index: 4
  },
  {
    name: 'Tambon Kamala',
    country: 'Thailand',
    stars: 4.87,
    cost: 338920,
    image1: 'https://a0.muscache.com/im/pictures/32372dbd-77a9-441a-8d59-c392038600a8.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/85eb161a-843c-4777-97b8-bb6fa1d64b9f.jpg?im_w=720',
    index: 5
  },
  {
    name: 'Tambon Pa Klok',
    country: 'Thailand',
    stars: 4.32,
    cost: 256322,
    image1: 'https://a0.muscache.com/im/pictures/e347cb15-88ce-40b6-a4f6-3558d556c430.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-36171303/original/480ad0ee-cbbe-45e4-893c-dff2fbc45ffd.jpeg?im_w=720',
    index: 6
  },
  {
    name: 'Tambon Rawai',
    country: 'Thailand',
    stars: 4.68,
    cost: 65967,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-635011984835076663/original/f14123ef-7021-49eb-b1ab-bfa957acf4a7.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/f24e8a32-fad6-43cf-851a-b5ad8b696b44.jpg?im_w=720',
    index: 7
  },
  {
    name: 'Paklong A Talang',
    country: 'Thailand',
    stars: 4.88,
    cost: 301295,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-940240916901609633/original/e2c93bdd-23c9-4aab-bbd4-16f9762f96ef.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/8cd2f4c6-6374-43b1-b0b8-ba1efd9c3611.jpg?im_w=720',
    index: 8
  },
  {
    name: 'Cape Yamu',
    country: 'Thailand',
    stars: 4.66,
    cost: 146047,
    image1: 'https://a0.muscache.com/im/pictures/42566dca-373b-4cd9-a006-6f4faa4c3aa5.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/224efbf0-afec-4a26-b084-771371252a21.jpg?im_w=720',
    index: 9
  },
  {
    name: 'Natai Beach',
    country: 'Thailand',
    stars: 4.15,
    cost: 251474,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-13942541/original/2b3ec9e4-4fea-4cb2-b5fe-daf622f37625.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-788117007716049551/original/c2b2b055-b834-4135-8cb0-012973ff503b.jpeg?im_w=720',
    index: 10
  },
  {
    name: 'Ayara Kamala',
    country: 'Thailand',
    stars: 4.84,
    cost: 420092,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-25330956/original/0dd8f636-f51e-4aa6-a75f-3498aba51c9a.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-747408262777974253/original/4c249427-f826-4e5e-a0b8-ac3b51e34041.jpeg?im_w=720',
    index: 11
  },
  {
    name: 'Tambon Cha-am',
    country: 'Thailand',
    stars: 4.95,
    cost: 126911,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-6383275/original/0be84c5e-1745-4cea-afd7-3c0e5722af3b.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/hosting/Hosting-712575681316954831/original/f964682c-aa26-4535-8021-414cc725070f.jpeg?im_w=720',
    index: 12
  },
  {
    name: 'Talpe',
    country: 'Sri Lanka',
    stars: 4.57,
    cost: 130397,
    image1: 'https://a0.muscache.com/im/pictures/a060abcc-fe16-408b-b374-aedb5e894e2d.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-975304923445155411/original/5c95373e-6614-4f9f-a886-87b45c230c73.jpeg?im_w=720',
    index: 13
  },
  {
    name: 'Phuket',
    country: 'Thailand',
    stars: 4.39,
    cost: 169178,
    image1: 'https://a0.muscache.com/im/pictures/monet/Luxury-54351340/original/42ebf54f-e39e-4156-97ec-076122c97359?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/5d8df3ee-5922-4bc9-a6d6-145babc0ea59.jpg?im_w=720',
    index: 14
  },
  {
    name: 'Bentota',
    country: 'Sri Lanka',
    stars: 4.84,
    cost: 45001,
    image1: 'https://a0.muscache.com/im/pictures/d8964b56-c0cd-49f7-b722-849fe41e21e4.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-981832502045124266/original/a078eda6-8723-41b1-b068-19dd5b1336ed.jpeg?im_w=720',
    index: 15
  },
  {
    name: 'Kata',
    country: 'Thailand',
    stars: 4.57,
    cost: 207453,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1029526659222905735/original/6e5d4718-7a3f-4159-b48f-c8c0a9dd5a2b.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/86a03a1b-dcf4-4d03-80e5-322d33e197c5.jpg?im_w=720',
    index: 16
  },
  {
    name: 'Tambon Karon',
    country: 'Thailand',
    stars: 4.66,
    cost: 135550,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-730208817180470938/original/0c036e96-0aeb-43a1-9db1-d4028920c790.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/ec593870-4efa-4a82-866b-fd988f783baa.jpg?im_w=720',
    index: 17
  },
  {
    name: 'Ko Tao',
    country: 'Thailand',
    stars: 4.88,
    cost: 21408,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-714125187905687191/original/9dceb7df-3b9b-4227-a484-e205c6bfb59d.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/f5de3f18-fbfe-4665-8463-33bca70ecf54.jpg?im_w=720',
    index: 18
  },
  {
    name: 'Tambon Bo Nok',
    country: 'Thailand',
    stars: 4.58,
    cost: 38875,
    image1: 'https://a0.muscache.com/im/pictures/fe1d7756-0f22-495c-baa2-22dda7518658.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/d0f5e338-ce8c-4c04-8b9a-2f969c9e9eb4.jpg?im_w=720',
    index: 19
  },
  {
    name: 'Cape Yamu',
    country: 'Thailand',
    stars: 4.08,
    cost: 146047,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-643137807162032832/original/6443997a-edc4-41d4-9006-97c6b2175b17.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-643137807162032832/original/b527eb37-9b93-40bd-8b22-0f6edc355a3b.jpeg?im_w=720',
    index: 20
  },
  {
    name: 'Tambon Pa Klok',
    country: 'Thailand',
    stars: 4.68,
    cost: 265618,
    image1: 'https://a0.muscache.com/im/pictures/558d0709-4c87-4cf2-8530-4bc83a1c23ff.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-52643781/original/8f0819b5-9ed6-4b1b-9dc2-67f14510d1dd.jpeg?im_w=720',
    index: 21
  },
  {
    name: 'Choeng Thale',
    country: 'Thailand',
    stars: 4.85,
    cost: 120231,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-596049722016836498/original/3b9cddac-43bf-4b5e-b596-959522dd97dd.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-972824520512426984/original/d9436845-9eab-4125-8625-03dd01d9be7b.jpeg?im_w=720',
    index: 22
  },
  {
    name: 'Tambon Patong',
    country: 'Thailand',
    stars: 4.71,
    cost: 8283,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-672840688551318343/original/44812ea8-931a-49b2-af0e-e67b07549c19.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/a48e9017-f665-44dd-a6e2-f860d108df52.jpg?im_w=720',
    index: 23
  },
  {
    name: 'Tambon Rawai',
    country: 'Thailand',
    stars: 4.89,
    cost: 16405,
    image1: 'https://a0.muscache.com/im/pictures/f18afea0-e5ed-45c1-b3b1-2d593f709c0a.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-22427719/original/14e8800c-8e13-469d-952b-4956366c1bd7.png?im_w=720',
    index: 24
  },
  {
    name: 'Tambon Kamala',
    country: 'Thailand',
    stars: 5,
    cost: 41787,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-731354902692464905/original/a3eb14ad-7faa-4b18-b2f5-a4c519c1d9cd.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/956dcf9b-eb1b-407b-bac2-b003fc02c281.jpg?im_w=720',
    index: 25
  },
  {
    name: 'Ko Samui',
    country: 'Thailand',
    stars: 5,
    cost: 199107,
    image1: 'https://a0.muscache.com/im/pictures/4dada6d7-d267-402e-a2a9-e93d89c74c1d.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/b1472b0c-038d-4862-89d8-038836ff591a.jpg?im_w=720',
    index: 26
  },
  {
    name: 'Tambon Rawai',
    country: 'Thailand',
    stars: 4.88,
    cost: 11705,
    image1: 'https://a0.muscache.com/im/pictures/c23ba563-2c08-4a85-b1ef-66a0767a07e8.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-17145433/original/95e6284a-b2b8-404a-afdc-045e96f55d2b.jpeg?im_w=720',
    index: 27
  },
  {
    name: 'Ko Pha Ngan',
    country: 'Thailand',
    stars: 4.94,
    cost: 17693,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1028640846476821602/original/d28dd201-8f65-49b7-8606-a3ceebb96e49.png?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/4416851d-6cb6-4df8-9754-b2c8484d350f.jpg?im_w=720',
    index: 28
  },
  {
    name: 'Tambon Mai Khao',
    country: 'Thailand',
    stars: 5,
    cost: 58978,
    image1: 'https://a0.muscache.com/im/pictures/103454363/53f0b08a_original.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-992604850077839481/original/e7ab7ff2-d585-44f5-99b8-16d849b7bf2f.jpeg?im_w=720',
    index: 29
  },
  {
    name: 'Mae Nam',
    country: 'Thailand',
    stars: 5,
    cost: 23885,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-930299314251503127/original/34997541-2714-4ae4-b8c0-68a7e82dfaf1.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-930299314251503127/original/a21fbd0e-a71b-45b7-ad81-4d6b93162225.jpeg?im_w=720',
    index: 30
  },
  {
    name: 'Koh Lanta ',
    country: 'Thailand',
    stars: 4.86,
    cost: 17423,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-30326030/original/8ba09a0b-6dbd-4a8b-aa94-77e4d1a35954.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/700c5bc8-1205-4726-a27f-b2a27219935d.jpg?im_w=720',
    index: 31
  },
  {
    name: 'Phuket',
    country: 'Thailand',
    stars: 4.8,
    cost: 37272,
    image1: 'https://a0.muscache.com/im/pictures/e449b68c-03c0-49cf-819c-3cb5459b4c09.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/516b440b-d1c9-4d22-bbae-a662d6210a51.jpg?im_w=720',
    index: 32
  },
  {
    name: 'ตำบล เกาะพะงัน',
    country: 'Thailand',
    stars: 4.92,
    cost: 16090,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-711802596841658985/original/99e415cf-cc5f-45a3-af19-55bcc6112b08.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-711907517057530181/original/0cb2b092-19f5-4dd2-9056-918904474f9f.jpeg?im_w=720',
    index: 33
  },
  {
    name: 'Tambon Rawai',
    country: 'Thailand',
    stars: 4.94,
    cost: 27861,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-711907517057530181/original/95bc155d-e406-4140-827e-b54cd582b14f.png?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/cc522042-0349-439d-af9f-e8b08e012d9d.jpg?im_w=720',
    index: 34
  },
  {
    name: 'Tambon Rawai',
    country: 'Thailand',
    stars: 4.92,
    cost: 16654,
    image1: 'https://a0.muscache.com/im/pictures/38514e48-0956-411f-97e9-1eb544d7bd7f.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-44579400/original/aab717f3-43d6-4f90-a19e-f29c8a94a9cc.jpeg?im_w=720',
    index: 35
  },
  {
    name: 'Tambon Rawai',
    country: 'Thailand',
    stars: 4.93,
    cost: 14286,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-33172470/original/ff77a341-df09-4ea0-b3b1-511276b96e25.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/765b4b25-790d-422d-9c81-a5bb28087732.jpg?im_w=720',
    index: 36
  },
  {
    name: 'Thrissur',
    country: 'India',
    stars: 4.96,
    cost: 6228,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-53976263/original/186192f2-578c-4c1c-ab94-76355e49d032.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-888790178405021308/original/62d5ccb4-170a-47a2-a5d9-2326d7ebbbd6.jpeg?im_w=720',
    index: 37
  },
  {
    name: 'Tambon Patong',
    country: 'Thailand',
    stars: 4.91,
    cost: 80863,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-758448853976145896/original/d167ff96-066a-40fc-9f53-205fef18e84a.png?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-9816704/original/15195a2d-de8a-4900-aeb9-7955ac618acd.jpeg?im_w=720',
    index: 38
  },
  {
    name: 'ตำบล แม่น้ำ',
    country: 'Thailand',
    stars: 5,
    cost: 19500,
    image1: 'https://a0.muscache.com/im/pictures/2ddda39e-16ee-489b-a0e1-7733934f5575.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/8f7e5d59-8a10-49a8-9da2-bf748abdd9d0.jpg?im_w=720',
    index: 39
  },
  {
    name: 'Kamala Beach',
    country: 'Thailand',
    stars: 4.93,
    cost: 9779,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-575485424054142816/original/61972bef-21e9-4249-8c2e-936ad53a268c.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-47268763/original/3825ae72-8b5f-4c62-9aba-a95e8b83d89d.jpeg?im_w=720',
    index: 40
  },
  {
    name: 'Ko Pha Ngan',
    country: 'Thailand',
    stars: 4.91,
    cost: 12877,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1036512579734589340/original/79f53b63-f022-4271-98a8-df1e13fba7d1.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/abe69a54-2176-4cc1-8acf-662610db6f7f.jpg?im_w=720',
    index: 41
  },
  {
    name: 'Tambon Mae Nam',
    country: 'Thailand',
    stars: 5,
    cost: 18660,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-757151796140772757/original/49c779d0-78c7-40b9-a853-e7b5fd5bdb2f.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-813271753089407674/original/e1724bcd-d9e2-44de-bebc-87860dffc3de.jpeg?im_w=720',
    index: 42
  },
  {
    name: 'Mae Nam',
    country: 'Thailand',
    stars: 4.97,
    cost: 53436,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-648811354904336000/original/2f19a06c-2859-4d7a-898f-4ecbefeb40e5.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-648811354904336000/original/98808ad6-016b-4d08-a6d6-35f59e7ed67e.jpeg?im_w=720',
    index: 43
  },
  {
    name: 'ตำบล บ้านใต้',
    country: 'Thailand',
    stars: 4.98,
    cost: 16090,
    image1: 'https://a0.muscache.com/im/pictures/082f8dfc-a0a9-44fe-8f9a-ac2a7789a4ee.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/9098a3b7-b64c-4cb3-a34b-200d5861b922.jpg?im_w=720',
    index: 44
  },
  {
    name: 'ตำบล แม่น้ำ',
    country: 'Thailand',
    stars: 4.8,
    cost: 19115,
    image1: 'https://a0.muscache.com/im/pictures/ae4c563c-dc8e-4f75-800b-ea478d84e7bc.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/76828f6b-a035-4651-8120-8b983cbac86a.jpg?im_w=720',
    index: 45
  },
  {
    name: 'Tambon Rawai',
    country: 'Thailand',
    stars: 4.97,
    cost: 14695,
    image1: 'https://a0.muscache.com/im/pictures/5917096b-bd95-4bcd-bb06-a79b08500990.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/347c933d-459c-43a3-ba72-2c1b43a539a6.jpg?im_w=720',
    index: 46
  },
  {
    name: 'Kathu',
    country: 'Thailand',
    stars: 4.97,
    cost: 14946,
    image1: 'https://a0.muscache.com/im/pictures/87b9f41b-63fe-4433-a3ab-55ed55e8725a.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/47446d6a-bb85-4b0c-ac8e-b8d8cdbddf35.jpg?im_w=720',
    index: 47
  },
  {
    name: 'Mae Nam',
    country: 'Thailand',
    stars: 4.89,
    cost: 21226,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1077761350441661823/original/a4beb082-949d-499d-a8c9-b8a4c81836ce.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/443ac688-58e4-4ef2-8639-7206a5795b92.jpg?im_w=720',
    index: 48
  },
  {
    name: 'Galle',
    country: 'Sri Lanka',
    stars: 4.94,
    cost: 14204,
    image1: 'https://a0.muscache.com/im/pictures/c3ab7e1e-3e3d-4bac-91cf-c87c4ebd7f88.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/e7543220-3b37-4c9b-a936-8fdd6c1d1520.jpg?im_w=720',
    index: 49
  },
  {
    name: 'Tambon Karon',
    country: 'Thailand',
    stars: 4.83,
    cost: 74511,
    image1: 'https://a0.muscache.com/im/pictures/a55a5a77-c200-4c12-b1dd-288d0fb026a5.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/5d74dd56-f46a-42c7-8c40-548c9bed68c7.jpg?im_w=720',
    index: 50
  },
  {
    name: 'Muang',
    country: 'Phuket',
    stars: 4.94,
    cost: 10153,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-575981955962237768/original/22265a19-5223-461e-9b82-e9fd912b3d11.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/d14446fb-6860-422e-8294-8579c337006b.jpg?im_w=720',
    index: 51
  },
  {
    name: 'Tambon Rawai',
    country: 'Thailand',
    stars: 5,
    cost: 46825,
    image1: 'https://a0.muscache.com/im/pictures/aa48d88d-f211-4c6b-bc0d-9964d4fce1bb.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/dca63d2e-8598-421c-97ec-254a4a20ac54.jpg?im_w=720',
    index: 52
  },
  {
    name: 'Karon ',
    country: 'Thailand',
    stars: 4.88,
    cost: 10456,
    image1: 'https://a0.muscache.com/im/pictures/6ea17c45-c86a-4d8b-b208-ce0c147472de.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/d9c11044-0f39-43c0-a061-57b8cb860762.jpg?im_w=720',
    index: 53
  },
  {
    name: 'Karon',
    country: 'Thailand',
    stars: 4.91,
    cost: 29456,
    image1: 'https://a0.muscache.com/im/pictures/ebdfe4c7-252e-4c9f-9650-afcf56c20474.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/e341b4ce-e354-467f-b0ac-8cf15ba3ebff.jpg?im_w=720',
    index: 54
  },
  {
    name: 'Tambon Karon',
    country: 'Thailand',
    stars: 5,
    cost: 83583,
    image1: 'https://a0.muscache.com/im/pictures/1e3f4a8e-9094-4e3d-bf99-b904360e329e.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/5f680864-492f-4a59-8694-bf77e352dc7a.jpg?im_w=720',
    index: 55
  },
  {
    name: 'Tambon Wichit',
    country: 'Thailand',
    stars: 5,
    cost: 27031,
    image1: 'https://a0.muscache.com/im/pictures/d636115f-c9ad-49a7-b88d-935186867ef4.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/7d84d55f-d441-47f9-aa73-045a3cefaff5.jpg?im_w=720',
    index: 56
  },
  {
    name: 'Tambon Wichit',
    country: 'Thailand',
    stars: 4.93,
    cost: 10780,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1353277/original/b1fdfe51-bb63-4d6c-8e2b-9d3ebbf39439.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/3bf51f49-7d5f-45f7-94eb-8d62020658c2.jpg?im_w=720',
    index: 57
  },
  {
    name: 'หาดบางเบิด',
    country: 'Thailand',
    stars: 5,
    cost: 67329,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-39279526/original/58c41669-215b-48fb-925a-1960c32a5cb4.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/2c286ef5-72c0-427e-83b6-209e75cf4c86.jpg?im_w=720',
    index: 58
  },
  {
    name: 'A. Muang',
    country: 'Thailand',
    stars: 4.84,
    cost: 23179,
    image1: 'https://a0.muscache.com/im/pictures/344e1397-0993-406c-8333-264570caf991.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/706fc52b-744e-4fcf-8237-2e371b471206.jpg?im_w=720',
    index: 59
  }];

}
