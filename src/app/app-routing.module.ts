import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LayoutComponent } from './views/layout/layout.component';

const routes: Routes = [
  {
    path: "",
    component: PolicyListComponent,
  },
  {
    path: "policylist",
    component: PolicyListComponent,
  },
  { path: "**", redirectTo: "dashboard", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
