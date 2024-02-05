let places = [];

image1entry= [
  'https://a0.muscache.com/im/pictures/7a0e4e5f-ce39-485a-b8d3-cc95c2c81a7e.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-787294559973104944/original/86527e20-dca8-42db-953b-5feb2e83c752.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-980977360939075459/original/a4e2d370-a24e-4e8b-9697-a2d8d43b2aed.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/e7a1611e-2655-423c-93f6-0a01cf8c1c30.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/68b29e17-c51d-4058-aa13-74000421b88c.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/5c41a08a-0bf3-481c-826f-4adbc68b80a2.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-815563633693763435/original/a6811705-b938-4df2-9c8a-8f7f14d12fc5.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/4eac5bf3-0713-41e8-a188-fc8d405b668d.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/167817d6-9641-4131-be79-a5ce36ef5095.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/ceed92b4-0a3d-4224-a232-f40f87f5ac16.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-869865415845090830/original/16295f66-4d40-4739-a60d-dc92937d7721.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1038206089057448903/original/9c53774a-f423-49a4-940d-41d1ffa01ab7.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-973777148984352805/original/810340ba-9d68-40f4-988a-efddf104c949.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-39581465/original/252fa774-a719-4e03-a5b9-c799150b7b56.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/ab998537-a315-4272-bb47-1aebf2016747.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/87ffc6cf-0c40-4340-9f76-9e8c351a0814.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/d9c3ece1-849d-4404-af66-959c48e2f492.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/airflow/Hosting-11628597/original/d137e517-364b-4c39-80c8-1039a3981611.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-730776239496393208/original/08f9838b-dd8f-4fd8-869a-fbbcda5daadc.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/ac1abbe3-2e80-4194-b6af-9060496e4ef9.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/cd842b93-8b7a-45e2-b487-03bab44340aa.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/8fcab58e-81b3-47d1-a3f0-5754d3a0eda9.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/37ad7254-154e-4fd9-9888-c6811da83c3a.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/dde0406d-d9b2-4f06-9c43-c72574c72d20.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-835437/original/0226f78c-7a80-4ff4-a70f-adbea52a920e.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-1018783854036210166/original/62f31a71-03eb-4173-8e5f-0c0c29d4f7ea.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-991291300324242446/original/9c3c2df3-bf4c-4fd4-a428-4a99456db263.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1016691894926462295/original/83ecfda3-da8f-4861-851c-e66ca3fac913.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-1019394887423473920/original/d9edf532-a992-4e51-9dc0-f465a0e2fb92.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-565633540297840360/original/db8be1bd-aa15-45fa-a38c-d6cc6bcfeab8.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-902811319607680556/original/0b0eb784-4c48-4f58-baf6-dbe5a5fc6c43.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-986964941789503049/original/037e976b-661f-450d-9916-52cf4655f09e.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-949178357822527152/original/3fd1ae06-7ff8-4656-b7c3-1dd5672ed478.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-624942919728906778/original/347f4253-3331-41dc-a891-8ac2fec679d8.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA2MDgyNzAxMTAwMTc5MzczNA%3D%3D/original/7c68972a-9617-4805-b1bc-33d0bcd71c41.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-666335492468331940/original/ea6339d9-530d-47e7-9108-69c2b63dae35.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1033801486190736695/original/b2b93ce8-3e37-490a-998b-c7b9a23f158a.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/d3a335e3-7814-4ed6-96d7-34efd06c72f0.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/ec614658-f357-42d0-b74d-932d4cddfaa3.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/54545dd4-f031-4f8d-8276-6fdc323de1d1.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-796242848645650064/original/fcd4e846-9b71-425c-907e-e138edb7b3e2.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-582255871105649521/original/5a015ef2-ea7e-45c4-804d-e87b0fc5c946.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/91ee1475-c50d-4bc5-ab6c-a8e3f500f317.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-763404175321918104/original/77cebe0c-5dd9-4a8f-a5c3-48e0c34c0524.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/04452d31-e44c-41a8-b010-7b17f95573bb.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/c1cd45b0-93af-4682-818c-b41b5d14cd89.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/d4c69896-dd34-4b9a-b292-e328bd495e13.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-52252954/original/e2f4e8f1-e8ad-469c-b19a-49a45245fa97.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-762761458421043713/original/55a2da41-f9da-4c37-9ce8-43162804bf7e.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-714211010431143670/original/8733b050-223b-4ffe-81d4-3b440ea21622.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/9c77e9fa-ce57-44e9-82be-aa628c5136c0.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-974334566334108992/original/2ae8bcd2-9211-43fa-8644-0bf0dd2b8f39.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/fe430d1e-533c-41bf-acb3-f92977f771c7.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1066306647698101033/original/b36383a7-2072-4197-9c34-38a356954990.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-741057063060707941/original/e5e5a01f-2ebf-41f1-a40b-3e578f84d488.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-886961373642836418/original/4b8a8be7-5a16-4277-8265-c0d972982c5f.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/6529479f-dfce-4958-955b-81d548850224.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-1051251531129976568/original/5847d801-b351-4580-ab20-9b6f8c50c951.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/99079b82-7b19-422f-bd85-ca4aae77db09.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/05ad12f3-8f4f-4fd0-ba7a-09189e970b6c.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/dca21d4c-ca4a-4282-9f17-b1c08a14fa3e.jpg?im_w=720'
]

image2entry= [
  'https://a0.muscache.com/im/pictures/37e5513e-8eef-43db-b7c9-f0f552147069.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-980977360939075459/original/66bdd7a0-3c0d-44a3-8835-325c0327b76f.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/bce4ba91-39b4-4620-8643-bacba0d17a73.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-39986130/original/8a6cde11-7be0-44a0-a208-e4740cd5efb7.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/b12035ca-809f-4e38-a2bf-5add9d405137.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-815563633693763435/original/8c0343df-00fb-4879-a029-f3eedf7d3dbb.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/3ceb5077-fa80-444f-9e63-a7b1e55649e0.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/69bbc96c-496a-4a10-b729-dad4849948b4.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-45372012/original/e0d653d1-e46e-46dc-9d51-7f82612465ee.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-680771142168784225/original/0bea5d4d-c797-49be-adfd-79fb57952a77.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/45a20af2-6d18-4ccc-9bc4-93262698d0d2.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-1052270578205853075/original/90fea7b5-ee07-44ac-a460-285779d4ad11.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/84b9d4a3-4925-4386-a43c-84babf0a5b73.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-868195182069121768/original/242125ea-2b8f-4e63-a748-2b3f174b2619.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzY3Mjc3ODIzMzc0MjEzNTQ5/original/fb464fcb-2713-49e8-9bbf-625c5ea4c33d.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-657853160607911194/original/8fc50975-dd94-467f-a75e-af4413fd72f8.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/477573a2-d981-4adf-8924-47b42a48ca23.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/05917c0d-b893-43a4-bf09-8f736cf46d85.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/d6dde4d2-22a7-4b53-9f5c-97d27466a2f9.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/9fe9ace0-ae1c-43f0-9601-c0f0548113e6.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-841792256528314948/original/674ee573-7e3f-4e99-b48e-2199d0d2f5de.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/7d3852b8-7ae7-4aed-99d0-4308209ccf31.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-42033523/original/2a67e1f4-767f-44af-ad48-65fd7b39db1b.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/c36859d4-a0d2-4852-8b66-b6528957eae0.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/d7e05406-3026-4642-80e3-062a7e9496eb.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/8475b108-ddbc-4df3-86e1-420ff5fcebe2.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-938288831105622738/original/970c746b-34aa-41dc-a031-05313a56f883.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-1001804897309269515/original/25b5d4f3-9051-4dac-ac67-af2dd6d00984.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/4a20ebd3-7880-4585-a911-98918742b0f1.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-1004765100213538133/original/509ffb22-3aa0-483c-afe8-fc3cf1481172.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/dffefde1-59b1-48ed-9868-89b0370bcf32.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-1012848953311696389/original/b64423a2-afb9-4c52-ab69-22277c4bc33a.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-33143551/original/2ae34b82-5b72-435a-af81-1701d046d89e.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-819967325708864150/original/75213696-5084-4856-8776-9a6fe99d550e.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-666335492468331940/original/1e275b95-682d-406f-839d-bc6ffea1bac2.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1067073581898952232/original/590fe3b4-1f5e-4c2c-83ad-66f9f5ff2b98.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/61b8985a-a5ed-4162-b868-6595b17678f4.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1076748620480166952/original/d6a66253-136f-4563-9dae-452de989e8c0.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/ea6a3f23-fe09-41b0-8221-d2a7bd60aca6.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-1075024983484119010/original/0bface88-ad7a-4340-89f9-5932a56d81d4.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/4d4d7d1f-643c-41ad-a42c-311c43959984.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-668456897905710879/original/2a476f8f-0860-4c60-9856-bfca26151b55.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-769854892131610570/original/fd7c9b83-d7ce-4412-a205-f9f0b44015dc.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1062226077006118829/original/d8400624-094b-4b12-9147-5231e2a8f651.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-847549777985089790/original/d971ecd0-c49f-4e7a-9841-53882a3336fe.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1075763509826989399/original/a2e1a13c-4d52-478c-97d6-a1607952f38d.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/0fe3647b-f2dc-4926-a838-3c027b89e1f9.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-1000664278443242151/original/11d173eb-ecef-49d1-93a4-432406ec6096.png?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-775715273053118343/original/f9a0757e-3787-483f-836f-1c40d9b8a3f0.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/b8a01795-e478-4ee6-a88f-f428cc917f04.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/8b592ce1-0dd0-41ba-96bb-b4d54152cdb1.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/74986748-19cd-48c8-becf-ab0724ed64c8.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-703859712047574564/original/2e4a5112-acda-48a6-8407-c84d3dbd31bb.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-741057063060707941/original/bef80e30-a1e0-482f-9a6c-403bd85a17c3.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/6b8298c6-5739-4c57-b2ec-b3b29ff2b18f.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-973867937570361338/original/3a1618f5-b52e-47b3-96d1-3001c58cd871.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-952887511152144441/original/764039b0-14e8-46ab-afd7-b84bfbf17d1b.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/8be6594f-2a81-4050-bec5-ff41fe74fbf3.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/cfc095e9-1b37-4a37-92e6-bdd7f0b04b5d.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/8a9125cd-6a9a-4ad4-94b5-3415af1ea2ed.jpg?im_w=720'
];


const largestring1 = `

Tiracol, India
313 kilometres away
12–17 Feb
₹14,000 
night
₹14,000 per night





Anjuna, India
On the beach
2–7 Feb
₹8,575 
night
₹8,575 per night
5.0





Vagator, India
On the beach
14–19 Feb
₹12,272 
night
₹12,272 per night





Barashiv, India
On the beach
4–9 Feb
₹47,016 
night
₹47,016 per night





Anjuna, India
Near Calangute Beach
19–24 Feb
₹1,539 
night
₹1,539 per night
4.81
Guest favourite




Vagator, Anjuna, India
Near Vagator Beach
16–21 Feb
₹14,333 
night
₹14,333 per night
4.98





Vagator , India
15 min walk to Vagator Beach
2–7 Mar
₹28,529 
night
₹28,529 per night
4.94





Vagator, India
Near Vagator Beach
19–24 Feb
₹30,264 
night
₹30,264 per night
4.9
Guest favourite





Vagator, India
Near Vagator Beach
10–15 Mar
₹23,965 
night
₹23,965 per night
5.0
Guest favourite




Mandrem, India
1 min walk to Ashvem Beach
12–17 Mar
₹5,478 
night
₹5,478 per night
4.89
Guest favourite




Goa, India
On the beach
13–18 Feb
₹6,861 
night
₹6,861 per night
4.88




Mandrem, India
On the beach
2–7 Mar
₹5,720 
night
₹5,720 per night
4.89




Mumbai, India
On Versova Beach
9–14 Feb
₹11,254 
night
₹11,254 per night
4.81




Ashvem, India
On the beach
29 Feb – 5 Mar
₹1,711 
night
₹1,711 per night
4.83
Guest favourite




Mandrem, India
1 min walk to Ashvem Beach
1–6 Mar
₹2,916 
night
₹2,916 per night
4.95
Guest favourite




Mumbai, India
5 min walk to Juhu Beach
6–11 Mar
₹4,565 
night
₹4,565 per night
5.0




Anjuna, India
Near Vagator Beach
9–14 Feb
₹3,424 
night
₹3,424 per night
New




Mumbai, India
1 min walk to Aksa Beach
13–18 May
₹1,555 
night
₹1,555 per night
New




Mumbai, India
4 min walk to Versova Beach
19–24 Feb
₹5,135 
night
₹5,135 per night
New




Mandrem, India
8 min walk to Mandrem Beach
29 Feb – 5 Mar
₹3,540 
night
₹3,540 per night
New




Mumbai, India
Near Juhu Beach
2–7 Feb
₹11,868 
night
₹11,868 per night
New




Vagator, India
10 min walk to Vagator Beach
3–8 Mar
₹6,276 
night
₹6,276 per night
4.8
Guest favourite




Vagator, India
8 min walk to Vagator Beach
21–26 Feb
₹3,994 
night
₹3,994 per night
4.77
Guest favourite




Mumbai, India
Near Aksa Beach
3–8 Feb
₹7,546 
night
₹7,546 per night
4.96




Anjuna, India
Near Vagator Beach
15–20 Feb
₹7,988 
night
₹7,988 per night
4.83
Guest favourite




Mandrem, India
On the beach
11–16 Feb
₹3,429 
night
₹3,429 per night
4.92




Goa, India
3 min walk to Vagator Beach
18–23 Feb
₹11,000 
night
₹11,000 per night
4.77
Guest favourite




Mumbai, India
Near Juhu Beach
23–28 Feb
₹6,600 
night
₹6,600 per night
4.85
Guest favourite




Mumbai, India
Near Versova Beach
1–6 Apr
₹6,875 
night
₹6,875 per night
4.98
Guest favourite




Mandrem, India
On the beach
18–23 Feb
₹4,000 
night
₹4,000 per night
4.92




Mumbai, India
Near Juhu Beach
1–6 Aug
₹2,625 
night
₹2,625 per night
4.82
Guest favourite




Mumbai, India
6 min walk to Versova Beach
2–7 Feb
₹2,639 
night
₹2,639 per night
4.97
Guest favourite




Mumbai, India
125 kilometres away
16–21 Feb
₹7,916 
night
₹7,916 per night
4.93
Guest favourite




Mumbai, India
On the beach
20–25 Feb
₹13,708 
night
₹13,708 per night
4.95




Mumbai, India
5 min walk to Girgaum Chowpatty
21–26 Feb
₹10,541 
night
₹10,541 per night
4.86
Guest favourite




Ashvem Beach, India
1 min walk to Ashvem Beach
17–22 Mar
₹3,424 
night
₹3,424 per night
4.86
Guest favourite





Ashvem Beach, Mandrem, India
On the beach
25–30 Mar
₹4,565 
night
₹4,565 per night
5.0
Guest favourite





Mumbai, India
1 min walk to Chowpatty Beach
8–13 Feb
₹3,445 
night
₹3,445 per night
4.95





Mumbai, India
On the beach
17–22 Feb
₹4,436 
night
₹4,436 per night
4.92
Guest favourite




Andheri West Mumbai , India
15 min walk to Versova Beach
3–8 Feb
₹11,657 
night
₹11,657 per night
5.0
Guest favourite




Mumbai, India
125 kilometres away
19–24 Mar
₹2,867 
night
₹2,867 per night
4.77




Mumbai, India
5 min walk to Juhu Beach
3–8 Jul
₹3,424 
night
₹3,424 per night
4.67




Mumbai, India
4 min walk to Juhu Beach
2–7 Mar
₹3,994 
night
₹3,994 per night
4.77




Alibag, India
Near Alibaug Beach
11–16 Feb
₹8,445 
night
₹8,445 per night
4.88
Guest favourite




Siolim, India
323 kilometres away
16–21 Feb
₹3,880 
night
₹3,880 per night
4.83
Guest favourite




Siolim, India
323 kilometres away
18–23 Feb
₹3,431 
night
₹3,431 per night
4.75




Alibag, India
Near Alibaug Beach
15–20 Feb
₹10,982 
night
₹10,982 per night
4.84
Guest favourite




Morjim, India
Near Vagator Beach
1–6 Mar
₹2,054 
night
₹2,054 per night
5.0
Guest favourite




Vagator, India
Near Vagator Beach
5–10 Feb
₹15,000 
night
₹15,000 per night
5.0




Siolim, India
323 kilometres away
16–21 Feb
₹6,475 
night
₹6,475 per night
5.0
Guest favourite




Siolim, India
323 kilometres away
13–18 Feb
₹4,521 
night
₹4,521 per night
4.96
Guest favourite




Mumbai, India
124 kilometres away
18–23 May
₹6,989 
night
₹6,989 per night
4.87
Guest favourite




Siolim, India
323 kilometres away
5–10 Feb
₹3,905 
night
₹3,905 per night
5.0
Guest favourite




Mumbai, India
124 kilometres away
8–13 Mar
₹5,987 
night
₹5,987 per night
4.93
Guest favourite




Vagator, India
Near Vagator Beach
28 Feb – 4 Mar
₹2,509 
night
₹2,509 per night
4.88
Guest favourite




Siolim, India
323 kilometres away
3–8 Feb
₹6,856 
night
₹6,856 per night
4.94
Guest favourite




Mumbai, India
On the beach
3–8 Mar
₹3,600 
night
₹3,600 per night
4.86
Guest favourite




Mumbai, India
122 kilometres away
28 Feb – 4 Mar
₹4,049 
night
₹4,049 per night
4.91
Guest favourite




Mumbai, India
124 kilometres away
20–25 Mar
₹3,322 
night
₹3,322 per night
4.98
Guest favourite




Anjuna, India
Near Vagator Beach
12–17 Feb
₹6,799 
night
₹6,799 per night
4.95




Vagator, India
Near Vagator Beach
12–17 Feb
₹4,001 
night
₹4,001 per night
4.78




Mumbai, India
125 kilometres away
11–16 Feb
₹5,453 
night
₹5,453 per night
5.0
Guest favourite





Mumbai, India
125 kilometres away
23–28 Mar
₹5,726 
night
₹5,726 per night
5.0




Mumbai, India
124 kilometres away
6–11 Feb
₹3,403 
night
₹3,403 per night
New




Morjim, India
Near Vagator Beach
5–10 Feb
₹1,179 
night
₹1,179 per night
New
Guest favourite




Vagator, India
Near Vagator Beach
19–24 Feb
₹14,584 
night
₹14,584 per night
5.0




West Mumbai, India
124 kilometres away
18–23 Mar
₹3,652 
night
₹3,652 per night
4.87




Siolim, India
323 kilometres away
11–16 Feb
₹31,953 
night
₹31,953 per night
New





Mumbai, India
Near Juhu Beach
17–22 Feb
₹4,026 
night
₹4,026 per night
4.82




Vagator, India
Near Vagator Beach
11–16 Feb
₹4,599 
night
₹4,599 per night
4.76




Vagator, India
16 min walk to Vagator Beach
15–20 Feb
₹4,415 
night
₹4,415 per night
New




Mapusa Anjuna, India
Near Vagator Beach
7–12 Feb
₹2,305 
night
₹2,305 per night
4.8




Arambol, India
1 min walk to Mandrem Beach
4–9 Mar
₹1,482 
night
₹1,482 per night
4.9




Anjuna, India
Near Vagator Beach
15–20 Feb
₹9,019 
night
₹9,019 per night
4.8




Mumbai, India
124 kilometres away
13–18 Feb
₹4,530 
night
₹4,530 per night
4.89




Wadi, Siolim, India
324 kilometres away
10–15 Feb
₹2,568 
night
₹2,568 per night
4.88
Guest favourite




Mumbai, India
10 min walk to Versova Beach
25 Feb – 1 Mar
₹3,113 
night
₹3,113 per night
4.95




Vagator, India
Near Vagator Beach
9–14 Mar
₹1,379 
night
₹1,379 per night
4.83




Mumbai, India
123 kilometres away
11–16 Feb
₹4,590 
night
₹4,590 per night
5.0




Siolim, India
323 kilometres away
5–10 Mar
₹3,172 
night
₹3,172 per night
4.7
Guest favourite




Mumbai, India
124 kilometres away
29 Feb – 5 Mar
₹3,865 
night
₹3,865 per night
4.94




Vagator, India
Near Vagator Beach
17–22 Feb
₹2,509 
night
₹2,509 per night
4.89




Mandrem, India
On the beach
10–15 Feb
₹2,921 
night
₹2,921 per night
New
Guest favourite




Mumbai, India
On the beach
9–14 Feb
₹6,105 
night
₹6,105 per night
4.81




Siolim, India
323 kilometres away
14–19 Feb
₹4,403 
night
₹4,403 per night
4.78
Guest favourite




Siolim, India
323 kilometres away
5–10 Feb
₹2,845 
night
₹2,845 per night
4.91
Guest favourite




Mandrem, India
19 min walk to Mandrem Beach
25 Feb – 1 Mar
₹2,967 
night
₹2,967 per night
5.0




Mumbai, India
124 kilometres away
5–10 Mar
₹8,729 
night
₹8,729 per night
4.9




Mumbai, India
Near Juhu Beach
14–19 Feb
₹14,806 
night
₹14,806 per night
4.77
Guest favourite




North Goa, India
Near Vagator Beach
11–16 Feb
₹6,999 
night
₹6,999 per night
4.98




Mumbai, India
5 min walk to Juhu Beach
4–9 Feb
₹4,575 
night
₹4,575 per night
4.75




Mumbai, India
7 min walk to Juhu Beach
23–28 Feb
₹8,491 
night
₹8,491 per night
4.85
Guest favourite




Mumbai, India
124 kilometres away
29 Feb – 5 Mar
₹13,294 
night
₹13,294 per night
5.0
Guest favourite




Mumbai, India
125 kilometres away
22–27 Mar
₹16,974 
night
₹16,974 per night
5.0




Mumbai, India
125 kilometres away
10–15 Feb
₹3,862 
night
₹3,862 per night
4.92




Mumbai, India
124 kilometres away
17–22 Feb
₹3,775 
night
₹3,775 per night
4.95




Vagator, India
Near Vagator Beach
3–8 Feb
₹2,847 
night
₹2,847 per night
4.88




Vagator, India
11 min walk to Vagator Beach
17–22 Feb
₹2,111 
night
₹2,111 per night
New
Guest favourite





Anjuna, India
Near Vagator Beach
25 Feb – 1 Mar
₹7,199 
night
₹7,199 per night
5.0
Guest favourite




Vagator, India
12 min walk to Vagator Beach
18–23 Feb
₹8,673 
night
₹8,673 per night
4.94
Guest favourite




Mumbai, India
124 kilometres away
16–21 Feb
₹6,533 
night
₹6,533 per night
5.0




Vagator, India
On the beach
15–20 Mar
₹2,600 
night
₹2,600 per night
5.0




Vagator, India
On the beach
16–21 Mar
₹3,042 
night
₹3,042 per night
New




Mumbai, India
4 min walk to Versova Beach
3–8 Feb
₹11,412 
night
₹11,412 per night
4.94




Mandrem, India
19 min walk to Mandrem Beach
5–10 Feb
₹3,469 
night
₹3,469 per night
New




Goa, India
323 kilometres away
5–10 Apr
₹8,502 
night
₹8,502 per night
4.9




West Mumbai, India
124 kilometres away
5–10 Mar
₹3,195 
night
₹3,195 per night
4.82




Vagator, India
16 min walk to Vagator Beach
4–9 Feb
₹3,825 
night
₹3,825 per night
4.92




West Mumbai, India
124 kilometres away
23–28 Feb
₹3,195 
night
₹3,195 per night
4.85
Guest favourite




Siolim, India
323 kilometres away
6–11 Feb
₹6,412 
night
₹6,412 per night
5.0
Guest favourite




Mumbai, India
5 min walk to Juhu Beach
5–10 Feb
₹4,575 
night
₹4,575 per night
4.85
Guest favourite




Anjuna, India
Near Vagator Beach
4–9 Feb
₹5,999 
night
₹5,999 per night
4.96




Mumbai, India
118 kilometres away
25 Feb – 1 Mar
₹9,365 
night
₹9,365 per night
4.77
Guest favourite




Mumbai, India
3 min walk to Versova Beach
19–24 Mar
₹4,076 
night
₹4,076 per night
5.0
Guest favourite




Mumbai, India
On the beach
27 Feb – 3 Mar
₹13,009 
night
₹13,009 per night
4.92




Mumbai, India
Near Juhu Beach
16–21 Apr
₹5,612 
night
₹5,612 per night
4.76
Guest favourite




Mumbai, India
124 kilometres away
26 Feb – 2 Mar
₹6,368 
night
₹6,368 per night
4.81
Guest favourite




Siolim, India
323 kilometres away
10–15 Feb
₹5,109 
night
₹5,109 per night
4.83




Mumbai, India
Near Juhu Beach
17–22 Feb
₹4,358 
night
₹4,358 per night
5.0




Mumbai, India
124 kilometres away
1–6 Mar
₹3,195 
night
₹3,195 per night
New




Mumbai, India
121 kilometres away
8–13 Feb
₹6,390 
night
₹6,390 per night
New




Mumbai, India
Near Juhu Beach
1–6 Mar
₹8,074 
night
₹8,074 per night
4.84




Arambol, India
7 min walk to Mandrem Beach
12–17 Feb
₹2,511 
night
₹2,511 per night
New




Mumbai, India
124 kilometres away
5–10 Feb
₹4,122 
night
₹4,122 per night
4.85
Guest favourite




Goa, India
11 min walk to Ashvem Beach
30 Mar – 4 Apr
₹4,565 
night
₹4,565 per night
5.0
Guest favourite




Vagator, India
11 min walk to Vagator Beach
11–16 Feb
₹6,206 
night
₹6,206 per night
4.88




Mumbai, India
1 min walk to Versova Beach
19–24 Feb
₹6,276 
night
₹6,276 per night
New




Arambol, India
4 min walk to Mandrem Beach
18–23 Feb
₹2,669 
night
₹2,669 per night
4.8




Arambol, India
6 min walk to Mandrem Beach
10–15 Feb
₹2,146 
night
₹2,146 per night
4.7




Arambol, India
6 min walk to Mandrem Beach
11–16 Feb
₹2,421 
night
₹2,421 per night
4.95
Guest favourite




Mumbai, India
On the beach
8–13 Mar
₹5,121 
night
₹5,121 per night
4.94




Mandrem, India
On the beach
5–10 Feb
₹3,424 
night
₹3,424 per night
New
Guest favourite




Mumbai, India
124 kilometres away
4–9 Mar
₹6,320 
night
₹6,320 per night
4.89
Guest favourite




Mumbai, India
Near Girgaum Chowpatty
22–27 Feb
₹9,727 
night
₹9,727 per night
5.0
Guest favourite




Mumbai, India
124 kilometres away
25 Feb – 1 Mar
₹6,741 
night
₹6,741 per night
4.96
Guest favourite




Mumbai, India
Near Juhu Beach
18–23 Mar
₹2,910 
night
₹2,910 per night
4.81




Mumbai, India
Near Girgaum Chowpatty
4–9 Feb
₹4,463 
night
₹4,463 per night
4.89




Vagator, India
Near Vagator Beach
11–16 Feb
₹3,352 
night
`;

// Split the largestring into an array of strings using 2 or more new line characters as the delimiter
const stringDataArray = largestring1.split(/\n{2,}/);

// Filter out empty strings from the array
const filteredStringDataArray = stringDataArray.filter(
  (str) => str.trim() !== ""
);

function createPlaceObjectFromString(data, i) {
  const lines = data.trim().split("\n");
  const [name, country] = lines[0].split(", ");

  // Extracting the cost from the string using a modified regular expression
  const costMatch = lines[3].match(/₹([\d,]+) /);
  const cost = costMatch ? parseInt(costMatch[1].replace(/,/g, ""), 10) : 0;

  // Checking the last line for "Guest favourite"
  const isGuestFavourite = lines[lines.length - 1].includes("Guest favourite");

  // Extracting the star rating from the second last line if "Guest favourite" is present in the last line
  let stars;
  if (isGuestFavourite) {
    stars = parseFloat(lines[lines.length - 2]);
  } else {
    stars = parseFloat(lines[lines.length - 1]);
  }

  // If stars is 0 or cannot be parsed, generate a random decimal number between 4 and 5
  if (isNaN(stars) || stars === 0) {
    stars = parseFloat((Math.random() * (5 - 4) + 4).toFixed(2));
  }

  return {
    name,
    country,
    stars,
    cost,
    image1: image1entry[i] || "", // Use the ith element of image1entry or an empty string if not present
    image2: image2entry[i] || "", // Use the ith element of image2entry or an empty string if not present
    index: i,
  };
}




//
for (let i = 0; i < filteredStringDataArray.length; i++) {
  let stringData = filteredStringDataArray[i];
  let newPlaceObject = createPlaceObjectFromString(stringData, i);

  // Append the new place object to the places array
  places.push(newPlaceObject);
}



const first100Items = places.slice(0, 60);
const remainingItems = places.slice(100);

console.log('First 100 items:', first100Items);
//console.log('Remaining items:', remainingItems);

