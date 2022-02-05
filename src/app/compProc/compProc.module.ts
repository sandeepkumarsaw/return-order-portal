import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompProcDComponent } from './compProcDetails/compProcDetails.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CompProcDComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CompProcModule {}