import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { BeachComponent } from '../components/Places/beach/beach.component';

import { CampingComponent } from '../components/Places/camping/camping.component';
import { TinyHouseComponent } from '../components/Places/tiny-house/tiny-house.component';
import { AmaingPoolsComponent } from '../components/Places/amaing-pools/amaing-pools.component';
import { AmazingViewsComponent } from '../components/Places/amazing-views/amazing-views.component';
import { ArcticComponent } from '../components/Places/arctic/arctic.component';
import { CastlesComponent } from '../components/Places/castles/castles.component';
import { DesignComponent } from '../components/Places/design/design.component';
import { FarmsComponent } from '../components/Places/farms/farms.component';
import { HistoricalHomesComponent } from '../components/Places/historical-homes/historical-homes.component';
import { IconicSitesComponent } from '../components/Places/iconic-sites/iconic-sites.component';
import { IslandComponent } from '../components/Places/island/island.component';
import { LakefrontComponent } from '../components/Places/lakefront/lakefront.component';
import { RoomsComponent } from '../components/Places/rooms/rooms.component';
import { SurfingComponent } from '../components/Places/surfing/surfing.component';
import { DisplayUrlComponent } from '../components/Helpers/display-url/display-url.component';
import { UniqueComponent } from '../components/Places/unique/unique.component';
import { WindmillComponent } from '../components/Places/windmill/windmill.component';
import { RoomDetailsComponent } from '../components/Helpers/room-details/room-details.component';

export const routes: Routes = [
  { path: '', component:IconicSitesComponent },
  { path: 'beach', component: BeachComponent },
  
  { path: 'camping', component: CampingComponent },
  { path: 'tiny_house', component: TinyHouseComponent },
  { path: 'amaing_pools', component: AmaingPoolsComponent },
  { path: 'amazing_views', component: AmazingViewsComponent },
  { path: 'arctic', component: ArcticComponent },
  { path: 'castles', component: CastlesComponent },
  { path: 'design', component: DesignComponent },
  { path: 'farms', component: FarmsComponent },
  { path: 'historical_homes', component: HistoricalHomesComponent },
  { path: 'iconic_sites', component: IconicSitesComponent },
  { path: 'island', component: IslandComponent },
  { path: 'lakefront', component: LakefrontComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'surfing', component: SurfingComponent },
  { path: 'unique', component: UniqueComponent },
  { path: 'windmill', component: WindmillComponent },
  {path:'roomdetails',component:RoomDetailsComponent},
  { path: 'd', component: DisplayUrlComponent },
];
