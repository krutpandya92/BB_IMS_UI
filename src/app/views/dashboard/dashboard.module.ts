import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PolicyItemComponent } from 'src/app/components/policy-item/policy-item.component';
import { PolicyListComponent } from 'src/app/components/policy-list/policy-list.component';

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