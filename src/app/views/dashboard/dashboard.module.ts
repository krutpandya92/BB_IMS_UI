import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BuyPlanSuggestionComponent } from 'src/app/components/buy-plan-suggestion/buy-plan-suggestion.component';
import { PolicyItemComponent } from 'src/app/components/policy-item/policy-item.component';
import { PolicyListComponent } from 'src/app/components/policy-list/policy-list.component';
import { StatisticsComponent } from 'src/app/components/statistics/statistics.component';

const routes: Routes = [
  {
    path: 'policy',
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
  imports: [RouterModule.forChild(routes), CommonModule],
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
