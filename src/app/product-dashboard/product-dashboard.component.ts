import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/module.d-CnjH8Dlt';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgencyComponent } from '../Components/agency/agency.component';

@Component({
  selector: 'app-product-dashboard',
  standalone: true,
   imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule,AgencyComponent],
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent {

}
