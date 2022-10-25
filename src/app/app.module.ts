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
import {
  AppComponent,
  AuctionsPageComponent,
  LoginComponent,
  MenuComponent,
  RegisterComponent,
  StartComponent,
  UserComponent,
  YourDataComponent,
} from './components';
import { RegisterService } from './components/register/register.service';
import { SharedModule } from './shared';
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
  providers: [RegisterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
