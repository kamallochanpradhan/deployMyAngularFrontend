import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/module.d-CnjH8Dlt';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-dashboard',
  standalone: true,
   imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent {

}
