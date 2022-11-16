import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ArchivalAuctionsComponent,
  AuctionsPageComponent,
  ChatContentComponent,
  FollowedAuctionsComponent,
  LoginComponent,
  MessagesComponent,
  PreviousPurchasesComponent,
  RegisterComponent,
  StartComponent,
  UserComponent,
  YourAuctionsComponent,
  YourDataComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'start',
    component: StartComponent,
  },
  {
    path: 'auctions-page',
    component: AuctionsPageComponent,
  },
  {
    path: 'user/:userId',
    component: UserComponent,
    children: [
      { path: 'your-data', component: YourDataComponent },
      { path: 'your-auctions', component: YourAuctionsComponent },
      { path: 'archival-auctions', component: ArchivalAuctionsComponent },
      { path: 'followed-auctions', component: FollowedAuctionsComponent },
      { path: 'previous-purchases', component: PreviousPurchasesComponent },
      {
        path: 'messages',
        component: MessagesComponent,
        children: [{ path: ':interlocutorId', component: ChatContentComponent }],
      },
    ],
  },
  { path: '**', component: AuctionsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
