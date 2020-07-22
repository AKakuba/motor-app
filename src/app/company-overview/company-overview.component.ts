import { Component} from '@angular/core';
import {PersonsComponent} from '../persons/persons.component';
import {GalleryComponent} from '../gallery/gallery.component';

@Component({
  selector: 'app-company-overview',
  templateUrl: './company-overview.component.html',
  styleUrls: ['./company-overview.component.scss']
})
export class CompanyOverviewComponent {

  year = new Date().getFullYear()-1993;
  
}
