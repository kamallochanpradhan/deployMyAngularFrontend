import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) 
  { 

  }
/*The @Hostbinding decorator binds a host element property to a variable in a directieve 
or a Component */
  @HostBinding('style.backgroundColor') background: string='yellow';

}
