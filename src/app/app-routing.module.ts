import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AddCardComponent } from './components/add-card/add-card.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {path: 'add', component: AddCardComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
  AddCardComponent
];
