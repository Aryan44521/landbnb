import { Component } from '@angular/core';
import { CardComponent } from '../../Helpers/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-island',
  standalone: true,
  imports: [CardComponent, FormsModule, CommonModule],
  templateUrl: './island.component.html',
  styleUrl: './island.component.css',
})
export class IslandComponent {
  places = [
    {
      name: 'Malé',
      country: 'Maldives',
      stars: 4.09,
      cost: 47348,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-852899544635683289/original/c627f47e-8ca9-4471-90d4-1fd987dd2362.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-852899544635683289/original/c627f47e-8ca9-4471-90d4-1fd987dd2362.jpeg?im_w=720',
      index: 0,
    },
    {
      name: 'Dhigurah',
      country: 'Maldives',
      stars: 4.03,
      cost: 63446,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-696847375839509250/original/9686a3bd-dfff-4ae6-bb51-514154308bdb.png?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-696847375839509250/original/9686a3bd-dfff-4ae6-bb51-514154308bdb.png?im_w=720',
      index: 1,
    },
    {
      name: 'Kaafu Atoll',
      country: 'Maldives',
      stars: 4.25,
      cost: 56818,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-859709719997723808/original/ca07821e-c540-41a5-8e89-1daf0ea9e9a6.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-859709719997723808/original/ca07821e-c540-41a5-8e89-1daf0ea9e9a6.jpeg?im_w=720',
      index: 2,
    },
    {
      name: 'Alifu Dhaalu Atoll',
      country: 'Maldives',
      stars: 4.36,
      cost: 82130,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-54061874/original/1ddc158f-c662-4014-a8da-50853ec3fedc.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-54061874/original/1ddc158f-c662-4014-a8da-50853ec3fedc.jpeg?im_w=720',
      index: 3,
    },
    {
      name: 'Malé',
      country: 'Maldives',
      stars: 4.55,
      cost: 123105,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-48224861/original/abad3982-eea9-488a-aaa1-d122847595ba.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-48224861/original/abad3982-eea9-488a-aaa1-d122847595ba.jpeg?im_w=720',
      index: 4,
    },
    {
      name: 'Fihalholi',
      country: 'Maldives',
      stars: 4.72,
      cost: 74242,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-52960006/original/6e21b2e3-4a50-44f7-9641-dc9ae2e2ef4e.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-52960006/original/6e21b2e3-4a50-44f7-9641-dc9ae2e2ef4e.jpeg?im_w=720',
      index: 5,
    },
    {
      name: 'Munroe Island',
      country: 'India',
      stars: 4.27,
      cost: 21112,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-19712496/original/6e648ff8-9fbc-4a15-bb25-df2b525af4df.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-19712496/original/6e648ff8-9fbc-4a15-bb25-df2b525af4df.jpeg?im_w=720',
      index: 6,
    },
    {
      name: 'Meeru Island',
      country: 'Maldives',
      stars: 4.24,
      cost: 53977,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-853512929423214729/original/d2731d23-980b-4fc1-8ccc-926d0e3f4eed.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-853512929423214729/original/d2731d23-980b-4fc1-8ccc-926d0e3f4eed.jpeg?im_w=720',
      index: 7,
    },
    {
      name: 'Bathalaa',
      country: 'Maldives',
      stars: 5,
      cost: 55681,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-781497369618213108/original/5f138dad-949d-414e-a9c7-82fa8341b8c2.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-781497369618213108/original/5f138dad-949d-414e-a9c7-82fa8341b8c2.jpeg?im_w=720',
      index: 8,
    },
    {
      name: 'Maalhos',
      country: 'Maldives',
      stars: 4.8,
      cost: 13542,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-852441565106208849/original/35039868-f966-4cd6-b12a-d42612535dc2.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-852441565106208849/original/35039868-f966-4cd6-b12a-d42612535dc2.jpeg?im_w=720',
      index: 9,
    },
    {
      name: 'North Male Atoll',
      country: 'Maldives',
      stars: 4.5,
      cost: 32481,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-48688421/original/ab7d512e-f1da-4a44-b755-d7b9aad4d28d.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-48688421/original/ab7d512e-f1da-4a44-b755-d7b9aad4d28d.jpeg?im_w=720',
      index: 10,
    },
    {
      name: 'Maldives',
      country: 'Maldives',
      stars: 4.9,
      cost: 56818,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-793940122016865088/original/e61a54cc-394a-46c5-8ed9-82e20ad0b3fa.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-793940122016865088/original/e61a54cc-394a-46c5-8ed9-82e20ad0b3fa.jpeg?im_w=720',
      index: 11,
    },
    {
      name: 'Baa Atoll',
      country: 'Maldives',
      stars: 4.57,
      cost: 42613,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-740794570290746812/original/8dbab716-dbe3-44f8-b3cf-d5fc55facc2b.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-740794570290746812/original/8dbab716-dbe3-44f8-b3cf-d5fc55facc2b.jpeg?im_w=720',
      index: 12,
    },
    {
      name: 'Malé',
      country: 'Maldives',
      stars: 4.57,
      cost: 92802,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-696814193028106892/original/b13e40c7-3276-45ff-8f0d-4b67f44b2571.png?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-696814193028106892/original/b13e40c7-3276-45ff-8f0d-4b67f44b2571.png?im_w=720',
      index: 13,
    },
    {
      name: 'Furaveri',
      country: 'Maldives',
      stars: 4.74,
      cost: 75757,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-740382368952542950/original/4023ae7d-634e-4f34-9ec5-88c90b91a7af.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-740382368952542950/original/4023ae7d-634e-4f34-9ec5-88c90b91a7af.jpeg?im_w=720',
      index: 14,
    },
    {
      name: 'North Male Atoll',
      country: 'Maldives',
      stars: 4.5,
      cost: 74242,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-793908024584446984/original/13838e4c-a95c-4879-ae2b-3482baaee95d.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-793908024584446984/original/13838e4c-a95c-4879-ae2b-3482baaee95d.jpeg?im_w=720',
      index: 15,
    },
    {
      name: 'Fulidhoo',
      country: 'Maldives',
      stars: 4.5,
      cost: 42613,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-831527464018917266/original/29c1da03-9c2f-489d-8436-e3925d6834fc.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-831527464018917266/original/29c1da03-9c2f-489d-8436-e3925d6834fc.jpeg?im_w=720',
      index: 16,
    },
    {
      name: 'Malé',
      country: 'Maldives',
      stars: 4.12,
      cost: 93749,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-738801008337024563/original/278f84b5-a5b5-4274-a095-9fe008e19387.png?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-738801008337024563/original/278f84b5-a5b5-4274-a095-9fe008e19387.png?im_w=720',
      index: 17,
    },
    {
      name: 'Olhuveli',
      country: 'Maldives',
      stars: 4.67,
      cost: 75757,
      image1:
        'https://a0.muscache.com/im/pictures/3cef8cfe-6a39-4d74-85ed-fa84523c6095.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/3cef8cfe-6a39-4d74-85ed-fa84523c6095.jpg?im_w=720',
      index: 18,
    },
    {
      name: 'Ernakulam',
      country: 'India',
      stars: 4.91,
      cost: 17118,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-805552900806336497/original/2dae1b8b-243d-443e-acc7-5c28a61ffca2.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-805552900806336497/original/2dae1b8b-243d-443e-acc7-5c28a61ffca2.jpeg?im_w=720',
      index: 19,
    },
    {
      name: 'Bathalaa',
      country: 'Maldives',
      stars: 4.14,
      cost: 47348,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-845169086873132937/original/6720ba0b-6c1e-4d69-9bb0-29fe64335b7c.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-845169086873132937/original/6720ba0b-6c1e-4d69-9bb0-29fe64335b7c.jpeg?im_w=720',
      index: 20,
    },
    {
      name: 'North Male Atoll',
      country: 'Maldives',
      stars: 4.46,
      cost: 64962,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-23831080/original/ca34b4c5-a2b9-4846-a3dd-e036c4031208.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-23831080/original/ca34b4c5-a2b9-4846-a3dd-e036c4031208.jpeg?im_w=720',
      index: 21,
    },
    {
      name: 'Machchafushi',
      country: 'Maldives',
      stars: 4.63,
      cost: 64962,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-740569628901642067/original/757ef403-daec-430a-a892-e7c27f5f29d9.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-740569628901642067/original/757ef403-daec-430a-a892-e7c27f5f29d9.jpeg?im_w=720',
      index: 22,
    },
    {
      name: 'Kaafu Atoll',
      country: 'Maldives',
      stars: 4.75,
      cost: 187498,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-738248272796943948/original/fff22c40-a580-4687-a54c-d06407296ad2.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-738248272796943948/original/fff22c40-a580-4687-a54c-d06407296ad2.jpeg?im_w=720',
      index: 23,
    },
    {
      name: 'Makunudhoo',
      country: 'Maldives',
      stars: 4.43,
      cost: 37878,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-742512145116387034/original/81ec76e7-066c-45fe-953b-3e646ea80acc.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-742512145116387034/original/81ec76e7-066c-45fe-953b-3e646ea80acc.jpeg?im_w=720',
      index: 24,
    },
    {
      name: 'Malé',
      country: 'Maldives',
      stars: 4.42,
      cost: 56818,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-738846611945958521/original/0232a806-9f41-40ae-8c3c-34af73511244.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-738846611945958521/original/0232a806-9f41-40ae-8c3c-34af73511244.jpeg?im_w=720',
      index: 25,
    },
    {
      name: 'Kaafu Atoll',
      country: 'Maldives',
      stars: 4.94,
      cost: 56818,
      image1:
        'https://a0.muscache.com/im/pictures/d8a8e418-83ad-474d-9f90-94d8f8ee7955.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/d8a8e418-83ad-474d-9f90-94d8f8ee7955.jpg?im_w=720',
      index: 26,
    },
    {
      name: 'Kaashidhoo',
      country: 'Maldives',
      stars: 4.9,
      cost: 4782,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-839862613184793394/original/43a97d90-4d90-4000-881f-f82a5f48dd66.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-839862613184793394/original/43a97d90-4d90-4000-881f-f82a5f48dd66.jpeg?im_w=720',
      index: 27,
    },
    {
      name: 'Alimathaa',
      country: 'Maldives',
      stars: 4.48,
      cost: 47253,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-15306837/original/b88a7df6-a452-4860-be53-7dacc125d220.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-15306837/original/b88a7df6-a452-4860-be53-7dacc125d220.jpeg?im_w=720',
      index: 28,
    },
    {
      name: 'South Malé Atoll',
      country: 'Maldives',
      stars: 4.15,
      cost: 89249,
      image1:
        'https://a0.muscache.com/im/pictures/b8c44a9a-cd90-4e43-8985-637af78aaf6c.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/b8c44a9a-cd90-4e43-8985-637af78aaf6c.jpg?im_w=720',
      index: 29,
    },
    {
      name: 'Alifu Dhaalu Atoll',
      country: 'Maldives',
      stars: 4.61,
      cost: 74242,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-649264492256024232/original/1e16e3ce-6225-42c0-a83d-3bff7a9ed69a.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-649264492256024232/original/1e16e3ce-6225-42c0-a83d-3bff7a9ed69a.jpeg?im_w=720',
      index: 30,
    },
    {
      name: 'Kudafushi',
      country: 'Maldives',
      stars: 4.88,
      cost: 74242,
      image1:
        'https://a0.muscache.com/im/pictures/4db0669a-cb27-437c-a591-5a83087344b9.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/4db0669a-cb27-437c-a591-5a83087344b9.jpg?im_w=720',
      index: 31,
    },
    {
      name: 'North Male Atoll',
      country: 'Maldives',
      stars: 4.94,
      cost: 120643,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-549008258472079475/original/f59bb2ca-6c14-4a96-a2c3-97a0241a7c0f.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-549008258472079475/original/f59bb2ca-6c14-4a96-a2c3-97a0241a7c0f.jpeg?im_w=720',
      index: 32,
    },
    {
      name: 'Ba Atoll',
      country: 'Maldives',
      stars: 4.48,
      cost: 46945,
      image1:
        'https://a0.muscache.com/im/pictures/7e9b315e-648a-4233-9654-3b49649dcb57.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/7e9b315e-648a-4233-9654-3b49649dcb57.jpg?im_w=720',
      index: 33,
    },
    {
      name: 'Bandos',
      country: 'Maldives',
      stars: 4.39,
      cost: 33144,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-751998199033130540/original/b4e598a5-1852-4ed2-a68b-cc4993f1592d.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-751998199033130540/original/b4e598a5-1852-4ed2-a68b-cc4993f1592d.jpeg?im_w=720',
      index: 34,
    },
    {
      name: 'Munroe Island',
      country: 'India',
      stars: 4.64,
      cost: 21112,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-912305060013575560/original/97930fbe-6b28-48b7-9751-410cfdea72be.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-912305060013575560/original/97930fbe-6b28-48b7-9751-410cfdea72be.jpeg?im_w=720',
      index: 35,
    },
    {
      name: 'Veligandu',
      country: 'Maldives',
      stars: 4.21,
      cost: 37878,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-22494145/original/47ae698a-c222-40c6-8979-bfe1367d20c2.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-22494145/original/47ae698a-c222-40c6-8979-bfe1367d20c2.jpeg?im_w=720',
      index: 36,
    },
    {
      name: 'Kaafu Atoll',
      country: 'Maldives',
      stars: 4.64,
      cost: 64962,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-718732884736983855/original/845b4219-bad2-4222-a690-f02096aada19.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-718732884736983855/original/845b4219-bad2-4222-a690-f02096aada19.jpeg?im_w=720',
      index: 37,
    },
    {
      name: 'Kaafu Atoll',
      country: 'Maldives',
      stars: 4.35,
      cost: 28409,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-739861539114191177/original/805a49d7-1c7a-4f00-8d86-75a7169f4044.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-739861539114191177/original/805a49d7-1c7a-4f00-8d86-75a7169f4044.jpeg?im_w=720',
      index: 38,
    },
    {
      name: 'Ari Atoll',
      country: 'Maldives',
      stars: 4.33,
      cost: 75757,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-852899544635683289/original/d777a1be-6cd2-4653-a2a8-1adec5ac3b2c.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-852899544635683289/original/d777a1be-6cd2-4653-a2a8-1adec5ac3b2c.jpeg?im_w=720',
      index: 39,
    },
    {
      name: 'Haa Alifu Atoll',
      country: 'Maldives',
      stars: 4.81,
      cost: 53361,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-738885161834845603/original/1a295581-c3ee-4c4b-874c-6fa6b6ea94eb.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-738885161834845603/original/1a295581-c3ee-4c4b-874c-6fa6b6ea94eb.jpeg?im_w=720',
      index: 40,
    },
    {
      name: 'Alappuzha',
      country: 'India',
      stars: 4.9,
      cost: 7988,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-990827437722858927/original/b78df97e-ee94-42c0-bc99-13a4227cce5a.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-990827437722858927/original/b78df97e-ee94-42c0-bc99-13a4227cce5a.jpeg?im_w=720',
      index: 41,
    },
    {
      name: 'Kumarakom',
      country: 'India',
      stars: 4.58,
      cost: 31953,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-864774219223689377/original/091508f5-5b4a-4ba4-9293-907f8f36d37f.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-864774219223689377/original/091508f5-5b4a-4ba4-9293-907f8f36d37f.jpeg?im_w=720',
      index: 42,
    },
    {
      name: 'Velassaru',
      country: 'Maldives',
      stars: 4.76,
      cost: 51041,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-19871987/original/bb1b4cd0-fc31-4b8f-ac8d-0067ec900fbc.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-19871987/original/bb1b4cd0-fc31-4b8f-ac8d-0067ec900fbc.jpeg?im_w=720',
      index: 43,
    },
    {
      name: 'Malé Atoll',
      country: 'Maldives',
      stars: 4.03,
      cost: 27052,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-863407068486311500/original/647d07eb-3213-4894-ad60-655c70ccd39d.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-863407068486311500/original/647d07eb-3213-4894-ad60-655c70ccd39d.jpeg?im_w=720',
      index: 44,
    },
    {
      name: 'Kollam',
      country: 'India',
      stars: 5,
      cost: 1027,
      image1:
        'https://a0.muscache.com/im/pictures/a0a2d6fd-6338-447f-aa4e-2c240f0cd409.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/a0a2d6fd-6338-447f-aa4e-2c240f0cd409.jpg?im_w=720',
      index: 45,
    },
    {
      name: 'Fulidhoo',
      country: 'Maldives',
      stars: 4.26,
      cost: 13277,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-796243116780271371/original/38d2d4b9-ffcd-46db-bde4-1faa38da6c7d.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-796243116780271371/original/38d2d4b9-ffcd-46db-bde4-1faa38da6c7d.jpeg?im_w=720',
      index: 46,
    },
    {
      name: 'Lhaviyani Atoll',
      country: 'Maldives',
      stars: 4.17,
      cost: 71022,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-740923747063236364/original/74bfa39c-6beb-4b51-9286-2a4fe2130e4e.png?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-740923747063236364/original/74bfa39c-6beb-4b51-9286-2a4fe2130e4e.png?im_w=720',
      index: 47,
    },
    {
      name: 'Kuramathi',
      country: 'Maldives',
      stars: 4.54,
      cost: 157764,
      image1:
        'https://a0.muscache.com/im/pictures/ea0e969a-55f1-4a23-b095-c7d01c46d76e.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/ea0e969a-55f1-4a23-b095-c7d01c46d76e.jpg?im_w=720',
      index: 48,
    },
    {
      name: 'Kollam',
      country: 'India',
      stars: 5,
      cost: 32809,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-48175370/original/21acdc4a-215c-4a7a-9bcb-8f0dd1ab420e.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-48175370/original/21acdc4a-215c-4a7a-9bcb-8f0dd1ab420e.jpeg?im_w=720',
      index: 49,
    },
    {
      name: 'Noonu Atoll',
      country: 'Maldives',
      stars: 4.99,
      cost: 56818,
      image1:
        'https://a0.muscache.com/im/pictures/47195f76-c94b-412a-8e59-156a8b29bde9.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/47195f76-c94b-412a-8e59-156a8b29bde9.jpg?im_w=720',
      index: 50,
    },
    {
      name: 'Malé',
      country: 'Maldives',
      stars: 4.17,
      cost: 55681,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-736194760184993424/original/adfd6818-0614-437a-a032-2c9eff1cbd9e.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-736194760184993424/original/adfd6818-0614-437a-a032-2c9eff1cbd9e.jpeg?im_w=720',
      index: 51,
    },
    {
      name: 'Huruvalhi',
      country: 'Maldives',
      stars: 4.89,
      cost: 92802,
      image1:
        'https://a0.muscache.com/im/pictures/444a8225-e657-4d62-97db-42f7423ae890.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/444a8225-e657-4d62-97db-42f7423ae890.jpg?im_w=720',
      index: 52,
    },
    {
      name: 'Ukulhas',
      country: 'Maldives',
      stars: 4.83,
      cost: 12323,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-697345039809294002/original/e238e84e-4e86-49b2-9f1e-47f20d1396ef.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-697345039809294002/original/e238e84e-4e86-49b2-9f1e-47f20d1396ef.jpeg?im_w=720',
      index: 53,
    },
    {
      name: 'Ungoofaaru',
      country: 'Maldives',
      stars: 4.26,
      cost: 46401,
      image1:
        'https://a0.muscache.com/im/pictures/fcae9cc4-d63a-4b24-9cec-59b0792456a9.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/fcae9cc4-d63a-4b24-9cec-59b0792456a9.jpg?im_w=720',
      index: 54,
    },
    {
      name: "Dhigufaruvinagan'du",
      country: 'Maldives',
      stars: 4.21,
      cost: 141187,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-895315758693613477/original/dcad31e2-9a55-4a38-9e8a-43ca5d940af3.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-895315758693613477/original/dcad31e2-9a55-4a38-9e8a-43ca5d940af3.jpeg?im_w=720',
      index: 55,
    },
    {
      name: 'Baa Atoll',
      country: 'Maldives',
      stars: 4.39,
      cost: 46401,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-882392184243750559/original/790d5fb9-bda3-4340-89b7-3bbfa8b9795a.png?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-882392184243750559/original/790d5fb9-bda3-4340-89b7-3bbfa8b9795a.png?im_w=720',
      index: 56,
    },
    {
      name: 'Dhonakulhi',
      country: 'Maldives',
      stars: 4.57,
      cost: 789980,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-704788750841607856/original/b3d159d6-b28a-47a9-877a-d75518df9ea6.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-704788750841607856/original/b3d159d6-b28a-47a9-877a-d75518df9ea6.jpeg?im_w=720',
      index: 57,
    },
    {
      name: 'Baa Kihaadhoo',
      country: 'Maldives',
      stars: 5,
      cost: 7102,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-53436410/original/2dfebfdc-c502-4e55-b5f8-6ae6bd056de0.png?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-53436410/original/2dfebfdc-c502-4e55-b5f8-6ae6bd056de0.png?im_w=720',
      index: 58,
    },
    {
      name: 'Kendhoo',
      country: 'Maldives',
      stars: 4.96,
      cost: 37121,
      image1:
        'https://a0.muscache.com/im/pictures/monet/Luxury-54351340/original/42ebf54f-e39e-4156-97ec-076122c97359?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/monet/Luxury-54351340/original/42ebf54f-e39e-4156-97ec-076122c97359?im_w=720',
      index: 59,
    },
    {
      name: 'Atoll',
      country: 'Maldives',
      stars: 4.89,
      cost: 4261,
      image1:
        'https://a0.muscache.com/im/pictures/b425de43-4ac6-42e0-b459-de74f332f0f0.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/b425de43-4ac6-42e0-b459-de74f332f0f0.jpg?im_w=720',
      index: 60,
    },
  ];
}
