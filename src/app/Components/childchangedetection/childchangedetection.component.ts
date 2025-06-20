import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-childchangedetection',
  imports: [CommonModule],
  templateUrl: './childchangedetection.component.html',
  styleUrl: './childchangedetection.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildchangedetectionComponent {
  //Example-1
 @Input() user!: { name: string };

 //Example-2
 @Input() count$!: Observable<number>;

ngOnInit(): void {
  debugger;
  // This will log the user object when the component is initialized
  // If the user object is not provided, it will be undefined
    console.log('Child component initialized with user:', this.user);
    console.log('Child component initialized with count$:', this.count$);
  }
}
/**What is ChangeDetectionStrategy.OnPush?

Angular by default uses ChangeDetectionStrategy.Default, where the framework checks
 the entire component tree for changes. With OnPush, Angular will only check a component if:
    An input (@Input()) reference changes.
    An event is triggered inside the component (e.g., button click).
    An observable emits a new value (usually with async pipe). */

  // ChangeDetectionStrategy.OnPush is an optimization technique in Angular that reduces the number of checks
// The OnPush strategy will only check this component when its input properties change,
// or when an event occurs within the component, or when a reference to the component changes


/**❌ If the parent mutates the existing userObj like:
this.userObj.name = 'Jane'; // same reference
Angular will not detect that as a change for the child component, because:
    The reference to userObj hasn't changed.
    The child is OnPush and only checks when the reference of @Input() changes.
    this.userObj = { ...this.userObj, name: 'Jane' }; // ✅ Triggers OnPush child update
    */

    /*If you mutate the object (this.user.name = 'Jane'), the change is not detected.
If you replace the object (this.user = { name: 'Jane' }), Angular detects it.*/

/*The child component is OnPush.
It does not rely on Angular to detect internal state changes.
It updates automatically because:
The count$ observable emits a new value.
The async pipe subscribes to it and triggers view updates without Angular 
manually running change detection.*/