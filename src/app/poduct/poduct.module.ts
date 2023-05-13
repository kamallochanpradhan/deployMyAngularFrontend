import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from '../product-dashboard/product-dashboard.component';

import { Routes,RouterModule } from '@angular/router';

const routes:Routes=[
  {path:'',component:ProductDashboardComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PoductModule 
{ 
/*
Product Dashboade Configured as lazy Module So Only click on 
Product route on Navbar this  load ...Object or module load on demand:
 */
constructor() 
{
  console.log("Product Dashboade Configured as lazy Module So Only click on Product route on Navbar this  load on demand:");
  
}
}
