import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {

  constructor(private eleRef: ElementRef) {}

  public navbarToggle(): void {
    this.eleRef.nativeElement.querySelector('#navbar-default').classList.toggle('collapse');
  }
}
