import { Component, OnInit } from '@angular/core'
import { Apollo, QueryRef } from 'apollo-angular'
import gql from 'graphql-tag'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Task, Response } from './app-interface'

const GET_TASKS = gql`
  query Tasks {
    tasks {
      uuid
      title
      description
      user {
        fullName
        uuid
      }
    }
  }
`

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  tasks$: Observable<Task[]>
  queryRef: QueryRef<Response>

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.queryRef = this.apollo.watchQuery<Response>({
      query: GET_TASKS,
    })
    this.tasks$ = this.queryRef.valueChanges.pipe(
      map((result) => result.data.tasks)
    )
  }

  refreshHandler() {
    this.queryRef.refetch()
  }
}
