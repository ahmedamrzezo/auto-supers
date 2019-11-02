import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { BannerComponent } from './banner/banner.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './shared/click-outside/click-outside.directive';
import { LoadingComponent } from './loading/loading.component';

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
    BreadcrumbComponent,
    BannerComponent,
    NotFoundComponent,
    SearchComponent,
    ClickOutsideDirective,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
