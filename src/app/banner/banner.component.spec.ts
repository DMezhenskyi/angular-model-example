import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { Component } from '@angular/core';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit output when state changes', () => {
    let expectedValue: undefined | boolean;
    component.expandChange.subscribe(value => expectedValue = value);
    
    const toggleButton = fixture.nativeElement.querySelector('.info-toggle');

    fixture.componentRef.setInput('expand', false);

    toggleButton.click();
    
    expect(expectedValue).toBe(true);
  });
});

describe('BannerComponent | TestHost Strategy', () => {
  let component: TestHostComponent;
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
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit output when state changes', () => {

    const toggleButton = fixture.nativeElement.querySelector('.info-toggle');
    toggleButton.click();

    expect(component.showMore).toBe(true);

  })
})