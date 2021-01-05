import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsComponent } from './user-details.component';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class UserDetailsModule { }
