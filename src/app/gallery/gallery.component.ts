import { Component, OnInit, ViewChild, NgModule} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls:['./gallery.component.scss'],
  providers: [NgbCarouselConfig] 
})
export class GalleryComponent{
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }
  
  }


