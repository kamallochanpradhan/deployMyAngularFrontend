import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-diff-observable-vs-subject',
  standalone: true,
  imports: [],
  // This is the path to the HTML file for this component
  // and the path to the CSS file for this component
  templateUrl: './diff-observable-vs-subject.component.html',
  styleUrls: ['./diff-observable-vs-subject.component.css'],
})
export class DiffObservableVsSubjectComponent implements OnInit {
  ngOnInit(): void {
    /*Here we have created an observable which will emit random values between 1 to 10.
     We have made two subscriptions to this observable. Now when we run this. 
     This is the output

First Subscription value:OBSERVABLE  8
Second Subscription value:OBSERVABLE  3
 */

    const observable = new Observable((obj) =>
      obj.next(Math.floor(Math.random() * 10) + 1)
    );

    observable.subscribe((data) => {
      console.log('First Subscription value:  OBSERVABLE ', data);
    });

    observable.subscribe((data: any) => {
      console.log('Second Subscription value: OBSERVABLE ', data);
    });
/*This time we created a subject and emitted the same random number between 1 to 10.
 But this time the output will be different. Here is the output that we get in the 
 console:

First Subscription value:SUBJECT  3
Second Subscription value:SUBJECT 3

So, this is the main difference between unicast and multicast. By default, observables are unicast and subjects are multicast. */
    const subject = new Subject();

    subject.subscribe((data) => {
      console.log('First Subscription value SUBJECT: ', data);
    });

    subject.subscribe((data) => {
      console.log('Second Subscription value: SUBJECT ', data);
    });

    subject.next(Math.floor(Math.random() * 10) + 1);
  }
}
