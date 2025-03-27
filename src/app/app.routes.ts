import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  // {
  //   path: 'folder/:id',
  //   loadComponent: () =>
  //     import('./folder/folder.page').then((m) => m.FolderPage),
  // },
  {
    path: 'inicio',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'incidencias',
    loadComponent: () => import('./incidencias/incidencias.page').then( m => m.IncidenciasPage)
  },
  {
    path: 'configuracion',
    loadComponent: () => import('./configuracion/configuracion.page').then( m => m.ConfiguracionPage)
  },
];
