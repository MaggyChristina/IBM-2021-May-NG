import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DecimalFractionPipe } from './pipes/decimal-fraction-pipe.pipe';

@NgModule({
  declarations: [DecimalFractionPipe],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [CommonModule, FormsModule, DecimalFractionPipe]

})
export class AppSharedModule { }
