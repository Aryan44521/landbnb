import { Component } from '@angular/core';
import { CardComponent } from '../../Helpers/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-arctic',
  standalone: true,
  imports: [CardComponent,FormsModule,CommonModule,NavbarComponent],
  templateUrl: './arctic.component.html',
  styleUrl: './arctic.component.css'
})
export class ArcticComponent {
places=[ {
  name: 'Honningsvåg',
  country: 'Norway',
  stars: 4.87,
  cost: 15883,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-850769713572940614/original/b18991bd-465f-49c8-bf20-97c45ea4c279.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-850769713572940614/original/9f18742a-2820-4f7d-b04e-9d64ea1f60d0.jpeg?im_w=720',
  index: 0
},
{
  name: 'Bø',
  country: 'Nordland',
  stars: 4.86,
  cost: 11419,
  image1: 'https://a0.muscache.com/im/pictures/181d4be2-6cb2-4306-94bf-89aa45c5de66.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-39908051/original/daac00ba-94c7-4097-b485-e4c6424d495f.jpeg?im_w=720',
  index: 1
},
{
  name: 'Inderøy',
  country: 'Norway',
  stars: 4.89,
  cost: 10924,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-50545526/original/af14ce0b-481e-41be-88d1-b84758f578e5.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-50545526/original/1e552fce-6ecd-4f0c-aa37-5a849cb79c2e.jpeg?im_w=720',
  index: 2
},
{
  name: 'Suomussalmi KK',
  country: 'Finland',
  stars: 4.94,
  cost: 12304,
  image1: 'https://a0.muscache.com/im/pictures/be5ec43d-245a-4c09-9bb7-a5e1b8eb56b3.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/faf3c924-ac17-4fdb-a00b-9b7a80656034.jpg?im_w=720',
  index: 3
},
{
  name: 'Kontiolahti',
  country: 'Finland',
  stars: 4.87,
  cost: 8176,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-759790852861911349/original/1af736a3-de22-4c2a-9a0b-1b6eaac7f7e6.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-576388435268826012/original/d9ff6c5a-8bdf-4ed6-a1e0-57ec942af052.jpeg?im_w=720',
  index: 4
},
{
  name: 'Kuusamo',
  country: 'Finland',
  stars: 4.02,
  cost: 20626,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-41191586/original/264cf259-bdcd-42d0-ae9d-66968b26121d.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-51907005/original/9c25628e-1da0-4ee4-b08e-dbb361a9d0fc.jpeg?im_w=720',
  index: 5
},
{
  name: 'Puolanka',
  country: 'Finland',
  stars: 4.86,
  cost: 11590,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-819388677657885788/original/64fb73af-00ae-4266-b5ba-bef083f0f4b9.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/3ada8472-2788-4ded-ba72-88437f5b57d5.jpg?im_w=720',
  index: 6
},
{
  name: 'Kuusamo',
  country: 'Finland',
  stars: 4.92,
  cost: 14662,
  image1: 'https://a0.muscache.com/im/pictures/900f00ba-d9a5-4663-ab86-63e18ab42ca8.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1069499823616321647/original/0ac5562c-64e0-4a0b-a0ae-31cb38d76ce7.jpeg?im_w=720',
  index: 7
},
{
  name: 'Kuusamo',
  country: 'Finland',
  stars: 5,
  cost: 22557,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-999010206467375554/original/e72b54f3-59e1-4c25-ab37-c622a0e5993a.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/7809096f-55f0-47c9-b0be-75bbaeec2122.jpg?im_w=720',
  index: 8
},
{
  name: 'Posio',
  country: 'Finland',
  stars: 5,
  cost: 10329,
  image1: 'https://a0.muscache.com/im/pictures/68fb8a7c-39c1-4c06-b44c-3c0988ab253d.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-640518909197716331/original/1349d319-d60a-4ade-87c0-e19f0d97204e.jpeg?im_w=720',
  index: 9
},
{
  name: 'Kuusamo',
  country: 'Finland',
  stars: 4.91,
  cost: 20682,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-876868924006577815/original/b12a9112-5c43-4422-b01e-3ec12714e4fe.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/f41c22fc-9e6e-439d-86d7-25dfb71bd518.jpg?im_w=720',
  index: 10
},
{
  name: 'Kuusamo',
  country: 'Finland',
  stars: 4.19,
  cost: 42461,
  image1: 'https://a0.muscache.com/im/pictures/f1bf65a4-efdb-4f64-8ca8-58890e44e409.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-16735206/original/efd3108c-7f60-42ce-8f28-2df33aa6a7a6.jpeg?im_w=720',
  index: 11
},
{
  name: 'Kuusamo',
  country: 'Finland',
  stars: 4.91,
  cost: 36283,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-37911089/original/50668d00-094b-4bc7-afdf-497817167e40.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/aea3c343-3908-479b-bac0-6f76f6535ed9.jpg?im_w=720',
  index: 12
},
{
  name: 'Kuusamo',
  country: 'Finland',
  stars: 4.88,
  cost: 14940,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1022499992045728313/original/e811b79a-57ba-48f9-afc5-c06a19dfad06.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/deb6858b-e774-4f4b-929c-da2f03b4fd85.jpg?im_w=720',
  index: 13
},
{
  name: 'Kontiolahti',
  country: 'Finland',
  stars: 4.81,
  cost: 6289,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1074577268488248280/original/70378026-deaf-40f9-a3b0-4738a60e7433.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/2fa65b3b-58b8-4de8-9681-eba437163074.jpg?im_w=720',
  index: 14
},
{
  name: 'Kuopio',
  country: 'Finland',
  stars: 4.5,
  cost: 70980,
  image1: 'https://a0.muscache.com/im/pictures/964bbcd7-128d-46ab-8a77-278ce541d413.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1078315293008432898/original/cada97d9-415b-43ef-808d-9e343652b6c0.jpeg?im_w=720',
  index: 15
},
{
  name: 'Juuka',
  country: 'Finland',
  stars: 4.81,
  cost: 8305,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1077334336994295582/original/42868ff9-b7b0-44ff-9ab0-c965b12a705e.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-52086975/original/017465f1-e5b3-43ff-8d92-facd828f8fc2.jpeg?im_w=720',
  index: 16
},
{
  name: 'Suomussalmi',
  country: 'Finland',
  stars: 4.7,
  cost: 10956,
  image1: 'https://a0.muscache.com/im/pictures/ade2f12c-d3b2-4c66-9b0d-39fa8a772c9e.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/6e98e30a-cc26-4110-a06f-072e7663f07d.jpg?im_w=720',
  index: 17
},
{
  name: 'Hyrynsalmi',
  country: 'Finland',
  stars: 4.88,
  cost: 12043,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-868579205091920167/original/a3f36c81-c7a6-4b27-9f4c-98d80f7616aa.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/554d0bc3-adb0-4fef-8b59-760e85626610.jpg?im_w=720',
  index: 18
},
{
  name: 'Kuopio',
  country: 'Finland',
  stars: 5,
  cost: 5152,
  image1: 'https://a0.muscache.com/im/pictures/fb860347-88b9-4a1a-acfe-d518f3f77072.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/8db6ed20-fc30-4f7e-ae90-3f860874158b.jpg?im_w=720',
  index: 19
},
{
  name: 'Pudasjärvi',
  country: 'Finland',
  stars: 4.97,
  cost: 30760,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-912270995409771925/original/837cbf28-6eb0-4182-9d9e-0d81254b5192.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-660544775047324041/original/6652512e-7e7d-4898-add9-0e78c6b283cf.jpeg?im_w=720',
  index: 20
},
{
  name: 'Pudasjärvi',
  country: 'Finland',
  stars: 4.55,
  cost: 16577,
  image1: 'https://a0.muscache.com/im/pictures/3696dec2-7428-4519-bbfa-eb4357c8f60c.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/069356f4-3b21-4346-81c0-2b9d7a65e7b3.jpg?im_w=720',
  index: 21
},
{
  name: 'Kuusamo',
  country: 'Finland',
  stars: 4.61,
  cost: 12140,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-756194349244002796/original/69b360af-34e9-4525-9768-d50c0fd48920.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/083fc309-a7e8-42cf-a662-61ca2d4ecdc6.jpg?im_w=720',
  index: 22
},
{
  name: 'Posio',
  country: 'Finland',
  stars: 4.95,
  cost: 12099,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-44238765/original/746d924c-35a6-4e0f-9480-929ba5ca8c14.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/352bca00-41a3-4391-b303-1919599cb382.jpg?im_w=720',
  index: 23
},
{
  name: 'Liperi',
  country: 'Finland',
  stars: 4.86,
  cost: 2563,
  image1: 'https://a0.muscache.com/im/pictures/5ca08dcc-88d9-4e8b-b1c5-ff0fde50f03e.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA1NTkxNTIxMDgwNDI2NjEzMg%3D%3D/original/83d35089-6d14-4600-b4b9-d420020bf915.jpeg?im_w=720',
  index: 24
},
{
  name: 'Liperi',
  country: 'Finland',
  stars: 4.79,
  cost: 12304,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-46487748/original/9e4c806e-dbad-4186-a0c6-bd75adc0c068.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-691264494084582383/original/9b05cc94-267a-457f-8e57-c55c69800fb0.jpeg?im_w=720',
  index: 25
},
{
  name: 'Kuusamo',
  country: 'Finland',
  stars: 4.98,
  cost: 11894,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-900872760013886133/original/98a62024-6ccb-4e7e-90d9-a09685f24b73.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/08460d48-a1f1-49fc-bddc-a3c7a987f4c4.jpg?im_w=720',
  index: 26
},
{
  name: 'Posio',
  country: 'Finland',
  stars: 4.86,
  cost: 11196,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-955573436114354947/original/ff64b23d-1f92-491f-b798-99fad45ed6e7.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/2c781d30-35c4-486a-b781-a5dea7a7ee64.jpg?im_w=720',
  index: 27
},
{
  name: 'Kittilä',
  country: 'Finland',
  stars: 4.9,
  cost: 22425,
  image1: 'https://a0.muscache.com/im/pictures/948c97f5-9705-4529-8dd4-046f9eb02847.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/3513db73-dbb5-43ef-9bff-cb8ba67b32ff.jpg?im_w=720',
  index: 28
},
{
  name: 'Hella',
  country: 'Iceland',
  stars: 4.97,
  cost: 66667,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-835950977031876366/original/86cc2226-52dd-4c8b-8d6d-b659bbcb0db8.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-45265296/original/b507784d-93a6-42e1-9d34-694640ea2ab6.jpeg?im_w=720',
  index: 29
},
{
  name: 'Gildeskål',
  country: 'Norway',
  stars: 5,
  cost: 17604,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-811005815834762935/original/e7a30efc-b72f-410c-89e2-02324ebf7072.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/9443379b-2295-4d9b-902f-3a3f5ecd388f.jpg?im_w=720',
  index: 30
},
{
  name: 'Svartnes',
  country: 'Norway',
  stars: 5,
  cost: 26993,
  image1: 'https://a0.muscache.com/im/pictures/48c5e77e-7588-435f-a71e-e3d06255b288.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/28ff638a-bf3f-4cf0-b307-41fdd383b9c4.jpg?im_w=720',
  index: 31
},
{
  name: 'Gildeskål',
  country: 'Norway',
  stars: 4.92,
  cost: 25048,
  image1: 'https://a0.muscache.com/im/pictures/c397f0b2-8eab-4902-b30f-d552dc8b06dd.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/e2af0a0b-876f-4a33-bc63-719420d970fd.jpg?im_w=720',
  index: 32
},
{
  name: 'Rovaniemi',
  country: 'Finland',
  stars: 4.95,
  cost: 26658,
  image1: 'https://a0.muscache.com/im/pictures/3f35a795-f0ee-4575-8731-a638970ba862.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22686355/original/03e91f41-ae6e-40f9-bce1-f78d440ea0c2.jpeg?im_w=720',
  index: 33
},
{
  name: 'Utsjoki',
  country: 'Finland',
  stars: 5,
  cost: 23810,
  image1: 'https://a0.muscache.com/im/pictures/9dfd0d55-d30c-446c-b8e4-3bd4f8332f01.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/8583139e-abed-4ec0-b21d-6d0a809f5b1b.jpg?im_w=720',
  index: 34
},
{
  name: 'Narfasel',
  country: 'Iceland',
  stars: 5,
  cost: 36931,
  image1: 'https://a0.muscache.com/im/pictures/7681915e-baea-487f-a079-69d58411fdfe.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-11663098/original/64c1964d-31a8-49e4-b180-f381b7773290.jpeg?im_w=720',
  index: 35
},
{
  name: 'Skjøttholmen',
  country: 'Norway',
  stars: 5,
  cost: 19771,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-42637728/original/f7bfd23a-2b60-49a0-a6fb-5680eccf1ba1.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-873753656557869709/original/ac668348-99d6-433c-a1a6-e82c7c3202ea.jpeg?im_w=720',
  index: 36
},
{
  name: 'Engenes',
  country: 'Norway',
  stars: 4.99,
  cost: 15537,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-999029292553208976/original/ece5ad6a-4b30-4d1f-adcc-26cbe1023b93.png?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-953591904139387888/original/e73afb5e-42d9-47e3-a792-91be6bf22d23.jpeg?im_w=720',
  index: 37
},
{
  name: 'Utsjoki',
  country: 'Finland',
  stars: 4.85,
  cost: 30760,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-54299560/original/4ee10ddd-a741-4cd1-bf5d-e5955f6072ff.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/21f24e32-3502-427a-92f5-e16c1b7798d2.jpg?im_w=720',
  index: 38
},
{
  name: 'Åre',
  country: 'Sweden',
  stars: 4.48,
  cost: 54547,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-853494742119459834/original/8ccef425-00cf-4219-b812-c0ead9f9bb6d.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-711553243717818462/original/cb872e95-8f43-4d37-ad2f-c45216891cbc.jpeg?im_w=720',
  index: 39
},
{
  name: 'Storhogna',
  country: 'Sweden',
  stars: 5,
  cost: 25455,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-856312763788075641/original/22ea2cf1-11ef-4cff-9849-51b4a8df0055.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/3181aa0c-3d28-4add-b16c-3fa9aacd17e1.jpg?im_w=720',
  index: 40
},
{
  name: 'Hella',
  country: 'Iceland',
  stars: 4.98,
  cost: 66577,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-53735295/original/390697a7-80d1-4ac7-9746-57742790139e.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/137996d1-8bb8-4af0-8546-9c60614c1176.jpg?im_w=720',
  index: 41
},
{
  name: 'Kiruna N',
  country: 'Sweden',
  stars: 4.91,
  cost: 16364,
  image1: 'https://a0.muscache.com/im/pictures/d94b450d-8456-42e8-9ffb-7027dd3fb531.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/hosting/Hosting-799579088255311169/original/a5f5cc3d-1dec-4b9f-90bf-953c03da24cd.jpeg?im_w=720',
  index: 42
},
{
  name: 'Senja',
  country: 'Norway',
  stars: 4.95,
  cost: 13204,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-810538263281050272/original/92b4079e-59c3-461a-bafd-f3b56d29729d.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-39578249/original/e6333d31-e0c6-4894-a79d-54b16b777523.jpeg?im_w=720',
  index: 43
},
{
  name: 'Kittilä',
  country: 'Finland',
  stars: 4.02,
  cost: 41391,
  image1: 'https://a0.muscache.com/im/pictures/c258b458-1928-4115-899b-4df0a37a9009.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1017718929048227319/original/41c7456e-e4c3-4c57-87ac-8b934267f93c.jpeg?im_w=720',
  index: 44
},
{
  name: 'Blattniksele ',
  country: 'Sweden',
  stars: 4.98,
  cost: 10000,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-53398574/original/cdb51177-e349-47c9-bc9f-959faa602ecd.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/f9673ea7-6c08-44d1-9ebb-7512670ac51a.jpg?im_w=720',
  index: 45
},
{
  name: 'Funäsdalen',
  country: 'Sweden',
  stars: 4.67,
  cost: 9910,
  image1: 'https://a0.muscache.com/im/pictures/2be32a79-de22-418b-b724-d6820d41ca91.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-777893022127585852/original/c8d844b9-0fa9-481e-9513-44ad1787dbf0.jpeg?im_w=720',
  index: 46
},
{
  name: 'Grýtubakkahreppur',
  country: 'Iceland',
  stars: 4.89,
  cost: 32913,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-993287020808494791/original/0addc25c-fe1c-4511-aa5f-a7f96d7b6a6c.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1060175471963046373/original/b93f1ee0-5b67-4586-ad68-cbfcccda986c.jpeg?im_w=720',
  index: 47
},
{
  name: 'Hitra',
  country: 'Norway',
  stars: 4.93,
  cost: 22386,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-813469274778155757/original/f2d4d2fb-24d4-401c-ba14-8282c5baca20.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-823234182618610192/original/35dd40c1-4ccf-4aaf-8ce7-e25abfbe58a0.jpeg?im_w=720',
  index: 48
},
{
  name: 'Inari',
  country: 'Finland',
  stars: 4.32,
  cost: 61519,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1054216857820506442/original/1ef75200-2aaa-40eb-ab31-0c9a91802f55.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/de050232-2512-449f-91bd-7c4a11c0a927.jpg?im_w=720',
  index: 49
},
{
  name: 'Hella',
  country: 'Iceland',
  stars: 4.89,
  cost: 18086,
  image1: 'https://a0.muscache.com/im/pictures/2d9b2bfb-0c00-46a9-bd4f-2f8b5089e8ab.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-922949911064943410/original/5ce29362-a426-4ac4-bd8a-65a2e00033c8.jpeg?im_w=720',
  index: 50
},
{
  name: 'Grundarfjörður',
  country: 'Iceland',
  stars: 4.96,
  cost: 82406,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1008826969918269533/original/098f54a2-db69-4fca-b371-56e11a858cdc.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/d89d983a-9cd0-43e3-806a-5ca664f1e74d.jpg?im_w=720',
  index: 51
},
{
  name: 'Kittilä',
  country: 'Finland',
  stars: 4.94,
  cost: 53100,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1064574006834259348/original/2fac0d68-153f-4923-8c4b-dd09c85a6d0b.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/41558477-1dc1-4c63-b23d-b0f4ade79d62.jpg?im_w=720',
  index: 52
},
{
  name: 'Rovaniemi',
  country: 'Finland',
  stars: 5,
  cost: 91151,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-44134108/original/9b07ec65-5f15-4f89-a6d5-d1b163f83b9c.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/bf5bf589-7527-4a8f-a2ab-0d2d528a2c6b.jpg?im_w=720',
  index: 53
},
{
  name: 'Ylläs Kolari',
  country: 'Finland',
  stars: 4.98,
  cost: 26014,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-888151529214233434/original/c553c050-9ecc-490e-902f-f51433fef711.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/6d856caa-124f-4fdc-a84a-cc596d5f0296.jpg?im_w=720',
  index: 54
},
{
  name: 'Fairbanks',
  country: 'Alaska',
  stars: 5,
  cost: 26620,
  image1: 'https://a0.muscache.com/im/pictures/48459a38-d9ea-4f68-ab9b-1cbb2edb971b.jpg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/158e4e87-3fb7-4d08-aecd-696dbe3e45a0.jpg?im_w=720',
  index: 55
},
{
  name: 'IS',
  country: 'Iceland',
  stars: 4.95,
  cost: 17326,
  image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-21032889/original/0c76674e-1722-492c-a6ae-02c297cfc1fd.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/1e24def7-0f33-4edf-8484-4ef0cbd1fb75.jpg?im_w=720',
  index: 56
},
{
  name: 'Gildeskål',
  country: 'Norway',
  stars: 5,
  cost: 16272,
  image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-817338938702585986/original/43cfe912-0dbf-4bed-994f-087f1f0c5b7c.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-897747788867680607/original/77f76f8a-98e1-462e-a586-58a05f3ff142.jpeg?im_w=720',
  index: 57
},
{
  name: 'IS',
  country: 'Iceland',
  stars: 4.91,
  cost: 18140,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1004813831448823251/original/c898d46c-37b6-4cdc-b94c-f508b975aad7.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1025161051002749569/original/7d27e391-c5d9-4a72-b1ab-aed62e6e9805.jpeg?im_w=720',
  index: 58
},
{
  name: 'Sennesvik',
  country: 'Norway',
  stars: 4.9,
  cost: 8789,
  image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-1025161051002749569/original/31caf26e-36f6-4aa7-9696-f2e2776c6b73.jpeg?im_w=720',
  image2: 'https://a0.muscache.com/im/pictures/fda099da-ed6c-4caa-9719-15678b88ca53.jpg?im_w=720',
  index: 59
},
{
  name: 'Bardu',
  country: 'Norway',
  stars: 4.96,
  cost: 11744,
  image1: 'https://a0.muscache.com/im/pictures/b9268587-0cfc-44d9-a81b-e31bfeac1092.jpg?im_w=720',
  image2: '',
  index: 60
}];
}
