import { Component } from '@angular/core';
import { CardComponent } from '../../Helpers/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-beach',
  standalone: true,
  imports: [CardComponent, FormsModule, CommonModule],
  templateUrl: './beach.component.html',
  styleUrl: './beach.component.css',
})
export class BeachComponent {
  places = [
    {
      name: 'Tiracol',
      country: 'India',
      stars: 4.2,
      cost: 14000,
      image1:
        'https://a0.muscache.com/im/pictures/7a0e4e5f-ce39-485a-b8d3-cc95c2c81a7e.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/37e5513e-8eef-43db-b7c9-f0f552147069.jpg?im_w=720',
      index: 0,
    },
    {
      name: 'Anjuna',
      country: 'India',
      stars: 5,
      cost: 8575,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-787294559973104944/original/86527e20-dca8-42db-953b-5feb2e83c752.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-980977360939075459/original/66bdd7a0-3c0d-44a3-8835-325c0327b76f.jpeg?im_w=720',
      index: 1,
    },
    {
      name: 'Vagator',
      country: 'India',
      stars: 4.53,
      cost: 12272,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-980977360939075459/original/a4e2d370-a24e-4e8b-9697-a2d8d43b2aed.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/bce4ba91-39b4-4620-8643-bacba0d17a73.jpg?im_w=720',
      index: 2,
    },
    {
      name: 'Barashiv',
      country: 'India',
      stars: 4.07,
      cost: 47016,
      image1:
        'https://a0.muscache.com/im/pictures/e7a1611e-2655-423c-93f6-0a01cf8c1c30.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-39986130/original/8a6cde11-7be0-44a0-a208-e4740cd5efb7.jpeg?im_w=720',
      index: 3,
    },
    {
      name: 'Anjuna',
      country: 'India',
      stars: 4.81,
      cost: 1539,
      image1:
        'https://a0.muscache.com/im/pictures/68b29e17-c51d-4058-aa13-74000421b88c.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/b12035ca-809f-4e38-a2bf-5add9d405137.jpg?im_w=720',
      index: 4,
    },
    {
      name: 'Vagator',
      country: 'Anjuna',
      stars: 4.98,
      cost: 14333,
      image1:
        'https://a0.muscache.com/im/pictures/5c41a08a-0bf3-481c-826f-4adbc68b80a2.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-815563633693763435/original/8c0343df-00fb-4879-a029-f3eedf7d3dbb.jpeg?im_w=720',
      index: 5,
    },
    {
      name: 'Vagator ',
      country: 'India',
      stars: 4.94,
      cost: 28529,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-815563633693763435/original/a6811705-b938-4df2-9c8a-8f7f14d12fc5.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/3ceb5077-fa80-444f-9e63-a7b1e55649e0.jpg?im_w=720',
      index: 6,
    },
    {
      name: 'Vagator',
      country: 'India',
      stars: 4.9,
      cost: 30264,
      image1:
        'https://a0.muscache.com/im/pictures/4eac5bf3-0713-41e8-a188-fc8d405b668d.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/69bbc96c-496a-4a10-b729-dad4849948b4.jpg?im_w=720',
      index: 7,
    },
    {
      name: 'Vagator',
      country: 'India',
      stars: 5,
      cost: 23965,
      image1:
        'https://a0.muscache.com/im/pictures/167817d6-9641-4131-be79-a5ce36ef5095.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-45372012/original/e0d653d1-e46e-46dc-9d51-7f82612465ee.jpeg?im_w=720',
      index: 8,
    },
    {
      name: 'Mandrem',
      country: 'India',
      stars: 4.89,
      cost: 5478,
      image1:
        'https://a0.muscache.com/im/pictures/ceed92b4-0a3d-4224-a232-f40f87f5ac16.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-680771142168784225/original/0bea5d4d-c797-49be-adfd-79fb57952a77.jpeg?im_w=720',
      index: 9,
    },
    {
      name: 'Goa',
      country: 'India',
      stars: 4.88,
      cost: 6861,
      image1:
        'https://a0.muscache.com/im/pictures/hosting/Hosting-869865415845090830/original/16295f66-4d40-4739-a60d-dc92937d7721.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/45a20af2-6d18-4ccc-9bc4-93262698d0d2.jpg?im_w=720',
      index: 10,
    },
    {
      name: 'Mandrem',
      country: 'India',
      stars: 4.89,
      cost: 5720,
      image1:
        'https://a0.muscache.com/im/pictures/hosting/Hosting-1038206089057448903/original/9c53774a-f423-49a4-940d-41d1ffa01ab7.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-1052270578205853075/original/90fea7b5-ee07-44ac-a460-285779d4ad11.jpeg?im_w=720',
      index: 11,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.81,
      cost: 11254,
      image1:
        'https://a0.muscache.com/im/pictures/hosting/Hosting-973777148984352805/original/810340ba-9d68-40f4-988a-efddf104c949.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/84b9d4a3-4925-4386-a43c-84babf0a5b73.jpg?im_w=720',
      index: 12,
    },
    {
      name: 'Ashvem',
      country: 'India',
      stars: 4.83,
      cost: 1711,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-39581465/original/252fa774-a719-4e03-a5b9-c799150b7b56.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-868195182069121768/original/242125ea-2b8f-4e63-a748-2b3f174b2619.jpeg?im_w=720',
      index: 13,
    },
    {
      name: 'Mandrem',
      country: 'India',
      stars: 4.95,
      cost: 2916,
      image1:
        'https://a0.muscache.com/im/pictures/ab998537-a315-4272-bb47-1aebf2016747.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzY3Mjc3ODIzMzc0MjEzNTQ5/original/fb464fcb-2713-49e8-9bbf-625c5ea4c33d.jpeg?im_w=720',
      index: 14,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 5,
      cost: 4565,
      image1:
        'https://a0.muscache.com/im/pictures/87ffc6cf-0c40-4340-9f76-9e8c351a0814.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-657853160607911194/original/8fc50975-dd94-467f-a75e-af4413fd72f8.jpeg?im_w=720',
      index: 15,
    },
    {
      name: 'Anjuna',
      country: 'India',
      stars: 4.33,
      cost: 3424,
      image1:
        'https://a0.muscache.com/im/pictures/d9c3ece1-849d-4404-af66-959c48e2f492.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/477573a2-d981-4adf-8924-47b42a48ca23.jpg?im_w=720',
      index: 16,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.65,
      cost: 1555,
      image1:
        'https://a0.muscache.com/im/pictures/airflow/Hosting-11628597/original/d137e517-364b-4c39-80c8-1039a3981611.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/05917c0d-b893-43a4-bf09-8f736cf46d85.jpg?im_w=720',
      index: 17,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.59,
      cost: 5135,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-730776239496393208/original/08f9838b-dd8f-4fd8-869a-fbbcda5daadc.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/d6dde4d2-22a7-4b53-9f5c-97d27466a2f9.jpg?im_w=720',
      index: 18,
    },
    {
      name: 'Mandrem',
      country: 'India',
      stars: 4.32,
      cost: 3540,
      image1:
        'https://a0.muscache.com/im/pictures/ac1abbe3-2e80-4194-b6af-9060496e4ef9.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/9fe9ace0-ae1c-43f0-9601-c0f0548113e6.jpg?im_w=720',
      index: 19,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.79,
      cost: 11868,
      image1:
        'https://a0.muscache.com/im/pictures/cd842b93-8b7a-45e2-b487-03bab44340aa.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-841792256528314948/original/674ee573-7e3f-4e99-b48e-2199d0d2f5de.jpeg?im_w=720',
      index: 20,
    },
    {
      name: 'Vagator',
      country: 'India',
      stars: 4.8,
      cost: 6276,
      image1:
        'https://a0.muscache.com/im/pictures/8fcab58e-81b3-47d1-a3f0-5754d3a0eda9.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/7d3852b8-7ae7-4aed-99d0-4308209ccf31.jpg?im_w=720',
      index: 21,
    },
    {
      name: 'Vagator',
      country: 'India',
      stars: 4.77,
      cost: 3994,
      image1:
        'https://a0.muscache.com/im/pictures/37ad7254-154e-4fd9-9888-c6811da83c3a.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-42033523/original/2a67e1f4-767f-44af-ad48-65fd7b39db1b.jpeg?im_w=720',
      index: 22,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.96,
      cost: 7546,
      image1:
        'https://a0.muscache.com/im/pictures/dde0406d-d9b2-4f06-9c43-c72574c72d20.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/c36859d4-a0d2-4852-8b66-b6528957eae0.jpg?im_w=720',
      index: 23,
    },
    {
      name: 'Anjuna',
      country: 'India',
      stars: 4.83,
      cost: 7988,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-835437/original/0226f78c-7a80-4ff4-a70f-adbea52a920e.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/d7e05406-3026-4642-80e3-062a7e9496eb.jpg?im_w=720',
      index: 24,
    },
    {
      name: 'Mandrem',
      country: 'India',
      stars: 4.92,
      cost: 3429,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-1018783854036210166/original/62f31a71-03eb-4173-8e5f-0c0c29d4f7ea.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/8475b108-ddbc-4df3-86e1-420ff5fcebe2.jpg?im_w=720',
      index: 25,
    },
    {
      name: 'Goa',
      country: 'India',
      stars: 4.77,
      cost: 11000,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-991291300324242446/original/9c3c2df3-bf4c-4fd4-a428-4a99456db263.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-938288831105622738/original/970c746b-34aa-41dc-a031-05313a56f883.jpeg?im_w=720',
      index: 26,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.85,
      cost: 6600,
      image1:
        'https://a0.muscache.com/im/pictures/hosting/Hosting-1016691894926462295/original/83ecfda3-da8f-4861-851c-e66ca3fac913.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-1001804897309269515/original/25b5d4f3-9051-4dac-ac67-af2dd6d00984.jpeg?im_w=720',
      index: 27,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.98,
      cost: 6875,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-1019394887423473920/original/d9edf532-a992-4e51-9dc0-f465a0e2fb92.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/4a20ebd3-7880-4585-a911-98918742b0f1.jpg?im_w=720',
      index: 28,
    },
    {
      name: 'Mandrem',
      country: 'India',
      stars: 4.92,
      cost: 4000,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-565633540297840360/original/db8be1bd-aa15-45fa-a38c-d6cc6bcfeab8.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-1004765100213538133/original/509ffb22-3aa0-483c-afe8-fc3cf1481172.jpeg?im_w=720',
      index: 29,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.82,
      cost: 2625,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-902811319607680556/original/0b0eb784-4c48-4f58-baf6-dbe5a5fc6c43.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/dffefde1-59b1-48ed-9868-89b0370bcf32.jpg?im_w=720',
      index: 30,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.97,
      cost: 2639,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-986964941789503049/original/037e976b-661f-450d-9916-52cf4655f09e.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-1012848953311696389/original/b64423a2-afb9-4c52-ab69-22277c4bc33a.jpeg?im_w=720',
      index: 31,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.93,
      cost: 7916,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-949178357822527152/original/3fd1ae06-7ff8-4656-b7c3-1dd5672ed478.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-33143551/original/2ae34b82-5b72-435a-af81-1701d046d89e.jpeg?im_w=720',
      index: 32,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.95,
      cost: 13708,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-624942919728906778/original/347f4253-3331-41dc-a891-8ac2fec679d8.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-819967325708864150/original/75213696-5084-4856-8776-9a6fe99d550e.jpeg?im_w=720',
      index: 33,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.86,
      cost: 10541,
      image1:
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA2MDgyNzAxMTAwMTc5MzczNA%3D%3D/original/7c68972a-9617-4805-b1bc-33d0bcd71c41.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-666335492468331940/original/1e275b95-682d-406f-839d-bc6ffea1bac2.jpeg?im_w=720',
      index: 34,
    },
    {
      name: 'Ashvem Beach',
      country: 'India',
      stars: 4.86,
      cost: 3424,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-666335492468331940/original/ea6339d9-530d-47e7-9108-69c2b63dae35.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/hosting/Hosting-1067073581898952232/original/590fe3b4-1f5e-4c2c-83ad-66f9f5ff2b98.jpeg?im_w=720',
      index: 35,
    },
    {
      name: 'Ashvem Beach',
      country: 'Mandrem',
      stars: 5,
      cost: 4565,
      image1:
        'https://a0.muscache.com/im/pictures/hosting/Hosting-1033801486190736695/original/b2b93ce8-3e37-490a-998b-c7b9a23f158a.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/61b8985a-a5ed-4162-b868-6595b17678f4.jpg?im_w=720',
      index: 36,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.95,
      cost: 3445,
      image1:
        'https://a0.muscache.com/im/pictures/d3a335e3-7814-4ed6-96d7-34efd06c72f0.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/hosting/Hosting-1076748620480166952/original/d6a66253-136f-4563-9dae-452de989e8c0.jpeg?im_w=720',
      index: 37,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.92,
      cost: 4436,
      image1:
        'https://a0.muscache.com/im/pictures/ec614658-f357-42d0-b74d-932d4cddfaa3.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/ea6a3f23-fe09-41b0-8221-d2a7bd60aca6.jpg?im_w=720',
      index: 38,
    },
    {
      name: 'Andheri West Mumbai ',
      country: 'India',
      stars: 5,
      cost: 11657,
      image1:
        'https://a0.muscache.com/im/pictures/54545dd4-f031-4f8d-8276-6fdc323de1d1.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-1075024983484119010/original/0bface88-ad7a-4340-89f9-5932a56d81d4.jpeg?im_w=720',
      index: 39,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.77,
      cost: 2867,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-796242848645650064/original/fcd4e846-9b71-425c-907e-e138edb7b3e2.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/4d4d7d1f-643c-41ad-a42c-311c43959984.jpg?im_w=720',
      index: 40,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.67,
      cost: 3424,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-582255871105649521/original/5a015ef2-ea7e-45c4-804d-e87b0fc5c946.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-668456897905710879/original/2a476f8f-0860-4c60-9856-bfca26151b55.jpeg?im_w=720',
      index: 41,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.77,
      cost: 3994,
      image1:
        'https://a0.muscache.com/im/pictures/91ee1475-c50d-4bc5-ab6c-a8e3f500f317.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-769854892131610570/original/fd7c9b83-d7ce-4412-a205-f9f0b44015dc.jpeg?im_w=720',
      index: 42,
    },
    {
      name: 'Alibag',
      country: 'India',
      stars: 4.88,
      cost: 8445,
      image1:
        'https://a0.muscache.com/im/pictures/hosting/Hosting-763404175321918104/original/77cebe0c-5dd9-4a8f-a5c3-48e0c34c0524.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/hosting/Hosting-1062226077006118829/original/d8400624-094b-4b12-9147-5231e2a8f651.jpeg?im_w=720',
      index: 43,
    },
    {
      name: 'Siolim',
      country: 'India',
      stars: 4.83,
      cost: 3880,
      image1:
        'https://a0.muscache.com/im/pictures/04452d31-e44c-41a8-b010-7b17f95573bb.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-847549777985089790/original/d971ecd0-c49f-4e7a-9841-53882a3336fe.jpeg?im_w=720',
      index: 44,
    },
    {
      name: 'Siolim',
      country: 'India',
      stars: 4.75,
      cost: 3431,
      image1:
        'https://a0.muscache.com/im/pictures/c1cd45b0-93af-4682-818c-b41b5d14cd89.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/hosting/Hosting-1075763509826989399/original/a2e1a13c-4d52-478c-97d6-a1607952f38d.jpeg?im_w=720',
      index: 45,
    },
    {
      name: 'Alibag',
      country: 'India',
      stars: 4.84,
      cost: 10982,
      image1:
        'https://a0.muscache.com/im/pictures/d4c69896-dd34-4b9a-b292-e328bd495e13.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/0fe3647b-f2dc-4926-a838-3c027b89e1f9.jpg?im_w=720',
      index: 46,
    },
    {
      name: 'Morjim',
      country: 'India',
      stars: 5,
      cost: 2054,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-52252954/original/e2f4e8f1-e8ad-469c-b19a-49a45245fa97.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-1000664278443242151/original/11d173eb-ecef-49d1-93a4-432406ec6096.png?im_w=720',
      index: 47,
    },
    {
      name: 'Vagator',
      country: 'India',
      stars: 5,
      cost: 15000,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-762761458421043713/original/55a2da41-f9da-4c37-9ce8-43162804bf7e.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-775715273053118343/original/f9a0757e-3787-483f-836f-1c40d9b8a3f0.jpeg?im_w=720',
      index: 48,
    },
    {
      name: 'Siolim',
      country: 'India',
      stars: 5,
      cost: 6475,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-714211010431143670/original/8733b050-223b-4ffe-81d4-3b440ea21622.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/b8a01795-e478-4ee6-a88f-f428cc917f04.jpg?im_w=720',
      index: 49,
    },
    {
      name: 'Siolim',
      country: 'India',
      stars: 4.96,
      cost: 4521,
      image1:
        'https://a0.muscache.com/im/pictures/9c77e9fa-ce57-44e9-82be-aa628c5136c0.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/8b592ce1-0dd0-41ba-96bb-b4d54152cdb1.jpg?im_w=720',
      index: 50,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.87,
      cost: 6989,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-974334566334108992/original/2ae8bcd2-9211-43fa-8644-0bf0dd2b8f39.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/74986748-19cd-48c8-becf-ab0724ed64c8.jpg?im_w=720',
      index: 51,
    },
    {
      name: 'Siolim',
      country: 'India',
      stars: 5,
      cost: 3905,
      image1:
        'https://a0.muscache.com/im/pictures/fe430d1e-533c-41bf-acb3-f92977f771c7.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-703859712047574564/original/2e4a5112-acda-48a6-8407-c84d3dbd31bb.jpeg?im_w=720',
      index: 52,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.93,
      cost: 5987,
      image1:
        'https://a0.muscache.com/im/pictures/hosting/Hosting-1066306647698101033/original/b36383a7-2072-4197-9c34-38a356954990.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-741057063060707941/original/bef80e30-a1e0-482f-9a6c-403bd85a17c3.jpeg?im_w=720',
      index: 53,
    },
    {
      name: 'Vagator',
      country: 'India',
      stars: 4.88,
      cost: 2509,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-741057063060707941/original/e5e5a01f-2ebf-41f1-a40b-3e578f84d488.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/6b8298c6-5739-4c57-b2ec-b3b29ff2b18f.jpg?im_w=720',
      index: 54,
    },
    {
      name: 'Siolim',
      country: 'India',
      stars: 4.94,
      cost: 6856,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-886961373642836418/original/4b8a8be7-5a16-4277-8265-c0d972982c5f.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-973867937570361338/original/3a1618f5-b52e-47b3-96d1-3001c58cd871.jpeg?im_w=720',
      index: 55,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.86,
      cost: 3600,
      image1:
        'https://a0.muscache.com/im/pictures/6529479f-dfce-4958-955b-81d548850224.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/miso/Hosting-952887511152144441/original/764039b0-14e8-46ab-afd7-b84bfbf17d1b.jpeg?im_w=720',
      index: 56,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.91,
      cost: 4049,
      image1:
        'https://a0.muscache.com/im/pictures/miso/Hosting-1051251531129976568/original/5847d801-b351-4580-ab20-9b6f8c50c951.jpeg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/8be6594f-2a81-4050-bec5-ff41fe74fbf3.jpg?im_w=720',
      index: 57,
    },
    {
      name: 'Mumbai',
      country: 'India',
      stars: 4.98,
      cost: 3322,
      image1:
        'https://a0.muscache.com/im/pictures/99079b82-7b19-422f-bd85-ca4aae77db09.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/cfc095e9-1b37-4a37-92e6-bdd7f0b04b5d.jpg?im_w=720',
      index: 58,
    },
    {
      name: 'Anjuna',
      country: 'India',
      stars: 4.95,
      cost: 6799,
      image1:
        'https://a0.muscache.com/im/pictures/05ad12f3-8f4f-4fd0-ba7a-09189e970b6c.jpg?im_w=720',
      image2:
        'https://a0.muscache.com/im/pictures/8a9125cd-6a9a-4ad4-94b5-3415af1ea2ed.jpg?im_w=720',
      index: 59,
    },
  ];
}
