import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login';
import { MainPageComponent } from './main-page';
import { StartComponent } from './start';
import { UserComponent, YourDataComponent } from './user';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'start',
    component: StartComponent,
  },
  {
    path: 'main',
    component: MainPageComponent,
  },
  { path: '**', component: LoginComponent },
  // {
  //   path: ':userId',
  //   component: UserComponent,
  //   children: [
  //     { path: 'your-data', component: YourDataComponent },
  //     { path: 'your-auctions', component: YourAuctionsComponent },
  //     { path: 'archival-auctions', component: ArchivalAuctionsComponent },
  //     { path: 'followed-auctions', component: FollowedAuctionsComponent },
  //     { path: 'previous-purchases', component: PreviousPurchasesComponent },
  //     { path: 'messages', component: MessagesComponent },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
