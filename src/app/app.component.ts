import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BannerComponent],
  template: `
    <div class="header">
      <img class="logo" src="./assets/logo.png" alt="Decoded Frontend">
      
      <button class="toggle-button" (click)="showMore = !showMore">
        {{ showMore ? 'Collapse' : 'Expand' }} Banner
      </button>
    </div>

    <app-banner [(expand)]="showMore" />
  `
})
export class AppComponent {
  showMore = false;
}
