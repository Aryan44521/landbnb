import { Component } from '@angular/core';
import { CardComponent } from '../../Helpers/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-unique',
  standalone: true,
  imports: [CardComponent, FormsModule, CommonModule],
  templateUrl: './unique.component.html',
  styleUrl: './unique.component.css',
})
export class UniqueComponent {
  places = [
    {
      name: 'Ortahisar',
      country: 'Turkey',
      stars: 5,
      cost: 5639,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-611964103002302908/original/ede7b8fc-9f6a-40ec-8f58-45b19d941a18.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-611964103002302908/original/ae1d3902-f2e6-45a7-944d-3122259ce228.jpeg?im_w=720',
      index: 0,
    },
    {
      name: 'Wadi Rum Village',
      country: 'Jordan',
      stars: 4.97,
      cost: 2051,
      image1:
        'https://a0.muscache.com/im/pictures/f18dad97-7d8b-444a-9d94-1a428f37f36b.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/810725ac-934f-46fc-959b-07e80cd969e6.jpg?im_w=720',
      index: 1,
    },
    {
      name: 'Ortahisar',
      country: 'Turkey',
      stars: 4.98,
      cost: 7998,
      image1:
        'https://a0.muscache.com/im/pictures/ea34ac88-2977-4d01-b8a7-f56e5e5700a4.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-51833930/original/863d0a84-c1b1-4b03-9913-065cbca4fa14.jpeg?im_w=720',
      index: 2,
    },
    {
      name: 'Ortahisar',
      country: 'Turkey',
      stars: 4.91,
      cost: 13329,
      image1:
        'https://a0.muscache.com/im/pictures/41912165/e6ab5568_original.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/46791266/20b51db4_original.jpg?im_w=720',
      index: 3,
    },
    {
      name: 'Ortahisar Belediyesi',
      country: 'Turkey',
      stars: 4.88,
      cost: 6677,
      image1:
        'https://a0.muscache.com/im/pictures/3e13ae05-69b2-4da8-8367-6e8aca8e44c1.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/133d3bf7-e7ce-4a08-ba25-47786ff8b39b.jpg?im_w=720',
      index: 4,
    },
    {
      name: 'Wadi Rum Village',
      country: 'Jordan',
      stars: 4.93,
      cost: 1070,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-566463602379241779/original/a51d16c5-43ea-4aef-9705-2ab353f54276.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-566463602379241779/original/b43723df-4fa1-4899-a5b6-0c68e9481bfd.jpeg?im_w=720',
      index: 5,
    },
    {
      name: 'Al Taif',
      country: 'Saudi Arabia',
      stars: 4.82,
      cost: 11363,
      image1:
        'https://a0.muscache.com/im/pictures/hosting/Hosting-994810898498549365/original/ab1e4b8a-acec-4085-88e5-09ea8b0e6ba3.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-52316210/original/f52d2022-77bf-48b5-a8c2-6194001b052e.jpeg?im_w=720',
      index: 6,
    },
    {
      name: 'Mustafapaşa',
      country: 'Turkey',
      stars: 4.87,
      cost: 3102,
      image1:
        'https://a0.muscache.com/im/pictures/0a21144d-9f85-4706-9987-6693033f4364.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/101751a5-e8a0-41ac-b4cc-546402086702.jpg?im_w=720',
      index: 7,
    },
    {
      name: 'Maasser el chouf',
      country: 'Lebanon',
      stars: 4.93,
      cost: 3788,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-923807131957898305/original/2b18ca85-0187-4715-96f6-c30ad7648d6d.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-923807131957898305/original/a67bdd57-6e78-4374-a121-1cc688640e8b.jpeg?im_w=720',
      index: 8,
    },
    {
      name: 'Mustafapaşa',
      country: 'Turkey',
      stars: 4.87,
      cost: 14985,
      image1:
        'https://a0.muscache.com/im/pictures/53afb838-d3be-42c2-ada0-60ec4b78893a.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/436568c0-cce1-4265-85a7-c940b6eccbb5.jpg?im_w=720',
      index: 9,
    },
    {
      name: 'Ayvalı',
      country: 'Turkey',
      stars: 5,
      cost: 6149,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-883787377234185143/original/b3b574d6-82fd-4a44-a28a-ac1ccea7c8fd.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-803206235177182853/original/ce0a01a7-d685-477b-a01d-992e53ce190e.jpeg?im_w=720',
      index: 10,
    },
    {
      name: 'Mustafapaşa',
      country: 'Turkey',
      stars: 4.86,
      cost: 7769,
      image1:
        'https://a0.muscache.com/im/pictures/5bdb5a87-81b9-4185-a972-bf2309633fc5.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-871448291179190580/original/db3da7ae-b14d-4ead-a8cb-d1ce24cf0931.jpeg?im_w=720',
      index: 11,
    },
    {
      name: 'Mustafapaşa',
      country: 'Turkey',
      stars: 4.84,
      cost: 3134,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-871448291179190580/original/0be0eb31-dacb-485e-a704-96ce032196f0.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-824678192424913331/original/47c4b4b9-9a98-4c3d-b650-3a54017faf04.jpeg?im_w=720',
      index: 12,
    },
    {
      name: 'Ayvalı',
      country: 'Turkey',
      stars: 4.75,
      cost: 14034,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-659355159565669581/original/3fc0cbfb-b531-40b1-bee7-e5ec16d41ff9.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/ea3f2d5a-648a-4fc9-a251-94013a47c426.jpg?im_w=720',
      index: 13,
    },
    {
      name: 'Koleri',
      country: 'India',
      stars: 4.75,
      cost: 2144,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-943524663566230776/original/4c67a54f-5be6-401a-b132-cdbdc4d453cc.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/70100dea-7dcf-4836-a723-9685ba56dcca.jpg?im_w=720',
      index: 14,
    },
    {
      name: 'Kullu',
      country: 'India',
      stars: 4.97,
      cost: 4108,
      image1:
        'https://a0.muscache.com/im/pictures/0002aadc-9898-438b-9fbd-1696b5811118.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/7eb67d0e-b5b3-481e-b98d-afbc1b6ae90d.jpg?im_w=720',
      index: 15,
    },
    {
      name: 'Koleri',
      country: 'India',
      stars: 4.89,
      cost: 3424,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-924328894250524025/original/fda7598d-6e7d-4de6-a6ad-1a28578798de.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-880944583187711526/original/fbd656a0-9091-4af8-a146-9c1389c79b4f.jpeg?im_w=720',
      index: 16,
    },
    {
      name: 'Wadi Rum Village',
      country: 'Jordan',
      stars: 4.74,
      cost: 934,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-629379648700250594/original/1c4628a6-8550-4198-b114-f4f02aa8efed.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-993979849471286684/original/091ba03f-16e2-435f-b7c8-564274e2ea45.jpeg?im_w=720',
      index: 17,
    },
    {
      name: 'Jerusalem',
      country: 'Israel',
      stars: 5,
      cost: 22974,
      image1:
        'https://a0.muscache.com/im/pictures/ae558b5c-6444-4cfa-b096-a1e5eae635ba.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/de49cb55-ef1e-4cfc-8887-e5b7c7173587.jpg?im_w=720',
      index: 18,
    },
    {
      name: 'Jbeil ',
      country: 'Lebanon',
      stars: 4.96,
      cost: 18963,
      image1:
        'https://a0.muscache.com/im/pictures/6c8ab9f2-a28e-4415-b68f-8ffad843c23f.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-770067159611687040/original/e4b83ddf-c624-4622-bc27-543fc37fefd8.jpeg?im_w=720',
      index: 19,
    },
    {
      name: 'Nevşehir',
      country: 'Turkey',
      stars: 5,
      cost: 8715,
      image1:
        'https://a0.muscache.com/im/pictures/7ae09605-bc4e-458e-9653-29ce6eab12d2.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-962760502210254922/original/a9d8fcf1-00e1-4b48-aa83-aff0bdaebb55.jpeg?im_w=720',
      index: 20,
    },
    {
      name: 'Chang Wat',
      country: 'Thailand',
      stars: 4.71,
      cost: 216788,
      image1:
        'https://a0.muscache.com/im/pictures/1e73f22e-4c41-44be-9da4-236bbac45b53.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-48687221/original/34d97a8a-a8e3-445e-b36c-3e27fbbe90a5.jpeg?im_w=720',
      index: 21,
    },
    {
      name: 'Tambon Bo Put',
      country: 'Thailand',
      stars: 4.91,
      cost: 62953,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-882388213074150078/original/0770ee42-20d3-4d95-9b01-ee889aa36665.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/4fcc5524-f648-48ab-9402-8fd48d919140.jpg?im_w=720',
      index: 22,
    },
    {
      name: 'Ürgüp',
      country: 'Turkey',
      stars: 4.55,
      cost: 13526,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-803221203732691537/original/cdb9c602-f009-4539-bdd6-b9ca4e38c10c.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/d308db73-ca45-4ec3-bf21-590fa8b7dd22.jpg?im_w=720',
      index: 23,
    },
    {
      name: 'Aannaya',
      country: 'Lebanon',
      stars: 4.69,
      cost: 145051,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-789870711512764603/original/bb95bc3a-2b29-43dc-9342-05814eb730e7.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/44c373ff-dae6-4846-9884-9a788f3cb713.jpg?im_w=720',
      index: 24,
    },
    {
      name: 'Ürgüp',
      country: 'Turkey',
      stars: 4.08,
      cost: 26685,
      image1:
        'https://a0.muscache.com/im/pictures/5a4bc355-b4a1-474e-905e-f3b4799d460b.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/76fc7ae0-a355-4903-b50e-dde8da917ac2.jpg?im_w=720',
      index: 25,
    },
    {
      name: 'Ko Samui District',
      country: 'Thailand',
      stars: 4.89,
      cost: 24098,
      image1:
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-781705601029416381/original/42f49513-0ddb-4dbd-b893-70db44010c76.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-846009607406462572/original/fa28cb68-0fc3-4f5f-87e1-13655e958f2f.jpeg?im_w=720',
      index: 26,
    },
    {
      name: 'Tannourine El Tahta',
      country: 'Lebanon',
      stars: 4.19,
      cost: 3504,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-1015842622628695976/original/451ec7a9-f0d8-41a9-b2fa-11f4a3e34b0f.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/ee18b720-7386-4321-8362-9f13888c2d35.jpg?im_w=720',
      index: 27,
    },
    {
      name: 'Faraya',
      country: 'Lebanon',
      stars: 4.91,
      cost: 6484,
      image1:
        'https://a0.muscache.com/im/pictures/c88698e5-9de5-44dd-8500-38dc8ffde0b3.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-945552515163782010/original/bf252dda-43fa-47e4-b31e-017a879d886d.jpeg?im_w=720',
      index: 28,
    },
    {
      name: 'Ortahisar',
      country: 'Turkey',
      stars: 4.36,
      cost: 6739,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-1064967653614475739/original/7eeb0436-3840-4df8-9f24-93d2ca4b8a8a.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-1064991811416009029/original/c73efe24-a6a0-470f-9e1e-1d90f4c3997e.jpeg?im_w=720',
      index: 29,
    },
    {
      name: 'Ayvalı',
      country: 'Turkey',
      stars: 4.62,
      cost: 15851,
      image1:
        'https://a0.muscache.com/im/pictures/62bdf93e-0107-4c44-83d2-3c6e614658b0.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-583909424878289525/original/e3cfd02e-0d53-4c36-9a24-0a02c9cab8cb.jpeg?im_w=720',
      index: 30,
    },
    {
      name: 'Ortahisar',
      country: 'Turkey',
      stars: 4.16,
      cost: 24259,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-1009910035312970666/original/16f0ddf4-0eac-4407-8a9f-6dd91509dd72.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/3da56e34-4ef7-4e63-be7e-cba4ba03159a.jpg?im_w=720',
      index: 31,
    },
    {
      name: 'Ortahisar Belediyesi',
      country: 'Turkey',
      stars: 4.58,
      cost: 5912,
      image1:
        'https://a0.muscache.com/im/pictures/8c6f9b91-fea5-49c2-bed5-b85607a20f8e.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-962761208366659507/original/d8c432e5-c1c5-4119-9d0f-0b9993f16d21.jpeg?im_w=720',
      index: 32,
    },
    {
      name: 'Ortahisar',
      country: 'Turkey',
      stars: 4.91,
      cost: 18968,
      image1:
        'https://a0.muscache.com/im/pictures/30b6c518-1b33-4c00-99d7-f24ca38e261e.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-1020718395701373863/original/7100a89e-e52e-4ef8-9b22-59aca275b556.jpeg?im_w=720',
      index: 33,
    },
    {
      name: 'Ayvalı',
      country: 'Turkey',
      stars: 4.7,
      cost: 9356,
      image1:
        'https://a0.muscache.com/im/pictures/91653754-ac60-4588-8de6-6903bd995ebe.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-928255408504818623/original/7caf8e07-4ea8-4d87-a957-b3d1672394d2.jpeg?im_w=720',
      index: 34,
    },
    {
      name: 'Ortahisar Belediyesi',
      country: 'Turkey',
      stars: 4.48,
      cost: 7188,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-891699139430640391/original/ca05ebac-809d-40e6-9e10-dae3a4af8a47.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/05a96d6f-ee14-4a64-a49e-e58196151693.jpg?im_w=720',
      index: 35,
    },
    {
      name: 'Koleri',
      country: 'India',
      stars: 4.7,
      cost: 3880,
      image1:
        'https://a0.muscache.com/im/pictures/a5f0f4f3-b364-4e1d-bcaf-e9ae70c8a4c0.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-946332967065290829/original/46d1ce4d-d1ea-4eec-9fc0-23e25dd5c7e9.jpeg?im_w=720',
      index: 36,
    },
    {
      name: 'Ortahisar Belediyesi',
      country: 'Turkey',
      stars: 4.86,
      cost: 6972,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-743336394512913508/original/8fa5aa3d-f4fc-4c5f-8041-1bf9eedadfd2.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-631067382915376597/original/8314ea09-e5ab-47a5-ba77-e099381fe491.jpeg?im_w=720',
      index: 37,
    },
    {
      name: 'Ortahisar',
      country: 'Turkey',
      stars: 4.17,
      cost: 13028,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-49466556/original/ddb17a7c-4e7d-4344-8d04-0ceaca94a2a3.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-46059994/original/7b9cec81-aaf8-4f3b-ade9-0141b62bb1d1.jpeg?im_w=720',
      index: 38,
    },
    {
      name: 'Ürgüp',
      country: 'Turkey',
      stars: 4.65,
      cost: 2561,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-796834182065986220/original/664853de-0dd5-4873-b61c-1ef09665408f.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/155bd502-474b-4ae6-9329-342ea856744a.jpg?im_w=720',
      index: 39,
    },
    {
      name: 'Ürgüp',
      country: 'Turkey',
      stars: 4.67,
      cost: 7188,
      image1:
        'https://a0.muscache.com/im/pictures/bb939fd4-0d9b-48aa-bbd2-0963c6f13ca5.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/hosting/Hosting-1003026207420447432/original/09cde552-34b5-4cdb-beb8-0d1df27b4158.jpeg?im_w=720',
      index: 40,
    },
    {
      name: 'Wadi Musa',
      country: 'Jordan',
      stars: 4.72,
      cost: 6155,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-805545971134490389/original/1d87798d-71d7-49ac-a51e-10fa5462a2a9.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-1065006453099984320/original/47d9ee14-1859-43cc-9028-b2947362e019.jpeg?im_w=720',
      index: 41,
    },
    {
      name: 'Mustafapaşa',
      country: 'Turkey',
      stars: 4.27,
      cost: 718692,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-756374104071767789/original/04ac95db-4951-4fd7-9da4-0e99b4991aa6.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/f6063b1f-7510-4127-a80f-09a93b32a10a.jpg?im_w=720',
      index: 42,
    },
    {
      name: 'Nevşehir Merkez',
      country: 'Turkey',
      stars: 4.04,
      cost: 8805,
      image1:
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-968866231192190243/original/a3cf1ac4-9886-4efa-b680-1217b919c90c.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-777474474450147850/original/6948d3a3-27ba-4cc2-8275-187ee8d4b5ba.jpeg?im_w=720',
      index: 43,
    },
    {
      name: 'Ürgüp',
      country: 'Turkey',
      stars: 4.86,
      cost: 18066,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-946258538200250161/original/48f78e30-aa1a-465d-9697-b55674d66927.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-615052791928209987/original/fb36d297-6be6-4242-b389-845de0b01413.jpeg?im_w=720',
      index: 44,
    },
    {
      name: 'Idukki',
      country: 'India',
      stars: 4.87,
      cost: 9014,
      image1:
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-962759839816779710/original/3d2a4a77-d949-4500-8cc2-cdba48992973.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/46481437-7fb8-4df7-8161-571274d54fd8.jpg?im_w=720',
      index: 45,
    },
    {
      name: 'Ortahisar Belediyesi',
      country: 'Turkey',
      stars: 4.92,
      cost: 6648,
      image1:
        'https://a0.muscache.com/im/pictures/airflow/Hosting-40627896/original/492e2efc-7c2c-4e6e-97a6-444d3c9b5fff.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/2beca90f-ad2f-419e-bcf2-a17275850fe7.jpg?im_w=720',
      index: 46,
    },
    {
      name: 'Ortahisar',
      country: 'Turkey',
      stars: 4.91,
      cost: 6024,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-52726789/original/f1409b1b-18c0-46f7-8964-81233c7913fe.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-733079076972861986/original/9679f3c1-2d75-457b-b7d5-f9cb1d365a7f.jpeg?im_w=720',
      index: 47,
    },
    {
      name: 'Ortahisar',
      country: 'Turkey',
      stars: 4.1,
      cost: 4990,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-804115836785657487/original/fba3cac4-22c4-4ab1-a3f6-aa29f88ed45d.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-893139240726927835/original/a2dc0495-d988-4abb-b730-daaad381fd4a.jpeg?im_w=720',
      index: 48,
    },
    {
      name: 'Ürgüp',
      country: 'Turkey',
      stars: 4.07,
      cost: 4990,
      image1:
        'https://a0.muscache.com/im/pictures/85a969da-34e1-450c-8955-6be3f3f0b053.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-924441775074926089/original/c3c9222e-abe1-4137-8820-ff60843a6367.jpeg?im_w=720',
      index: 49,
    },
    {
      name: 'Mustafapaşa',
      country: 'Turkey',
      stars: 4.86,
      cost: 4279,
      image1:
        'https://a0.muscache.com/im/pictures/0dd3faf2-6526-45c3-8736-8e01f8aff5cd.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/2566558b-ef86-45e9-a1ea-35f8481273fb.jpg?im_w=720',
      index: 50,
    },
    {
      name: 'Ortahisar',
      country: 'Turkey',
      stars: 4.97,
      cost: 9136,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-892504466806884997/original/e2ad58dd-b31d-4fe2-969b-d9a1b3b000bf.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/hosting/Hosting-999129869921170920/original/5fde2b10-462a-4acc-b4c2-7a09c13365af.jpeg?im_w=720',
      index: 51,
    },
    {
      name: 'Ortahisar',
      country: 'Turkey',
      stars: 4.92,
      cost: 12867,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-805538475554081330/original/e13fdf72-3f34-4bbe-bcba-30b4e587bde4.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/918e01df-d489-4bcb-a669-9cf449833c23.jpg?im_w=720',
      index: 52,
    },
    {
      name: 'Ortahisar Belediyesi/Ürgüp',
      country: 'Turkey',
      stars: 4.89,
      cost: 9228,
      image1:
        'https://a0.muscache.com/im/pictures/43dd2d09-fe10-4bc0-9362-e98a22a268c0.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/5323d619-b6d2-40c9-8cdf-925398f0c273.jpg?im_w=720',
      index: 53,
    },
    {
      name: 'Batroun',
      country: 'Lebanon',
      stars: 4.92,
      cost: 6534,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-980978786542296929/original/613c3ace-6209-4c4c-91d2-ee1008e12757.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-865620084061693843/original/3edb68e8-ba0f-47d6-ba66-49d1028acd6b.jpeg?im_w=720',
      index: 54,
    },
    {
      name: 'Ortahisar',
      country: 'Turkey',
      stars: 4.29,
      cost: 56856,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-926605630045853984/original/692c53fc-2d8b-4e9c-a408-13a7cc30f80e.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-1061698996827540593/original/ffac8312-87b4-4149-b368-a4f73f45005a.jpeg?im_w=720',
      index: 55,
    },
    {
      name: 'Ortahisar Belediyesi',
      country: 'Turkey',
      stars: 4.84,
      cost: 12304,
      image1:
        'https://a0.muscache.com/im/pictures/d91dcc16-62ce-4881-b149-e31a0d14aabf.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/29eb43d8-0baa-45d3-a915-a105eaef2b2a.jpg?im_w=720',
      index: 56,
    },
    {
      name: 'Ortahisar',
      country: 'Turkey',
      stars: 4.93,
      cost: 6705,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-776206514660228645/original/2a938d55-4e30-404e-aa72-d4c05d4ec29f.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-957887960642294946/original/4f29d58e-e251-4037-bd69-8ecdf08976eb.jpeg?im_w=720',
      index: 57,
    },
    {
      name: 'Artuklu',
      country: 'Turkey',
      stars: 4.98,
      cost: 1871,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-856487325234705558/original/9075c135-afea-4e77-a5d3-12e096affe77.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/hosting/Hosting-1060024080038766918/original/a00442fe-e989-480a-9f7b-9302c583fe28.jpeg?im_w=720',
      index: 58,
    },
    {
      name: 'Ortahisar',
      country: 'Turkey',
      stars: 4.7,
      cost: 15594,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-52838318/original/f8748d4d-3972-47b6-8635-1c0275645a33.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-756454089255336674/original/124593f1-1d1d-4895-9ecf-408faf12894f.jpeg?im_w=720',
      index: 59,
    },
  ];
}
