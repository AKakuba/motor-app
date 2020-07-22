import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  lat: number = 51.146956;
  lng: number = 15.010862;
  zoom: number = 15;
  year = new Date().getFullYear();
}
