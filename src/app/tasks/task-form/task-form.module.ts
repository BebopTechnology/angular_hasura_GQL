import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { TaskFormComponent } from './task-form.component'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [TaskFormComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  exports: [TaskFormComponent],
})
export class TaskFormModule {}
