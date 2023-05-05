import { Directive,HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectieveforhostlistner]'
})
export class DirectieveforhostlistnerDirective {

  @HostListener('click') onClick() {
    console.log('clicked  gggg!');
    alert("Click On Div element  Hostlinsner getting div element and firing this HostListner  present on DirectieveforhostlistnerDirective");
  }
  constructor() { }

}
