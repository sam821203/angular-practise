import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolveTitle,
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { inject } from '@angular/core';

const dummyCanMatch: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if (shouldGetAccess < 1) {
    return true;
  } else {
    return new RedirectCommand(router.parseUrl('/unauthorized'));
  }
};

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
    // redirectTo: '/users/u1',
    // pathMatch: 'full'
    title: 'No tasks found',
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    loadChildren: () =>
      import('./users/users.routes').then((module) => module.routes),
    canMatch: [dummyCanMatch],
    data: {
      message: 'hello',
    },
    resolve: {
      userName: resolveUserName,
    },
    title: resolveTitle,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
