import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { NavBarModule } from './shared/nav-bar/nav-bar.module';
import { RoutingModule } from './router/router.module';

import { HomeComponent } from './components/home/home.component';
import { Home2Component } from './components/home2/home2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home2Component,

  ],
  imports: [
    BrowserModule,
    NavBarModule,
    RoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
