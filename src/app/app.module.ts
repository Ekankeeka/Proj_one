import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { TabImagesComponent } from './tab-images/tab-images.component';
import { TextCollapseComponent } from './text-collapse/text-collapse.component';
import { VideoBoxComponent } from './video-box/video-box.component';
import { ServicesService } from './services.service';
import { ImageService } from './image.service';
import { CarouselComponent } from './carousel/carousel.component';
import {CarouselService} from './carousel.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TabImagesComponent,
    TextCollapseComponent,
    VideoBoxComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServicesService,ImageService,CarouselService],
  bootstrap: [AppComponent]
})
export class AppModule { }
