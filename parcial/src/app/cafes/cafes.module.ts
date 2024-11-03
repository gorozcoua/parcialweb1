import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafesListComponent } from './cafes-list/cafes-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CafesListComponent],
  exports: [CafesListComponent]
})
export class CafesModule { }
