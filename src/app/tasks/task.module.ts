import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { TaskComponent } from './task.component'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  exports: [TaskComponent],
})
export class TaskModule {}
