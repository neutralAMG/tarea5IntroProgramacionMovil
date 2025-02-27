import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'characters',
    loadComponent: () => import('./characters/characters.page').then( m => m.CharactersPage)
  },
  {
    path: 'moments',
    loadComponent: () => import('./moments/moments.page').then( m => m.MomentsPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'my-experience',
    loadComponent: () => import('./my-experience/my-experience.page').then( m => m.MyExperiencePage)
  },
  {
    path: 'hire-me',
    loadComponent: () => import('./hire-me/hire-me.page').then( m => m.HireMePage)
  },
];
