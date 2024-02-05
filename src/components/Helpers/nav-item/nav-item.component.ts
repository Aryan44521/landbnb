import { Component , input,Input} from '@angular/core';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css'
})
export class NavItemComponent {
//icon_link , icon_name ,icon_id
@Input() icon_details:any;

ngOnInit(){
  console.log(this.icon_details)
}


}
