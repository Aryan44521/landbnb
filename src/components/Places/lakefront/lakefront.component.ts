import { Component } from '@angular/core';
import { CardComponent } from '../../Helpers/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lakefront',
  standalone: true,
  imports: [CardComponent,FormsModule,CommonModule],
  templateUrl: './lakefront.component.html',
  styleUrl: './lakefront.component.css'
})
export class LakefrontComponent {
  places=[ {
    name: 'Kainakary South',
    country: 'India',
    stars: 4.13,
    cost: 5445,
    image1: 'https://a0.muscache.com/im/pictures/27013fec-93f9-4250-b9b6-0004a3f6aefb.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/b938f474-1472-4c3a-b114-b1be912ad04b.jpg?im_w=720',
    index: 0
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 4.85,
    cost: 6861,
    image1: 'https://a0.muscache.com/im/pictures/e6c6161c-244f-4ea2-bd9c-8548d804fb46.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/49cdc654-db79-4c25-b5f6-2982729d1be6.jpg?im_w=720',
    index: 1
  },
  {
    name: 'Wayanad',
    country: 'India',
    stars: 4.01,
    cost: 5306,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-842561061009527003/original/738476e4-0828-4527-8449-193a6017b4e8.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-842561061009527003/original/087935c5-a15d-4d4e-9861-e7580c0b10f3.jpeg?im_w=720',
    index: 2
  },
  {
    name: 'Susale',
    country: 'India',
    stars: 4.78,
    cost: 13694,
    image1: 'https://a0.muscache.com/im/pictures/a51167cf-72ab-4ddf-9db7-da20ddabcb34.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/52c601ad-2330-4de1-a753-a3f19b4f5fbf.jpg?im_w=720',
    index: 3
  },
  {
    name: 'Kolechafesar',
    country: 'India',
    stars: 4.06,
    cost: 31953,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-888826359906290076/original/79c8e4be-75ea-4790-8c25-0637caa8e0de.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-888826359906290076/original/5cc9c2e7-a877-4aa4-bf9c-8964b3562826.jpeg?im_w=720',
    index: 4
  },
  {
    name: 'Alappuzha',
    country: 'India',
    stars: 4.9,
    cost: 17118,
    image1: 'https://a0.muscache.com/im/pictures/a569ec98-7a60-4448-9489-a5dd8b500b3b.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/20201857/f3298358_original.jpg?im_w=720',
    index: 5
  },
  {
    name: 'Kainakary',
    country: 'India',
    stars: 4.98,
    cost: 7500,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-948122787106885326/original/9eb89c95-b341-4d5f-be72-62cdc0924e82.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/c1e227fc-f45b-4242-8049-2e72125db821.jpg?im_w=720',
    index: 6
  },
  {
    name: 'Lonavla',
    country: 'India',
    stars: 4.85,
    cost: 8901,
    image1: 'https://a0.muscache.com/im/pictures/bc95da4d-13a9-4d30-bbaa-923e9bc93490.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-52588682/original/48f51458-5eba-47ea-b2ad-197a81681266.jpeg?im_w=720',
    index: 7
  },
  {
    name: 'Kamshet',
    country: 'India',
    stars: 5,
    cost: 46198,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-588067308449754755/original/de0d94f6-a91d-4fcb-b77d-d08fa1588d0b.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/0cea644f-a01b-478a-a3d8-a5a027a592f5.jpg?im_w=720',
    index: 8
  },
  {
    name: 'Apati',
    country: 'India',
    stars: 4.43,
    cost: 10212,
    image1: 'https://a0.muscache.com/im/pictures/4988039c-1e05-45d4-961d-c6001353efe4.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/208799bb-a234-4cc9-8d4c-25241be061e8.jpg?im_w=720',
    index: 9
  },
  {
    name: 'Muhamma',
    country: 'Kerala (Cherthala/Alleppey)',
    stars: 4.9,
    cost: 18301,
    image1: 'https://a0.muscache.com/im/pictures/8ba554b9-b740-4471-9f57-ead595925469.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-700021319045179852/original/74833ce1-812e-491b-98e9-4ba99b211dbc.jpeg?im_w=720',
    index: 10
  },
  {
    name: 'Alappuzha',
    country: 'India',
    stars: 4.01,
    cost: 42794,
    image1: 'https://a0.muscache.com/im/pictures/9c15791d-03cc-4042-872e-9485223792aa.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/7f992211-ea26-4ea0-9c30-4357ecb59392.jpg?im_w=720',
    index: 11
  },
  {
    name: 'Arambol',
    country: 'India',
    stars: 4.71,
    cost: 4048,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-986082783922501439/original/5f17694a-3e20-479b-9189-e5ffe41ba0a5.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-48559884/original/79ffca54-27be-44ec-aad3-eb950084b4d3.jpeg?im_w=720',
    index: 12
  },
  {
    name: 'Lonavla',
    country: 'India',
    stars: 4.84,
    cost: 8499,
    image1: 'https://a0.muscache.com/im/pictures/56f10b65-9348-4e5e-bd96-a28f3529ff4c.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-748972353843638648/original/89ee8a9d-b72a-4250-964b-4f66484e3223.jpeg?im_w=720',
    index: 13
  },
  {
    name: 'Karla ',
    country: 'India',
    stars: 4.7,
    cost: 3424,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-935132928932651406/original/ca784af5-3466-48e5-bd2d-cb15e18042a9.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/da061b01-a330-4655-9a08-df5efe3de00d.jpg?im_w=720',
    index: 14
  },
  {
    name: 'Kamshet',
    country: 'India',
    stars: 5,
    cost: 40226,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-53452603/original/674c228a-c37c-4f2f-86fc-13784d00f98c.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-986060452030241111/original/9e444fd8-77d2-4ce2-b9ba-53c6bd83e591.jpeg?im_w=720',
    index: 15
  },
  {
    name: 'Chavsar',
    country: 'India',
    stars: 4.16,
    cost: 11590,
    image1: 'https://a0.muscache.com/im/pictures/a9f5b6be-2931-44cf-a9cd-09f208a43513.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-807670947509243264/original/8764b24c-3d62-4918-99db-8c5337560068.jpeg?im_w=720',
    index: 16
  },
  {
    name: 'Tapola',
    country: 'India',
    stars: 4.26,
    cost: 3140,
    image1: 'https://a0.muscache.com/im/pictures/5b32f14a-feaa-4654-bee7-3040cc4666ba.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-751012496207220524/original/a23c57d6-f40f-46c8-8bd5-64a3c71e44aa.jpeg?im_w=720',
    index: 17
  },
  {
    name: 'Lonavla',
    country: 'India',
    stars: 4.67,
    cost: 41938,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-577204142686323670/original/a4dd1726-96c3-403e-85dd-271e3421a719.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-714923846360615687/original/67fa1e9c-c3af-4276-a52f-16ea2f0c8577.jpeg?im_w=720',
    index: 18
  },
  {
    name: 'Thakursai',
    country: 'India',
    stars: 4.48,
    cost: 1073,
    image1: 'https://a0.muscache.com/im/pictures/b1cd2d21-c605-4187-b5bb-d9198d6ea314.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/75ef52b1-b20a-4d79-ab3c-606e0c67efc2.jpg?im_w=720',
    index: 19
  },
  {
    name: 'Gevhande Apati',
    country: 'India',
    stars: 4.12,
    cost: 55000,
    image1: 'https://a0.muscache.com/im/pictures/b977b3d2-bf26-4ecd-a303-a84684b6d119.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-507741036516104287/original/55cdb8e1-85b4-4948-b116-671e1d161800.jpeg?im_w=720',
    index: 20
  },
  {
    name: 'Alleppey',
    country: 'India',
    stars: 5,
    cost: 6391,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-987382661078350202/original/efda7956-df41-4002-bc3b-f8454f8ffa18.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1051854946837801936/original/35aa53a1-a1cf-40b4-af61-e4d301792795.jpeg?im_w=720',
    index: 21
  },
  {
    name: 'Arambol',
    country: 'India',
    stars: 4.94,
    cost: 3804,
    image1: 'https://a0.muscache.com/im/pictures/5aa1d1dc-2a1a-4cd0-97a3-90e3c640879b.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-999317223333962921/original/44bdc04e-b538-435e-bb56-b867c3f748d1.jpeg?im_w=720',
    index: 22
  },
  {
    name: 'Tung',
    country: 'India',
    stars: 4.9,
    cost: 14660,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-876636492232656540/original/6524dec4-1be5-47c2-a149-e8b95bce8803.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/045e2f69-a056-4e51-8dc9-c0bccec8540f.jpg?im_w=720',
    index: 23
  },
  {
    name: 'Lonavla',
    country: 'India',
    stars: 4.86,
    cost: 39941,
    image1: 'https://a0.muscache.com/im/pictures/hosting/Hosting-957063574596179611/original/6ef62c0e-181c-4dd6-8fc1-9589bab46456.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/hosting/Hosting-957063574596179611/original/ad98fe3b-267f-4153-a35e-257dfbfd44fc.jpeg?im_w=720',
    index: 24
  },
  {
    name: 'Alappuzha',
    country: 'India',
    stars: 4.03,
    cost: 9731,
    image1: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1016397474231045784/original/5b56f615-e4d5-4d8a-a6b6-f7d38665360d.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/f9f4a36b-1eaa-494b-9feb-30b98c248bf4.jpg?im_w=720',
    index: 25
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 4.14,
    cost: 44734,
    image1: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1062965067219802490/original/4c18514e-1de3-4683-a7be-a680337b6713.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-940489168455306634/original/17761690-1bd8-41b0-bf8a-ea9389182346.jpeg?im_w=720',
    index: 26
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 4.57,
    cost: 2282,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-842549962610129762/original/d8130ba1-9394-4601-bc8f-b63f87eb0a77.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/de68f2ed-7036-430f-9f5d-a888ccd83064.jpg?im_w=720',
    index: 27
  },
  {
    name: 'Curtorim',
    country: 'India',
    stars: 4.8,
    cost: 21750,
    image1: 'https://a0.muscache.com/im/pictures/354761ad-5e2e-4fbf-b049-2593499865b0.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-906381129269835906/original/06071909-85c5-455f-94ca-7baeb742daa2.jpeg?im_w=720',
    index: 28
  },
  {
    name: 'Pune',
    country: 'India',
    stars: 4.03,
    cost: 22824,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-954147257574489511/original/6cae4f53-df0e-4a7f-8141-56409d9e3479.png?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/d2c32f9c-a442-4966-9264-2c66b0fbedb6.jpg?im_w=720',
    index: 29
  },
  {
    name: 'Alleppey',
    country: 'India',
    stars: 4.47,
    cost: 12875,
    image1: 'https://a0.muscache.com/im/pictures/7328643b-4ca4-4de1-83c5-883cba157792.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/457c89eb-f39a-44f0-8168-55da90b6f126.jpg?im_w=720',
    index: 30
  },
  {
    name: 'Cherttala ',
    country: 'India',
    stars: 4.47,
    cost: 5158,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-51916744/original/d89aa8bd-93dc-4b02-9d52-ab31706900b2.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/bb6cda8f-c552-4ca7-b3db-a2aeac078dd0.jpg?im_w=720',
    index: 31
  },
  {
    name: 'Alappuzha',
    country: 'India',
    stars: 4.44,
    cost: 4565,
    image1: 'https://a0.muscache.com/im/pictures/17bc444f-9a47-44c9-b0af-ece0438e795a.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-903413603120459598/original/4752d680-3a4d-4898-b15a-e57fa48c1d98.jpeg?im_w=720',
    index: 32
  },
  {
    name: 'Dahuli',
    country: 'India',
    stars: 4.93,
    cost: 6276,
    image1: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1047613428297139729/original/fb969454-2498-48ba-b891-92c30594657b.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/8a691657-e410-4200-a2da-a32aac53d4fb.jpg?im_w=720',
    index: 33
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 4.11,
    cost: 48865,
    image1: 'https://a0.muscache.com/im/pictures/4f96e5c8-82f7-4e11-bf41-aa403dc756ce.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-842496618447835467/original/7c6841f3-cbbf-4192-b013-7b4fd43ba03d.jpeg?im_w=720',
    index: 34
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 4.64,
    cost: 18260,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-842496618447835467/original/29b33c2d-44d4-47bd-9057-94c7d30a1c8f.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-775362371207676696/original/32d1a98e-3e50-4865-be92-8d83b5b2a3a6.jpeg?im_w=720',
    index: 35
  },
  {
    name: 'Dahuli',
    country: 'India',
    stars: 5,
    cost: 5592,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-882319915262733338/original/6f91ed57-5c6c-476b-802b-3d0c2721811b.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/5e8e187d-62b9-410d-84f8-a60a8e59997a.jpg?im_w=720',
    index: 36
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 4.2,
    cost: 23100,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-902007778522085461/original/bfbd39a5-33dc-4ab6-b532-83076f3a5165.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/1b3a48e9-41a6-4b97-bf6c-55ad5448c03f.jpg?im_w=720',
    index: 37
  },
  {
    name: 'Alappuzha',
    country: 'India',
    stars: 5,
    cost: 21888,
    image1: 'https://a0.muscache.com/im/pictures/34a0e1e0-e10d-4b60-ac63-b4bd1410c54e.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/43c32710-4e42-4803-9bc3-ffb36f14535b.jpg?im_w=720',
    index: 38
  },
  {
    name: 'Arambol',
    country: 'India',
    stars: 4.7,
    cost: 2146,
    image1: 'https://a0.muscache.com/im/pictures/1a1b27f1-7e57-4c8e-baf5-041335b9e03f.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/33cd7278-caa8-4c92-9f39-20d4da044879.jpg?im_w=720',
    index: 39
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 5,
    cost: 48442,
    image1: 'https://a0.muscache.com/im/pictures/1aaed613-50c5-46d8-9386-4d715c19d425.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1043981689641893535/original/df000595-f17b-4295-bf78-c5dfd93dfef8.jpeg?im_w=720',
    index: 40
  },
  {
    name: 'Pale Pawan Ma',
    country: 'India',
    stars: 4.8,
    cost: 3994,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1066067653293898971/original/3e7ff2d6-bf4d-4ee3-9a68-cf6ef51c875f.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-929343811845166106/original/2785c040-d0b9-4415-b768-2a9be2c2d0df.jpeg?im_w=720',
    index: 41
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 4.73,
    cost: 7030,
    image1: 'https://a0.muscache.com/im/pictures/f64b6d23-fd9b-4f1e-9a06-ce6ec68efe47.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/a4c82ffd-e33f-4ccd-bb50-56579babee8c.jpg?im_w=720',
    index: 42
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 4.34,
    cost: 2578,
    image1: 'https://a0.muscache.com/im/pictures/132747ba-2cc3-4857-ae73-9f8e10103c2d.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-828044685968444297/original/c69a1418-d648-4745-ae13-21c7badf54f5.jpeg?im_w=720',
    index: 43
  },
  {
    name: 'Oxel',
    country: 'India',
    stars: 4.22,
    cost: 3840,
    image1: 'https://a0.muscache.com/im/pictures/59328e6c-559b-47f0-af7c-f24a5e577dfe.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1062965067219802490/original/c47e25af-2e08-4a93-86a8-6bac59008d0c.jpeg?im_w=720',
    index: 44
  },
  {
    name: 'Wayanad',
    country: 'India',
    stars: 4.72,
    cost: 4565,
    image1: 'https://a0.muscache.com/im/pictures/hosting/Hosting-988407048262442436/original/0812d040-c146-44ab-9740-617cd60cf437.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-807620860666013524/original/edb64f2e-72b2-4570-823a-6e85080e809f.jpeg?im_w=720',
    index: 45
  },
  {
    name: 'Alleppey',
    country: 'India',
    stars: 4.28,
    cost: 6391,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-917958026062615474/original/b3bd7216-784a-49df-a985-f864d2ac2213.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/c1c3ea80-7fdf-4c21-b082-5709119003e5.jpg?im_w=720',
    index: 46
  },
  {
    name: 'Siolim',
    country: 'India',
    stars: 4.89,
    cost: 5973,
    image1: 'https://a0.muscache.com/im/pictures/54277413-9f61-4fd8-acff-8e97aa13fb90.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-996135607494153859/original/d7b48595-7cf7-417b-ba3e-39da5a34414b.jpeg?im_w=720',
    index: 47
  },
  {
    name: 'Dahuli',
    country: 'India',
    stars: 5,
    cost: 10841,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1028890791821666023/original/f1caa8e3-e985-4f48-8843-7cc3634a0a17.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1021248724518803664/original/d392eb19-edd2-4a19-b7a3-cc4b052cb779.jpeg?im_w=720',
    index: 48
  },
  {
    name: 'Arambol',
    country: 'India',
    stars: 4.78,
    cost: 2511,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-903369406881151468/original/452c6fd2-8139-4d25-8a4c-cdd22a78097f.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-903369406881151468/original/88d1ce4e-7433-41b4-8efc-7d54ade15c72.jpeg?im_w=720',
    index: 49
  },
  {
    name: 'Dahuli Gaon',
    country: 'India',
    stars: 5,
    cost: 4291,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1036045562031723351/original/d8342fd1-5aa9-4a14-b56b-1656a139f6a2.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-859318170354316895/original/67db7b62-a504-4233-99c7-939dc33660b7.jpeg?im_w=720',
    index: 50
  },
  {
    name: 'Panaji',
    country: 'India',
    stars: 4.42,
    cost: 2853,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-43670118/original/728339d2-bcfd-4987-8920-79c57d64c78a.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/17295b94-b47a-4e2f-805b-41b94866eb55.jpg?im_w=720',
    index: 51
  },
  {
    name: 'Pawna Lake',
    country: 'India',
    stars: 4.93,
    cost: 7828,
    image1: 'https://a0.muscache.com/im/pictures/eb5b125c-ed33-42e5-aa33-2d55e92b5066.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1066067653293898971/original/fb2f7b98-341f-40f1-ba37-558b66d3c653.jpeg?im_w=720',
    index: 52
  },
  {
    name: 'Dahuli',
    country: 'India',
    stars: 5,
    cost: 4291,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-658296882577751092/original/a325d0a7-2438-4a7c-9049-17bab57580c3.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-781034658384236291/original/cf30e69c-7618-4a3b-a8fa-930d6d90410b.jpeg?im_w=720',
    index: 53
  },
  {
    name: 'Kunnathidavaka',
    country: 'India',
    stars: 4.14,
    cost: 15976,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-681528800400094084/original/84d23aa9-3931-443f-83d1-c21aa4d6f84a.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1070634892453878931/original/c297a08d-7e9f-41f0-af3e-82cf489b6178.jpeg?im_w=720',
    index: 54
  },
  {
    name: 'Arambol',
    country: 'India',
    stars: 4.8,
    cost: 1826,
    image1: 'https://a0.muscache.com/im/pictures/0f4f7b20-f0be-4e21-a61f-a60e24a4ac17.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/04701688-303e-48c4-9219-ea26ff471dd7.jpg?im_w=720',
    index: 55
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 5,
    cost: 40226,
    image1: 'https://a0.muscache.com/im/pictures/f9d2e9eb-0987-4d13-9c40-a750192cee7e.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-655480621689310626/original/5069fff0-9e82-4273-ae3d-18333fc21eb7.jpeg?im_w=720',
    index: 56
  },
  {
    name: 'Pune',
    country: 'India',
    stars: 4.48,
    cost: 27000,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-807620873365522300/original/750504b9-06ad-4bf8-a96b-3bdeb9c37f85.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/a0f1f592-dcf9-4609-a9da-fd144912d421.jpg?im_w=720',
    index: 57
  },
  {
    name: 'Wayanad',
    country: 'India',
    stars: 4.62,
    cost: 5308,
    image1: 'https://a0.muscache.com/im/pictures/3ff11726-9d76-44c6-ac3b-81092cacc440.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/0db0beb0-228f-4428-b6a6-3cca2e15dd18.jpg?im_w=720',
    index: 58
  },
  {
    name: 'Pale Pawan Ma',
    country: 'India',
    stars: 4.98,
    cost: 22000,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-46228360/original/c3015de0-73ad-41b5-9b13-9f62182618d5.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-46228360/original/588e1569-dfac-4d0c-b738-e76753835b05.jpeg?im_w=720',
    index: 59
  }];

}
