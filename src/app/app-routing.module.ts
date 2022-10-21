import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login';
import { MainPageComponent } from './main-page';
import { StartComponent } from './start';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '/login',
    redirectTo: '/login',
    component: LoginComponent,
  },
  {
    path: '/start',
    redirectTo: '/start',
    component: StartComponent,
  },
  {
    path: '/main',
    redirectTo: '/main',
    component: MainPageComponent,
  },
  // {
  //   path: '/user',
  //   component: RecipesComponent,
  //   children: [
  //     { path: '', component: RecipeStartComponent },
  //     { path: 'new', component: RecipeEditComponent },
  //     { path: ':id', component: RecipeDetailComponent },
  //     { path: ':id/edit', component: RecipeEditComponent },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
