import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcDetailsComponent } from './procDetails/procDetails.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProcDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentProcModule {}