import { Component } from '@angular/core';
import { CardComponent } from '../../Helpers/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-amazing-views',
  standalone: true,
  imports: [CardComponent,FormsModule,CommonModule],
  templateUrl: './amazing-views.component.html',
  styleUrl: './amazing-views.component.css'
})
export class AmazingViewsComponent {
places=[{
  name: 'Velhe',
  country: 'Torna-Rajgad',
  stars: 4.88,
  cost: 16649,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-53371625/original/b230521e-d33c-4c5e-a2ba-d1d5277ade92.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-53371625/original/b230521e-d33c-4c5e-a2ba-d1d5277ade92.jpeg?im_w=720',
  index: 0
},
{
  name: 'Lonavla',
  country: 'India',
  stars: 5,
  cost: 34234,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1038970133355880035/original/ece4a91a-20d5-47d9-9199-49259433ecbe.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1038970133355880035/original/ece4a91a-20d5-47d9-9199-49259433ecbe.jpeg?im_w=720',
  index: 1
},
{
  name: 'Mulshi',
  country: 'India',
  stars: 4.23,
  cost: 16283,
  image1: 'https://a0.muscache.com/im/pictures/37e4495d-74d1-403f-9cc6-56dc2153c475.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/37e4495d-74d1-403f-9cc6-56dc2153c475.jpg?im_w=720',
  index: 2
},
{
  name: 'Kambegi',
  country: 'India',
  stars: 4.94,
  cost: 7189,
  image1: 'https://a0.muscache.com/im/pictures/0e2a8d2e-8082-43d8-a8ec-323a53b3c03b.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/0e2a8d2e-8082-43d8-a8ec-323a53b3c03b.jpg?im_w=720',
  index: 3
},
{
  name: 'Dahuli',
  country: 'India',
  stars: 4.93,
  cost: 6276,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-43670118/original/728339d2-bcfd-4987-8920-79c57d64c78a.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-43670118/original/728339d2-bcfd-4987-8920-79c57d64c78a.jpeg?im_w=720',
  index: 4
},
{
  name: 'Mahagaon',
  country: 'India',
  stars: 4.11,
  cost: 5706,
  image1: 'https://a0.muscache.com/im/pictures/74ebe5c4-037f-4624-b544-195384e15981.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/74ebe5c4-037f-4624-b544-195384e15981.jpg?im_w=720',
  index: 5
},
{
  name: 'Lonavala',
  country: 'India',
  stars: 4.9,
  cost: 18785,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-987382661078350202/original/efda7956-df41-4002-bc3b-f8454f8ffa18.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-987382661078350202/original/efda7956-df41-4002-bc3b-f8454f8ffa18.jpeg?im_w=720',
  index: 6
},
{
  name: 'Pawna Lake',
  country: 'India',
  stars: 4.94,
  cost: 23964,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-928747016159521350/original/1c190714-cdcf-4170-a8b4-b04b89e8c662.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-928747016159521350/original/1c190714-cdcf-4170-a8b4-b04b89e8c662.jpeg?im_w=720',
  index: 7
},
{
  name: 'Lonavala',
  country: 'India',
  stars: 4.85,
  cost: 6861,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-781539802171843387/original/d000a031-2d10-4054-956b-62404868bca0.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-781539802171843387/original/d000a031-2d10-4054-956b-62404868bca0.jpeg?im_w=720',
  index: 8
},
{
  name: 'Lonavala',
  country: 'India',
  stars: 4.6,
  cost: 48865,
  image1: 'https://a0.muscache.com/im/pictures/f289abd8-058f-49c5-ae59-422a324fde98.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/f289abd8-058f-49c5-ae59-422a324fde98.jpg?im_w=720',
  index: 9
},
{
  name: 'Gevhande Apati',
  country: 'India',
  stars: 4.64,
  cost: 17777,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-53102376/original/6364c732-b1fa-450d-b8c1-9ec363a22b40.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-53102376/original/6364c732-b1fa-450d-b8c1-9ec363a22b40.jpeg?im_w=720',
  index: 10
},
{
  name: 'Malavli',
  country: 'India',
  stars: 4.22,
  cost: 16237,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-648309537601708828/original/61e6e766-6afb-4c2c-9a94-6f9e6618ff3b.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-648309537601708828/original/61e6e766-6afb-4c2c-9a94-6f9e6618ff3b.jpeg?im_w=720',
  index: 11
},
{
  name: 'पुणे',
  country: 'India',
  stars: 4.94,
  cost: 3203,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-731686415191717978/original/2cbb3eb1-ff87-4c69-8302-73e551dc7eb9.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-731686415191717978/original/2cbb3eb1-ff87-4c69-8302-73e551dc7eb9.jpeg?im_w=720',
  index: 12
},
{
  name: 'Lonavla',
  country: 'India',
  stars: 4.35,
  cost: 28164,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-658296882577751092/original/40c2359d-f25b-4f48-94ce-ee75cab895da.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-658296882577751092/original/40c2359d-f25b-4f48-94ce-ee75cab895da.jpeg?im_w=720',
  index: 13
},
{
  name: 'Pune',
  country: 'India',
  stars: 4.93,
  cost: 5228,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-815725324924069829/original/a03a5f61-8765-46fb-bf4e-64cd96737487.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-815725324924069829/original/a03a5f61-8765-46fb-bf4e-64cd96737487.jpeg?im_w=720',
  index: 14
},
{
  name: 'Kamshet',
  country: 'India',
  stars: 5,
  cost: 46198,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1048923262914100918/original/bfb19170-55b7-4f44-812b-63acf5e07151.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1048923262914100918/original/bfb19170-55b7-4f44-812b-63acf5e07151.jpeg?im_w=720',
  index: 15
},
{
  name: 'Lonavla',
  country: 'India',
  stars: 4.97,
  cost: 18515,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-912698632169047894/original/76b0965b-a0a7-4d3f-be01-7f23e57544ed.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-912698632169047894/original/76b0965b-a0a7-4d3f-be01-7f23e57544ed.jpeg?im_w=720',
  index: 16
},
{
  name: 'Ambegaon',
  country: 'India',
  stars: 4.8,
  cost: 33217,
  image1: 'https://a0.muscache.com/im/pictures/c99c1fc0-d9ac-4873-9174-621e840e914e.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/c99c1fc0-d9ac-4873-9174-621e840e914e.jpg?im_w=720',
  index: 17
},
{
  name: 'Lonavala',
  country: 'India',
  stars: 4.62,
  cost: 29483,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-994643109454992918/original/f3af8913-2c66-4e6e-b208-aa91f603e824.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-994643109454992918/original/f3af8913-2c66-4e6e-b208-aa91f603e824.jpeg?im_w=720',
  index: 18
},
{
  name: 'Lonavala',
  country: 'India',
  stars: 4.35,
  cost: 42908,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-52679006/original/2d2fe030-6f47-4079-81c8-f07c3c39234e.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-52679006/original/2d2fe030-6f47-4079-81c8-f07c3c39234e.jpeg?im_w=720',
  index: 19
},
{
  name: 'Lonavla',
  country: 'India',
  stars: 4.84,
  cost: 21600,
  image1: 'https://a0.muscache.com/im/pictures/e0e2056b-1723-43a2-87b2-2201525e1e0a.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/e0e2056b-1723-43a2-87b2-2201525e1e0a.jpg?im_w=720',
  index: 20
},
{
  name: 'पुणे',
  country: 'India',
  stars: 4.95,
  cost: 3635,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-904910960158795050/original/c957856d-5286-4f9e-b4e1-0268516d4944.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-904910960158795050/original/c957856d-5286-4f9e-b4e1-0268516d4944.jpeg?im_w=720',
  index: 21
},
{
  name: 'Lonavla',
  country: 'India',
  stars: 4.67,
  cost: 12187,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-779499252842253365/original/1ec5506c-eb2d-403a-a3fe-c0499042ac6f.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-779499252842253365/original/1ec5506c-eb2d-403a-a3fe-c0499042ac6f.jpeg?im_w=720',
  index: 22
},
{
  name: 'Patan',
  country: 'India',
  stars: 5,
  cost: 15000,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1020799431129552527/original/b3f1a075-c9df-4021-845a-45e8c525c73a.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1020799431129552527/original/b3f1a075-c9df-4021-845a-45e8c525c73a.jpeg?im_w=720',
  index: 23
},
{
  name: 'Gevhande Apati',
  country: 'India',
  stars: 4.63,
  cost: 38179,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-780274753570830817/original/a26a546a-6854-43b3-8690-cce4fe69baff.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-780274753570830817/original/a26a546a-6854-43b3-8690-cce4fe69baff.jpeg?im_w=720',
  index: 24
},
{
  name: 'Dahuli Gaon',
  country: 'India',
  stars: 5,
  cost: 4291,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-914139021985348574/original/d59b1207-1cfa-4cdf-a214-720b9232b4d6.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-914139021985348574/original/d59b1207-1cfa-4cdf-a214-720b9232b4d6.jpeg?im_w=720',
  index: 25
},
{
  name: 'Mulshi',
  country: 'India',
  stars: 4.67,
  cost: 22276,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-52440448/original/1521e2e4-5b90-4961-8c30-36cf52bfefdd.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-52440448/original/1521e2e4-5b90-4961-8c30-36cf52bfefdd.jpeg?im_w=720',
  index: 26
},
{
  name: 'Kamshet',
  country: 'India',
  stars: 4.21,
  cost: 39869,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1028890791821666023/original/4d9b20b7-ebbf-490f-a31f-bba8b5c9e80c.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1028890791821666023/original/4d9b20b7-ebbf-490f-a31f-bba8b5c9e80c.jpeg?im_w=720',
  index: 27
},
{
  name: 'Kamshet',
  country: 'India',
  stars: 4.16,
  cost: 16000,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-40333094/original/9b592fcd-99b0-42f6-b5c6-f1290afef4a9.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-40333094/original/9b592fcd-99b0-42f6-b5c6-f1290afef4a9.jpeg?im_w=720',
  index: 28
},
{
  name: 'Kamshet',
  country: 'Uksan',
  stars: 4.83,
  cost: 15876,
  image1: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1022207677070566085/original/47e0aae4-2063-4a99-8cba-67e07576fa5f.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1022207677070566085/original/47e0aae4-2063-4a99-8cba-67e07576fa5f.jpeg?im_w=720',
  index: 29
},
{
  name: 'Lonavala',
  country: 'India',
  stars: 5,
  cost: 32935,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-53158805/original/9267237d-6034-4269-b717-ea7dfad3c39b.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-53158805/original/9267237d-6034-4269-b717-ea7dfad3c39b.jpeg?im_w=720',
  index: 30
},
{
  name: 'Lonavla',
  country: 'India',
  stars: 4.81,
  cost: 25818,
  image1: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODMwMTIxNzI1MjAwOTMyODAz/original/9d6cac0e-cde0-4938-b943-87bcc3e24ab3.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODMwMTIxNzI1MjAwOTMyODAz/original/9d6cac0e-cde0-4938-b943-87bcc3e24ab3.jpeg?im_w=720',
  index: 31
},
{
  name: 'Lonavala',
  country: 'India',
  stars: 4.55,
  cost: 40698,
  image1: 'https://a0.muscache.com/im/pictures/7f5ed424-e5c0-46aa-8703-20ab18e3af00.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/7f5ed424-e5c0-46aa-8703-20ab18e3af00.jpg?im_w=720',
  index: 32
},
{
  name: 'Devghar',
  country: 'India',
  stars: 4.82,
  cost: 16000,
  image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1006127253293189043/original/3f02da79-375d-491d-bbe3-1dede62add70.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1006127253293189043/original/3f02da79-375d-491d-bbe3-1dede62add70.jpeg?im_w=720',
  index: 33
},
{
  name: 'Karjat',
  country: 'India',
  stars: 4.19,
  cost: 24828,
  image1: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1042485789401273652/original/de16f28c-6182-4430-a3a8-1d7a454f3a5b.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1042485789401273652/original/de16f28c-6182-4430-a3a8-1d7a454f3a5b.jpeg?im_w=720',
  index: 34
},
{
  name: 'Pune',
  country: 'India',
  stars: 4.78,
  cost: 20758,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1051854946837801936/original/53c7376f-04ac-411b-b2e1-a19bf6d4c1ad.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1051854946837801936/original/53c7376f-04ac-411b-b2e1-a19bf6d4c1ad.jpeg?im_w=720',
  index: 35
},
{
  name: 'Lonavala',
  country: 'India',
  stars: 4.64,
  cost: 16823,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-775755744436357395/original/74b5dbd5-7f66-494e-8833-10b865a5284c.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-775755744436357395/original/74b5dbd5-7f66-494e-8833-10b865a5284c.jpeg?im_w=720',
  index: 36
},
{
  name: 'Kamshet',
  country: 'India',
  stars: 5,
  cost: 28529,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-770903924187748958/original/231bce0b-6894-46c7-933b-efad37200e69.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-770903924187748958/original/231bce0b-6894-46c7-933b-efad37200e69.jpeg?im_w=720',
  index: 37
},
{
  name: 'Pune',
  country: 'India',
  stars: 4.12,
  cost: 38115,
  image1: 'https://a0.muscache.com/im/pictures/hosting/Hosting-957063574596179611/original/30a4b50a-545f-4b73-adf8-ad2607178e11.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/hosting/Hosting-957063574596179611/original/30a4b50a-545f-4b73-adf8-ad2607178e11.jpeg?im_w=720',
  index: 38
},
{
  name: 'Kamshet',
  country: 'India',
  stars: 5,
  cost: 40226,
  image1: 'https://a0.muscache.com/im/pictures/1466d5a7-2011-4477-800f-cc53e8ee715e.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/1466d5a7-2011-4477-800f-cc53e8ee715e.jpg?im_w=720',
  index: 39
},
{
  name: 'Vihir',
  country: 'India',
  stars: 4.94,
  cost: 11636,
  image1: 'https://a0.muscache.com/im/pictures/ca1833a0-3000-4624-95fe-52b2f08e4f50.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/ca1833a0-3000-4624-95fe-52b2f08e4f50.jpg?im_w=720',
  index: 40
},
{
  name: 'Pawna',
  country: 'India',
  stars: 4.95,
  cost: 22463,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-882981419081579135/original/2d31fcfc-44ba-42ea-b3f9-78af2702d26a.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-882981419081579135/original/2d31fcfc-44ba-42ea-b3f9-78af2702d26a.jpeg?im_w=720',
  index: 41
},
{
  name: 'Karandoli',
  country: 'India',
  stars: 4.43,
  cost: 35934,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-954147257574489511/original/54959b3e-dfc6-4497-9716-d58409c4f73e.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-954147257574489511/original/54959b3e-dfc6-4497-9716-d58409c4f73e.jpeg?im_w=720',
  index: 42
},
{
  name: 'Pune',
  country: 'India',
  stars: 4.5,
  cost: 42000,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-48384952/original/af13e735-3b3b-4767-95b5-dbd808dd7fa8.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-48384952/original/af13e735-3b3b-4767-95b5-dbd808dd7fa8.jpeg?im_w=720',
  index: 43
},
{
  name: 'Pune',
  country: 'India',
  stars: 4.65,
  cost: 6664,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-890272723333153233/original/999d0625-1893-4548-8080-78c3ce687af9.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-890272723333153233/original/999d0625-1893-4548-8080-78c3ce687af9.jpeg?im_w=720',
  index: 44
},
{
  name: 'Dongargaon',
  country: 'India',
  stars: 4.76,
  cost: 16077,
  image1: 'https://a0.muscache.com/im/pictures/ea7ae4db-ea7d-4c3a-bbf4-02800ebb7e53.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/ea7ae4db-ea7d-4c3a-bbf4-02800ebb7e53.jpg?im_w=720',
  index: 45
},
{
  name: 'Pune',
  country: 'India',
  stars: 4.57,
  cost: 40000,
  image1: 'https://a0.muscache.com/im/pictures/95c25b18-3bf4-4acc-86c8-ce5ecc7c13b6.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/95c25b18-3bf4-4acc-86c8-ce5ecc7c13b6.jpg?im_w=720',
  index: 46
},
{
  name: 'Kolechafesar',
  country: 'India',
  stars: 4.36,
  cost: 31953,
  image1: 'https://a0.muscache.com/im/pictures/hosting/Hosting-961283606075489312/original/79642569-cc7a-4731-a908-df2dbec03d32.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/hosting/Hosting-961283606075489312/original/79642569-cc7a-4731-a908-df2dbec03d32.jpeg?im_w=720',
  index: 47
},
{
  name: 'Nandivali',
  country: 'India',
  stars: 4.76,
  cost: 2590,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-52808762/original/09845e04-5a93-4ca7-a1c1-54c8178e92c9.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-52808762/original/09845e04-5a93-4ca7-a1c1-54c8178e92c9.jpeg?im_w=720',
  index: 48
},
{
  name: 'Ambavane',
  country: 'India',
  stars: 4.07,
  cost: 53376,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-762232895428397439/original/a2af1b04-1024-4014-a538-efde97b378bd.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-762232895428397439/original/a2af1b04-1024-4014-a538-efde97b378bd.jpeg?im_w=720',
  index: 49
},
{
  name: 'Mulshi',
  country: 'India',
  stars: 4.8,
  cost: 18901,
  image1: 'https://a0.muscache.com/im/pictures/a5a4f2d8-943c-4c72-aaf7-ecf8dfacb9a8.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/a5a4f2d8-943c-4c72-aaf7-ecf8dfacb9a8.jpg?im_w=720',
  index: 50
},
{
  name: 'Kamshet',
  country: 'India',
  stars: 4.85,
  cost: 5595,
  image1: 'https://a0.muscache.com/im/pictures/e301723c-9742-4201-8d53-893a8b4166f5.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/e301723c-9742-4201-8d53-893a8b4166f5.jpg?im_w=720',
  index: 51
},
{
  name: 'Pimpri-Chinchwad',
  country: 'India',
  stars: 4.91,
  cost: 4122,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-762560936993464697/original/b71468a8-01dd-4eed-aad9-c68bb2bcd172.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-762560936993464697/original/b71468a8-01dd-4eed-aad9-c68bb2bcd172.jpeg?im_w=720',
  index: 52
},
{
  name: 'Pune',
  country: 'India',
  stars: 5,
  cost: 10271,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-52048813/original/3a9f8cb2-cad0-4d46-852c-9795afda1227.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-52048813/original/3a9f8cb2-cad0-4d46-852c-9795afda1227.jpeg?im_w=720',
  index: 53
},
{
  name: 'Gahunje',
  country: 'India',
  stars: 4.95,
  cost: 5369,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-23245014/original/d5490747-507a-46e1-8291-749b4e6f2199.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-23245014/original/d5490747-507a-46e1-8291-749b4e6f2199.jpeg?im_w=720',
  index: 54
},
{
  name: 'Lonavla',
  country: 'India',
  stars: 4.96,
  cost: 14033,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-654641267958645669/original/54dbd5ef-01cf-4016-be05-73a841a75b09.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-654641267958645669/original/54dbd5ef-01cf-4016-be05-73a841a75b09.jpeg?im_w=720',
  index: 55
},
{
  name: 'Karla',
  country: 'India',
  stars: 4.92,
  cost: 6389,
  image1: 'https://a0.muscache.com/im/pictures/4f7f6e40-ee87-4626-8576-68f5f3b75ca7.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/4f7f6e40-ee87-4626-8576-68f5f3b75ca7.jpg?im_w=720',
  index: 56
},
{
  name: 'Pune',
  country: 'India',
  stars: 4.95,
  cost: 5151,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-956543399838553695/original/bc30a310-ae19-4cbb-a064-cd6a5baebb2a.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-956543399838553695/original/bc30a310-ae19-4cbb-a064-cd6a5baebb2a.jpeg?im_w=720',
  index: 57
},
{
  name: 'Koshimghar',
  country: 'India',
  stars: 4.91,
  cost: 5830,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/8711dc45-edaa-452e-8502-628f72784757.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/8711dc45-edaa-452e-8502-628f72784757.jpeg?im_w=720',
  index: 58
},
{
  name: 'Lonavala',
  country: 'India',
  stars: 4.77,
  cost: 20240,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1049733190500047152/original/5551c262-55d1-4a2d-94f0-f0ad98ce468f.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1049733190500047152/original/5551c262-55d1-4a2d-94f0-f0ad98ce468f.jpeg?im_w=720',
  index: 59
},
{
  name: 'Lonavala',
  country: 'India',
  stars: 4.68,
  cost: 14302,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1049736892489079017/original/305776b0-0857-416f-a92e-97191ad97f13.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1049736892489079017/original/305776b0-0857-416f-a92e-97191ad97f13.jpeg?im_w=720',
  index: 60
}]
}
