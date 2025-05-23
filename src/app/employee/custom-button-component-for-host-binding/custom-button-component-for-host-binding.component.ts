import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-custom-button-component-for-host-binding',
  standalone: true,
  imports: [],
  // Note: If you have any other components or modules to import, add them here
  templateUrl: './custom-button-component-for-host-binding.component.html',
  styleUrls: ['./custom-button-component-for-host-binding.component.css']
})
export class CustomButtonComponentForHostBindingComponent 
{
  @HostBinding('style.color') textColor = 'red';
  @HostBinding('style.backgroundColor') bgColor = 'blue';

}
