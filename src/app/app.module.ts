import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChatService, DatabaseService, SharedModule } from './shared';
import {
  AppComponent,
  AuctionsPageComponent,
  LoginComponent,
  MenuComponent,
  RegisterComponent,
  StartComponent,
  UserComponent,
  YourDataComponent,
  YourAuctionsComponent,
  PreviousPurchasesComponent,
  MessagesComponent,
  FollowedAuctionsComponent,
  ArchivalAuctionsComponent,
  MessageComponent,
  ChatContentComponent,
  InterlocutorComponent,
  AuctionDetailsComponent,
} from './components';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartComponent,
    UserComponent,
    YourDataComponent,
    RegisterComponent,
    MenuComponent,
    AuctionsPageComponent,
    YourAuctionsComponent,
    PreviousPurchasesComponent,
    MessagesComponent,
    MessageComponent,
    FollowedAuctionsComponent,
    ArchivalAuctionsComponent,
    ChatContentComponent,
    InterlocutorComponent,
    AuctionDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    SharedModule,
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
  providers: [MatSnackBar, DatabaseService, ChatService],
})
export class AppModule {}
