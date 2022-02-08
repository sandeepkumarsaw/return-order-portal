import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './loginAuth/login/login.component';
import { ProcDetailsComponent } from './componentProc/procDetails/procDetails.component';
import { LandingPageComponent } from './landingPage/landingPage.component';

import { AuthGuard } from './loginAuth/auth.guard';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
  {
    path: 'landing-page',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'comp-proc',
    component: ProcDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: "**",
    redirectTo: '404',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}