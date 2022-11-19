import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PolicyItemComponent } from 'src/app/components/policy-item/policy-item.component';
import { PolicyListComponent } from 'src/app/components/policy-list/policy-list.component';

const routes: Routes = [
    {
      path: "",
      component: PolicyListComponent
    },
  ];

@NgModule({
    declarations: [
        PolicyListComponent,
        PolicyItemComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
      ],
      exports:[
        PolicyListComponent,
        PolicyItemComponent
      ],
      providers: [],
    })
    export class DashboardModule{

    }