import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ValidarTokenGuard } from './guards/validar-token.guard';
import { InicioComponent } from './landing/inicio/inicio.component';

const routes: Routes = [
  {
    path:'inicio',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'dashboard',
    loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule),
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard]
  },
  {
    path:'**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash:false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
