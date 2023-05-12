import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observablwwithmappipeoperator',
  templateUrl: './observablwwithmappipeoperator.component.html',
  styleUrls: ['./observablwwithmappipeoperator.component.css']
})
export class ObservablwwithmappipeoperatorComponent implements OnInit 
{
  ngOnInit(): void
   {
    // create an Observable that emits some data
    const myObservable: Observable<number> = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
});

// use the pipe() method to chain the map() operator to the Observable
myObservable.pipe(
  map((value: number) => value * 2)
)
.subscribe((value) => {
  console.log("Observable with Pipe and Map Operator:",value); // will output 2, 4, 6
});
  }

}
/*
Check Console Log:
 */
/*
here's an example where we use an Observable to get student data from a service
 and apply the map and pipe operators to transform the data before subscribing to it:
 */