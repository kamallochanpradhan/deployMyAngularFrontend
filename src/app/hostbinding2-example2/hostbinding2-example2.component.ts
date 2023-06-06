import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-hostbinding2-example2',
  templateUrl: './hostbinding2-example2.component.html',
  styleUrls: ['./hostbinding2-example2.component.css']
})
export class Hostbinding2Example2Component {

  @HostBinding('style.backgroundColor')
  backgroundColor = 'blue';
}
