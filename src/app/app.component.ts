import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BannerComponent],
  template: `
    <button (click)="showMore = true">
      {{ showMore ? 'Collapse' : 'Expand' }}
    </button>
    <app-banner [(expand)]="showMore" />
  `
})
export class AppComponent {
  showMore = false;
}
