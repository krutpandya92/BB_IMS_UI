import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LayoutComponent } from './views/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { Routes } from '@angular/router';
import { SearchComponent } from './components/shared/search/search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
];

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
