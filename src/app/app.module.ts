import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { GraphQLModule } from './graphql.module'
import { HttpClientModule } from '@angular/common/http'
import { TaskModule } from './tasks/task.module'
import { TaskFormModule } from './tasks/task-form/task-form.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    TaskModule,
    TaskFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
