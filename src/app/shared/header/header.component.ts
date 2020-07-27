import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  public isCollapsed = true;

  divClick(event) {
    event.stopPropagation();
    this.isCollapsed = !this.isCollapsed;
}
}
