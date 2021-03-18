import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Task } from '../../app-interface'
import { Apollo } from 'apollo-angular'
import gql from 'graphql-tag'

const ADD_TASK = gql`
  mutation addTask($authorId: uuid!, $description: String!, $title: name!) {
    insert_tasks(
      objects: { authorId: $authorId, description: $description, title: $title }
    ) {
      returning {
        description
        title
        user {
          fullName
          uuid
        }
      }
    }
  }
`

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  @Output() refresh = new EventEmitter()
  @Input() task?: Task
  form: FormGroup

  constructor(private fb: FormBuilder, private apollo: Apollo) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      authorId: new FormControl(
        '52d9d5b2-7e8d-4ad4-9967-6311a8882959',
        Validators.required
      ),
    })
  }

  onAddTask() {
    this.apollo
      .mutate({
        mutation: ADD_TASK,
        variables: this.form.value,
      })
      .subscribe(
        (data) => {
          this.form.controls.title.reset()
          this.form.controls.description.reset()
          this.refresh.emit()
        },
        (error) => console.error('Error: ', error)
      )
  }
}
