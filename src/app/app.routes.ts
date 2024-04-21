import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change detection',
        loadComponent: () =>
          import(
            './dashboard/pages/change-detector/change-detector.component'
          ).then((c) => c.ChangeDetectorComponent),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () =>
          import('./dashboard/pages/control-flow/control-flow.component').then(
            (c) => c.ControlFlowComponent
          ),
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () =>
          import(
            './dashboard/pages/defer-options/defer-options.component'
          ).then((c) => c.DeferOptionsComponent),
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () =>
          import('./dashboard/pages/defer-views/defer-views.component').then(
            (c) => c.DeferViewsComponent
          ),
      },
      {
        path: 'user/:id',
        title: 'User view',
        loadComponent: () =>
          import('./dashboard/pages/user/user.component').then(
            (c) => c.UserComponent
          ),
      },
      {
        path: 'user-list',
        title: 'User list',
        loadComponent: () =>
          import('./dashboard/pages/users/users.component').then(
            (c) => c.UsersComponent
          ),
      },
      {
        path: 'view-transition-1',
        title: 'View Transition 1',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition1.component'),
      },
      {
        path: 'view-transition-2',
        title: 'View Transition 2',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition2component'),
      },
      {
        path: '**',
        redirectTo: 'control-flow',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
