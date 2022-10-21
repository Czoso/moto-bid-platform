import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login';
import { StartComponent } from './start';
import { MainPageComponent } from './main-page/main-page.component';
import { UserComponent, YourDataComponent } from './user';
@NgModule({
  declarations: [AppComponent, LoginComponent, StartComponent, MainPageComponent, UserComponent, YourDataComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
