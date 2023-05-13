import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-observable-vs-promise-example',
  templateUrl: './observable-vs-promise-example.component.html',
  styleUrls: ['./observable-vs-promise-example.component.css']
})
export class ObservableVsPromiseExampleComponent implements OnInit 
{
//https://www.youtube.com/watch?v=qfKkDEudaRs&t=18s
  ngOnInit(): void 
  {
    
    const promise=new Promise(resolve=>{
    setTimeout(() => {
      resolve("Promise Working");
      resolve("Promise Working1");
      resolve("Promise Working2");
      resolve("Promise Working3");
    }, 1000);
    })
   /*if you commentout the below promise call also it call..
   it is eager it does naot matter someone is listining or not*/
   /*See after adding 4 value aslo promise emit one value
   ..Promise not cancellable  */

    promise.then(result=>console.log(result));

    const observable=new Observable(sub=>{
      setTimeout(() => {
       sub.next('Observer Is working');
       sub.next('Observer Is working1');
       sub.next('Observer Is working2');
       sub.next('Observer Is working3');
      }, 1000);
      })

      /*if you comment out ...
      it wont call bcoz observable are lazy unless you subscribe it wont call
      ..observable need a atlest one subscriber to call*/
      /*See after adding 4 value  observable  emit all 4  value */
     
      //observable.subscribe(result=>console.log(result));


 /*observable behaves like array so we can use operator on this like filter.. 
 and pipe and all filter will apply before subscribe*/
      observable.pipe(
        //so we filter use only (Observer Is working1) will show
        filter(d=>d=="Observer Is working1"),
      )
      .subscribe(result=>console.log(result));
  
  }

}
