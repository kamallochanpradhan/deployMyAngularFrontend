import { ElementRef } from '@angular/core';
import { MyCustomdirectiveDirective } from './my-customdirective.directive';

describe('MyCustomdirectiveDirective', () => {
  it('should create an instance', () => {
    const elementRef = { nativeElement: document.createElement('div') } as ElementRef;
    const directive = new MyCustomdirectiveDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
