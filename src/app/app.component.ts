import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
   imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],//👈 Required for routing
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularCrudFrontEnd1';

  constructor()
  {

  }
  ngOnInit(): void {
  }
  
}

/**If you're using routing (which is very likely if you have app-routing.module.ts),
 *  you need to import RouterModule so <router-outlet> works. */