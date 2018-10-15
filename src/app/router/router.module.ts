
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { Home2Component } from '../components/home2/home2.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'home2', component: Home2Component},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class RoutingModule {

}
