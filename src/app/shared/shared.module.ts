import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AgmCoreModule } from '@agm/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [RouterModule,
    NgbCollapseModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAOj8oT5FUdA17m0OZ1purzhRTbFd4pk1c'
    })
  ],
  exports: [HeaderComponent,FooterComponent,CommonModule]
})
export class SharedModule {
 }
