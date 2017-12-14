import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyFirstProjectComponent } from './my-first-project/my-first-project.component';
import { MyFirstComponent2Component } from './my-first-component2/my-first-component2.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstProjectComponent,
    MyFirstComponent2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
