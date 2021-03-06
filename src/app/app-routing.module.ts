import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { PostnewadComponent } from './posts/postnewad/postnewad.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UnAuthGuard } from './auth/guards/un-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', loadChildren: './posts/posts.module#PostsModule' },
  { path: 'signin', component: SigninComponent, canActivate: [UnAuthGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [UnAuthGuard] },
  { path: 'user', loadChildren: './users/users.module#UsersModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
