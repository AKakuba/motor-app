import { BrowserModule,} from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PersonsComponent } from './persons/persons.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CompanyOverviewComponent } from './company-overview/company-overview.component';
import { AppRoutingModule } from './app-routing.module';
import { GadgetsComponent } from './gadgets/gadgets.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    GalleryComponent,
    CompanyOverviewComponent,
    GadgetsComponent,
    PersonsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    NgbModule,
    AppRoutingModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
