import { Component } from '@angular/core';
import { ChildchangedetectionComponent } from '../childchangedetection/childchangedetection.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-parentchangedetection',
  imports: [ChildchangedetectionComponent],
  templateUrl: './parentchangedetection.component.html',
  styleUrl: './parentchangedetection.component.css'
})
export class ParentchangedetectionComponent {
  //Example-1
 user = { name: 'John' };

 //Example-2
  private countSubject = new BehaviorSubject<number>(0);
  count$ = this.countSubject.asObservable();

  //Example-1
 changeName() {
  debugger
    // This won't trigger OnPush change detection unless a new object is created
    /*if testing purpose if you comment out onpush in child component then
    //  it will work  this.user.name = 'Jane Pradhan'; /*
     this.user.name = 'Jane Pradhan'; //❌ won't trigger change detection in child*/
    this.user = { name: 'Jane' };  //✅ this will work with OnPush
  }

  //Example-2
  updateCount() {
    const newCount = this.countSubject.value + 1;
    this.countSubject.next(newCount);
  }

 }
