import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LightBackgroundComponent } from './layouts/light-background/light-background.component';
import { DarkBackgroundComponent } from './layouts/dark-background/dark-background.component';
import { HeaderComponent } from './layouts/dashboard/header/header.component';
import { SidenavComponent } from './layouts/dashboard/sidenav/sidenav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LightBackgroundComponent,
    DarkBackgroundComponent,
    HeaderComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
