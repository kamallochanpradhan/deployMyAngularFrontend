import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyclehook',
  templateUrl: './lifecyclehook.component.html',
  styleUrls: ['./lifecyclehook.component.css'],
})
export class LifecyclehookComponent implements OnChanges,OnInit,DoCheck {
 
  @Input() messageFromParent:string | undefined;
  constructor() 
  {
    //Initilize the property of component and inject service into component
  }
  ngDoCheck(): void {
    /*Executes when an event occurs, before change detection process, used to identify 
    weather change detection process occurs or not, for the third party controls */
    //throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    /*Executes after initilization of components meta data used to call services to get
     initial data from database  */
   // throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void 
  {
    /*Executed when value are passed to input properties of the component
    and every time when input value have been  changed..not executed when
     there are no input property*/

     console.log(this.messageFromParent);
     console.log(changes);
  }

}
