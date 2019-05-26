import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AddStationComponent} from "./components/add-station/add-station.component";
import {AddBikeComponent} from "./components/add-bike/add-bike.component";
import {StationDetailComponent} from "./components/station-detail/station-detail.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'station-list',
    pathMatch: 'full'
  },
  { path: 'station-list', loadChildren: './components/station-list/station-list.module#StationListPageModule' },
  { path: 'bike-list', loadChildren: './components/bike-list/bike-list.module#BikeListPageModule' },
  { path: 'add-station', component: AddStationComponent},
  { path: 'add-bike', component: AddBikeComponent},
  { path: 'station-detail', component: StationDetailComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
