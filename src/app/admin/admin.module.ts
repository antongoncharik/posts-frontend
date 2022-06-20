import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {
  CreateComponent,
  DashboardComponent,
  EditComponent,
  LoginComponent,
} from '@admin/pages';
import { AdminLayoutComponent } from '@admin/shared/components';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'create', component: CreateComponent },
      { path: 'post/:id/edit', component: EditComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    CreateComponent,
    DashboardComponent,
    EditComponent,
    LoginComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModule {}
