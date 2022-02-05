import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcDetailsComponent } from './procDetails/procDetails.component';
import { FormsModule } from '@angular/forms';
import { CompleteProcComponent } from './completeProc/completeProc.component';

@NgModule({
  declarations: [
    ProcDetailsComponent,
    CompleteProcComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentProcModule {}