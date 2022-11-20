import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LayoutComponent } from './views/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { SearchComponent } from './components/shared/search/search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    HeaderComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    CommonModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
