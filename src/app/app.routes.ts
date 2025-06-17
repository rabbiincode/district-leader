import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'district-leader',
    loadChildren: () => import('./modules/district-leader/district-leader.module').then(m => m.DistrictLeaderModule),
  },
  { path: '', redirectTo: 'district-leader', pathMatch: 'full' },
];
