import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAOj8oT5FUdA17m0OZ1purzhRTbFd4pk1c'
    })
  ],
  exports: [HeaderComponent,FooterComponent,CommonModule]
})
export class SharedModule {
 }
