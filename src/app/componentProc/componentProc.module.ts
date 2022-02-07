import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcDetailsComponent } from './procDetails/procDetails.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProcDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentProcModule {}