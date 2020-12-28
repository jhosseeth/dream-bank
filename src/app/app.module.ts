import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LightBackgroundComponent } from './layouts/light-background/light-background.component';
import { DarkBackgroundComponent } from './layouts/dark-background/dark-background.component';
import { HeaderComponent } from './layouts/dashboard/header/header.component';
import { SidenavComponent } from './layouts/dashboard/sidenav/sidenav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

const materialModules: any[] = [
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatListModule,
    MatIconModule,
    MatMenuModule
];

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
    HttpClientModule,
    materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
