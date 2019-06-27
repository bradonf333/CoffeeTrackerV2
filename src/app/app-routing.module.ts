import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeCreateComponent } from './coffee-create/coffee-create.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'coffee-list', component: CoffeeListComponent },
  { path: 'coffee-create', component: CoffeeCreateComponent }
  // { path: 'hero/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
