import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { Component } from '@angular/core';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
  });
  
  it('should emit output when state changes', () => {
    let expectedValue: undefined | boolean;
    component.expand = false;
    component.expandChange.subscribe(value => expectedValue = value);
    fixture.detectChanges();
    
    const toggleButton = fixture.nativeElement.querySelector('.info-toggle');
    toggleButton.click();
    
    expect(expectedValue).toBe(true);
  });
});

describe('BannerComponent | TestHost Strategy', () => {
  let hostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  @Component({
    standalone: true,
    template: `
      <app-banner [(expand)]="showMore" />
    `,
    imports: [BannerComponent]
  })
  class TestHostComponent {
    showMore = false;
  }

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit output when state changes', () => {

    const toggleButton = fixture.nativeElement.querySelector('.info-toggle');
    toggleButton.click();

    expect(hostComponent.showMore).toBe(true);

  })
})