import { Component } from '@angular/core';
import { CardComponent } from '../../Helpers/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-iconic-sites',
  standalone: true,
  imports: [CardComponent, FormsModule, CommonModule],
  templateUrl: './iconic-sites.component.html',
  styleUrl: './iconic-sites.component.css',
})
export class IconicSitesComponent {
  places = [
    {
      name: 'Dubai',
      country: 'UAE',
      stars: 4.97,
      cost: 15228,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-721540609203378406/original/9dfaf7d6-40f2-4673-b468-7c5ab3147f86.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-721540609203378406/original/cc2a2d85-d879-465c-9154-0574629527cd.jpeg?im_w=720',
      index: 0
    },
    {
      name: 'Rome',
      country: 'Italy',
      stars: 4.9,
      cost: 24479,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-919391066738299347/original/6bcebc80-ebbe-4290-b171-0ec817ac19c3.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-919391066738299347/original/42fad312-c1f9-49d0-a3c7-d489720a6d84.jpeg?im_w=720',
      index: 1
    },
    {
      name: 'Dubai',
      country: 'UAE',
      stars: 5,
      cost: 13836,
      image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-873668322317691081/original/919b1da9-cf0c-49ea-9940-4a406c023b95.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-873668322317691081/original/41cf1a1b-5789-45fb-a232-fa2bb5d24b99.jpeg?im_w=720',
      index: 2
    },
    {
      name: 'Paris',
      country: 'France',
      stars: 5,
      cost: 122679,
      image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-45967096/original/44ae93a9-4dd1-4907-96fc-df5b3839bd8f.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-45967096/original/67c73fc8-0017-46b3-b681-e7f43d21cca2.jpeg?im_w=720',
      index: 3
    },
    {
      name: 'Dublin',
      country: 'Ireland',
      stars: 4.82,
      cost: 1417970,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-892636584500492829/original/c45bf8cf-2ad6-4930-8c9f-f6f3c992aedd.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-892636584500492829/original/54a1e182-36d1-4746-9ace-805d2c6eeb69.jpeg?im_w=720',
      index: 4
    },
    {
      name: 'Dubai',
      country: 'UAE',
      stars: 4.92,
      cost: 44787,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-730884644046569848/original/23cba0d9-2fcd-4720-a41d-f66092e17a00.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-730884644046569848/original/bda0d2da-ba5f-402a-b6b0-e15e58577833.jpeg?im_w=720',
      index: 5
    },
    {
      name: 'Cape Town',
      country: 'South Africa',
      stars: 4.52,
      cost: 236300,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-874686035326211853/original/ce3819b6-38cc-43b7-98b1-d0583a999752.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-938390308512137866/original/f2ff61cb-2fdb-466b-a41f-c04ef59ddfce.jpeg?im_w=720',
      index: 6
    },
    {
      name: 'Paris',
      country: 'France',
      stars: 4.58,
      cost: 251574,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-938390308512137866/original/8b2014c0-165b-47c1-b73c-8f3b18aca13d.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-952882552582987523/original/c55198ab-e612-4ca2-ab77-9d5e13140da6.jpeg?im_w=720',
      index: 7
    },
    {
      name: 'Paris',
      country: 'France',
      stars: 4.83,
      cost: 164781,
      image1: 'https://a0.muscache.com/im/pictures/662c5480-04db-4018-8cd5-38db295bd2a3.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1051945180134067169/original/0b398a58-cf56-4e67-bb62-d8c572c5025e.jpeg?im_w=720',
      index: 8
    },
    {
      name: 'Paris',
      country: 'France',
      stars: 4.96,
      cost: 77089,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-952914651862658637/original/ba39b06c-3899-41e2-9f71-919b6ab4f64a.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-769683670068445218/original/8ebc94e8-b000-4c8b-9b2d-02495f410be0.jpeg?im_w=720',
      index: 9
    },
    {
      name: 'Dubai',
      country: 'UAE',
      stars: 4.48,
      cost: 11545,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-879178443520186452/original/cb38ec40-79d1-40ff-99b4-83c41a758d03.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-853597984900485312/original/6feb6fa2-ad93-4b0f-953a-e6aa51f6f47c.jpeg?im_w=720',
      index: 10
    },
    {
      name: 'Paris',
      country: 'France',
      stars: 4.04,
      cost: 158581,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-826134718441577316/original/da0692f3-d54d-4af4-a35e-75e2f6aee135.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-607387150460343373/original/4963ae7f-2b42-4a58-89a3-e34ec18dd766.jpeg?im_w=720',
      index: 11
    },
    {
      name: 'Melbourne',
      country: 'Australia',
      stars: 4.91,
      cost: 26632,
      image1: 'https://a0.muscache.com/im/pictures/airflow/Hosting-898604898966265748/original/56b2ef23-2d4b-47ae-95fb-c68686d6f5f2.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/d8fb90a5-59fa-47ec-a8be-26a888fb2d84.jpg?im_w=720',
      index: 12
    },
    {
      name: 'Avalon Beach',
      country: 'Australia',
      stars: 5,
      cost: 102850,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-870003291984575271/original/357a33d5-f6a4-442f-a682-11b09da0c0db.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-765803775581031358/original/1d28b2a8-9520-421b-9288-c94330d1215d.jpeg?im_w=720',
      index: 13
    },
    {
      name: 'Marrakesh',
      country: 'Morocco',
      stars: 4.96,
      cost: 406561,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-892920857311517591/original/78dc8218-20aa-47f6-9cf4-282071c768dd.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-891961128789448188/original/2c289ef3-b7f0-4be9-8726-62c9d0d862e1.jpeg?im_w=720',
      index: 14
    },
    {
      name: 'Cape Town',
      country: 'South Africa',
      stars: 4.6,
      cost: 177427,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-970170190532944028/original/483adac7-20fd-48c5-b5ae-119137f767b3.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-891975822419484407/original/10e1a8c1-2c04-4487-a727-8e7d8bd83071.jpeg?im_w=720',
      index: 15
    },
    {
      name: 'London',
      country: 'UK',
      stars: 4.63,
      cost: 151223,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-917282470605681869/original/5e5eff4b-5524-476a-bbaf-e8f33140ff17.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-836154719324067398/original/db4a7765-f751-471b-ab7a-d7da9aa4391b.jpeg?im_w=720',
      index: 16
    },
    {
      name: 'Paris',
      country: 'France',
      stars: 4.83,
      cost: 118090,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-842447525774130356/original/e69b9462-25cf-422e-a805-a8f8123383b9.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-938146613539244104/original/e03681a5-701c-48ba-a034-9deebdd90617.jpeg?im_w=720',
      index: 17
    },
    {
      name: 'Marrakech',
      country: 'Morocco',
      stars: 4.15,
      cost: 25633,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-823833142467588417/original/ba8c85bf-92c7-4db6-95a2-b95ba87a2fee.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-959269457142210763/original/6273ffe0-b5fa-4c8b-baa8-2cefc8bb1d58.jpeg?im_w=720',
      index: 18
    },
    {
      name: 'Marrakech',
      country: 'Morocco',
      stars: 4.58,
      cost: 170711,
      image1: 'https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-22247959-unapproved/original/69484ac2-00de-4be8-a333-a4b0b104c301.JPEG?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-988124053810670269/original/765ab3b4-80dd-44a1-99dc-a85629469ad6.jpeg?im_w=720',
      index: 19
    },
    {
      name: 'Paris',
      country: 'France',
      stars: 4.27,
      cost: 338277,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1059682898693930544/original/3b4ac380-46be-467e-8f92-aae95dd03249.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-19697811-unapproved/original/f083ab4c-0209-42a5-aa13-41b600a4e679.JPEG?im_w=720',
      index: 20
    },
    {
      name: 'Docklands',
      country: 'Australia',
      stars: 4.83,
      cost: 13584,
      image1: 'https://a0.muscache.com/im/pictures/f3b5530f-c59e-4837-9b05-8f0a93c3580b.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/3f28a595-97b3-474d-a119-0064c01977a1.jpg?im_w=720',
      index: 21
    },
    {
      name: 'Paris',
      country: 'France',
      stars: 4.38,
      cost: 190298,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-842448767203259993/original/ab96a3a7-bacb-41a4-a146-ecb7a6e90975.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-954858109056796899/original/eb7dd42e-fec3-4d9f-b8e5-605e591ce89b.jpeg?im_w=720',
      index: 22
    },
    {
      name: 'Cape Town',
      country: 'South Africa',
      stars: 4.56,
      cost: 196250,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-954858109056796899/original/59c170db-8c2d-475e-9e12-3210bb63d88d.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-917442847587817877/original/76f6363c-14b8-464b-a527-e3a0209deaf0.jpeg?im_w=720',
      index: 23
    },
    {
      name: 'Paris',
      country: 'France',
      stars: 4.66,
      cost: 88051,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-917442847587817877/original/2316195f-373b-4965-8ed2-92adb54919dd.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-952922603477929712/original/95263c8f-828d-4aca-9a6a-5f25f1e7d994.jpeg?im_w=720',
      index: 24
    },
    {
      name: 'Bangkok',
      country: 'Thailand',
      stars: 4.12,
      cost: 412063,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-842446479352798682/original/916a99d6-c9dd-4153-b429-5ab255abbd36.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-989209304846654831/original/e3c22fa1-1713-49a7-95d3-d0fd1e3ef881.jpeg?im_w=720',
      index: 25
    },
    {
      name: 'Florence',
      country: 'Italy',
      stars: 4.01,
      cost: 51213,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-49601263/original/03d49a2f-59ab-400a-bf66-e34d0c59749f.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-938151177307775271/original/c3db2c5a-0827-4659-b907-beb01f4d7ea3.jpeg?im_w=720',
      index: 26
    },
    {
      name: 'Venice',
      country: 'Italy',
      stars: 4.32,
      cost: 889493,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-989217269238046084/original/07594ca0-1259-400b-80e7-347a65d5dc71.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-952916855543058557/original/e7a8b741-431e-45ef-ad9a-5998e084f337.jpeg?im_w=720',
      index: 27
    },
    {
      name: 'Venice',
      country: 'Italy',
      stars: 4.02,
      cost: 32615,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-959266728635015422/original/3e6e2554-6c5d-455c-9e68-03c363437f6d.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-963659956040170433/original/366cc085-d5ae-47a8-b88e-6840b9a0aed0.jpeg?im_w=720',
      index: 28
    },
    {
      name: 'Florence',
      country: 'Italy',
      stars: 5,
      cost: 54987,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-938144895537892471/original/66543f98-8083-4058-a47c-94f162ae6e00.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-823831971598569529/original/2a3464f8-8090-4618-b2f2-15c69b549fba.jpeg?im_w=720',
      index: 29
    },
    {
      name: 'Florence',
      country: 'Italy',
      stars: 4.7,
      cost: 30818,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-938147625406407609/original/db5ea186-5e32-4ca8-b80e-8e937d29a6dd.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-34321058/original/e91a72dd-02e3-4f53-9cde-c0e26aaa0ea0.jpeg?im_w=720',
      index: 30
    },
    {
      name: 'Sydney',
      country: 'Australia',
      stars: 4.91,
      cost: 33086,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-842444842299926246/original/a0b9b947-45ce-40cb-9547-7c5cc645c237.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-989214436588253369/original/4fa49da5-7f53-4090-aa95-e318cf28b186.jpeg?im_w=720',
      index: 31
    },
    {
      name: 'Paris',
      country: 'France',
      stars: 4.04,
      cost: 2128897,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-919250004960079261/original/0d9eba20-445f-43b4-8156-52db1b47c2f5.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-833223144860161542/original/65487e27-3e05-450f-ac70-665be07155bd.jpeg?im_w=720',
      index: 32
    },
    {
      name: 'Melbourne',
      country: 'Australia',
      stars: 4.93,
      cost: 49796,
      image1: 'https://a0.muscache.com/im/pictures/488642f5-bbe3-46e5-a86c-9f053036daa2.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/4184d711-d4d4-452a-91b3-058c7d11f145.jpg?im_w=720',
      index: 33
    },
    {
      name: 'Athina',
      country: 'Greece',
      stars: 4.96,
      cost: 13405,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-842445930389117853/original/5b0c6788-5e52-44f1-9fbb-eadb7a831f2a.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-837728692902655008/original/495742a2-b702-434d-abf2-6441f8a24649.jpeg?im_w=720',
      index: 34
    },
    {
      name: 'Dubai',
      country: 'UAE',
      stars: 4.91,
      cost: 26723,
      image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50188087/original/d84ae56a-7258-41ee-91d8-ba7bf0bc722c.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1054953481495442980/original/1c16c7da-4aa0-4524-bc5d-65fb318d9c9e.jpeg?im_w=720',
      index: 35
    },
    {
      name: 'Sydney',
      country: 'Australia',
      stars: 4.87,
      cost: 39480,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-34363324/original/877f38c9-a152-4ed8-8fb3-3119d2b3c6ea.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-823833719763393651/original/59be1c7b-f49a-4dff-8198-57c274b1b720.jpeg?im_w=720',
      index: 36
    },
    {
      name: 'Venice',
      country: 'Italy',
      stars: 4.62,
      cost: 1749335,
      image1: 'https://a0.muscache.com/im/pictures/008090e8-9877-4963-8d81-cfae259b3e81.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/d0ca15e5-87bc-4912-bbc0-6c564e42afc7.jpg?im_w=720',
      index: 37
    },
    {
      name: 'Paris',
      country: 'France',
      stars: 4.77,
      cost: 438637,
      image1: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAzNjE5Njc1MDA5NzUxNjg0MA%3D%3D/original/6dca1dcc-65a8-4cf4-a742-b71ef67c17e6.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/1f47dd24-b4ca-4124-b80c-a81082cdac6e.jpg?im_w=720',
      index: 38
    },
    {
      name: 'Cape Town',
      country: 'South Africa',
      stars: 4.48,
      cost: 299935,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-25178105/original/12bc582a-d987-4ab1-9ac8-da16c5f4fc6e.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/dc633586-4ab0-401a-8c2c-13752dc90aa3.jpg?im_w=720',
      index: 39
    },
    {
      name: 'Paris',
      country: 'France',
      stars: 4.46,
      cost: 137377,
      image1: 'https://a0.muscache.com/im/pictures/42189a52-afe0-463b-9713-ca15dd6f751f.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/da13ccea-80d1-4cf4-b275-41f1b5aa19f9.jpg?im_w=720',
      index: 40
    },
    {
      name: 'Venice',
      country: 'Italy',
      stars: 4.32,
      cost: 168015,
      image1: 'https://a0.muscache.com/im/pictures/b336990d-0b3c-45aa-abb3-fe080553f569.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-52864991/original/6be3c12d-5f65-45ba-8617-6b5881d6cd42.jpeg?im_w=720',
      index: 41
    },
    {
      name: 'Cape Town',
      country: 'South Africa',
      stars: 4.59,
      cost: 251243,
      image1: 'https://a0.muscache.com/im/pictures/2b297d03-0745-4598-9c0e-b26cddb86458.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/67fd0f1c-5505-4966-8cc7-d2700960d34c.jpg?im_w=720',
      index: 42
    },
    {
      name: 'Dubai',
      country: 'UAE',
      stars: 4.85,
      cost: 50852,
      image1: 'https://a0.muscache.com/im/pictures/beb21f31-7b6d-42a9-8c6a-fd49e938567b.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/a892c428-4c7e-40bd-b699-e33296d9b324.jpg?im_w=720',
      index: 43
    },
    {
      name: 'Venice',
      country: 'Italy',
      stars: 4.82,
      cost: 47440,
      image1: 'https://a0.muscache.com/im/pictures/monet/Select-27242744/original/25e61486-efc9-4b76-8f08-a13b5a93a476?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1000776190293314566/original/6324a380-8705-47a8-8b09-c115587a406f.jpeg?im_w=720',
      index: 44
    },
    {
      name: 'Cape Town',
      country: 'South Africa',
      stars: 4.49,
      cost: 151191,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-33181203/original/72375417-a4a2-4456-bd74-7d83b4208c7c.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/2783982b-014d-443f-97cb-1d5b61c200e9.jpg?im_w=720',
      index: 45
    },
    {
      name: 'Paris',
      country: 'France',
      stars: 4.99,
      cost: 264242,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-46863672/original/4e8838c5-cbf0-4d09-bf50-94dd443cb725.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/monet/Select-13311426/original/55ffa94f-6be7-4b35-ad1a-65737f45c973?im_w=720',
      index: 46
    },
    {
      name: 'Florence',
      country: 'Italy',
      stars: 4.15,
      cost: 113028,
      image1: 'https://a0.muscache.com/im/pictures/fe84676f-e446-45b2-9d35-bcaf5dbc7469.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/102787707/64c923dc_original.jpg?im_w=720',
      index: 47
    },
    {
      name: 'Rome',
      country: 'Italy',
      stars: 4.39,
      cost: 64618,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-28960450/original/3f6f281a-ad17-46e3-80df-8aee926a7d1e.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1025775067818659597/original/96d33f63-a691-4c51-8755-3bfcaa0ffaf0.jpeg?im_w=720',
      index: 48
    },
    {
      name: 'Venice',
      country: 'Italy',
      stars: 4.36,
      cost: 25696,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1024386168251861784/original/82cc8d8a-5081-4dc9-a002-67b104fd927d.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1065119612404335261/original/edb8d61b-005e-4ce3-b1fa-b3592052af58.jpeg?im_w=720',
      index: 49
    },
    {
      name: 'Florence',
      country: 'Italy',
      stars: 4.55,
      cost: 42678,
      image1: 'https://a0.muscache.com/im/pictures/2d654f5a-2ab9-48ae-ac74-bb13e2b2bce6.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-640443615861857663/original/10c9f7a6-51da-4501-bd33-b689b16e4b05.jpeg?im_w=720',
      index: 50
    },
    {
      name: 'Venice',
      country: 'Italy',
      stars: 4.05,
      cost: 46451,
      image1: 'https://a0.muscache.com/im/pictures/51430034/44e710d3_original.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-52312570/original/de66dd45-ae26-4220-aa97-2a9886c2b96b.jpeg?im_w=720',
      index: 51
    },
    {
      name: 'Balmain',
      country: 'Australia',
      stars: 4.95,
      cost: 34183,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-653589856563269517/original/a589d934-40ae-4283-97f6-f7ae96ed7a36.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/4927692d-e8a1-4031-a000-f99894e00d75.jpg?im_w=720',
      index: 52
    },
    {
      name: 'Venice',
      country: 'Italy',
      stars: 4.11,
      cost: 276731,
      image1: 'https://a0.muscache.com/im/pictures/bac33416-c4dd-4da6-be0f-39fe4ea4ce13.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/dac52732-dec9-4bfc-b2c3-e858d60178f8.jpg?im_w=720',
      index: 53
    },
    {
      name: 'Cape Town',
      country: 'South Africa',
      stars: 4.85,
      cost: 124510,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-588302148367299476/original/c3927c1e-e349-41b9-94da-7b7daf214a46.jpeg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-882444305415268545/original/08dce790-1eac-46d6-b1e6-bba76a9788f5.jpeg?im_w=720',
      index: 54
    },
    {
      name: 'Rome',
      country: 'Italy',
      stars: 4.54,
      cost: 134322,
      image1: 'https://a0.muscache.com/im/pictures/fa756aed-e6f1-4b6b-94aa-0e9ceecc3f20.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-666472886771993845/original/7de8f9b2-f1c1-40f2-9b2e-e2894b09ef80.jpeg?im_w=720',
      index: 55
    },
    {
      name: 'Rome',
      country: 'Italy',
      stars: 4.95,
      cost: 224619,
      image1: 'https://a0.muscache.com/im/pictures/466d8309-b618-459d-99d8-a5c5623c350f.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-873163174197158030/original/c8c73513-8794-47da-b94c-489499405215.jpeg?im_w=720',
      index: 56
    },
    {
      name: 'Cape Town',
      country: 'South Africa',
      stars: 4.29,
      cost: 178640,
      image1: 'https://a0.muscache.com/im/pictures/c0f9fe46-3743-45e9-99ed-4967cdc182a2.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/f2820d9b-4f53-47e6-905e-55a9ec06d606.jpg?im_w=720',
      index: 57
    },
    {
      name: 'Venice',
      country: 'Italy',
      stars: 4.07,
      cost: 415097,
      image1: 'https://a0.muscache.com/im/pictures/bf9ef208-c005-467c-9937-2168dac4cfb9.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/104ca552-d981-4e74-b9cf-0ee2e7b37d6d.jpg?im_w=720',
      index: 58
    },
    {
      name: 'Marrakech',
      country: 'Morocco',
      stars: 4.27,
      cost: 320413,
      image1: 'https://a0.muscache.com/im/pictures/5e622354-f982-4c99-a443-65da2eac249d.jpg?im_w=720',
      image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-607681174207418428/original/a8aac2cd-09ff-40bd-ae61-59f3444d71ad.jpeg?im_w=720',
      index: 59
    },
    {
      name: 'Dubai',
      country: 'UAE',
      stars: 4.07,
      cost: 17871,
      image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-701897175680119511/original/14eea1ab-3bb4-466f-8c02-fcce7a8a4b5f.jpeg?im_w=720',
      image2: '',
      index: 60
    }
  ];
}
