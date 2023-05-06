import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RegisterService } from '../Services/register.service';

@Component({
  selector: 'app-lifecyclehook',
  templateUrl: './lifecyclehook.component.html',
  styleUrls: ['./lifecyclehook.component.css'],
})
export class LifecyclehookComponent implements 
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked

{
  
  massage: string = '';
  item2=[
    {
      "Id":2,
       "Name":"kamal"
    }

  ];

  @Input() messageFromParent:string | undefined;



  constructor(private _apiservice: RegisterService) 
  {
    console.log("------------- constructor Called");
    //Initilize the property of component and inject service into component
  }
 
  ngOnChanges(changes: SimpleChanges): void 
  {
   console.log("------------- ngOnChanges Called");
    /*Executed when value are passed to input properties of the component
    and every time when input value have been  changed..not executed when
     there are no input property*/

     console.log(this.messageFromParent);
     console.log(changes);
  }
  
  ngOnInit(): void 
  {

    console.log("------------- ngOnInit Called");
    /*Executes after initilization of components meta data used to call services to get
     initial data from database  */

    // this._apiservice.InsertStudent(this.item2).subscribe(() => {
     // this.massage = 'Record saved Successfully';
   // });
 
  }

  ngDoCheck(): void {
    debugger;
    /*Executes when an event occurs, before change detection process, used to identify 
    weather change detection process occurs or not, for the third party controls */
    /*For 3rd party control which angular cannot getting changes..This is required 
    only when you are using some critical 3rd party UI controls but not required as
     long as you are using html controls */

     //execute every instaance of project component
     console.log("------------- ngDoCheck Called");
  }

  ngAfterContentInit()
  {
    console.log("------------- ngAfterContentInit Called");
/*Executes only once in the ilfe time of a component after initilizing the content 
 that is supplied by the parent component..
 Use this method if you want to manipulate the contentchildren such as access of
  the properties and methods of the contentchildren
  --Best method to access the viewchild or viewchildren that are use in the current component*/
  }

  ngAfterContentChecked(): void 
  {
    console.log("------------- ngAfterContentChecked Called");
    /**Executes everytime after completation of  change detection process of the content
     * ..It repets every attempts of change detection process of content
     * ..in realtime nothing to do with this mostly
     */
  }


  


}
