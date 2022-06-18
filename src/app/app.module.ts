import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { InputAreaComponent } from './input-area/input-area.component';
import { OutputAreaComponent } from './output-area/output-area.component';
import { ActivityWindowComponent } from './activity-window/activity-window.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component:  ActivityWindowComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    InputAreaComponent,
    OutputAreaComponent,
    ActivityWindowComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/