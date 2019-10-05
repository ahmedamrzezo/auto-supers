import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CollectionComponent } from './collection/collection.component';
import { SupercarComponent } from './collection/supercar/supercar.component';
import { SupercarDetailsComponent } from './collection/supercar-details/supercar-details.component';
import { AboutComponent } from './about/about.component';
import { SupercarEditComponent } from './collection/supercar-edit/supercar-edit.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CollectionComponent,
    SupercarComponent,
    SupercarDetailsComponent,
    AboutComponent,
    SupercarEditComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
