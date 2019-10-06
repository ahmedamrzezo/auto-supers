import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { AboutComponent } from './about/about.component';
import { SupercarDetailsComponent } from './collection/supercar-details/supercar-details.component';
import { SupercarEditComponent } from './collection/supercar-edit/supercar-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: '', component: HomeComponent, data: { animation: 'HomePage' }},
  {path: 'supers', component: CollectionComponent, data: { animation: 'OtherPage' }, 
  children: [
    {path: 'create', component: SupercarEditComponent},
    {path: ':id', component: SupercarDetailsComponent},
    {path: ':id/edit', component: SupercarEditComponent}
  ]
},
{path: 'about', component: AboutComponent, data: { animation: 'OtherPage' }},
{path: '**', redirectTo: '/404', pathMatch: 'full'},
{path: '404', component: NotFoundComponent, data: { animation: 'OtherPage' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
