import { Component } from '@angular/core';
import { CardComponent } from '../../Helpers/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
@Component({
  selector: 'app-camping',
  standalone: true,
  imports: [CardComponent,FormsModule,CommonModule,NavbarComponent],
  templateUrl: './camping.component.html',
  styleUrl: './camping.component.css'
})
export class CampingComponent {
  places=[{
    name: 'Wadi Rum Village',
    country: 'Jordan',
    stars: 4.87,
    cost: 1136,
    image1: 'https://a0.muscache.com/im/pictures/d31ff0cf-e8b4-4f03-8ca4-3d91d93263bb.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/d31ff0cf-e8b4-4f03-8ca4-3d91d93263bb.jpg?im_w=720',
    index: 0
  },
  {
    name: 'Al Ula',
    country: 'Saudi Arabia',
    stars: 4.78,
    cost: 32827,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1031055485526682886/original/5fd26828-9985-45d1-84d3-70026406835f.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1031055485526682886/original/5fd26828-9985-45d1-84d3-70026406835f.jpeg?im_w=720',
    index: 1
  },
  {
    name: 'Top Station',
    country: 'India',
    stars: 4.37,
    cost: 3424,
    image1: 'https://a0.muscache.com/im/pictures/8932fa72-8bc5-4bd4-9f27-2c65ee22c911.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/8932fa72-8bc5-4bd4-9f27-2c65ee22c911.jpg?im_w=720',
    index: 2
  },
  {
    name: 'Wadi Rum Village',
    country: 'Jordan',
    stars: 4.51,
    cost: 1596,
    image1: 'https://a0.muscache.com/im/pictures/f7283c77-7c0d-40ed-a686-c13bb3a247dc.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/f7283c77-7c0d-40ed-a686-c13bb3a247dc.jpg?im_w=720',
    index: 3
  },
  {
    name: 'Bidiyah',
    country: 'Oman',
    stars: 4.76,
    cost: 11069,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-821516730029751465/original/b6dad850-69f7-4d3e-8c25-989d00c2b243.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-821516730029751465/original/b6dad850-69f7-4d3e-8c25-989d00c2b243.jpeg?im_w=720',
    index: 4
  },
  {
    name: 'Liwa Qasabat al-Aqaba',
    country: 'Jordan',
    stars: 5,
    cost: 1069,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-51282371/original/181383da-331e-4963-bbe7-12406bd99a40.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-51282371/original/181383da-331e-4963-bbe7-12406bd99a40.jpeg?im_w=720',
    index: 5
  },
  {
    name: 'Dindigul',
    country: 'India',
    stars: 4.15,
    cost: 2282,
    image1: 'https://a0.muscache.com/im/pictures/ac37b117-d9c6-4791-a3da-9479ac3a9db3.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/ac37b117-d9c6-4791-a3da-9479ac3a9db3.jpg?im_w=720',
    index: 6
  },
  {
    name: 'Salkha',
    country: 'India',
    stars: 4.21,
    cost: 22424,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-579372313654070752/original/89e64099-0bc4-4e6a-8f20-74f3bd8191e7.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-579372313654070752/original/89e64099-0bc4-4e6a-8f20-74f3bd8191e7.jpeg?im_w=720',
    index: 7
  },
  {
    name: 'Wadi Rum Village',
    country: 'Jordan',
    stars: 4.89,
    cost: 1336,
    image1: 'https://a0.muscache.com/im/pictures/0cb4cdfd-8b81-460e-b9d1-89950697eb8c.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/0cb4cdfd-8b81-460e-b9d1-89950697eb8c.jpg?im_w=720',
    index: 8
  },
  {
    name: 'Johor',
    country: 'Malaysia',
    stars: 4.2,
    cost: 40048,
    image1: 'https://a0.muscache.com/im/pictures/64ea70f8-0df0-4747-9860-2980ee4c21ab.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/64ea70f8-0df0-4747-9860-2980ee4c21ab.jpg?im_w=720',
    index: 9
  },
  {
    name: 'Wadi Rum Village',
    country: 'Jordan',
    stars: 5,
    cost: 3339,
    image1: 'https://a0.muscache.com/im/pictures/84d45581-2d4b-48e0-930e-26680f778265.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/84d45581-2d4b-48e0-930e-26680f778265.jpg?im_w=720',
    index: 10
  },
  {
    name: 'Smanora Range',
    country: 'India',
    stars: 4.18,
    cost: 15406,
    image1: 'https://a0.muscache.com/im/pictures/273cac65-ccc3-4060-8e24-0acff840572b.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/273cac65-ccc3-4060-8e24-0acff840572b.jpg?im_w=720',
    index: 11
  },
  {
    name: 'Wadi Rum Village',
    country: 'Jordan',
    stars: 4.47,
    cost: 947,
    image1: 'https://a0.muscache.com/im/pictures/71f66274-15cc-4d12-bef4-3ddb2c8d4a95.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/71f66274-15cc-4d12-bef4-3ddb2c8d4a95.jpg?im_w=720',
    index: 12
  },
  {
    name: 'Wadi Rum Village',
    country: 'Jordan',
    stars: 5,
    cost: 1202,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-40166553/original/c2908ce6-4f88-4b3b-b385-78680bce33af.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-40166553/original/c2908ce6-4f88-4b3b-b385-78680bce33af.jpeg?im_w=720',
    index: 13
  },
  {
    name: 'العقبة',
    country: 'Jordan',
    stars: 4.65,
    cost: 1705,
    image1: 'https://a0.muscache.com/im/pictures/f4d338aa-116d-4f14-a50b-66994fdf1171.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/f4d338aa-116d-4f14-a50b-66994fdf1171.jpg?im_w=720',
    index: 14
  },
  {
    name: 'Wadi Rum Village',
    country: 'Jordan',
    stars: 4.69,
    cost: 4735,
    image1: 'https://a0.muscache.com/im/pictures/23c2aa7d-fe09-4b02-97db-d3ff25b73a93.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/23c2aa7d-fe09-4b02-97db-d3ff25b73a93.jpg?im_w=720',
    index: 15
  },
  {
    name: 'Wadi Rum Village',
    country: 'Jordan',
    stars: 4.9,
    cost: 1336,
    image1: 'https://a0.muscache.com/im/pictures/d1dd820f-5b86-4c88-84ed-1b0b3c64b292.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/d1dd820f-5b86-4c88-84ed-1b0b3c64b292.jpg?im_w=720',
    index: 16
  },
  {
    name: 'Wadi Rum Village',
    country: 'Jordan',
    stars: 4.7,
    cost: 1421,
    image1: 'https://a0.muscache.com/im/pictures/9515872f-773c-4f35-aea8-495dddd799c0.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/9515872f-773c-4f35-aea8-495dddd799c0.jpg?im_w=720',
    index: 17
  },
  {
    name: 'Wadi Rum',
    country: 'Jordan',
    stars: 4.89,
    cost: 7102,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-47595015/original/85beb28a-fb78-4ffd-8380-a8c56e5a0c74.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-47595015/original/85beb28a-fb78-4ffd-8380-a8c56e5a0c74.jpeg?im_w=720',
    index: 18
  },
  {
    name: 'Tambon Su Thep',
    country: 'Thailand',
    stars: 5,
    cost: 68981,
    image1: 'https://a0.muscache.com/im/pictures/fb5d3e49-d9ae-42d3-9656-ff6d5014bb5c.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/fb5d3e49-d9ae-42d3-9656-ff6d5014bb5c.jpg?im_w=720',
    index: 19
  },
  {
    name: 'Koh Chang',
    country: 'Thailand',
    stars: 4.97,
    cost: 9587,
    image1: 'https://a0.muscache.com/im/pictures/274da208-e69e-4c89-85dd-22b176abc18d.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/274da208-e69e-4c89-85dd-22b176abc18d.jpg?im_w=720',
    index: 20
  },
  {
    name: 'Seksyen 16',
    country: 'Malaysia',
    stars: 4.76,
    cost: 3023,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-929217545119974796/original/ebd372e5-6dbc-4000-b4e0-43aee45732af.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-929217545119974796/original/ebd372e5-6dbc-4000-b4e0-43aee45732af.jpeg?im_w=720',
    index: 21
  },
  {
    name: 'Ao Nang',
    country: 'Thailand',
    stars: 4.9,
    cost: 5624,
    image1: 'https://a0.muscache.com/im/pictures/6a80a5f2-e106-4e33-8693-8d0cfe98ddee.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/6a80a5f2-e106-4e33-8693-8d0cfe98ddee.jpg?im_w=720',
    index: 22
  },
  {
    name: 'Shahapur',
    country: 'India',
    stars: 5,
    cost: 2282,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-695541260642923291/original/17d80dd5-7a58-4fd9-bc69-7ebe23019ea0.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-695541260642923291/original/17d80dd5-7a58-4fd9-bc69-7ebe23019ea0.jpeg?im_w=720',
    index: 23
  },
  {
    name: 'Quairah District',
    country: 'Jordan',
    stars: 4.88,
    cost: 1421,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-53000025/original/aa9b4530-b0bf-4353-ae1e-8b037749f3ab.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-53000025/original/aa9b4530-b0bf-4353-ae1e-8b037749f3ab.jpeg?im_w=720',
    index: 24
  },
  {
    name: 'Permaisuri',
    country: 'Malaysia',
    stars: 4.86,
    cost: 5006,
    image1: 'https://a0.muscache.com/im/pictures/4b5ad1e9-8b0e-4ec3-9440-b50068810586.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/4b5ad1e9-8b0e-4ec3-9440-b50068810586.jpg?im_w=720',
    index: 25
  },
  {
    name: 'Wadi Rum Village',
    country: 'Jordan',
    stars: 5,
    cost: 1336,
    image1: 'https://a0.muscache.com/im/pictures/9f9124e7-6b50-48e9-8c71-f632c66d77f5.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/9f9124e7-6b50-48e9-8c71-f632c66d77f5.jpg?im_w=720',
    index: 26
  },
  {
    name: 'Bentong',
    country: 'Malaysia',
    stars: 4.86,
    cost: 3004,
    image1: 'https://a0.muscache.com/im/pictures/5bc1e8e2-9ede-482c-900e-0de70fe5838a.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/5bc1e8e2-9ede-482c-900e-0de70fe5838a.jpg?im_w=720',
    index: 27
  },
  {
    name: 'Wadi Rum',
    country: 'Jordan',
    stars: 4.86,
    cost: 2746,
    image1: 'https://a0.muscache.com/im/pictures/568ad47c-54f5-4583-a17f-dac9b936aea3.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/568ad47c-54f5-4583-a17f-dac9b936aea3.jpg?im_w=720',
    index: 28
  },
  {
    name: 'Koh Chang',
    country: 'Thailand',
    stars: 4.92,
    cost: 5687,
    image1: 'https://a0.muscache.com/im/pictures/55a28ebe-9fb7-42e7-a719-5fa2de0e0078.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/55a28ebe-9fb7-42e7-a719-5fa2de0e0078.jpg?im_w=720',
    index: 29
  },
  {
    name: 'Petaling Jaya',
    country: 'Malaysia',
    stars: 4.8,
    cost: 29478,
    image1: 'https://a0.muscache.com/im/pictures/2ea9d5bc-2639-4f2a-90f8-5206f3bd67f6.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/2ea9d5bc-2639-4f2a-90f8-5206f3bd67f6.jpg?im_w=720',
    index: 30
  },
  {
    name: 'Kodagu',
    country: 'India',
    stars: 4.75,
    cost: 1598,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-818350395881615522/original/5c3e3d63-2337-4f9a-b06e-f2a225902d5d.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-818350395881615522/original/5c3e3d63-2337-4f9a-b06e-f2a225902d5d.jpeg?im_w=720',
    index: 31
  },
  {
    name: 'AlUla',
    country: 'Saudi Arabia',
    stars: 5,
    cost: 6313,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-875831694771428189/original/f4e57383-865c-49fd-b327-8cef4bb6836e.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-875831694771428189/original/f4e57383-865c-49fd-b327-8cef4bb6836e.jpeg?im_w=720',
    index: 32
  },
  {
    name: 'Ipoh',
    country: 'Malaysia',
    stars: 4.73,
    cost: 33949,
    image1: 'https://a0.muscache.com/im/pictures/5a844564-69ab-4836-8b17-66cec2e2d275.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/5a844564-69ab-4836-8b17-66cec2e2d275.jpg?im_w=720',
    index: 33
  },
  {
    name: 'Wayanad',
    country: 'India',
    stars: 4.89,
    cost: 3365,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-640247550077176521/original/9f3935c1-8ceb-4d1e-86cf-89a66ca76527.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-640247550077176521/original/9f3935c1-8ceb-4d1e-86cf-89a66ca76527.jpeg?im_w=720',
    index: 34
  },
  {
    name: 'South Goa',
    country: 'India',
    stars: 5,
    cost: 2568,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-790104764371300975/original/4bcc9c3a-b52c-424a-b4d7-13c48117ed64.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-790104764371300975/original/4bcc9c3a-b52c-424a-b4d7-13c48117ed64.jpeg?im_w=720',
    index: 35
  },
  {
    name: 'Kangar',
    country: 'Malaysia',
    stars: 4.67,
    cost: 2183,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-54133461/original/66cf062b-3a57-497a-a20b-e809f22150a1.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-54133461/original/66cf062b-3a57-497a-a20b-e809f22150a1.jpeg?im_w=720',
    index: 36
  },
  {
    name: 'Petaling Jaya',
    country: 'Malaysia',
    stars: 5,
    cost: 49659,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-822001939563749350/original/99bb732f-9495-4828-bc33-8598954b33fa.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-822001939563749350/original/99bb732f-9495-4828-bc33-8598954b33fa.jpeg?im_w=720',
    index: 37
  },
  {
    name: 'Wadi Rum Village',
    country: 'Jordan',
    stars: 4.84,
    cost: 852,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-50673217/original/7a21d5c3-09da-473a-a38e-018434063936.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-50673217/original/7a21d5c3-09da-473a-a38e-018434063936.jpeg?im_w=720',
    index: 38
  },
  {
    name: 'Wathuregama',
    country: 'Sri Lanka',
    stars: 4.91,
    cost: 10008,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-693121226333338233/original/1f0d5751-8dca-4c0a-aefa-403c2c9f0175.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-693121226333338233/original/1f0d5751-8dca-4c0a-aefa-403c2c9f0175.jpeg?im_w=720',
    index: 39
  },
  {
    name: 'Wadi Rum Village',
    country: 'Jordan',
    stars: 4.93,
    cost: 1421,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-780269031337916268/original/47998d37-1d4e-4c68-83fa-f916652ff12b.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-780269031337916268/original/47998d37-1d4e-4c68-83fa-f916652ff12b.jpeg?im_w=720',
    index: 40
  },
  {
    name: 'الملسن',
    country: 'Saudi Arabia',
    stars: 4.3,
    cost: 6313,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-942525580756883622/original/90189719-a2f8-470b-ac8a-8edf5b4cade9.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-942525580756883622/original/90189719-a2f8-470b-ac8a-8edf5b4cade9.jpeg?im_w=720',
    index: 41
  },
  {
    name: 'Wadi Rum Village',
    country: 'Jordan',
    stars: 4.95,
    cost: 1175,
    image1: 'https://a0.muscache.com/im/pictures/07f70ffd-0d5a-4c1c-9355-8e3635ce793a.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/07f70ffd-0d5a-4c1c-9355-8e3635ce793a.jpg?im_w=720',
    index: 42
  },
  {
    name: 'Shahapur',
    country: 'India',
    stars: 4.87,
    cost: 2282,
    image1: 'https://a0.muscache.com/im/pictures/44821697-df3a-4b45-9fcb-f6bb6e6850c6.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/44821697-df3a-4b45-9fcb-f6bb6e6850c6.jpg?im_w=720',
    index: 43
  },
  {
    name: 'Udaipur',
    country: 'India',
    stars: 4.98,
    cost: 5261,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-813268085167365807/original/90f5e5de-d9ed-4d25-8e8f-e00a592eca72.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-813268085167365807/original/90f5e5de-d9ed-4d25-8e8f-e00a592eca72.jpeg?im_w=720',
    index: 44
  },
  {
    name: 'Cheriyamkolly',
    country: 'India',
    stars: 4.97,
    cost: 10727,
    image1: 'https://a0.muscache.com/im/pictures/9620c6ce-b583-4d30-bb31-8293e305e861.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/9620c6ce-b583-4d30-bb31-8293e305e861.jpg?im_w=720',
    index: 45
  },
  {
    name: 'الملسن',
    country: 'Saudi Arabia',
    stars: 4.99,
    cost: 6313,
    image1: 'https://a0.muscache.com/im/pictures/7fde1672-2160-4593-90cd-00bd75da732a.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/7fde1672-2160-4593-90cd-00bd75da732a.jpg?im_w=720',
    index: 46
  },
  {
    name: 'Quriyat',
    country: 'Oman',
    stars: 5,
    cost: 15320,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-693902559104284608/original/e81a689c-3578-470b-8756-a8e85dccd9ce.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-693902559104284608/original/e81a689c-3578-470b-8756-a8e85dccd9ce.jpeg?im_w=720',
    index: 47
  },
  {
    name: 'Byapalli',
    country: 'India',
    stars: 4.81,
    cost: 4639,
    image1: 'https://a0.muscache.com/im/pictures/ee47f23c-d331-4933-ad37-c7a3c9929b55.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/ee47f23c-d331-4933-ad37-c7a3c9929b55.jpg?im_w=720',
    index: 48
  },
  {
    name: 'Ash Sharqiyah North Governorate',
    country: 'Oman',
    stars: 4.93,
    cost: 8954,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-639663997749032344/original/2551336f-5a44-401a-a6c6-822a7d4afebf.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-639663997749032344/original/2551336f-5a44-401a-a6c6-822a7d4afebf.jpeg?im_w=720',
    index: 49
  },
  {
    name: 'Wadi Rum Village ',
    country: 'Jordan',
    stars: 4.88,
    cost: 639,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-865903874887688367/original/45b5b10e-96f0-4f9d-8e46-90c3dbb32232.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-865903874887688367/original/45b5b10e-96f0-4f9d-8e46-90c3dbb32232.jpeg?im_w=720',
    index: 50
  },
  {
    name: 'Moneragala',
    country: 'Sri Lanka',
    stars: 4.91,
    cost: 4924,
    image1: 'https://a0.muscache.com/im/pictures/14609648-508a-48bc-b6e7-7b185ffb6c27.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/14609648-508a-48bc-b6e7-7b185ffb6c27.jpg?im_w=720',
    index: 51
  },
  {
    name: 'Bijanbari',
    country: 'India',
    stars: 5,
    cost: 3424,
    image1: 'https://a0.muscache.com/im/pictures/e0eccf04-7f62-4fd2-aae6-079208cbec90.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/e0eccf04-7f62-4fd2-aae6-079208cbec90.jpg?im_w=720',
    index: 52
  },
  {
    name: 'Wadi Rum ',
    country: 'Jordan',
    stars: 4.98,
    cost: 1989,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-964425524904115270/original/50f1a107-9f5f-4c55-915a-fb1a05e857a4.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-964425524904115270/original/50f1a107-9f5f-4c55-915a-fb1a05e857a4.jpeg?im_w=720',
    index: 53
  },
  {
    name: 'Wadi Rum Village',
    country: 'Jordan',
    stars: 4.97,
    cost: 947,
    image1: 'https://a0.muscache.com/im/pictures/6ac65391-e901-4347-944e-af06e28440bb.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/6ac65391-e901-4347-944e-af06e28440bb.jpg?im_w=720',
    index: 54
  },
  {
    name: 'SA',
    country: 'Saudi Arabia',
    stars: 4.78,
    cost: 7576,
    image1: 'https://a0.muscache.com/im/pictures/c5efde16-e98f-4597-b1a1-110fb6952cce.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/c5efde16-e98f-4597-b1a1-110fb6952cce.jpg?im_w=720',
    index: 55
  },
  {
    name: 'Tambon Pak Chong ',
    country: 'Thailand',
    stars: 5,
    cost: 3485,
    image1: 'https://a0.muscache.com/im/pictures/b35045e0-642a-4f2c-9c8d-a1c59c664d2f.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/b35045e0-642a-4f2c-9c8d-a1c59c664d2f.jpg?im_w=720',
    index: 56
  },
  {
    name: 'Al Masgi',
    country: 'Saudi Arabia',
    stars: 4.49,
    cost: 38459,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-46272064/original/784fdaac-90fd-48ec-a9e9-3aaf312bdab8.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-46272064/original/784fdaac-90fd-48ec-a9e9-3aaf312bdab8.jpeg?im_w=720',
    index: 57
  },
  {
    name: 'الملسن',
    country: 'Saudi Arabia',
    stars: 4.93,
    cost: 6313,
    image1: 'https://a0.muscache.com/im/pictures/0fa4875c-a60c-469a-b9f9-32bab5ac3c7a.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/0fa4875c-a60c-469a-b9f9-32bab5ac3c7a.jpg?im_w=720',
    index: 58
  },
  {
    name: 'Kecamatan Banjar',
    country: 'Indonesia',
    stars: 4.98,
    cost: 2948,
    image1: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1003093161653407275/original/2bbd7fbc-59e5-472c-920b-f80248ab3fe3.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1003093161653407275/original/2bbd7fbc-59e5-472c-920b-f80248ab3fe3.jpeg?im_w=720',
    index: 59
  }];

}
