import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent, PostComponent } from '@user/pages';
import { MainLayoutComponent } from '@user/shared/components';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'post/:id',
        component: PostComponent,
      },
    ],
  },
  {
    path: 'admin',
    loadChildren: async () => {
      const m = await import('./admin/admin.module');
      return m.AdminModule;
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
