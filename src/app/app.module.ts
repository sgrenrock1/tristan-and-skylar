import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryImageComponent } from './gallery-image/gallery-image.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ExpandedGalleryComponent } from './expanded-gallery/expanded-gallery.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageSliderComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    GalleryImageComponent,
    GalleryComponent,
    ExpandedGalleryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
