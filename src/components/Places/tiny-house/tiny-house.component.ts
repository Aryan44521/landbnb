import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../Helpers/card/card.component';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-tiny-house',
  standalone: true,
  imports: [FormsModule,CommonModule,CardComponent,NavbarComponent],
  templateUrl: './tiny-house.component.html',
  styleUrl: './tiny-house.component.css'
})
export class TinyHouseComponent {
  places = [
    {
      name: 'Jibhi',
      country: 'India',
      stars: 4.93,
      cost: 12553,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-804959254707180514/original/fdba3a5f-da62-4b50-83ea-517639ba1385.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-804959254707180514/original/ea291b96-a445-4f87-aa56-46b546302f1e.jpeg?im_w=720',
      index: 0
    },
    {
      name: 'Kottathara',
      country: 'India',
      stars: 4.97,
      cost: 6846,
      image1: 'https://a0.muscache.com/im/pictures/c59d4481-f48a-43db-ade2-1df5689b725f.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720',
      index: 1
    },
    {
      name: 'Hua Hin',
      country: 'Thailand',
      stars: 5,
      cost: 10448,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-53163431/original/b795749c-0d45-48b9-b458-120dbfba9794.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/77c3c61e-930a-4e7c-ab4d-59413c1f0b87.jpg?im_w=720',
      index: 2
    },
    {
      name: 'Chang Klang',
      country: 'Thailand',
      stars: 4.77,
      cost: 5081,
      image1: 'https://a0.muscache.com/im/pictures/6b255963-bd3d-4b70-8b4c-b4dd5e77092a.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/5ed14bcb-288b-4f89-851d-6443a3a27c15.jpg?im_w=720',
      index: 3
    },
    {
      name: 'รอบเวียง',
      country: 'Thailand',
      stars: 4.97,
      cost: 2540,
      image1: 'https://a0.muscache.com/im/pictures/ec7a55ab-31d6-483b-9386-ad6a213d94db.jpg?im_w=720',
      image2: '',
      index: 4
    },
    {
      name: 'Palshet',
      country: 'India',
      stars: 4.37,
      cost: 10271,
      image1: 'https://a0.muscache.com/im/pictures/3cfab2a2-cd73-4e67-8e39-ef74d5b50cf2.jpg?im_w=720',
      image2: '',
      index: 5
    },
    {
      name: 'Idukki',
      country: 'India',
      stars: 4.79,
      cost: 5718,
      image1: 'https://a0.muscache.com/im/pictures/7be27856-9ea9-424b-81ae-7672e37a5229.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/16b96ba8-636e-4057-a854-f08ec8e48c18.jpg?im_w=720',
      index: 6
    },
    {
      name: 'Doddanahalli',
      country: 'India',
      stars: 4.34,
      cost: 28529,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-592295535437322987/original/053fb681-7bcd-4629-b33e-c14e22d2ebe9.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-592295535437322987/original/05f49e42-3107-4a28-83be-3a0abe3dd673.jpeg?im_w=720',
      index: 7
    },
    {
      name: 'Koh Phangan',
      country: 'Thailand',
      stars: 4.98,
      cost: 4853,
      image1: 'https://a0.muscache.com/im/pictures/6d162690-bc75-4345-a3ae-16ebdf1dd9b3.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/364b7ebd-6c72-4b99-a4d2-7c95f53f4196.jpg?im_w=720',
      index: 8
    },
    {
      name: 'Palshet',
      country: 'India',
      stars: 4.45,
      cost: 10271,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-29375910/original/ec1c796c-1c31-4249-afc3-963cbde91268.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-29375910/original/cdfbd159-f848-4ce8-adbf-477328582f7a.jpeg?im_w=720',
      index: 9
    },
    {
      name: 'Jibhi',
      country: 'India',
      stars: 4.87,
      cost: 11412,
      image1: 'https://a0.muscache.com/im/pictures/9c6a355b-5d15-492f-a014-06380db5fbc7.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/hosting/Hosting-984786254699522803/original/10e150d6-19cb-47f7-ba3e-b4ec069b52b0.jpeg?im_w=720',
      index: 10
    },
    {
      name: 'Kamshet',
      country: 'India',
      stars: 4.85,
      cost: 5595,
      image1: 'https://a0.muscache.com/im/pictures/6b0a1b50-e50a-4766-adbe-e96b9e47bb2c.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-33978312/original/9b13a712-0cbc-4987-a0a9-107fad357674.jpeg?im_w=720',
      index: 11
    },
    {
      name: 'Fagu',
      country: 'India',
      stars: 5,
      cost: 12141,
      image1: 'https://a0.muscache.com/im/pictures/afa4e3bd-e6b6-4766-9e6f-5d00dec9cddc.jpg?im_w=720',
      image2: '',
      index: 12
    },
    {
      name: 'IN',
      country: 'India',
      stars: 4.88,
      cost: 11982,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-49020640/original/c53cca7f-d556-4847-a3c1-78843bf1066f.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-49020640/original/407eaa03-2ffe-4aed-a0d9-2e020eab6afb.jpeg?im_w=720',
      index: 13
    },
    {
      name: 'Chikkamagaluru',
      country: 'India',
      stars: 4.8,
      cost: 7417,
      image1: 'https://a0.muscache.com/im/pictures/23025cbe-d77e-4529-b7e4-29d84728b851.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/a4243bf9-5c86-4f69-9493-3ccab2f438fe.jpg?im_w=720',
      index: 14
    },
    {
      name: 'Lak Si',
      country: 'Thailand',
      stars: 4.89,
      cost: 3344,
      image1: 'https://a0.muscache.com/im/pictures/0a177fee-e687-4643-984f-d78f04aef5ec.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/104399887/7d49f273_original.jpg?im_w=720',
      index: 15
    },
    {
      name: 'Lonavla',
      country: 'India',
      stars: 4.94,
      cost: 5592,
      image1: 'https://a0.muscache.com/im/pictures/40da1555-aa9e-4c24-9f1b-0ca19b660b2d.jpg?im_w=720',
      image2: '',
      index: 16
    },
    {
      name: 'Bangkok',
      country: 'Thailand',
      stars: 4.98,
      cost: 4440,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-692619177322443519/original/e10d27ed-474b-459b-a1a6-b5c44c19541b.jpeg?im_w=720',
      image2: '',
      index: 17
    },
    {
      name: 'รอบเวียง',
      country: 'Thailand',
      stars: 4.97,
      cost: 2540,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-911905386383020024/original/4052c558-ba87-41c9-97e4-b859a235dcf0.jpeg?im_w=720',
      image2: '',
      index: 18
    },
    {
      name: 'Nashik',
      country: 'India',
      stars: 4.9,
      cost: 3309,
      image1: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/d1/4b/d8/little-cove-yoga-ayurveda.jpg?w=300&h=-1&s=1',
      image2: '',
      index: 19
    },
    {
      name: 'Amphoe Mueang Chiang Mai',
      country: 'Thailand',
      stars: 4.86,
      cost: 2070,
      image1: 'https://a0.muscache.com/im/pictures/82c0a664-af65-401c-a61b-e0eafdf84158.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-52816260/original/d5269a72-3cc2-4280-a05a-f4044702a2d1.jpeg?im_w=720',
      index: 20
    },
    {
      name: 'Amphoe Pai',
      country: 'Thailand',
      stars: 4.91,
      cost: 1337,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-4570542/original/4e2308c4-b855-46cb-ad30-761c7c273a7f.jpeg?im_w=720',
      image2: '',
      index: 21
    },
    {
      name: 'Mananthavady',
      country: 'India',
      stars: 4.79,
      cost: 2853,
      image1: 'https://a0.muscache.com/im/pictures/e38b831a-1d10-402b-82c1-6445d13bbe4b.jpg?im_w=720',
      image2: '',
      index: 22
    },
    {
      name: 'Gangtok',
      country: 'India',
      stars: 4.92,
      cost: 5249,
      image1: 'https://a0.muscache.com/im/pictures/fae6d803-7eba-4d09-8c02-18084d326dc0.jpg?im_w=720',
      image2: '',
      index: 23
    },
    {
      name: 'Valnur Thyagathur',
      country: 'India',
      stars: 4.91,
      cost: 7189,
      image1: 'https://a0.muscache.com/im/pictures/9d330aa8-0b77-4a1c-8bfb-df5ab1b636a1.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-763939632780306975/original/b73b3dbb-4ecb-48d9-b0f0-0dec7e47456a.jpeg?im_w=720',
      index: 24
    },
    {
      name: 'Wiang Tai',
      country: 'Thailand',
      stars: 4.87,
      cost: 1523,
      image1: 'https://a0.muscache.com/im/pictures/53a165a6-4836-479c-963b-45e700a9d778.jpg?im_w=720',
      image2: '',
      index: 25
    },
    {
      name: 'พระสิงห์',
      country: 'Thailand',
      stars: 4.83,
      cost: 5011,
      image1: 'https://a0.muscache.com/im/pictures/61693694-fe9e-4e88-9fb1-899feb2ca92d.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-940619174163790865/original/daf544af-04c3-4c43-875c-d534232fcb5e.jpeg?im_w=720',
      index: 26
    },
    {
      name: 'Uttarkashi',
      country: 'India',
      stars: 4.97,
      cost: 1826,
      image1: 'https://a0.muscache.com/im/pictures/b8780230-70c2-4d1d-a99a-8c2ff827d953.jpg?im_w=720',
      image2: '',
      index: 27
    },
    {
      name: 'Pai',
      country: 'Thailand',
      stars: 4.89,
      cost: 3496,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-580261419619831357/original/ca6e1013-058f-4fcb-ad21-240db8186473.jpeg?im_w=720',
      image2: '',
      index: 28
    },
    {
      name: 'Don Tako',
      country: 'Thailand',
      stars: 4.91,
      cost: 6123,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-940619174163790865/original/e051be9f-150d-4734-b766-7b6798c2b0c9.jpeg?im_w=720',
      image2: '',
      index: 29
    },
    {
      name: 'Khet Bangkok Noi',
      country: 'Thailand',
      stars: 4.91,
      cost: 1892,
      image1: 'https://a0.muscache.com/im/pictures/c9711b3a-2190-4fe2-9473-aee525ede38d.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/fc9ea327-3605-4e71-9eed-901fe32661bf.jpg?im_w=720',
      index: 30
    },
    {
      name: 'Muang Pattaya',
      country: 'Thailand',
      stars: 4.85,
      cost: 6069,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-930631543210157932/original/fc1df3a2-5920-4942-acf3-f075c4ffea61.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/34aca15c-3627-4e09-8cf2-7112e4ca26bf.jpg?im_w=720',
      index: 31
    },
    {
      name: 'Bommayapalayam',
      country: 'India',
      stars: 4.9,
      cost: 1940,
      image1: 'https://a0.muscache.com/im/pictures/f3927c1d-8423-42cf-b62e-7376c395bf1d.jpg?im_w=720',
      image2: '',
      index: 32
    },
    {
      name: 'Patnem Beach',
      country: 'India',
      stars: 4.81,
      cost: 6162,
      image1: 'https://a0.muscache.com/im/pictures/bb827c17-e381-4719-b472-52b507776f6a.jpg?im_w=720',
      image2: '',
      index: 33
    },
    {
      name: 'Calangute',
      country: 'India',
      stars: 4.96,
      cost: 4565,
      image1: 'https://a0.muscache.com/im/pictures/4e3d6567-1fb7-4119-ad61-80971492b8dc.jpg?im_w=720',
      image2: '',
      index: 34
    },
    
  ];

  ngOnInit() {
    console.log(this.places);
  }
}
