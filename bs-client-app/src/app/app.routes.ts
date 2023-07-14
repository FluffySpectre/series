import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./series/series.page').then((m) => m.SeriesPage),
  },
];
