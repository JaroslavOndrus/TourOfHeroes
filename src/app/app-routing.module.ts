import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ItemsComponent } from './items/items.component';
import { ItemsFreeComponent } from './items-free/items-free.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'item-detail/:id', component: ItemDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: "items", component: ItemsComponent },
  { path: "items-free/:id", component: ItemsFreeComponent },
  { path: "app-hero-form", component: HeroFormComponent },
  { path: "user", component: UserComponent },
  { path: "login", component: LoginComponent },
  { path: "", component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}