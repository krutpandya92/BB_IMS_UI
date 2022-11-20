import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BuyPlanSuggestionComponent } from 'src/app/components/buy-plan-suggestion/buy-plan-suggestion.component';
import { PolicyItemComponent } from 'src/app/components/policy-item/policy-item.component';
import { PolicyListComponent } from 'src/app/components/policy-list/policy-list.component';
import { StatisticsComponent } from 'src/app/components/statistics/statistics.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    component: PolicyListComponent,
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
  },
  {
    path: 'buy-suggestion',
    component: BuyPlanSuggestionComponent,
  },
];

@NgModule({
  declarations: [
    PolicyListComponent,
    PolicyItemComponent,
    BuyPlanSuggestionComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes),
    BrowserAnimationsModule,
    NgxChartsModule,
  ],
  exports: [
    PolicyListComponent,
    PolicyItemComponent,
    BuyPlanSuggestionComponent,
    StatisticsComponent,
    RouterModule,
  ],
  providers: [],
})
export class DashboardModule { }
