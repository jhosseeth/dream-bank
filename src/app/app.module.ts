import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LightBackgroundComponent } from './layouts/light-background/light-background.component';
import { DarkBackgroundComponent } from './layouts/dark-background/dark-background.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LightBackgroundComponent,
    DarkBackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
