import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observabletest',
  standalone: true,
imports: [CommonModule,FormsModule,ReactiveFormsModule],
  //FormBuilder, FormGroup, FormControl,
  //providers: [DatePipe],
  templateUrl: './observabletest.component.html',
  styleUrls: ['./observabletest.component.css']
})
export class ObservabletestComponent implements OnInit
{

  ngOnInit(): void 
  {
   // Create an observable that emits a sequence of numbers every 1 second
const numberSequence = new Observable<number>((observer) => {
  let count = 0;
  
  const intervalId = setInterval(() => {
    observer.next(count++);
  }, 1000);
  
  // Clean up the interval when the subscription is unsubscribed
  return () => clearInterval(intervalId);

});

// Subscribe to the observable and log each emitted number
  const subscription = numberSequence.subscribe((num) => console.log(num));

  // After 5 seconds, unsubscribe from the observable
setTimeout(() => subscription.unsubscribe(), 5000);
  }
}

/*See Console log after running the application ...there you can see 0,1,2,.. */
/**
 In this example, we create an observable numberSequence$ that emits a 
 sequence of numbers every 1 second using the setInterval function.
  We then subscribe to this observable and log each emitted number to the console. 
  Finally, after 5 seconds,
   we unsubscribe from the observable using the 
   unsubscribe method on the subscription object.

When you run this code, you will see a sequence of numbers logged to the
 console every second until the subscription is unsubscribed after 5 seconds.
 */