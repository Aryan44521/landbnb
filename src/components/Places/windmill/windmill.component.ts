import { Component } from '@angular/core';
import { CardComponent } from '../../Helpers/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-windmill',
  standalone: true,
  imports: [CardComponent,FormsModule,CommonModule],
  templateUrl: './windmill.component.html',
  styleUrl: './windmill.component.css'
})
export class WindmillComponent {
  places=[{
    name: 'Ericeira',
    country: 'Portugal',
    stars: 4.96,
    cost: 9741,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-5004250/original/ec5908f9-4361-4213-a158-09d108fec9f3.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-5004250/original/ec5908f9-4361-4213-a158-09d108fec9f3.jpeg?im_w=720',
    index: 0
  },
  {
    name: 'Fethiye',
    country: 'Turkey',
    stars: 4.59,
    cost: 31253,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-897888988667329170/original/49271753-8f6b-4269-9ba2-f0118fcab2de.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-897888988667329170/original/49271753-8f6b-4269-9ba2-f0118fcab2de.jpeg?im_w=720',
    index: 1
  },
  {
    name: 'Kos',
    country: 'Greece',
    stars: 5,
    cost: 19505,
    image1: 'https://a0.muscache.com/im/pictures/f90d29e7-780e-446a-9116-be99947b6ff3.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/f90d29e7-780e-446a-9116-be99947b6ff3.jpg?im_w=720',
    index: 2
  },
  {
    name: 'Lalysos',
    country: 'Greece',
    stars: 4.82,
    cost: 37736,
    image1: 'https://a0.muscache.com/im/pictures/d6ff8247-5ef5-4f91-9ff5-120d41a6b549.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/d6ff8247-5ef5-4f91-9ff5-120d41a6b549.jpg?im_w=720',
    index: 3
  },
  {
    name: 'Patmos',
    country: 'Greece',
    stars: 4.85,
    cost: 15380,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-860038356834626362/original/0f1b641d-e08c-44eb-8da9-bf6327c3f841.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-860038356834626362/original/0f1b641d-e08c-44eb-8da9-bf6327c3f841.jpeg?im_w=720',
    index: 4
  },
  {
    name: 'Volissos',
    country: 'Greece',
    stars: 4.86,
    cost: 15456,
    image1: 'https://a0.muscache.com/im/pictures/63a2e19c-c336-4b07-a9c4-7c2732fe9815.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/63a2e19c-c336-4b07-a9c4-7c2732fe9815.jpg?im_w=720',
    index: 5
  },
  {
    name: 'Koufonisia',
    country: 'Greece',
    stars: 5,
    cost: 31580,
    image1: 'https://a0.muscache.com/im/pictures/a2ba66cd-dcaa-4891-95da-ddd1bbf185a1.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/a2ba66cd-dcaa-4891-95da-ddd1bbf185a1.jpg?im_w=720',
    index: 6
  },
  {
    name: 'Kos',
    country: 'Greece',
    stars: 5,
    cost: 11405,
    image1: 'https://a0.muscache.com/im/pictures/dea1f4a6-cd77-4193-ba26-3fa06c47b170.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/dea1f4a6-cd77-4193-ba26-3fa06c47b170.jpg?im_w=720',
    index: 7
  },
  {
    name: 'Chemillé-en-Anjou',
    country: 'France',
    stars: 4.92,
    cost: 12304,
    image1: 'https://a0.muscache.com/im/pictures/37112192/cefdb7f0_original.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/37112192/cefdb7f0_original.jpg?im_w=720',
    index: 8
  },
  {
    name: 'Tietjerk',
    country: 'Netherlands',
    stars: 4.86,
    cost: 19583,
    image1: 'https://a0.muscache.com/im/pictures/53fb3cd2-3d67-47bb-81ab-ebf845179aeb.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/53fb3cd2-3d67-47bb-81ab-ebf845179aeb.jpg?im_w=720',
    index: 9
  },
  {
    name: 'Abcoude',
    country: 'Netherlands',
    stars: 4.97,
    cost: 43766,
    image1: 'https://a0.muscache.com/im/pictures/9cabb073-6f32-41db-8415-9ce3af58d8d0.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/9cabb073-6f32-41db-8415-9ce3af58d8d0.jpg?im_w=720',
    index: 10
  },
  {
    name: 'Gordes',
    country: 'France',
    stars: 4.49,
    cost: 33836,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-612651749922832511/original/d288cb97-9bca-4504-8458-7669ae342895.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-612651749922832511/original/d288cb97-9bca-4504-8458-7669ae342895.jpeg?im_w=720',
    index: 11
  },
  {
    name: 'Imerovigli',
    country: 'Greece',
    stars: 5,
    cost: 32810,
    image1: 'https://a0.muscache.com/im/pictures/d9bc142c-6028-4d50-a884-a752e5a79490.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/d9bc142c-6028-4d50-a884-a752e5a79490.jpg?im_w=720',
    index: 12
  },
  {
    name: 'Weesp',
    country: 'Netherlands',
    stars: 4.94,
    cost: 76877,
    image1: 'https://a0.muscache.com/im/pictures/fc60ec62-952f-4331-98bb-b57a64c4fb0a.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/fc60ec62-952f-4331-98bb-b57a64c4fb0a.jpg?im_w=720',
    index: 13
  },
  {
    name: 'Korithi',
    country: 'Greece',
    stars: 4.92,
    cost: 18456,
    image1: 'https://a0.muscache.com/im/pictures/d56a7ff4-8224-4c8c-b034-1964d5be06ae.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/d56a7ff4-8224-4c8c-b034-1964d5be06ae.jpg?im_w=720',
    index: 14
  },
  {
    name: 'Nazaré',
    country: 'Portugal',
    stars: 4.96,
    cost: 14481,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-671443284089961500/original/3fc43f8d-6c43-4f4e-ad41-e63fda18c6b7.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-671443284089961500/original/3fc43f8d-6c43-4f4e-ad41-e63fda18c6b7.jpeg?im_w=720',
    index: 15
  },
  {
    name: 'Peniche',
    country: 'Portugal',
    stars: 4.96,
    cost: 15072,
    image1: 'https://a0.muscache.com/im/pictures/3143a798-725e-49b4-b40d-e2a35614e2c9.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/3143a798-725e-49b4-b40d-e2a35614e2c9.jpg?im_w=720',
    index: 16
  },
  {
    name: 'Tinos',
    country: 'Greece',
    stars: 4.82,
    cost: 17323,
    image1: 'https://a0.muscache.com/im/pictures/c560cb3f-39f4-4f98-8bdb-ab97bb5c56ae.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/c560cb3f-39f4-4f98-8bdb-ab97bb5c56ae.jpg?im_w=720',
    index: 17
  },
  {
    name: 'Aveleira',
    country: 'Portugal',
    stars: 4.96,
    cost: 6767,
    image1: 'https://a0.muscache.com/im/pictures/48098715/6b51c331_original.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/48098715/6b51c331_original.jpg?im_w=720',
    index: 18
  },
  {
    name: 'Elafinisi',
    country: 'Greece',
    stars: 4.85,
    cost: 6767,
    image1: 'https://a0.muscache.com/im/pictures/0dfd154b-cbc5-4a41-bed7-59779f150dd6.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/0dfd154b-cbc5-4a41-bed7-59779f150dd6.jpg?im_w=720',
    index: 19
  },
  {
    name: 'Lourinhã',
    country: 'Portugal',
    stars: 5,
    cost: 9750,
    image1: 'https://a0.muscache.com/im/pictures/508e71e3-c889-4d3a-9ba5-f1a2e9569ea7.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/508e71e3-c889-4d3a-9ba5-f1a2e9569ea7.jpg?im_w=720',
    index: 20
  },
  {
    name: 'Noyers-sur-Cher',
    country: 'France',
    stars: 4.88,
    cost: 9304,
    image1: 'https://a0.muscache.com/im/pictures/0f643f56-82f0-459c-b1cd-90cd33c41247.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/0f643f56-82f0-459c-b1cd-90cd33c41247.jpg?im_w=720',
    index: 21
  },
  {
    name: 'Savennières',
    country: 'France',
    stars: 4.96,
    cost: 11320,
    image1: 'https://a0.muscache.com/im/pictures/63150314/ffb4a09a_original.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/63150314/ffb4a09a_original.jpg?im_w=720',
    index: 22
  },
  {
    name: 'Zyndaki',
    country: 'Poland',
    stars: 5,
    cost: 23708,
    image1: 'https://a0.muscache.com/im/pictures/9e73fb84-69df-4491-b7b5-fda00372ac4e.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/9e73fb84-69df-4491-b7b5-fda00372ac4e.jpg?im_w=720',
    index: 23
  },
  {
    name: 'Castillonnès',
    country: 'France',
    stars: 4.88,
    cost: 6665,
    image1: 'https://a0.muscache.com/im/pictures/111700940/b2b17a0a_original.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/111700940/b2b17a0a_original.jpg?im_w=720',
    index: 24
  },
  {
    name: 'Grézac',
    country: 'France',
    stars: 4.87,
    cost: 10622,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-43251976/original/e753d0ca-f233-42fe-b799-c6f7f7589808.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-43251976/original/e753d0ca-f233-42fe-b799-c6f7f7589808.jpeg?im_w=720',
    index: 25
  },
  {
    name: 'Osterbruch',
    country: 'Germany',
    stars: 4.83,
    cost: 7291,
    image1: 'https://a0.muscache.com/im/pictures/178e8353-8004-4c67-9f5b-67503efe6a46.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/178e8353-8004-4c67-9f5b-67503efe6a46.jpg?im_w=720',
    index: 26
  },
  {
    name: 'Termas Fadagosa',
    country: 'Portugal',
    stars: 5,
    cost: 9741,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-588214164973079985/original/cbb2fb57-7ca2-44ad-8b47-594a477493eb.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-588214164973079985/original/cbb2fb57-7ca2-44ad-8b47-594a477493eb.jpeg?im_w=720',
    index: 27
  },
  {
    name: 'Kuusiku',
    country: 'Estonia',
    stars: 4.97,
    cost: 11894,
    image1: 'https://a0.muscache.com/im/pictures/78db2ab5-867e-4291-bb35-c2a4072472bb.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/78db2ab5-867e-4291-bb35-c2a4072472bb.jpg?im_w=720',
    index: 28
  },
  {
    name: 'Imerovigli',
    country: 'Greece',
    stars: 5,
    cost: 28709,
    image1: 'https://a0.muscache.com/im/pictures/bc044216-1911-47dd-a622-850541260d2e.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/bc044216-1911-47dd-a622-850541260d2e.jpg?im_w=720',
    index: 29
  },
  {
    name: 'Saint-Cyr-des-Gâts',
    country: 'France',
    stars: 4.89,
    cost: 8017,
    image1: 'https://a0.muscache.com/im/pictures/65671569/9b42fc50_original.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/65671569/9b42fc50_original.jpg?im_w=720',
    index: 30
  },
  {
    name: 'Cockfield',
    country: 'UK',
    stars: 4.98,
    cost: 57366,
    image1: 'https://a0.muscache.com/im/pictures/9d387981-ecef-477f-b1a9-e5a8381be3d6.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/9d387981-ecef-477f-b1a9-e5a8381be3d6.jpg?im_w=720',
    index: 31
  },
  {
    name: 'Chinauta ',
    country: 'Colombia',
    stars: 4.89,
    cost: 19679,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-50839807/original/4dc3d31f-ea1f-42de-bf98-556a43c16db0.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-50839807/original/4dc3d31f-ea1f-42de-bf98-556a43c16db0.jpeg?im_w=720',
    index: 32
  },
  {
    name: 'Praia',
    country: 'Portugal',
    stars: 4.89,
    cost: 5127,
    image1: 'https://a0.muscache.com/im/pictures/468e448b-a824-4d60-b031-6788734fb9d1.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/468e448b-a824-4d60-b031-6788734fb9d1.jpg?im_w=720',
    index: 33
  },
  {
    name: 'Castillon-du-Gard',
    country: 'France',
    stars: 5,
    cost: 16608,
    image1: 'https://a0.muscache.com/im/pictures/e206db5f-ea23-4005-acaf-d78bf63c7217.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/e206db5f-ea23-4005-acaf-d78bf63c7217.jpg?im_w=720',
    index: 34
  },
  {
    name: 'Wolphaartsdijk',
    country: 'Netherlands',
    stars: 4.76,
    cost: 9254,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-6597191/original/422a04a2-c4bc-4072-b947-f0f4dfbcee80.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-6597191/original/422a04a2-c4bc-4072-b947-f0f4dfbcee80.jpeg?im_w=720',
    index: 35
  },
  {
    name: 'Καλαμάκι',
    country: 'Greece',
    stars: 4.82,
    cost: 8715,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-44206551/original/2e0a7eb6-1352-4efd-b9ad-1cf997336390.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-44206551/original/2e0a7eb6-1352-4efd-b9ad-1cf997336390.jpeg?im_w=720',
    index: 36
  },
  {
    name: 'Ano Syros',
    country: 'Greece',
    stars: 5,
    cost: 16508,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-9346274/original/3066d364-d6d6-4812-8a96-fa1638a4ce0d.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-9346274/original/3066d364-d6d6-4812-8a96-fa1638a4ce0d.jpeg?im_w=720',
    index: 37
  },
  {
    name: 'Pointe Noire',
    country: 'Guadeloupe',
    stars: 5,
    cost: 14286,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50039560/original/459d60b5-902d-4f76-816c-c78bbd9dc05d.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50039560/original/459d60b5-902d-4f76-816c-c78bbd9dc05d.jpeg?im_w=720',
    index: 38
  },
  {
    name: 'Pyrgos Kallistis',
    country: 'Greece',
    stars: 5,
    cost: 51266,
    image1: 'https://a0.muscache.com/im/pictures/18b73d87-aeff-4ff3-9e6e-31a201d6c075.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/18b73d87-aeff-4ff3-9e6e-31a201d6c075.jpg?im_w=720',
    index: 39
  },
  {
    name: 'Praia',
    country: 'Portugal',
    stars: 4.96,
    cost: 8203,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-45548223/original/8c8c8bcb-cca4-487a-bc2b-92f481753c18.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-45548223/original/8c8c8bcb-cca4-487a-bc2b-92f481753c18.jpeg?im_w=720',
    index: 40
  },
  {
    name: 'Rochefort-sur-Loire',
    country: 'France',
    stars: 4.95,
    cost: 19174,
    image1: 'https://a0.muscache.com/im/pictures/23d6ac62-bfcb-4a2e-8444-dbeae4d3369f.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/23d6ac62-bfcb-4a2e-8444-dbeae4d3369f.jpg?im_w=720',
    index: 41
  },
  {
    name: 'San José',
    country: 'Spain',
    stars: 5,
    cost: 20665,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-51532549/original/cf9658e6-8697-4226-abbc-40e2e9166ee4.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-51532549/original/cf9658e6-8697-4226-abbc-40e2e9166ee4.jpeg?im_w=720',
    index: 42
  },
  {
    name: 'Le Beausset',
    country: 'France',
    stars: 4.06,
    cost: 35335,
    image1: 'https://a0.muscache.com/im/pictures/f147c8d8-107a-4e3f-9876-e00a16d93e12.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/f147c8d8-107a-4e3f-9876-e00a16d93e12.jpg?im_w=720',
    index: 43
  },
  {
    name: 'Oldenswort',
    country: 'Germany',
    stars: 4.99,
    cost: 15993,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-16905281/original/682f6318-d9b6-4555-8a6f-89d29cd3c055.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-16905281/original/682f6318-d9b6-4555-8a6f-89d29cd3c055.jpeg?im_w=720',
    index: 44
  },
  {
    name: 'Aveiras de Cima',
    country: 'Portugal',
    stars: 4.74,
    cost: 5332,
    image1: 'https://a0.muscache.com/im/pictures/82b035c8-e32d-4802-83ab-33d723cae937.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/82b035c8-e32d-4802-83ab-33d723cae937.jpg?im_w=720',
    index: 45
  },
  {
    name: 'Saint-Jean',
    country: 'Saint Barthélemy',
    stars: 4.29,
    cost: 458043,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-49943145/original/5b3dc087-50d7-4491-9648-8537e3a22784.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-49943145/original/5b3dc087-50d7-4491-9648-8537e3a22784.jpeg?im_w=720',
    index: 46
  },
  {
    name: 'Andeok-myeon',
    country: 'Seogwipo',
    stars: 4.71,
    cost: 7109,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-45823328/original/c1157b9a-cb80-499b-8568-b7738f1003e9.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-45823328/original/c1157b9a-cb80-499b-8568-b7738f1003e9.jpeg?im_w=720',
    index: 47
  },
  {
    name: 'Ozillac',
    country: 'France',
    stars: 5,
    cost: 6152,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-26134732/original/80610493-eeb5-4647-b4f3-85f402e6f15d.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-26134732/original/80610493-eeb5-4647-b4f3-85f402e6f15d.jpeg?im_w=720',
    index: 48
  },
  {
    name: 'Ano Drapanias',
    country: 'Greece',
    stars: 4.22,
    cost: 14825,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-16387243/original/90183349-54f1-40f5-8ffe-bb0529c7b342.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-16387243/original/90183349-54f1-40f5-8ffe-bb0529c7b342.jpeg?im_w=720',
    index: 49
  },
  {
    name: 'Alblasserdam',
    country: 'Netherlands',
    stars: 4.84,
    cost: 12923,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-24915666/original/c502113f-0d10-4b15-8272-fbab7bc34866.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-24915666/original/c502113f-0d10-4b15-8272-fbab7bc34866.jpeg?im_w=720',
    index: 50
  },
  {
    name: 'Míkonos',
    country: 'Greece',
    stars: 4.87,
    cost: 20608,
    image1: 'https://a0.muscache.com/im/pictures/f3e7ea81-1b17-4a6e-b2d4-ac67270830fb.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/f3e7ea81-1b17-4a6e-b2d4-ac67270830fb.jpg?im_w=720',
    index: 51
  },
  {
    name: 'Sao Teotónio',
    country: 'Portugal',
    stars: 4.86,
    cost: 12367,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-40256443/original/09c95679-a0ec-4ccf-bf95-bd69df5c88f5.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-40256443/original/09c95679-a0ec-4ccf-bf95-bd69df5c88f5.jpeg?im_w=720',
    index: 52
  },
  {
    name: 'Liez',
    country: 'France',
    stars: 4.91,
    cost: 11649,
    image1: 'https://a0.muscache.com/im/pictures/6e8b42ba-babf-4bf5-b0ec-12bc69c47f8f.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/6e8b42ba-babf-4bf5-b0ec-12bc69c47f8f.jpg?im_w=720',
    index: 53
  },
  {
    name: 'Flaugeac',
    country: 'France',
    stars: 4.9,
    cost: 10971,
    image1: 'https://a0.muscache.com/im/pictures/455b318d-0ff2-44c2-9c25-b21c753d1f2e.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/455b318d-0ff2-44c2-9c25-b21c753d1f2e.jpg?im_w=720',
    index: 54
  },
  {
    name: 'Roquecor',
    country: 'France',
    stars: 4.32,
    cost: 6113,
    image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50426949/original/41d4ca96-db05-42a6-b0da-3715dc35e783.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50426949/original/41d4ca96-db05-42a6-b0da-3715dc35e783.jpeg?im_w=720',
    index: 55
  },
  {
    name: 'Biscoitos',
    country: 'Portugal',
    stars: 4.9,
    cost: 7253,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-8310838/original/7269e264-9be1-4c71-b2ae-7b61f86dc23f.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-8310838/original/7269e264-9be1-4c71-b2ae-7b61f86dc23f.jpeg?im_w=720',
    index: 56
  },
  {
    name: 'Aujols',
    country: 'France',
    stars: 5,
    cost: 9829,
    image1: 'https://a0.muscache.com/im/pictures/1141548d-0059-4094-b4ac-aa8fdd23e31f.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/1141548d-0059-4094-b4ac-aa8fdd23e31f.jpg?im_w=720',
    index: 57
  },
  {
    name: 'Pouillé',
    country: 'France',
    stars: 4.8,
    cost: 6791,
    image1: 'https://a0.muscache.com/im/pictures/1273ab4d-00c2-4fba-90ed-292be9c560d2.jpg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/1273ab4d-00c2-4fba-90ed-292be9c560d2.jpg?im_w=720',
    index: 58
  },
  {
    name: 'Λευκαδα',
    country: 'Greece',
    stars: 4.89,
    cost: 12304,
    image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-46632153/original/9c48ac97-f9d1-4c44-b85c-ff46d465c037.jpeg?im_w=720',
    image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-46632153/original/9c48ac97-f9d1-4c44-b85c-ff46d465c037.jpeg?im_w=720',
    index: 59
  }];

}
