import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavItemComponent } from '../Helpers/nav-item/nav-item.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, CommonModule, NavItemComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isHeaderHidden = true;
  
  locations = [
    'https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg',
    'https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320',
    'https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320',
    'https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320',
    'https://a0.muscache.com/im/pictures/924d2b73-6c65-4d04-a2ad-bbc028299658.jpg?im_w=320',
    'https://a0.muscache.com/im/pictures/66355b01-4695-4db9-b292-c149c46fb1ca.jpg?im_w=320',
  ];

  logos_array = [
    {
      icon_link:
        'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg',
      icon_name: 'Iconic Sites',
      icon_id: 1,
      icon_route: '/iconic_sites',
    },
    {
      icon_link:
        'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg',
      icon_name: 'Amazing pools',
      icon_id: 2,
      icon_route: '/amaing_pools',
    },
    {
      icon_link:
        'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
      icon_name: 'Amazing Views',
      icon_id: 3,
      icon_route: '/amazing_views',
    },
    {
      icon_link:
        'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg',
      icon_name: 'Island',
      icon_id: 4,
      icon_route: '/island',
    },
    {
      icon_link:
        'https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg',
      icon_name: 'Historical Homes',
      icon_id: 5,
      icon_route: '/historical_homes',
    },
    {
      icon_link:
        'https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg',
      icon_name: 'Windmill',
      icon_id: 6,
      icon_route: '/windmill',
    },
    {
      icon_link:
        'https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg',
      icon_name: 'Unique',
      icon_id: 7,
      icon_route: '/unique',
    },
    {
      icon_link:
        'https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg',
      icon_name: 'Tiny Homes',
      icon_id: 8,
      icon_route: '/tiny_house',
    },
    {
      icon_link:
        'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg',
      icon_name: 'Beach',
      icon_id: 9,
      icon_route: '/beach',
    },
    
    
    {
      icon_link:
        'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg',
      icon_name: 'Lakefront',
      icon_id: 10,
      icon_route: '/lakefront',
    },
    
    {
      icon_link:
        'https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg',
      icon_name: 'Camping',
      icon_id: 11,
      icon_route: '/camping',
    },
    {
      icon_link:
        'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg',
      icon_name: 'Castles',
      icon_id: 12,
      icon_route: '/castles',
    },
    {
      icon_link:
        'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg',
      icon_name: 'Surfing',
      icon_id: 13,
      icon_route: '/surfing',
    },
    {
      icon_link:
        'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg',
      icon_name: 'Farms',
      icon_id: 14,
      icon_route: '/farms',
    },
    {
      icon_link:
        'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg',
      icon_name: 'Design',
      icon_id: 15,
      icon_route: '/design',
    },
    {
      icon_link:
        'https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg',
      icon_name: 'Rooms',
      icon_id: 16,
      icon_route: '/rooms',
    },
    {
      icon_link:
        'https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg',
      icon_name: 'Arctic',
      icon_id: 17,
      icon_route: '/arctic',
    },
    
  ];
}
