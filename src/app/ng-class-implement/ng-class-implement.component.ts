import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class-implement',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ng-class-implement.component.html',
  styleUrls: ['./ng-class-implement.component.css']
})
export class NgClassImplementComponent  
{

  marks:string="89";
  myclass:string="";
  odd:number=12;

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
