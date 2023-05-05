import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyCustomdirective]'
})
export class MyCustomdirectiveDirective {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

// private elementRef: ElementRef.means getting the host element inside the directieve (here div tag)

// the elementref class has only one property called natieve element using which you can access the ja
//javascript dom of the host element ..like innerhtml,innertext and methods like addeventlistiner
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';

    //this.elementRef.nativeElement.innerhtml='<div><span>tttt</span></div>';
  }
}
