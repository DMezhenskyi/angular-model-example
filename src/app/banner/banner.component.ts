import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  template: `
    <h1>Decoded Frontend</h1>
    <p>Source about Angular development</p>
    @if (expand) {
      <p>Additional info...</p>
    }
    <i (click)="expandChange.emit(false)">x</i>
  `,
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Input()
  expand = false;

  @Output()
  expandChange = new EventEmitter<boolean>();
}
