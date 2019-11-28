import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { AboutComponent } from './about/about.component';
import { SupercarDetailsComponent } from './collection/supercar-details/supercar-details.component';
import { SupercarEditComponent } from './collection/supercar-edit/supercar-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SupersResolverService } from './collection/supers-resolver.service';


const routes: Routes = [
  {
    path: 'home', 
    redirectTo: '', 
    pathMatch: 'full'},
  {
    path: '', 
    component: HomeComponent, 
    data: { animation: 'HomePage' }
  },
  {
    path: 'supers', 
    component: CollectionComponent,
    resolve: [SupersResolverService],
    data: { animation: 'OtherPage' }
  },
  {
    path: 'supers/create', 
    component: SupercarEditComponent,
    resolve: [SupersResolverService],
    data: { animation: 'OtherPage' }
  },
  {
    path: 'supers/:code', 
    component: SupercarDetailsComponent, 
    data: { animation: 'OtherPage' },
    resolve: [SupersResolverService]
  },
  {
    path: 'supers/:code/edit', 
    component: SupercarEditComponent, 
    resolve: [SupersResolverService],
    data: { animation: 'OtherPage' },
   
  },
  {
    path: 'about', 
    component: AboutComponent, 
    data: { animation: 'OtherPage' }
  },
  {
    path: '**', 
    redirectTo: '/not-found', 
    pathMatch: 'full'},
  {
    path: 'not-found', 
    component: NotFoundComponent, 
    data: { animation: 'OtherPage' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
