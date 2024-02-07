import { Component } from '@angular/core';
import { CardComponent } from '../../Helpers/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
@Component({
  selector: 'app-design',
  standalone: true,
  imports: [CardComponent,FormsModule,CommonModule,NavbarComponent],
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent {
  places=[{
    name: 'Koh Samui',
    country: 'Thailand',
    stars: 4.45,
    cost: 514107,
    image1: 'https://a0.muscache.com/im/pictures/monet/Luxury-20470768/original/cc213ade-c939-4e2f-b0af-0149bda85030?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-617063718566302384/original/717a4c2d-e8a9-4798-8378-0d878e0ed56e.jpeg?im_w=720',
    index: 0
  },
  {
    name: 'Tambon Hua Hin',
    country: 'Thailand',
    stars: 4.85,
    cost: 30412,
    image1: 'https://a0.muscache.com/im/pictures/14152ff7-28fa-48cc-9c90-ac787fb5bb6b.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/monet/Luxury-54351340/original/42ebf54f-e39e-4156-97ec-076122c97359?im_w=720',
    index: 1
  },
  {
    name: 'Ko Samui',
    country: 'Thailand',
    stars: 4.86,
    cost: 16572,
    image1: 'https://a0.muscache.com/im/pictures/monet/Luxury-54351340/original/16ac6961-f5b7-44fa-bacf-96f8c2d0c0c2?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/2a1724ca-c902-4c82-b64a-215c2fd1e414.jpg?im_w=720',
    index: 2
  },
  {
    name: 'Ko Samui',
    country: 'Thailand',
    stars: 5,
    cost: 199107,
    image1: 'https://a0.muscache.com/im/pictures/fc72fed1-4a12-412a-b7a8-57f8a2711a91.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-820733145568572294/original/0c68a135-b239-4a95-b3d6-ad89816cd922.jpeg?im_w=720',
    index: 3
  },
  {
    name: 'Ko Samui',
    country: 'Thailand',
    stars: 4.89,
    cost: 40408,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-820733145568572294/original/a2e89ea1-b220-4150-aa67-dd71c7b05d2d.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/6a53fb5f-1bbc-4728-96de-17e9fe8780f3.jpg?im_w=720',
    index: 4
  },
  {
    name: 'Assagao',
    country: 'India',
    stars: 5,
    cost: 33410,
    image1: 'https://a0.muscache.com/im/pictures/7b671289-929b-4f94-94c9-9d0608d6a7ee.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-685846151445432693/original/0f5996d6-f1b6-49d0-a02d-4c6c16274168.jpeg?im_w=720',
    index: 5
  },
  {
    name: 'Cape Yamu',
    country: 'Thailand',
    stars: 4.6,
    cost: 173431,
    image1: 'https://a0.muscache.com/im/pictures/d14446fb-6860-422e-8294-8579c337006b.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/d279aebb-61f9-4690-945b-192948e7ec50.jpg?im_w=720',
    index: 6
  },
  {
    name: 'Khet Chatuchak',
    country: 'Thailand',
    stars: 4.89,
    cost: 5952,
    image1: 'https://a0.muscache.com/im/pictures/4bf00bd5-f65b-4579-a7c1-b07153fbf8f2.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-812489515735850680/original/44a9be3a-f072-49da-a77b-787659e45a13.jpeg?im_w=720',
    index: 7
  },
  {
    name: 'Ko Samui District',
    country: 'Thailand',
    stars: 4.51,
    cost: 144277,
    image1: 'https://a0.muscache.com/im/pictures/c25dc026-001c-426b-a28d-f264299d25e9.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/9132512c-a355-440e-8f7c-45a6cc0c508e.jpg?im_w=720',
    index: 8
  },
  {
    name: 'Paklok A. Thalang',
    country: 'Thailand',
    stars: 4.85,
    cost: 185753,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-791718797565875038/original/4a5b741c-5ebb-45a7-b61f-814d06106f49.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-738405202141869126/original/f77511a3-dbe6-413f-afcc-dc73d62e6cf4.jpeg?im_w=720',
    index: 9
  },
  {
    name: 'Koh Samui ',
    country: 'Thailand',
    stars: 4.84,
    cost: 208573,
    image1: 'https://a0.muscache.com/im/pictures/42de5c14-6089-4945-beb4-6b3e7d8853a0.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-889567351843714811/original/bbde49af-d5c3-4b26-8e69-b8e0daf07045.jpeg?im_w=720',
    index: 10
  },
  {
    name: 'Tambon Kamala',
    country: 'Thailand',
    stars: 4.86,
    cost: 338920,
    image1: 'https://a0.muscache.com/im/pictures/4cda6cd2-be83-4350-aec0-68e2ec6afef0.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-822694712660139042/original/aae69751-aa5f-43bc-95d3-941b0ecc8c94.jpeg?im_w=720',
    index: 11
  },
  {
    name: 'Takua Thung District',
    country: 'Phuket',
    stars: 4.58,
    cost: 282966,
    image1: 'https://a0.muscache.com/im/pictures/d8de18b2-6921-49dd-a6b7-89788dcf1971.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-52603835/original/8ed3f77a-cb94-47ac-8f05-f29b340f5785.jpeg?im_w=720',
    index: 12
  },
  {
    name: 'Tambon Sakoo',
    country: 'Amphur Thaland',
    stars: 4.08,
    cost: 200814,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-846077708217289030/original/5b8553d3-99f7-4ddf-8c6e-86fe1f56c2b2.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-32810673/original/2a22daff-9670-4515-90eb-2a3a2ce51fd9.jpeg?im_w=720',
    index: 13
  },
  {
    name: 'Tambon Choeng Thale',
    country: 'Thailand',
    stars: 4.97,
    cost: 19326,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-730327405822673649/original/09a390d1-031f-4fac-abf6-87739b353d08.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/5f42ecb0-1090-4d77-a923-35584b70175b.jpg?im_w=720',
    index: 14
  },
  {
    name: 'Anjuna',
    country: 'India',
    stars: 4.9,
    cost: 28534,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-707637832280927741/original/e8ce0dd5-7b69-4a56-8839-ae7924371045.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/d979cb8b-b595-496e-a682-99f52e064757.jpg?im_w=720',
    index: 15
  },
  {
    name: 'Arpora',
    country: 'India',
    stars: 4.95,
    cost: 7212,
    image1: 'https://a0.muscache.com/im/pictures/9f7298b9-72e3-4d24-a8d3-773146cfd986.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-28554355/original/29801283-4b82-46cc-b8e1-e53d4a03cd89.jpeg?im_w=720',
    index: 16
  },
  {
    name: 'Tambon Kamala',
    country: 'Thailand',
    stars: 5,
    cost: 33433,
    image1: 'https://a0.muscache.com/im/pictures/9a3a5a39-8fb5-4cc4-996a-180d5286010c.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/bf55b105-1019-4a79-9ab3-fe75718b94b1.jpg?im_w=720',
    index: 17
  },
  {
    name: 'Kathu',
    country: 'Thailand',
    stars: 4.33,
    cost: 205378,
    image1: 'https://a0.muscache.com/im/pictures/4872b11b-7a50-40bf-9bd8-72ccaa53dbee.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-9515026/original/26ed54ad-1c86-447f-a2dc-9fa405b737e0.jpeg?im_w=720',
    index: 18
  },
  {
    name: 'Quận 2',
    country: 'Vietnam',
    stars: 4.98,
    cost: 7060,
    image1: 'https://a0.muscache.com/im/pictures/648fbd27-49a3-4d06-9815-f87977ce815d.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-33797124-unapproved/original/62ba6f83-70df-4e53-bc5f-003167c1f1dc.JPEG?im_w=720',
    index: 19
  },
  {
    name: 'Hua Hin',
    country: 'Thailand',
    stars: 4.81,
    cost: 9057,
    image1: 'https://a0.muscache.com/im/pictures/67ef18d6-fb51-448f-8b47-f3ca3141d994.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/e1878969-015c-4854-8fbd-b2f50d3e8ab2.jpg?im_w=720',
    index: 20
  },
  {
    name: 'Assagao',
    country: 'India',
    stars: 4.95,
    cost: 28584,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-21084786/original/57fd79ca-8e5a-4c2a-a464-de2d2d148bd0.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-741757263233281166/original/be7aaee0-cbff-46ce-8aa0-c99c8e2146c1.jpeg?im_w=720',
    index: 21
  },
  {
    name: 'Tambon Mae Nam',
    country: 'Thailand',
    stars: 5,
    cost: 36528,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-51914290/original/a3c4b5f1-1058-4535-bb9d-a599b38aac88.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/b25b464e-a7fc-4ec3-8878-231ee3897153.jpg?im_w=720',
    index: 22
  },
  {
    name: 'T. Bophut',
    country: 'Chaweng Noi',
    stars: 4.53,
    cost: 132402,
    image1: 'https://a0.muscache.com/im/pictures/8ecf49af-d485-4a01-b312-c194a76916c4.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/de428931-a387-42b1-93da-f01e5369b27e.jpg?im_w=720',
    index: 23
  },
  {
    name: 'Assagao',
    country: 'India',
    stars: 4.91,
    cost: 33999,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-676104485875631401/original/9ef5e64e-5a7d-4b68-933a-1517d590c8b7.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/76527193-891a-44b1-8950-8afcf9bc3d4c.jpg?im_w=720',
    index: 24
  },
  {
    name: 'Hoàn Kiếm',
    country: 'Vietnam',
    stars: 4.89,
    cost: 5610,
    image1: 'https://a0.muscache.com/im/pictures/81a1bc76-8ca4-4063-a7b5-2fcd4a1d35c3.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/bb62fbe6-63fe-48e9-ba7f-9489f5fd251f.jpg?im_w=720',
    index: 25
  },
  {
    name: 'Assagao',
    country: 'India',
    stars: 4.92,
    cost: 13999,
    image1: 'https://a0.muscache.com/im/pictures/c2d8da86-4198-4329-85dd-4a517b6a5d90.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/cb133fe8-bf1a-4eac-988e-09536443d595.jpg?im_w=720',
    index: 26
  },
  {
    name: 'Phu Quoc',
    country: 'Vietnam',
    stars: 4.97,
    cost: 20928,
    image1: 'https://a0.muscache.com/im/pictures/5f30ecef-1304-48ae-a891-6dd0a390917c.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-40015644/original/fe227c62-744e-42d5-be87-aa2e16cf2773.jpeg?im_w=720',
    index: 27
  },
  {
    name: 'Gurugram',
    country: 'India',
    stars: 4.86,
    cost: 7817,
    image1: 'https://a0.muscache.com/im/pictures/03ef0def-507a-4b4d-a270-f97ec41e04d0.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/bcbfdc78-a235-43d0-928e-535ea901e2b6.jpg?im_w=720',
    index: 28
  },
  {
    name: 'Hoàn Kiếm',
    country: 'Vietnam',
    stars: 4.86,
    cost: 9031,
    image1: 'https://a0.muscache.com/im/pictures/b38b4e52-f8b0-485b-9445-a81c63089228.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/2f739b40-5cb8-49ac-8178-fc82a5a328a4.jpg?im_w=720',
    index: 29
  },
  {
    name: 'Tambon Talat Yai',
    country: 'Thailand',
    stars: 4.93,
    cost: 88169,
    image1: 'https://a0.muscache.com/im/pictures/70c1d9f3-3a98-4f02-9a19-4a14d12fa2fb.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/ac6f593a-adeb-407a-b313-d5f28a95c187.jpg?im_w=720',
    index: 30
  },
  {
    name: 'Dubai',
    country: 'UAE',
    stars: 4.92,
    cost: 23411,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-850394117913518937/original/ee9b229c-1c24-41d9-b503-600241326b27.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/b334ade5-1ead-4666-b481-05680fa00121.jpg?im_w=720',
    index: 31
  },
  {
    name: 'Din Daeng',
    country: 'Thailand',
    stars: 4.98,
    cost: 10727,
    image1: 'https://a0.muscache.com/im/pictures/209dab63-7e28-48df-be20-74c2a9fd1a37.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-987551110309680465/original/5f032b7c-74ab-441b-981c-b5e1f7aedf54.jpeg?im_w=720',
    index: 32
  },
  {
    name: 'Bangkok',
    country: 'Thailand',
    stars: 4.8,
    cost: 6145,
    image1: 'https://a0.muscache.com/im/pictures/f77d9fec-339a-48a9-bf22-d358dc57e82d.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/airflow/Hosting-15028045/original/9d6033f9-f0a8-45d5-8540-d900ba4d86c0.jpg?im_w=720',
    index: 33
  },
  {
    name: 'Khet Watthana',
    country: 'Thailand',
    stars: 4.82,
    cost: 6475,
    image1: 'https://a0.muscache.com/im/pictures/59c3bb68-49e9-4133-8eac-71bd3e115bf4.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/ba801b31-8bf8-439a-8a08-8a23d047cea2.jpg?im_w=720',
    index: 34
  },
  {
    name: 'Vagator',
    country: 'India',
    stars: 4.84,
    cost: 24535,
    image1: 'https://a0.muscache.com/im/pictures/9103cfdf-9835-49d6-b0a8-9d8ef889a30f.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-52230884/original/d135f7b0-e66e-47a8-b7ec-1a48e04be367.jpeg?im_w=720',
    index: 35
  },
  {
    name: 'Vagator ',
    country: 'India',
    stars: 4.94,
    cost: 28529,
    image1: 'https://a0.muscache.com/im/pictures/d14ab352-493c-4414-801c-fb13b17e3cc1.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-529286657265793526/original/7de0a87f-a225-4d1c-983f-d2d5d73f7bb8.jpeg?im_w=720',
    index: 36
  },
  {
    name: 'Tambon Hua Hin',
    country: 'Thailand',
    stars: 4.91,
    cost: 8429,
    image1: 'https://a0.muscache.com/im/pictures/6e2ea858-d18a-4be8-8b70-c7ce7315c02c.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-888675898349574380/original/9a668945-1d8f-4eca-a7b2-fd8ff72abe51.jpeg?im_w=720',
    index: 37
  },
  {
    name: 'Tambon Hai Ya',
    country: 'Thailand',
    stars: 4.86,
    cost: 8199,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-50903460/original/3a2ee6f4-7339-4517-a360-347d143b6c33.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/0aa12667-62b3-4757-a685-d4d40aaf7114.jpg?im_w=720',
    index: 38
  },
  {
    name: 'Siolim',
    country: 'India',
    stars: 4.9,
    cost: 28529,
    image1: 'https://a0.muscache.com/im/pictures/1ad199a3-68ae-420b-8417-9506b7e0863f.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-630785971946209356/original/43d66223-332d-4f1d-9903-9730c6171cb9.jpeg?im_w=720',
    index: 39
  },
  {
    name: 'Khet Bang Rak',
    country: 'Thailand',
    stars: 5,
    cost: 17466,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-819272456133241563/original/e6921344-df08-4bdb-a7f5-b22d0ad97f74.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/e2769a2c-6cb5-4bf0-854f-af2f36489229.jpg?im_w=720',
    index: 40
  },
  {
    name: 'Ko Samui',
    country: 'Thailand',
    stars: 5,
    cost: 13762,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-924320762550565088/original/0653745d-233f-4a86-b05f-1a6866788ddb.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-943815042092526111/original/f6cf2d81-f2fc-47fe-8156-e212c7119eb9.jpeg?im_w=720',
    index: 41
  },
  {
    name: 'Paklok',
    country: 'Thailand',
    stars: 5,
    cost: 148988,
    image1: 'https://a0.muscache.com/im/pictures/327db1a1-d579-4565-aa8a-ed57b92c60be.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/d30cbdd9-b0c9-4f01-b36d-190d368cbfe6.jpg?im_w=720',
    index: 42
  },
  {
    name: 'Ko Yao Noi',
    country: 'Thailand',
    stars: 5,
    cost: 39802,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-616635320823041325/original/37082f6d-feb9-4f94-9410-679983e0d88b.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-695963385836242013/original/5b16fc63-fc14-4126-b503-0bafb5aebe48.jpeg?im_w=720',
    index: 43
  },
  {
    name: 'Vagator',
    country: 'India',
    stars: 4.94,
    cost: 28529,
    image1: 'https://a0.muscache.com/im/pictures/aaa92d5b-7c1c-497b-8432-bd7a8549eb66.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/07ca9fd1-1c30-4554-bd40-88a85111fd9e.jpg?im_w=720',
    index: 44
  },
  {
    name: 'Quận 1',
    country: 'Vietnam',
    stars: 4.87,
    cost: 2531,
    image1: 'https://a0.muscache.com/im/pictures/16ea04a4-0ed1-4514-8f47-697eeee7f875.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-816423345507463386/original/3fe7a249-e516-49f9-9ac3-3d88fdc4b5c3.jpeg?im_w=720',
    index: 45
  },
  {
    name: 'Hoàn Kiếm',
    country: 'Vietnam',
    stars: 4.78,
    cost: 2846,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-729528190059937637/original/b8785689-71b2-4182-9938-431e1d38b020.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-617172328269418980/original/73746d78-da3b-4d9a-8e4a-8cba3ae6490f.jpeg?im_w=720',
    index: 46
  },
  {
    name: 'Tambon Choeng Thale',
    country: 'Thailand',
    stars: 4.97,
    cost: 21505,
    image1: 'https://a0.muscache.com/im/pictures/ebaaad56-d973-4664-83e9-367d4a631d7f.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-906949801449188184/original/dd873966-1728-4f88-810b-b5fc8de84e07.jpeg?im_w=720',
    index: 47
  },
  {
    name: 'Koh Yao Noi',
    country: 'Thailand',
    stars: 4.96,
    cost: 116711,
    image1: 'https://a0.muscache.com/im/pictures/7e47cc79-23d6-4da5-b7cf-db37162bc0ee.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/3f1b2ed3-39a3-4240-9902-37e345c2bc4e.jpg?im_w=720',
    index: 48
  },
  {
    name: 'Kathu District',
    country: 'Thailand',
    stars: 4.89,
    cost: 67897,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-741636883036716383/original/22ffd3c4-b31f-4c3e-ac60-a6af011e301c.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-49678090/original/d362c612-4578-4d46-b0c9-6eb3c2b3563f.jpeg?im_w=720',
    index: 49
  },
  {
    name: 'Chaweng Noi',
    country: 'Koh Samui',
    stars: 4.96,
    cost: 86834,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-978640176276849447/original/c75cd290-b0aa-420a-9cc8-ebceff103bd0.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/aa1c0efb-e2a2-49c8-b836-fe7a85ed321d.jpg?im_w=720',
    index: 50
  },
  {
    name: 'Chang Phueak',
    country: 'Thailand',
    stars: 4.9,
    cost: 8621,
    image1: 'https://a0.muscache.com/im/pictures/e9c52756-ce24-4b67-b51b-34b9baa8e42d.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/1276e185-0087-4c2b-8ed4-a03534ad7a83.jpg?im_w=720',
    index: 51
  },
  {
    name: 'Khet Samphanthawong',
    country: 'Thailand',
    stars: 4.96,
    cost: 17232,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-572464595617991798/original/fece5909-1edf-45c8-9127-ed6aa7d83294.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-572464595617991798/original/4b72dd6a-7d26-428e-be59-0e04e8dfe454.jpeg?im_w=720',
    index: 52
  },
  {
    name: 'Phuket',
    country: 'Thailand',
    stars: 4.93,
    cost: 113635,
    image1: 'https://a0.muscache.com/im/pictures/5d619d26-90f1-4b65-bfbd-42b229412824.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/80aebeb7-ca6e-4c88-919d-08a38f48e86d.jpg?im_w=720',
    index: 53
  },
  {
    name: 'Ba Đình',
    country: 'Vietnam',
    stars: 4.91,
    cost: 3470,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-53104225/original/8ee78215-b755-443e-8c51-1b9aec0bbfd2.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-53104225/original/a5761236-8025-4c92-9b31-a275c76c7916.jpeg?im_w=720',
    index: 54
  },
  {
    name: 'Hoàn Kiếm',
    country: 'Vietnam',
    stars: 4.89,
    cost: 9031,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-830809172532519403/original/6cae62b1-e3f4-46e4-b765-e6d5860fd39b.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/8c4bff10-5b02-40c8-b008-e945c808ad72.jpg?im_w=720',
    index: 55
  },
  {
    name: 'phường 6',
    country: 'Vietnam',
    stars: 4.79,
    cost: 9907,
    image1: 'https://a0.muscache.com/im/pictures/bac436c2-0a1d-4e02-8a0f-3367a6af818a.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/4bc53dfe-2ef7-402c-a68f-f0a9b22da386.jpg?im_w=720',
    index: 56
  },
  {
    name: 'Tambon Hua Hin',
    country: 'Thailand',
    stars: 4.83,
    cost: 15523,
    image1: 'https://a0.muscache.com/im/pictures/baef66bc-20b6-4dad-89b6-a36bf75c1f16.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/28f7b007-dce0-42a6-b58d-61c43e0c8f3b.jpg?im_w=720',
    index: 57
  },
  {
    name: 'Tambon Bo Put',
    country: 'Thailand',
    stars: 4.94,
    cost: 39675,
    image1: 'https://a0.muscache.com/im/pictures/912f16d6-7ab9-4c27-885d-719a442a4f83.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-50200099/original/5c302175-e743-42c1-b8e9-ecb03b9feaba.jpeg?im_w=720',
    index: 58
  },
  {
    name: 'Changmoi',
    country: 'Thailand',
    stars: 4.78,
    cost: 14792,
    image1: 'https://a0.muscache.com/im/pictures/6c8dafef-74d6-4b1c-95ab-61ac5f0910d4.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/5eaf4e69-90d0-4e15-a4c6-0f05919459dd.jpg?im_w=720',
    index: 59
  }];

}
