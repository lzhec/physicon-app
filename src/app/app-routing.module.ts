import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowcaseComponent} from './showcase/showcase.component';


const routes: Routes = [
  {path: 'showcase', component: ShowcaseComponent},
  {path: '', redirectTo: 'showcase', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
