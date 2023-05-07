import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-implement',
  templateUrl: './ng-class-implement.component.html',
  styleUrls: ['./ng-class-implement.component.css']
})
export class NgClassImplementComponent  
{

  marks:string="89";
  myclass:string="";

  constructor()
  {
    if(this.marks>="35")
    {
      this.myclass="class1";
    }
    else{
      this.myclass="class2";
    }
  }
}
