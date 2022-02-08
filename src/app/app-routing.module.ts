import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landingPage/landingPage.component';
import { HomePageComponent } from './homePage/homePage.component';
import { LoginComponent } from './loginAuth/login/login.component';
import { ProcDetailsComponent } from './componentProc/procDetails/procDetails.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

import { AuthGuard } from './loginAuth/auth.guard';

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
    path: 'home-page',
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'return-portal',
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