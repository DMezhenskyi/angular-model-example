import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  template: `
    <h1>Decoded Frontend</h1>
    <button class="info-toggle" (click)="expandChange.emit(!expand)">
      {{ expand ? 'Less Info' : 'More Info' }}
    </button>
    @if (expand) {
      <section class="more-info">  
        <p>Decoded Frontend is a source of advanced, in-depth, and pragmatic video tutorials about Angular and Web Development. Every second Tuesday I publish a new video focusing on advanced topics and tricks that might kick off your carrier and help you to quickly grow from Middle to Senior level. </p>
      </section>
    }
  `,
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Input()
  expand = false;

  @Output()
  expandChange = new EventEmitter<boolean>();
}
