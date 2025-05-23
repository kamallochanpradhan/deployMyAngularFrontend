import { CommonModule } from '@angular/common/common_module.d-NEF7UaHr';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjectvsbehavioursubject-example',
  standalone: true,
 imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './subjectvsbehavioursubject-example.component.html',
  styleUrls: ['./subjectvsbehavioursubject-example.component.css']
})
export class SubjectvsbehavioursubjectExampleComponent implements OnInit
{
  ngOnInit(): void 
  {

   // Subject 
     const subject = new Subject();

     subject.subscribe( d => console.log(`Subject Subscriber1111 : ${d}`));

     subject.next(2020);

     subject.subscribe( d => console.log(`Subject Subscriber2222 : ${d}`)); // returned nothing


   // Behavior Subject
     const bSubject = new BehaviorSubject<number>(12);
     bSubject.subscribe(d => console.log(`BehaviorSubject Subscriber111:  ${d}`));

    bSubject.next(200);

    bSubject.subscribe(d => console.log(`BehaviorSubject Subscriber2222:  ${d}`));
  }

}
