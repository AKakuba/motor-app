import { Component } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html',
  styleUrls: ['./gadgets.component.scss'],
  providers: [NgbCarouselConfig] 
})
export class GadgetsComponent  {
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }
 

}
