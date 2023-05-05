import { Component, OnInit } from '@angular/core';
import { NumbersToWordsPipePipe } from '../employee/numbers-to-words-pipe.pipe';

@Component({
  selector: 'app-allconcept',
  templateUrl: './allconcept.component.html',
  styleUrls: ['./allconcept.component.css']
})
export class AllconceptComponent implements OnInit{

  myValue:number | undefined;
  myValue2 = 'Hello world';


  ngOnInit(): void {
    
    this.myValue=3001;
    this.myValue2 = 'Directieve used with Input';
  }

 

  
}
