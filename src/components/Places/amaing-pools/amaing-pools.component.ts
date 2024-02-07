import { Component } from '@angular/core';
import { CardComponent } from '../../Helpers/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-amaing-pools',
  standalone: true,
  imports: [CardComponent,FormsModule,CommonModule,NavbarComponent],
  templateUrl: './amaing-pools.component.html',
  styleUrl: './amaing-pools.component.css'
})
export class AmaingPoolsComponent {
places=[
  {
    name: 'Vaijanath',
    country: 'India',
    stars: 4.46,
    cost: 24133,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-873576484515493417/original/11245d15-1239-4473-afc1-f14572fd0a6c.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1031554768675775307/original/b14d6e48-feaa-4bc6-b1e4-27efc7e9ff22.jpeg?im_w=720',
    index: 0
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 4.59,
    cost: 15600,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1031554768675775307/original/59532ba1-ad11-40f6-9810-bd945aa4764c.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-902874877805496675/original/363fe94d-1726-464b-84eb-6d6b35c5b2a4.jpeg?im_w=720',
    index: 1
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 4.49,
    cost: 22399,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-592536964804693719/original/91fb820b-2afe-41c7-b534-37649d4992a7.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-592536964804693719/original/68842ccb-8eb7-4ca8-abbc-5e76146dec98.jpeg?im_w=720',
    index: 2
  },
  {
    name: 'Aundhe kh.',
    country: 'India',
    stars: 4.32,
    cost: 36745,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-857636437403223388/original/9c07d20f-bb7f-4178-9656-bb8343863e02.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-857636437403223388/original/2b3ac8f1-9a45-4922-b162-b3aa80a9f605.jpeg?im_w=720',
    index: 3
  },
  {
    name: 'Pimpri-Chinchwad',
    country: 'India',
    stars: 4.34,
    cost: 74898,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-651899225210240049/original/c6d3198e-13a0-40e5-9937-ad533584469a.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-651899225210240049/original/bf4a8972-3847-401c-9c5b-7546d533308d.jpeg?im_w=720',
    index: 4
  },
  {
    name: 'Lonavla',
    country: 'India',
    stars: 4.57,
    cost: 25818,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-657058564676761134/original/4a12a343-0638-4109-a3e4-9484782bec36.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-656086515850196063/original/3a684e6e-14e5-4192-b42b-28b1217b5971.jpeg?im_w=720',
    index: 5
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 4.58,
    cost: 15873,
    image1: 'https://a0.muscache.com/im/pictures/45f22cc5-afd7-47b1-aa2c-e8a6d546bb22.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-914139021985348574/original/7e9c289c-b537-449b-8da7-fcc62570453d.jpeg?im_w=720',
    index: 6
  },
  {
    name: 'Lonavla',
    country: 'India',
    stars: 4.27,
    cost: 41280,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-914139021985348574/original/0bb70c3a-f77e-4ad5-95e6-6b91641bf76f.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-908343242566884780/original/ade18ee4-145a-46b4-a2fb-bd3dab17627c.jpeg?im_w=720',
    index: 7
  },
  {
    name: 'Lonavla',
    country: 'India',
    stars: 4.46,
    cost: 29999,
    image1: 'https://a0.muscache.com/im/pictures/4c348ec1-e9bf-4035-80ca-f504d74c2b3e.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-54233887/original/23615070-7293-426a-9b06-5c0ca546b52c.jpeg?im_w=720',
    index: 8
  },
  {
    name: 'Pune',
    country: 'India',
    stars: 4.41,
    cost: 40000,
    image1: 'https://a0.muscache.com/im/pictures/adc10708-54b2-4a0b-9ec2-c6dbdb6322b7.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-978299961755974041/original/0b7ffe9d-2adf-4d01-8f46-1af2bf084e3d.jpeg?im_w=720',
    index: 9
  },
  {
    name: 'Pune',
    country: 'India',
    stars: 4.25,
    cost: 40000,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-775808413209804992/original/8ac001d3-c68b-49f5-a58f-1978f00d90bd.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/ad42f23c-aeed-467d-b06e-0c0a68b42c2a.jpg?im_w=720',
    index: 10
  },
  {
    name: 'Lonavla',
    country: 'India',
    stars: 4.8,
    cost: 3583,
    image1: 'https://a0.muscache.com/im/pictures/82b8d23f-8c09-4d45-9850-164a7a33fb27.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/e2a04440-d149-417b-ab47-afe5916fd3b9.jpg?im_w=720',
    index: 11
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 4.9,
    cost: 18785,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-925081262357915655/original/d26092b2-62a6-449b-820b-8c5d3fe17aed.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/5e3c410e-d864-4ebd-a127-aae4a64d05fd.jpg?im_w=720',
    index: 12
  },
  {
    name: 'Lonavla',
    country: 'India',
    stars: 4.89,
    cost: 12320,
    image1: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAzNzc0NDg0NTQ5MzY4NDMxNg%3D%3D/original/2182adc7-d389-4c19-b948-489296cb5028.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/f289abd8-058f-49c5-ae59-422a324fde98.jpg?im_w=720',
    index: 13
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 5,
    cost: 15748,
    image1: 'https://a0.muscache.com/im/pictures/cd4f51f9-41fd-4f39-ba11-fa8ecfcffabe.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/f9993890-18c0-4db5-ad64-cab2ef39af04.jpg?im_w=720',
    index: 14
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 4.91,
    cost: 14151,
    image1: 'https://a0.muscache.com/im/pictures/79252506-42d0-4f82-bb36-00a8690a7736.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/airflow/Hosting-506107048886109453/original/af04374d-b870-4f18-a933-9700586c976e.jpg?im_w=720',
    index: 15
  },
  {
    name: 'नांदगाव',
    country: 'India',
    stars: 4.81,
    cost: 3686,
    image1: 'https://a0.muscache.com/im/pictures/2b937905-079a-4a66-828e-a8229b4dffad.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-40016934-unapproved/original/6785d6a1-12a7-4262-8c1f-4b56f16d9d02.JPEG?im_w=720',
    index: 16
  },
  {
    name: 'Malavli',
    country: 'India',
    stars: 4.91,
    cost: 12388,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-781530369063053387/original/8d8d970f-1b29-4d6c-b620-0c4cdfb4a8d8.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1055830532077727793/original/a8d0b579-52bf-4569-b4c6-7e0b8c043039.jpeg?im_w=720',
    index: 17
  },
  {
    name: 'Lonavla',
    country: 'India',
    stars: 4.8,
    cost: 7132,
    image1: 'https://a0.muscache.com/im/pictures/0c7862b9-be6c-4ab2-901b-d5f52e5a32a9.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-937588905989303196/original/ad879ece-a13f-4799-8806-6bd819506059.jpeg?im_w=720',
    index: 18
  },
  {
    name: 'Pale Pawan Ma',
    country: 'India',
    stars: 4.75,
    cost: 15976,
    image1: 'https://a0.muscache.com/im/pictures/26e610ba-8ee9-4308-a2bb-51d4a25b4368.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/ed4f4ee5-54f1-4c65-9376-200edf81335c.jpg?im_w=720',
    index: 19
  },
  {
    name: 'Potal',
    country: 'India',
    stars: 4.88,
    cost: 10982,
    image1: 'https://a0.muscache.com/im/pictures/1317f932-92bb-4498-9a4d-78c68a1e2e3d.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1019259003946362381/original/92afa3c1-9aec-45b7-8f94-d7e2d29d16bc.jpeg?im_w=720',
    index: 20
  },
  {
    name: 'Malavli',
    country: 'India',
    stars: 4.82,
    cost: 11982,
    image1: 'https://a0.muscache.com/im/pictures/5de089a8-27b6-48ab-a94c-3ce690044af4.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/333b48cf-bab8-4d1f-bee0-543b939b05bf.jpg?im_w=720',
    index: 21
  },
  {
    name: 'Pune',
    country: 'India',
    stars: 4.93,
    cost: 5228,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-599920481383331381/original/459ea8ea-63ef-4d8b-92a6-d109518a9e64.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-781612791339953694/original/fa0de2d2-49df-4e1f-94d7-985231acebfa.jpeg?im_w=720',
    index: 22
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 5,
    cost: 17118,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-844473037875402728/original/27667ecc-4eb5-445c-ab10-c90d70098c46.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-967858595717105909/original/958655d2-b187-4eeb-ba87-cb44cd8117d0.jpeg?im_w=720',
    index: 23
  },
  {
    name: 'Pimpri-Chinchwad',
    country: 'India',
    stars: 4.93,
    cost: 8302,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-627357709781676532/original/954dc966-d2e6-4ca4-ab95-41bf3ce05b13.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/6b25d2a7-4200-44c8-b8a4-93a2c5509844.jpg?im_w=720',
    index: 24
  },
  {
    name: 'Pune',
    country: 'India',
    stars: 4.8,
    cost: 3552,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1076607864099006594/original/9f9463fb-83cb-46bf-bad5-f436e6430da8.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/6e6f421a-2fdb-4642-8c77-9f099b09d001.jpg?im_w=720',
    index: 25
  },
  {
    name: 'Lonavla',
    country: 'India',
    stars: 4.8,
    cost: 22766,
    image1: 'https://a0.muscache.com/im/pictures/fabeb5b9-0494-464c-83d2-e83d2aad0418.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-810717507492266535/original/dc974985-59ef-47a7-84ab-a1155ffa3a87.jpeg?im_w=720',
    index: 26
  },
  {
    name: 'Pune',
    country: 'India',
    stars: 4.84,
    cost: 6790,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1077222837691801299/original/a720686c-c6e6-4b54-b870-26c6bee4fe90.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-920881307694956397/original/675848f3-f969-404c-bf3c-e5b5a7224fa3.jpeg?im_w=720',
    index: 27
  },
  {
    name: 'Pune',
    country: 'India',
    stars: 4.89,
    cost: 10259,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1004233391696977387/original/b9e79464-7f9a-47b9-bfe3-d12f466a91b3.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-777908525036300828/original/8b0f4942-ab59-4286-9961-d30b5e120345.jpeg?im_w=720',
    index: 28
  },
  {
    name: 'पुणे',
    country: 'India',
    stars: 4.81,
    cost: 3221,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/c8f48e8b-091d-47ea-85ac-b31bc2604bbb.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1041703012892813453/original/189a363c-bb69-4e87-91de-918146672a65.jpeg?im_w=720',
    index: 29
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 4.36,
    cost: 7753,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-905396858588479610/original/d1b41a1f-fb4c-4ff7-bdfc-3fc51720f79e.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/a64a22fa-6262-4f36-8a40-bb0300a6bba3.jpg?im_w=720',
    index: 30
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 4.2,
    cost: 24878,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-867054237184940077/original/c62d710c-f76c-4761-b90f-89fd31506788.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/ff2becb9-8bd7-4fc6-b634-20daa1c0088e.jpg?im_w=720',
    index: 31
  },
  {
    name: 'Karjat',
    country: 'India',
    stars: 4.86,
    cost: 13694,
    image1: 'https://a0.muscache.com/im/pictures/1bfc7bee-2527-49c8-bcd0-938507a0fbf7.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-781588408512002301/original/e41c3d6c-b027-4cf4-b923-0ab9c9af41be.jpeg?im_w=720',
    index: 32
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 4.87,
    cost: 4793,
    image1: 'https://a0.muscache.com/im/pictures/6b289dab-eb9c-4fd1-96f9-5ea23928d101.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-874543076124276233/original/41705f79-bfbb-4119-a7e4-912fd86cb552.jpeg?im_w=720',
    index: 33
  },
  {
    name: 'Karla',
    country: 'India',
    stars: 4.92,
    cost: 6389,
    image1: 'https://a0.muscache.com/im/pictures/241a7adb-edd6-425d-8a51-fc7d0e38e977.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-948271139345197162/original/f7e8c8b1-141e-4358-92c7-d9bfb2eb59ce.jpeg?im_w=720',
    index: 34
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 5,
    cost: 8799,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-730115009565747822/original/04b1bde5-5b35-4af5-b1f7-a4cedce8844d.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-730115009565747822/original/e0462aac-3a5c-4756-9b8e-2d23cf2de3f7.jpeg?im_w=720',
    index: 35
  },
  {
    name: 'Pune',
    country: 'India',
    stars: 4.93,
    cost: 3914,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-660462428027837296/original/518619bf-c3e0-47ed-a05f-1f549250ad15.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1010010128456923074/original/838e975a-1d7f-4463-80d2-33019f08ef8e.jpeg?im_w=720',
    index: 36
  },
  {
    name: 'Pimpri-Chinchwad',
    country: 'India',
    stars: 4.87,
    cost: 5095,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-987551110309680465/original/f353192b-a331-44ec-a6fe-b50c08965213.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1020906849787288578/original/62bc4095-f418-4d37-850c-dafd03d2133b.jpeg?im_w=720',
    index: 37
  },
  {
    name: 'Lonavla',
    country: 'India',
    stars: 5,
    cost: 4999,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-953268005584423550/original/65a70601-1229-4973-bbf9-1e439a9239a0.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-872824004889218293/original/3e7b3ee1-43f9-4528-8fcf-af11d7a6a90c.jpeg?im_w=720',
    index: 38
  },
  {
    name: 'पुणे',
    country: 'India',
    stars: 4.82,
    cost: 3076,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-907692862221015063/original/5610e784-6ba1-42f7-a521-24fcdcc80e8b.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-856136111627409743/original/d60f62c9-d356-45d1-9bee-25427e2f4927.jpeg?im_w=720',
    index: 39
  },
  {
    name: 'Kamshet',
    country: 'India',
    stars: 4.84,
    cost: 7075,
    image1: 'https://a0.muscache.com/im/pictures/ce537598-32d5-4b0d-907c-463e8a18ab87.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-991860474077607977/original/f7728443-45aa-47f8-8da2-a28fea6424a5.jpeg?im_w=720',
    index: 40
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 5,
    cost: 6000,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-47418176/original/4087fbdd-6bab-410f-aeeb-3382e1fbbd29.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1006197964397877079/original/08a99e34-f17a-4ec0-9936-21a37aa3ab05.jpeg?im_w=720',
    index: 41
  },
  {
    name: 'Lonavla',
    country: 'India',
    stars: 5,
    cost: 19400,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1006197964397877079/original/836074d3-17a2-4821-87ae-2d7de1644da5.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MTczOTIyOTE5NTI0NjY5MA%3D%3D/original/40b26c37-a956-4a3b-a284-2494febc8459.jpeg?im_w=720',
    index: 42
  },
  {
    name: 'Lonavala',
    country: 'India',
    stars: 5,
    cost: 11982,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-730429566143720492/original/71a1a3fa-9f0f-413c-be59-9e32179120a2.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1016318580509097294/original/c0b9ba29-3b1c-41a4-af8a-81faf02b2cca.jpeg?im_w=720',
    index: 43
  },
  {
    name: 'Malavli',
    country: 'India',
    stars: 4.95,
    cost: 3740,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-766053791532820192/original/80dae165-b2cf-4325-a016-793b3f11c93e.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MTc0Nzk4MDg0NTkzNDM0NQ%3D%3D/original/cdd1d0fa-bedb-4d5a-9f98-f02d3a40a126.jpeg?im_w=720',
    index: 44
  },
  {
    name: 'Pune',
    country: 'India',
    stars: 4.83,
    cost: 5149,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-907785492481170163/original/a0b3eb2b-dd7b-47f5-9f23-8144b8b393f9.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-907785492481170163/original/a0a55e75-5e78-4789-9bf4-a80921865069.jpeg?im_w=720',
    index: 45
  },
  {
    name: 'Pune',
    country: 'India',
    stars: 4.87,
    cost: 2957,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-582911807763365685/original/1378698c-0a32-4564-b766-987e097a0d00.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-959902065166022178/original/e06d524e-063a-4e2d-b9a1-9923b92e03af.jpeg?im_w=720',
    index: 46
  },
  {
    name: 'पुणे',
    country: 'India',
    stars: 5,
    cost: 4015,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-959100897506242603/original/f77a8123-46ea-49a0-affd-931fe6dc36bb.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-785205807366158084/original/c674993f-9a9b-467c-a366-574d086f1d92.jpeg?im_w=720',
    index: 47
  },
  {
    name: 'Karla',
    country: 'India',
    stars: 4.27,
    cost: 4196,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1016534356069498572/original/42312f5c-2fef-4c59-92bb-bee88bc615bb.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-877237768311819319/original/c47f9c77-ef21-482b-8d8d-2ab22892aac8.jpeg?im_w=720',
    index: 48
  },
  {
    name: 'Nashik',
    country: 'India',
    stars: 4.94,
    cost: 23001,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1041076989031399528/original/3980750d-97b4-42a6-848e-6d29ebc32d74.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-880132505353346807/original/f49b20c9-8590-468e-afa2-2ed966851131.jpeg?im_w=720',
    index: 49
  },
  {
    name: 'Girnare',
    country: 'India',
    stars: 4.52,
    cost: 21600,
    image1: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1015634775375758436/original/6d77e498-c12e-4caf-8fdc-456cc32a2cfc.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-684743670751550537/original/3f215bbe-ffb2-4948-a172-86b99c9e1179.jpeg?im_w=720',
    index: 50
  },
  {
    name: 'Vadholi',
    country: 'India',
    stars: 4.01,
    cost: 14811,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-817108263356597625/original/e2879be1-206a-4484-bf94-090bbf67a671.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-720084776646494960/original/b6db3004-e745-448c-9262-6548085bc49c.jpeg?im_w=720',
    index: 51
  },
  {
    name: 'Pimplad Nasik',
    country: 'India',
    stars: 5,
    cost: 24675,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-878979032154606394/original/775371f7-2717-4889-8832-2f92523f71cb.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-973698347964305176/original/44709d9c-924e-4f19-8651-227de964b45c.jpeg?im_w=720',
    index: 52
  },
  {
    name: 'Sahan',
    country: 'India',
    stars: 5,
    cost: 19856,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1051121884834917954/original/b94cfb47-deeb-4756-a220-955d25b8837b.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-624964194716443722/original/041df775-579a-44ff-bda6-f13be342476a.jpeg?im_w=720',
    index: 53
  },
  {
    name: 'Virtasaral',
    country: 'India',
    stars: 4.23,
    cost: 56725,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-995364641752196696/original/ffab68f1-21d9-41ee-9f0d-26a0f1f7112f.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1013556178418096685/original/dd08b494-da7e-4003-a90b-c66c900de0e3.jpeg?im_w=720',
    index: 54
  },
  {
    name: 'Bhayandar (West)',
    country: 'India',
    stars: 4.98,
    cost: 14393,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1008411371895344436/original/0de4cf2e-bf2c-4c01-a440-645305bb0ac8.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/beaeb1dc-5d24-4dd0-bfb0-218da4b34327.jpg?im_w=720',
    index: 55
  },
  {
    name: 'Kharavandi',
    country: 'India',
    stars: 4.8,
    cost: 12623,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1035271683740801217/original/bbe03c9b-b8cd-4a2f-a195-9e4a0002d8d6.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1040244720900749571/original/ae9d21de-6398-4f16-95cb-b00b907066cc.jpeg?im_w=720',
    index: 56
  },
  {
    name: 'Raigad',
    country: 'India',
    stars: 4.89,
    cost: 18630,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-619362576274259615/original/ef79eb0d-5870-4bc1-a1af-17cb3974dc7f.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-39581465/original/a39bbbe8-f809-45c2-8a67-af44f7187021.jpeg?im_w=720',
    index: 57
  },
  {
    name: 'पुणे',
    country: 'India',
    stars: 5,
    cost: 2910,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-725985085346661316/original/eaab9926-f2ba-42aa-a172-b63b5b46ea77.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-988170775950558969/original/72262768-24ac-47ff-8236-f442d4a98d9f.jpeg?im_w=720',
    index: 58
  },
  {
    name: 'Alibag',
    country: 'India',
    stars: 4.34,
    cost: 21112,
    image1: 'https://a0.muscache.com/im/pictures/b0190a05-be8b-4fd7-a82f-b7529b300ec1.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/a82d541d-ae0e-48f9-ae35-510d2dfa50d3.jpg?im_w=720',
    index: 59
  },
  {
    name: 'Igatpuri',
    country: 'India',
    stars: 5,
    cost: 18493,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1001804897309269515/original/25b5d4f3-9051-4dac-ac67-af2dd6d00984.jpeg?im_w=720',
    image2: '',
    index: 60
  }]
}
