import { Component } from '@angular/core';
import { CardComponent } from '../../Helpers/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-castles',
  standalone: true,
  imports: [CardComponent,FormsModule,CommonModule],
  templateUrl: './castles.component.html',
  styleUrl: './castles.component.css'
})
export class CastlesComponent {
  places=[ {
    name: 'Bujra',
    country: 'India',
    stars: 4.19,
    cost: 91294,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-53519419/original/f0f0a291-65a9-442b-9036-45b7e5e25676.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-53519419/original/df0ef78a-3f63-4d16-a5ac-abff6b82f49b.jpeg?im_w=720',
    index: 0
  },
  {
    name: 'Bad Wimsbach-Neydharting',
    country: 'Austria',
    stars: 5,
    cost: 12659,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-832355501498041527/original/551de2c9-6981-4222-b21d-75dd8792bd2d.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-832355501498041527/original/ca8c5bfa-9fa6-47b8-81c9-4af891d721a4.jpeg?im_w=720',
    index: 1
  },
  {
    name: 'Sinaia',
    country: 'Romania',
    stars: 4.79,
    cost: 56393,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-47086741/original/89035847-1f96-4269-af1e-120a19e1cfd7.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/16741847/6cdb4377_original.jpg?im_w=720',
    index: 2
  },
  {
    name: 'Lakonia',
    country: 'Greece',
    stars: 4.81,
    cost: 14445,
    image1: 'https://a0.muscache.com/im/pictures/89db7ed2-f71f-473b-8c27-1fd8e9236185.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/b87046c6-c860-4469-87b5-62b5201f2310.jpg?im_w=720',
    index: 3
  },
  {
    name: 'Mikra Mantinia',
    country: 'Greece',
    stars: 4.94,
    cost: 32237,
    image1: 'https://a0.muscache.com/im/pictures/9f028184-f893-4789-9b09-6739274ee7a2.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/97056228/b18ec929_original.jpg?im_w=720',
    index: 4
  },
  {
    name: 'Positano',
    country: 'Italy',
    stars: 5,
    cost: 173658,
    image1: 'https://a0.muscache.com/im/pictures/a3e41a30-dc6a-4cd8-9941-e8ec106b179f.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/d81912fe-74bd-4574-92c8-f560320d4ef1.jpg?im_w=720',
    index: 5
  },
  {
    name: 'Neumarkt in der Steiermark',
    country: 'Austria',
    stars: 4.23,
    cost: 21608,
    image1: 'https://a0.muscache.com/im/pictures/29921205-1ee2-475b-9b03-a3522baadef8.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-848521969968742794/original/342ce6b8-6ccd-49c1-bc59-6d55ddd6ecdd.jpeg?im_w=720',
    index: 6
  },
  {
    name: 'Mascalucia',
    country: 'Italy',
    stars: 4.82,
    cost: 6703,
    image1: 'https://a0.muscache.com/im/pictures/a187513d-fc2d-43ce-9dac-32811514a8fb.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/1f4dd361-b2a3-4a83-abd1-115bf2e0b6cb.jpg?im_w=720',
    index: 7
  },
  {
    name: 'Acireale',
    country: 'Italy',
    stars: 4.89,
    cost: 66290,
    image1: 'https://a0.muscache.com/im/pictures/460b7195-d9ae-47b7-a5e3-03da4a159111.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-783048916405933459/original/01cd1247-8457-43ea-8a4e-168b0e331f50.jpeg?im_w=720',
    index: 8
  },
  {
    name: 'Kaş',
    country: 'Turkey',
    stars: 4.49,
    cost: 123064,
    image1: 'https://a0.muscache.com/im/pictures/4808a5d7-e573-4a0c-a907-7fe427763ec9.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/22291fc2-5db9-4e30-b266-122027bb534c.jpg?im_w=720',
    index: 9
  },
  {
    name: 'Spoleto',
    country: 'Italy',
    stars: 4.86,
    cost: 116802,
    image1: 'https://a0.muscache.com/im/pictures/69765948-1164-4ec4-928f-197a171e1bfb.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/09c42ab0-4848-4910-957e-b0c9630b8804.jpg?im_w=720',
    index: 10
  },
  {
    name: 'Giovinazzo',
    country: 'Italy',
    stars: 4.94,
    cost: 30784,
    image1: 'https://a0.muscache.com/im/pictures/acaaa1e1-6dee-4ee5-9bfb-a3088a46d75a.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/ee306cfc-4651-41c6-b534-cf63e4d38a21.jpg?im_w=720',
    index: 11
  },
  {
    name: 'Plankenstein',
    country: 'Austria',
    stars: 4.79,
    cost: 22192,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-827496443091774604/original/3a86304d-e6a2-4db5-866a-69dca1ffcec6.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/b4ddf9b7-a56e-4f3d-bf1c-9cc79f010d59.jpg?im_w=720',
    index: 12
  },
  {
    name: 'Monacizzo-librari-truglione',
    country: 'Italy',
    stars: 4.84,
    cost: 12405,
    image1: 'https://a0.muscache.com/im/pictures/b4e3a7c9-0766-49fd-ad9a-16a20c8761e3.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50713136/original/33b4c642-c4a9-4c01-ac66-5d83648580b9.jpeg?im_w=720',
    index: 13
  },
  {
    name: 'Positano',
    country: 'Italy',
    stars: 5,
    cost: 247980,
    image1: 'https://a0.muscache.com/im/pictures/cb9c260f-a5db-4d42-ae7b-2afa9baa1216.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/37e5e8c0-0c13-43f7-b029-70ba43af9713.jpg?im_w=720',
    index: 14
  },
  {
    name: 'Krujë District',
    country: 'Albania',
    stars: 4.81,
    cost: 3076,
    image1: 'https://a0.muscache.com/im/pictures/095b046e-a43e-4220-b7d1-19bcc90f82af.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-52291644/original/5b1c55eb-312d-4fea-99fe-2d95ea408006.jpeg?im_w=720',
    index: 15
  },
  {
    name: 'Roseto Capo Spulico',
    country: 'Italy',
    stars: 4.77,
    cost: 13726,
    image1: 'https://a0.muscache.com/im/pictures/3d390513-1e7d-42e4-8f15-777c536e8a02.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/5b1d1051-2a42-48b2-8e20-44af486fc038.jpg?im_w=720',
    index: 16
  },
  {
    name: 'Udaipur',
    country: 'India',
    stars: 5,
    cost: 68471,
    image1: 'https://a0.muscache.com/im/pictures/54de1faa-1382-4fef-a5f2-95c74abec64a.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-681645417000773663/original/75f1cb7c-1c4d-48d6-b108-7a36f9f0af7e.jpeg?im_w=720',
    index: 17
  },
  {
    name: 'Teggiano',
    country: 'Italy',
    stars: 4.95,
    cost: 9741,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-862955019133075539/original/4c1fe524-294c-4a3f-bcf5-8fd85fa1f8b3.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/c474b912-db73-4edc-8143-ba65631e2dc8.jpg?im_w=720',
    index: 18
  },
  {
    name: 'Deutschlandsberg',
    country: 'Austria',
    stars: 4.51,
    cost: 12040,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-963511701974908404/original/e1482090-a787-4c2c-8a13-7c625b7e082c.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/39342094/eeb41b9d_original.jpg?im_w=720',
    index: 19
  },
  {
    name: 'Fethiye',
    country: 'Turkey',
    stars: 4.86,
    cost: 24948,
    image1: 'https://a0.muscache.com/im/pictures/03f7c18d-9f8e-4d51-84bb-49281d60e040.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/e91cdf8c-52da-46fd-8a58-a371f06038ee.jpg?im_w=720',
    index: 20
  },
  {
    name: 'Conversano',
    country: 'Italy',
    stars: 4.94,
    cost: 22684,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-21587114/original/40b7cdc2-5649-4ced-a59f-4ab602590d80.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/46dc4102-8cb5-4733-b77f-3f3812a63b10.jpg?im_w=720',
    index: 21
  },
  {
    name: 'Grottaglie',
    country: 'Italy',
    stars: 4.72,
    cost: 30643,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-7327364/original/3f0dabdd-7cbf-4bea-9622-ba426b6fa4a4.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-52065547/original/a88b5239-d645-489f-ac4f-8aa237774a0e.jpeg?im_w=720',
    index: 22
  },
  {
    name: 'Crocicchio',
    country: 'Italy',
    stars: 5,
    cost: 37038,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-735285823136975256/original/60d39ba1-0931-4f35-bea2-b12e223379ac.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/d7d67540-081b-4efb-8d99-ee2c299c6d1c.jpg?im_w=720',
    index: 23
  },
  {
    name: 'Praia a Mare',
    country: 'Italy',
    stars: 4.52,
    cost: 143179,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-47272357/original/f1b30b8e-43b7-4b2e-8a23-f424464c84b6.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/759194de-59c1-4855-be2a-0bc7d80dabd8.jpg?im_w=720',
    index: 24
  },
  {
    name: 'Bad Wimsbach-Neydharting',
    country: 'Austria',
    stars: 5,
    cost: 15786,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-689541798005077687/original/f3e0495f-c401-4f13-92e1-833aedc80030.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/cd5db2d1-f076-4224-82fc-24297ada4ae5.jpg?im_w=720',
    index: 25
  },
  {
    name: 'Spoleto',
    country: 'Italy',
    stars: 4.88,
    cost: 41216,
    image1: 'https://a0.muscache.com/im/pictures/d3d44c4d-7434-456c-8701-d9863da219b4.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/d3eeb76d-6d68-46e4-af80-7f4333fc4454.jpg?im_w=720',
    index: 26
  },
  {
    name: 'Kalamata',
    country: 'Greece',
    stars: 5,
    cost: 27583,
    image1: 'https://a0.muscache.com/im/pictures/62365574/df2d7091_original.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-832334495155987726/original/d40ead0b-acb6-4acd-95b7-f773ba7c760e.jpeg?im_w=720',
    index: 27
  },
  {
    name: 'Praia a Mare',
    country: 'Italy',
    stars: 5,
    cost: 51647,
    image1: 'https://a0.muscache.com/im/pictures/43e41df4-d694-44be-b446-43ad2d535a16.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-585464529576871683/original/b04bb3d9-b679-403d-8b25-163271bbf723.jpeg?im_w=720',
    index: 28
  },
  {
    name: 'Pučišća',
    country: 'Croatia',
    stars: 4.99,
    cost: 15892,
    image1: 'https://a0.muscache.com/im/pictures/38238330-865e-49e9-addd-564dade58dbe.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-574260186886250746/original/be7c3904-7e98-48ab-b56a-749231580aab.jpeg?im_w=720',
    index: 29
  },
  {
    name: 'Gagra',
    country: 'Georgia',
    stars: 4.77,
    cost: 8384,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-43439021/original/8263fd88-6e58-4ead-9762-370dbae90dca.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/dd26dc0d-a5af-4ec2-94eb-d0117e481f69.jpg?im_w=720',
    index: 30
  },
  {
    name: 'Kaş',
    country: 'Turkey',
    stars: 5,
    cost: 156902,
    image1: 'https://a0.muscache.com/im/pictures/70279853/dc66ef2c_original.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/a21dfdb9-4d70-42a7-aff3-0750aff028a3.jpg?im_w=720',
    index: 31
  },
  {
    name: 'Poggio catino',
    country: 'Italy',
    stars: 4.72,
    cost: 115597,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-53768452/original/d7e13a9a-6cef-4520-b894-f5c7d06b7aea.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/02866ea4-f23a-4357-84f6-579a2b9f5e0f.jpg?im_w=720',
    index: 32
  },
  {
    name: 'Contessa Entellina',
    country: 'Italy',
    stars: 5,
    cost: 247980,
    image1: 'https://a0.muscache.com/im/pictures/7a3e92ff-2686-4f5a-b8db-143951de7d80.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/64205800/da952d88_original.jpg?im_w=720',
    index: 33
  },
  {
    name: 'Plankenstein',
    country: 'Austria',
    stars: 4.55,
    cost: 22192,
    image1: 'https://a0.muscache.com/im/pictures/e0087634-3176-4c9c-b9f4-8ca24db31edd.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-35201309/original/f89f8416-e1b1-4b85-9590-46715d938a7a.jpeg?im_w=720',
    index: 34
  },
  {
    name: 'Parádsasvár',
    country: 'Hungary',
    stars: 4.09,
    cost: 1604928,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-694121513156324201/original/1a6a488c-43ac-4bd9-be05-757d3f0b357d.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/8787e538-1ea0-412f-a50a-564fa71ae497.jpg?im_w=720',
    index: 35
  },
  {
    name: 'Silvi',
    country: 'Italy',
    stars: 4.91,
    cost: 52027,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-654822394064069213/original/b3ff7c11-2862-47b1-ae78-b8d00effb9b4.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/eb9ca68a-98c2-4ef3-88eb-144a8e56193c.jpg?im_w=720',
    index: 36
  },
  {
    name: 'Ravello',
    country: 'Italy',
    stars: 4.95,
    cost: 31884,
    image1: 'https://a0.muscache.com/im/pictures/966f2397-af46-405d-894c-addf310071d6.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/34ef9b46-6019-4c0f-afa8-b21b924049ab.jpg?im_w=720',
    index: 37
  },
  {
    name: 'Maishofen',
    country: 'Austria',
    stars: 4.86,
    cost: 9265,
    image1: 'https://a0.muscache.com/im/pictures/049e500d-3254-48cb-bff4-57d085034ad2.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-35969548/original/88a16914-2253-4837-9628-2c385eb7a9dc.jpeg?im_w=720',
    index: 38
  },
  {
    name: 'Agalas',
    country: 'Greece',
    stars: 4.92,
    cost: 14867,
    image1: 'https://a0.muscache.com/im/pictures/7e018acd-f0d4-4251-b7ba-b455f33fd399.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-52054399/original/f25257e7-0fe6-4257-977a-1a24802a9af0.jpeg?im_w=720',
    index: 39
  },
  {
    name: 'Vico Equense',
    country: 'Italy',
    stars: 5,
    cost: 19926,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-50432910/original/be260f7a-0e2c-4142-9274-e886b5cda3be.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/61f39f55-f1b2-4f00-ab0e-a50fbe3edbfe.jpg?im_w=720',
    index: 40
  },
  {
    name: 'Teggiano',
    country: 'Italy',
    stars: 4.96,
    cost: 9741,
    image1: 'https://a0.muscache.com/im/pictures/95856046/7b6fb93c_original.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/60535623/6e37f051_original.jpg?im_w=720',
    index: 41
  },
  {
    name: 'Udaipur',
    country: 'India',
    stars: 5,
    cost: 9129,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-50432910/original/223ac696-fc26-4159-8e53-de065954692b.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-50432910/original/04b3ca72-023e-414d-8481-9f8ef6883077.jpeg?im_w=720',
    index: 42
  },
  {
    name: 'Jaisalmer',
    country: 'India',
    stars: 4.34,
    cost: 8559,
    image1: 'https://a0.muscache.com/im/pictures/a16961b2-b1cb-4d41-b5a5-997b3ef13062.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/e082ebb3-2008-4d5f-a0ba-5cd0cb93fe10.jpg?im_w=720',
    index: 43
  },
  {
    name: 'Positano',
    country: 'Italy',
    stars: 4.96,
    cost: 107817,
    image1: 'https://a0.muscache.com/im/pictures/cdd78cce-44db-4057-aa88-50691f191124.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/58a51367-18af-4ea7-9a50-8e9619bef968.jpg?im_w=720',
    index: 44
  },
  {
    name: 'Aiello del Friuli',
    country: 'Italy',
    stars: 4.83,
    cost: 7907,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-39515571/original/b435e0ec-0281-4846-af34-2fdfdb242309.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/43c29e4d-2dea-4739-887c-bb8ed0b7e903.jpg?im_w=720',
    index: 45
  },
  {
    name: 'Rethimnon',
    country: 'Greece',
    stars: 4.93,
    cost: 61519,
    image1: 'https://a0.muscache.com/im/pictures/79e3bdb4-dd4c-457d-b2cc-70aac0e8c5e7.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/67576917-f8d7-4dd4-8ca3-cde5b82ed52e.jpg?im_w=720',
    index: 46
  },
  {
    name: 'Vinica',
    country: 'Slovenia',
    stars: 4.6,
    cost: 251574,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-52724436/original/55c54de3-dc2b-47df-a575-287c38446ff7.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/90207054/b17d582e_original.jpg?im_w=720',
    index: 47
  },
  {
    name: 'Agios Vasilios',
    country: 'Greece',
    stars: 5,
    cost: 73598,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-944206505189181140/original/98a73d9e-b426-44e6-bfaf-e923d89ad5f1.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/c286d41f-9dbb-4f3c-a5ba-7e43c4f5bab7.jpg?im_w=720',
    index: 48
  },
  {
    name: 'Bad Wimsbach-Neydharting',
    country: 'Austria',
    stars: 5,
    cost: 18887,
    image1: 'https://a0.muscache.com/im/pictures/0f505c27-a89b-456c-8784-11660fb4b4f5.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/e6c85d9c-d26c-470d-aaff-6edb41267c4a.jpg?im_w=720',
    index: 49
  },
  {
    name: 'Rapagnano',
    country: 'Italy',
    stars: 4.89,
    cost: 38814,
    image1: 'https://a0.muscache.com/im/pictures/65e9b400-9f19-42be-b19e-48dd8e2e5af2.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-572164542640031450/original/038531e9-b141-4234-9ef5-23fdb5969611.jpeg?im_w=720',
    index: 50
  },
  {
    name: 'L-Gharb',
    country: 'Gozo',
    stars: 5,
    cost: 15799,
    image1: 'https://a0.muscache.com/im/pictures/40d4aa79-12cb-46c6-a8fe-6bed0a59aa6d.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/da789adf-2feb-46f0-933d-7fef31fc47ea.jpg?im_w=720',
    index: 51
  },
  {
    name: 'Forio',
    country: 'Italy',
    stars: 4.86,
    cost: 12431,
    image1: 'https://a0.muscache.com/im/pictures/hosting/Hosting-831211459547759213/original/17bde8e4-8c0a-463d-89b6-aba268d7f8a1.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/4c4a677d-6a8c-449b-a3c2-84f5c3dfed19.jpg?im_w=720',
    index: 52
  },
  {
    name: 'Kaba',
    country: 'Hungary',
    stars: 4.21,
    cost: 96296,
    image1: 'https://a0.muscache.com/im/pictures/84961437/00ea2993_original.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-49958720/original/bf199ff5-083a-4438-903b-23658f4e7de5.jpeg?im_w=720',
    index: 53
  },
  {
    name: 'Collalto Sabino',
    country: 'Italy',
    stars: 4.79,
    cost: 615193,
    image1: 'https://a0.muscache.com/im/pictures/b534f797-a4ac-49c2-a6b5-d9e87cae2fb3.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/c31fe2a6-d080-47c1-a56e-a40be63a0016.jpg?im_w=720',
    index: 54
  },
  {
    name: 'Safaga',
    country: 'Egypt',
    stars: 4.9,
    cost: 3835,
    image1: 'https://a0.muscache.com/im/pictures/6bd1e6ca-7ad7-41a2-8a5a-17d2060cd979.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-43532439/original/eaffc494-6d6d-4a8c-bc21-e74a7f3c9a52.jpeg?im_w=720',
    index: 55
  },
  {
    name: 'Ferrazzano',
    country: 'Italy',
    stars: 4.97,
    cost: 25937,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-590325177436892387/original/561c6e2f-906e-4d76-ab88-e261d892e34f.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/cf8607e6-fe2c-4461-a892-74ede3819cd4.jpg?im_w=720',
    index: 56
  },
  {
    name: 'Lonavla',
    country: 'India',
    stars: 4.55,
    cost: 35200,
    image1: 'https://a0.muscache.com/im/pictures/13db341e-f24b-4f88-a428-163ef50b0eea.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/54a7a0af-1720-49f6-b775-bd9e6d340259.jpg?im_w=720',
    index: 57
  },
  {
    name: 'Nardò',
    country: 'Italy',
    stars: 4.64,
    cost: 227315,
    image1: 'https://a0.muscache.com/im/pictures/514faac1-06ca-4b96-8bfa-ae44554cf933.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/a2ad846b-7806-4595-83d6-cc8840c75695.jpg?im_w=720',
    index: 58
  },
  {
    name: 'Sinaia',
    country: 'Romania',
    stars: 4.22,
    cost: 30921,
    image1: 'https://a0.muscache.com/im/pictures/bc904f8b-b65d-4818-a503-c6e599ebe5c8.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/77011631/a0791cac_original.jpg?im_w=720',
    index: 59
  }];

}
