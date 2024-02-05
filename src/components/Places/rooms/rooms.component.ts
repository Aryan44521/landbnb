import { Component } from '@angular/core';
import { CardComponent } from '../../Helpers/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CardComponent,FormsModule,CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  places=[ {
    name: 'Tybee Island',
    country: 'Georgia',
    stars: 4.96,
    cost: 40482,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-666543920439753899/original/1df85b0f-afce-40b3-9a8c-4985d356ead1.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-666543920439753899/original/1df85b0f-afce-40b3-9a8c-4985d356ead1.jpeg?im_w=720',
    index: 0
  },
  {
    name: 'Davenport',
    country: 'Florida',
    stars: 4.94,
    cost: 86663,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584767554116271887/original/9c0b1c9b-9615-4923-9969-7a8d96331532.png?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584767554116271887/original/9c0b1c9b-9615-4923-9969-7a8d96331532.png?im_w=720',
    index: 1
  },
  {
    name: 'Ovalo',
    country: 'Texas',
    stars: 5,
    cost: 57755,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-807647632904963046/original/17a93c07-b9f5-4741-8963-fffe3b49e1de.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-807647632904963046/original/17a93c07-b9f5-4741-8963-fffe3b49e1de.jpeg?im_w=720',
    index: 2
  },
  {
    name: 'Scottsdale',
    country: 'Arizona',
    stars: 4.99,
    cost: 133855,
    image1: 'https://a0.muscache.com/im/pictures/2e0cef39-e4dc-4c40-b221-516e4a3ce6a1.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/2e0cef39-e4dc-4c40-b221-516e4a3ce6a1.jpg?im_w=720',
    index: 3
  },
  {
    name: 'Dripping Springs',
    country: 'Texas',
    stars: 4.91,
    cost: 151356,
    image1: 'https://a0.muscache.com/im/pictures/73640550/bf22eada_original.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/73640550/bf22eada_original.jpg?im_w=720',
    index: 4
  },
  {
    name: 'Evart',
    country: 'Michigan',
    stars: 4.96,
    cost: 44894,
    image1: 'https://a0.muscache.com/im/pictures/00b9d90a-fc5a-4dae-9b9f-16fc0494de11.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/00b9d90a-fc5a-4dae-9b9f-16fc0494de11.jpg?im_w=720',
    index: 5
  },
  {
    name: 'Scottsdale',
    country: 'Arizona',
    stars: 4.96,
    cost: 211042,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-997858635620372183/original/251e1636-9814-42fa-bf17-e328d87a5b63.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-997858635620372183/original/251e1636-9814-42fa-bf17-e328d87a5b63.jpeg?im_w=720',
    index: 6
  },
  {
    name: 'Scottsdale',
    country: 'Arizona',
    stars: 4.98,
    cost: 78316,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-624892699755656283/original/80eb68f7-f7f8-4cd5-a2cc-b6fc423d9178.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-624892699755656283/original/80eb68f7-f7f8-4cd5-a2cc-b6fc423d9178.jpeg?im_w=720',
    index: 7
  },
  {
    name: 'Orlando',
    country: 'Florida',
    stars: 4.34,
    cost: 37607,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-857275076829684435/original/b664c38b-cbec-430b-b610-80b87931de06.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-857275076829684435/original/b664c38b-cbec-430b-b610-80b87931de06.jpeg?im_w=720',
    index: 8
  },
  {
    name: 'Markesan',
    country: 'Wisconsin',
    stars: 4.9,
    cost: 44083,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-940563795661048271/original/17d542e7-e132-40ca-a571-f3a846f706d0.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-940563795661048271/original/17d542e7-e132-40ca-a571-f3a846f706d0.jpeg?im_w=720',
    index: 9
  },
  {
    name: 'Kissimmee',
    country: 'Florida',
    stars: 4.99,
    cost: 28851,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-651652405721481928/original/e6dca11f-3eb3-4218-a91e-351978eb1372.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-651652405721481928/original/e6dca11f-3eb3-4218-a91e-351978eb1372.jpeg?im_w=720',
    index: 10
  },
  {
    name: 'Kissimmee',
    country: 'Florida',
    stars: 4.75,
    cost: 24240,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-718809084038797732/original/92e9622e-9747-45b8-8f3d-1ecf283b8383.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-718809084038797732/original/92e9622e-9747-45b8-8f3d-1ecf283b8383.jpeg?im_w=720',
    index: 11
  },
  {
    name: 'Davenport',
    country: 'Florida',
    stars: 4.92,
    cost: 22455,
    image1: 'https://a0.muscache.com/im/pictures/ec37e5e3-9aa3-4872-98d1-013b8e7e4099.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/ec37e5e3-9aa3-4872-98d1-013b8e7e4099.jpg?im_w=720',
    index: 12
  },
  {
    name: 'Chicago',
    country: 'Illinois',
    stars: 5,
    cost: 47320,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-965974723366045528/original/1111c15d-442a-4c46-88d4-372e09bf4255.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-965974723366045528/original/1111c15d-442a-4c46-88d4-372e09bf4255.jpeg?im_w=720',
    index: 13
  },
  {
    name: 'Kissimmee',
    country: 'Florida',
    stars: 4.98,
    cost: 50273,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-802357376696660287/original/af602ad1-cf3c-4b1d-baf6-9d1036d57aae.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-802357376696660287/original/af602ad1-cf3c-4b1d-baf6-9d1036d57aae.jpeg?im_w=720',
    index: 14
  },
  {
    name: 'Champions Gate',
    country: 'Florida',
    stars: 4.81,
    cost: 56289,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-633966436740723606/original/580da390-ea37-4ae7-96ab-1536c5de1487.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-633966436740723606/original/580da390-ea37-4ae7-96ab-1536c5de1487.jpeg?im_w=720',
    index: 15
  },
  {
    name: 'San Jose de Las Matas',
    country: 'Dominican Republic',
    stars: 4.86,
    cost: 17263,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-578487124978662053/original/4cabc3ea-44d0-449a-86c8-67ea09af54fa.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-578487124978662053/original/4cabc3ea-44d0-449a-86c8-67ea09af54fa.jpeg?im_w=720',
    index: 16
  },
  {
    name: 'Kissimmee',
    country: 'Florida',
    stars: 4.94,
    cost: 22427,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1037240586031181730/original/0090cd13-0d45-486d-8958-24db245a111f.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1037240586031181730/original/0090cd13-0d45-486d-8958-24db245a111f.jpeg?im_w=720',
    index: 17
  },
  {
    name: 'Clermont',
    country: 'Florida',
    stars: 4.87,
    cost: 141246,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-619532789095309427/original/5573e80f-29a8-4013-b4b7-a33e9f918c03.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-619532789095309427/original/5573e80f-29a8-4013-b4b7-a33e9f918c03.jpeg?im_w=720',
    index: 18
  },
  {
    name: 'Davenport',
    country: 'Florida',
    stars: 4.87,
    cost: 28960,
    image1: 'https://a0.muscache.com/im/pictures/b49eedbb-e40e-4cbd-89c2-2408c2f4e238.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/b49eedbb-e40e-4cbd-89c2-2408c2f4e238.jpg?im_w=720',
    index: 19
  },
  {
    name: 'Orlando',
    country: 'Florida',
    stars: 5,
    cost: 71347,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-777801372754158308/original/f5c93f7c-209d-48d9-a119-b784f347511b.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-777801372754158308/original/f5c93f7c-209d-48d9-a119-b784f347511b.jpeg?im_w=720',
    index: 20
  },
  {
    name: 'Davenport',
    country: 'Florida',
    stars: 4.97,
    cost: 71472,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-620126464474333907/original/0d6d505b-82ec-4e70-88e6-ed1415731641.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-620126464474333907/original/0d6d505b-82ec-4e70-88e6-ed1415731641.jpeg?im_w=720',
    index: 21
  },
  {
    name: 'Kissimmee',
    country: 'Florida',
    stars: 5,
    cost: 28838,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-52612233/original/271db77d-571d-4893-99ca-649b5467cd5d.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-52612233/original/271db77d-571d-4893-99ca-649b5467cd5d.jpeg?im_w=720',
    index: 22
  },
  {
    name: 'Ahwahnee',
    country: 'California',
    stars: 4.99,
    cost: 29845,
    image1: 'https://a0.muscache.com/im/pictures/13bb86cf-70dd-4c9e-a0d8-eb93f92d348c.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/13bb86cf-70dd-4c9e-a0d8-eb93f92d348c.jpg?im_w=720',
    index: 23
  },
  {
    name: 'Davenport',
    country: 'Florida',
    stars: 5,
    cost: 31317,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-825525789312458806/original/7f2a2cf0-ff6d-4b55-b9a2-efcc36ab80b0.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-825525789312458806/original/7f2a2cf0-ff6d-4b55-b9a2-efcc36ab80b0.jpeg?im_w=720',
    index: 24
  },
  {
    name: 'Four Corners',
    country: 'Florida',
    stars: 4.79,
    cost: 77740,
    image1: 'https://a0.muscache.com/im/pictures/59ae18f3-8465-4da2-980c-90599823a122.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/59ae18f3-8465-4da2-980c-90599823a122.jpg?im_w=720',
    index: 25
  },
  {
    name: 'Scottsdale',
    country: 'Arizona',
    stars: 5,
    cost: 77811,
    image1: 'https://a0.muscache.com/im/pictures/9b8ee1ba-645d-489b-86f7-6454a10977e0.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/9b8ee1ba-645d-489b-86f7-6454a10977e0.jpg?im_w=720',
    index: 26
  },
  {
    name: 'Kissimmee',
    country: 'Florida',
    stars: 4.83,
    cost: 56209,
    image1: 'https://a0.muscache.com/im/pictures/ecd8a768-f086-42f7-a99b-2124f7923e88.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/ecd8a768-f086-42f7-a99b-2124f7923e88.jpg?im_w=720',
    index: 27
  },
  {
    name: 'Davenport',
    country: 'Florida',
    stars: 4.95,
    cost: 28544,
    image1: 'https://a0.muscache.com/im/pictures/85264f95-97ad-427b-a1c3-622258eb5f25.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/85264f95-97ad-427b-a1c3-622258eb5f25.jpg?im_w=720',
    index: 28
  },
  {
    name: 'Polk County',
    country: 'Florida',
    stars: 4.87,
    cost: 36947,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-787417976487768186/original/f7d9ecbb-60cd-494a-9ce6-52208d4f3ba5.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-787417976487768186/original/f7d9ecbb-60cd-494a-9ce6-52208d4f3ba5.jpeg?im_w=720',
    index: 29
  },
  {
    name: 'Paradise Valley',
    country: 'Arizona',
    stars: 4.86,
    cost: 125323,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-675482766741041843/original/155f485f-8e0a-4f0f-930b-438c933c454c.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-675482766741041843/original/155f485f-8e0a-4f0f-930b-438c933c454c.jpeg?im_w=720',
    index: 30
  },
  {
    name: 'Tracy',
    country: 'California',
    stars: 4.89,
    cost: 66669,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-725399129612406141/original/3ff3d484-1bde-4073-aa48-7f2132919059.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-725399129612406141/original/3ff3d484-1bde-4073-aa48-7f2132919059.jpeg?im_w=720',
    index: 31
  },
  {
    name: 'Kissimmee',
    country: 'Florida',
    stars: 5,
    cost: 99577,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-978184043360735410/original/153a297c-5206-4b0c-a4c7-b47e836b808b.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-978184043360735410/original/153a297c-5206-4b0c-a4c7-b47e836b808b.jpeg?im_w=720',
    index: 32
  },
  {
    name: 'Davenport',
    country: 'Florida',
    stars: 4.95,
    cost: 33282,
    image1: 'https://a0.muscache.com/im/pictures/fd87288c-79d3-4e08-8889-a1721102dcab.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/fd87288c-79d3-4e08-8889-a1721102dcab.jpg?im_w=720',
    index: 33
  },
  {
    name: 'Kissimmee',
    country: 'Florida',
    stars: 4.91,
    cost: 20364,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-19016485/original/fe96cd5d-f784-4424-b22e-f34bc8d8a47a.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-19016485/original/fe96cd5d-f784-4424-b22e-f34bc8d8a47a.jpeg?im_w=720',
    index: 34
  },
  {
    name: 'Davenport',
    country: 'Florida',
    stars: 4.96,
    cost: 35991,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-51440258/original/614304bd-3895-4c71-a97b-826600df8eae.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-51440258/original/614304bd-3895-4c71-a97b-826600df8eae.jpeg?im_w=720',
    index: 35
  },
  {
    name: 'Kissimmee',
    country: 'Florida',
    stars: 4.47,
    cost: 259715,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-825535484125828465/original/6f780f1a-d76b-4102-8b0b-68ac75a8c0d9.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-825535484125828465/original/6f780f1a-d76b-4102-8b0b-68ac75a8c0d9.jpeg?im_w=720',
    index: 36
  },
  {
    name: 'Scottsdale',
    country: 'Arizona',
    stars: 5,
    cost: 180223,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-582472436042790577/original/30183c5a-42c4-4f3a-9084-c4c546e23c56.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-582472436042790577/original/30183c5a-42c4-4f3a-9084-c4c546e23c56.jpeg?im_w=720',
    index: 37
  },
  {
    name: 'Kissimmee',
    country: 'Florida',
    stars: 4.83,
    cost: 96176,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-34209087/original/f90c0221-9834-4e28-aea8-dcf8a2631f4b.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-34209087/original/f90c0221-9834-4e28-aea8-dcf8a2631f4b.jpeg?im_w=720',
    index: 38
  },
  {
    name: 'Davenport',
    country: 'Florida',
    stars: 4.36,
    cost: 39559,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-52775925/original/e57bb2d2-f24d-47ff-a25c-2bd08a3e1ff8.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-52775925/original/e57bb2d2-f24d-47ff-a25c-2bd08a3e1ff8.jpeg?im_w=720',
    index: 39
  },
  {
    name: 'Davenport',
    country: 'Florida',
    stars: 4.72,
    cost: 76043,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-52745489/original/b2baa904-141c-4f40-8e39-0117181e1fe3.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-52745489/original/b2baa904-141c-4f40-8e39-0117181e1fe3.jpeg?im_w=720',
    index: 40
  },
  {
    name: 'Four Corners',
    country: 'Florida',
    stars: 4.92,
    cost: 38577,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-38779249/original/c0972492-acd3-4cf8-a331-1f5272deae9c.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-38779249/original/c0972492-acd3-4cf8-a331-1f5272deae9c.jpeg?im_w=720',
    index: 41
  },
  {
    name: 'Osceola County',
    country: 'Florida',
    stars: 4.94,
    cost: 31727,
    image1: 'https://a0.muscache.com/im/pictures/d77d6f07-7caa-46c3-850c-5c987cf7dfa0.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/d77d6f07-7caa-46c3-850c-5c987cf7dfa0.jpg?im_w=720',
    index: 42
  },
  {
    name: 'Orange County',
    country: 'California',
    stars: 4.95,
    cost: 36216,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-896072391293358294/original/de557ca0-6c94-4190-bb45-887b83aeeb0a.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-896072391293358294/original/de557ca0-6c94-4190-bb45-887b83aeeb0a.jpeg?im_w=720',
    index: 43
  },
  {
    name: 'Davenport',
    country: 'Florida',
    stars: 5,
    cost: 44819,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-645823175675468561/original/738c7d5c-b96c-4c7c-a0f1-4e87ad653834.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-645823175675468561/original/738c7d5c-b96c-4c7c-a0f1-4e87ad653834.jpeg?im_w=720',
    index: 44
  },
  {
    name: 'Kissimmee',
    country: 'Florida',
    stars: 4.86,
    cost: 31267,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-53056131/original/4644574f-6bf4-4c99-bb3c-624fa25d2068.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-53056131/original/4644574f-6bf4-4c99-bb3c-624fa25d2068.jpeg?im_w=720',
    index: 45
  },
  {
    name: 'Kissimmee',
    country: 'Florida',
    stars: 4.78,
    cost: 72545,
    image1: 'https://a0.muscache.com/im/pictures/1ba058f0-1b9d-4bd3-9405-7a3a1a69bd28.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/1ba058f0-1b9d-4bd3-9405-7a3a1a69bd28.jpg?im_w=720',
    index: 46
  },
  {
    name: 'Orange County',
    country: 'California',
    stars: 4.94,
    cost: 56183,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-34209159/original/adfb94ab-0ebd-4667-9f8d-ef17d1832dd0.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-34209159/original/adfb94ab-0ebd-4667-9f8d-ef17d1832dd0.jpeg?im_w=720',
    index: 47
  },
  {
    name: 'Cave Creek',
    country: 'Arizona',
    stars: 5,
    cost: 181034,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-43589316/original/59b179b7-fc1c-43ea-a505-49128bbc5972.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-43589316/original/59b179b7-fc1c-43ea-a505-49128bbc5972.jpeg?im_w=720',
    index: 48
  },
  {
    name: 'Koksijde',
    country: 'Belgium',
    stars: 5,
    cost: 95167,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-821130640681525211/original/80673e3d-756d-44d4-8621-dcd2db6010c4.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-821130640681525211/original/80673e3d-756d-44d4-8621-dcd2db6010c4.jpeg?im_w=720',
    index: 49
  },
  {
    name: 'Davenport',
    country: 'Florida',
    stars: 5,
    cost: 60058,
    image1: 'https://a0.muscache.com/im/pictures/1ef42c09-2bfc-4e40-9125-3f5eb8f2bb5e.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/1ef42c09-2bfc-4e40-9125-3f5eb8f2bb5e.jpg?im_w=720',
    index: 50
  },
  {
    name: 'Kissimmee',
    country: 'Florida',
    stars: 4.87,
    cost: 46772,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-40054950/original/7403fd55-ccd4-411c-8fb2-cf0daf86a24b.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-40054950/original/7403fd55-ccd4-411c-8fb2-cf0daf86a24b.jpeg?im_w=720',
    index: 51
  },
  {
    name: 'Indio',
    country: 'California',
    stars: 4.18,
    cost: 69177,
    image1: 'https://a0.muscache.com/im/pictures/monet/Luxury-50485780/original/834e8910-7f7a-4d57-9dad-c8c57be269c8?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/monet/Luxury-50485780/original/834e8910-7f7a-4d57-9dad-c8c57be269c8?im_w=720',
    index: 52
  },
  {
    name: 'Scottsdale',
    country: 'Arizona',
    stars: 4.94,
    cost: 58424,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-52928218/original/1bd1b13c-f454-4723-8ff7-9bfc416a315a.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-52928218/original/1bd1b13c-f454-4723-8ff7-9bfc416a315a.jpeg?im_w=720',
    index: 53
  },
  {
    name: 'Newent Glos',
    country: 'UK',
    stars: 4.99,
    cost: 72477,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-655630266581343576/original/f42a431b-fceb-4bcd-81e3-8bb680b84579.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-655630266581343576/original/f42a431b-fceb-4bcd-81e3-8bb680b84579.jpeg?im_w=720',
    index: 54
  },
  {
    name: 'San Diego',
    country: 'California',
    stars: 5,
    cost: 103267,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-21108161/original/56804059-7e91-4b55-bae6-f0d490ee73ef.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-21108161/original/56804059-7e91-4b55-bae6-f0d490ee73ef.jpeg?im_w=720',
    index: 55
  },
  {
    name: 'Zakopane',
    country: 'Poland',
    stars: 4.98,
    cost: 11913,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-45672382/original/ea4eb479-cfcc-4fc9-81aa-72fdc6e53a8a.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-45672382/original/ea4eb479-cfcc-4fc9-81aa-72fdc6e53a8a.jpeg?im_w=720',
    index: 56
  },
  {
    name: 'Stroudsburg',
    country: 'Pennsylvania',
    stars: 5,
    cost: 57638,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-683171160335117307/original/b7ead83f-a581-4347-9410-d6348afe3a43.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-683171160335117307/original/b7ead83f-a581-4347-9410-d6348afe3a43.jpeg?im_w=720',
    index: 57
  },
  {
    name: 'Kissimmee',
    country: 'Florida',
    stars: 5,
    cost: 207652,
    image1: 'https://a0.muscache.com/im/pictures/46c0d22c-678e-4f00-8c70-fc003131c504.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/46c0d22c-678e-4f00-8c70-fc003131c504.jpg?im_w=720',
    index: 58
  },
  {
    name: 'Mammoth Lakes',
    country: 'California',
    stars: 4.96,
    cost: 31198,
    image1: 'https://a0.muscache.com/im/pictures/9b3a23dd-fd5d-4c71-b8a7-c72978ed3ed2.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/9b3a23dd-fd5d-4c71-b8a7-c72978ed3ed2.jpg?im_w=720',
    index: 59
  }];

}
