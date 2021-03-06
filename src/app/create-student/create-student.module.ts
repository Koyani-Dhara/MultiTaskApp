import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateStudentPageRoutingModule } from './create-student-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { CreateStudentPage } from './create-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreateStudentPageRoutingModule
  ],
  declarations: [CreateStudentPage]
})
export class CreateStudentPageModule {}
