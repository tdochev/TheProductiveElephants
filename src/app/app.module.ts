import { RouterModule, Routes } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { MostpoluarComponent } from './ads/mostpoluar/mostpoluar.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostNewAdService } from './posts/postnewad/postnewad.service';
import { PostnewadComponent } from './posts/postnewad/postnewad.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    PostnewadComponent,
    AppComponent,
    HeaderComponent,
    MostpoluarComponent,
    SigninComponent,
    SignupComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [AngularFireAuth, AuthService, AuthGuard, PostNewAdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
