import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubscribeComponent} from "./pages/subscribe/subscribe.component";
import {AppComponent} from "./app.component";
import {OutagesComponent} from "./pages/outages/outages.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'subscribe',
    component: SubscribeComponent,
  },
  {
    path: 'outages',
    component: OutagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
