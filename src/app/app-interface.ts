export interface Task {
  uuid: string
  title: string
  description: string
  user: User
}

export interface User {
  uuid: string
  displayName: string
}

export interface Response {
  tasks: Task[]
}
