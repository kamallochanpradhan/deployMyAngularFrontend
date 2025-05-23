import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject-example',
  standalone: true,
    imports: [CommonModule,FormsModule,ReactiveFormsModule],
  // Note: If you have any other components or modules to import, add them here
  // e.g., CommonModule, FormsModule, etc.
  // imports: [CommonModule, FormsModule],
  templateUrl: './behavior-subject-example.component.html',
  styleUrls: ['./behavior-subject-example.component.css']
})
export class BehaviorSubjectExampleComponent implements OnInit
{
  ngOnInit(): void 
  {
    
    const behaviorSubject = new BehaviorSubject<number>(0);

// Subscribe to the BehaviorSubject
behaviorSubject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});

// Emit values from the BehaviorSubject
behaviorSubject.next(1);
behaviorSubject.next(2);

// Subscribe again to the BehaviorSubject
behaviorSubject.subscribe({
  next: (v) => console.log(`observerB: ${v}`) 
});
console.log("---------------");
behaviorSubject.next(3);
console.log("---------------ttt");
  }

}
/*
In this example, we create a new instance of BehaviorSubject with an initial value of 0.
 We then subscribe to the BehaviorSubject and log the emitted values.
  After that, we emit some values using the next() method and subscribe
   to the BehaviorSubject again to see that both observers receive the same sequence
    of emitted values. Finally, we emit another value to the BehaviorSubject and see 
    that both observers receive the new value.
 */
