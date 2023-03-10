import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserLoggedGuard } from './authentication/guards/user-logged.guard';

import { LoginComponent } from './authentication/pages/login/login.component';
import { RegisterComponent } from './authentication/pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'menu',
    canLoad: [UserLoggedGuard],
    loadChildren: () => import('./features/menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: 'game',
    canLoad: [UserLoggedGuard],
    loadChildren: () => import('./features/game/game.module').then(m => m.GameModule)
  },
  {
    path: 'statistics',
    canLoad: [UserLoggedGuard],
    loadChildren: () => import('./features/statistics/statistics.module').then(m => m.StatisticsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
