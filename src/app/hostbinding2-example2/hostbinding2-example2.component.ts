import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-hostbinding2-example2',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './hostbinding2-example2.component.html',
  styleUrls: ['./hostbinding2-example2.component.css']
})
export class Hostbinding2Example2Component {

  @HostBinding('style.backgroundColor')
  backgroundColor = 'blue';
}
