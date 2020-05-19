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
import { FirebaseModule } from './firebase/firebase.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { CompareComponent } from './compare/compare.component';
import { ModifyFormGuard } from './collection/modify-form/modify-form.guard';
import { DropZoneDirective } from './collection/supercar-edit/drop-zone.directive';
import { FileValueAccessorDirective } from './shared/file-value-accessor.directive';
import { RequiredFileDirective } from './shared/required-file.directive';
import { SharedModule } from './shared/shared.module';

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
    BookmarksComponent,
    CompareComponent,
    DropZoneDirective,
    FileValueAccessorDirective,
    RequiredFileDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    FirebaseModule,
    SlickCarouselModule,
    SharedModule,

    AppRoutingModule,
  ],
  providers: [
    ModifyFormGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
