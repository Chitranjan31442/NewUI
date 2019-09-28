import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './Components/index/index.component';
import { LoginComponent } from './Components/login/login.component';
import { UserSignUpComponent } from './Components/user-sign-up/user-sign-up.component';
import { MentorSignUpComponent } from './Components/mentor-sign-up/mentor-sign-up.component';
import { UserLandingPageComponent } from './Components/user-landing-page/user-landing-page.component';
import { MentorLandingPageComponent } from './Components/mentor-landing-page/mentor-landing-page.component';
import { MentorPaymentComponent } from './Components/mentor-payment/mentor-payment.component';
import { AdminLandingPageComponent } from './Components/admin-landing-page/admin-landing-page.component';
import { AdminUserAccessComponent } from './Components/admin-user-access/admin-user-access.component';
import { AdminMentorAccessComponent } from './Components/admin-mentor-access/admin-mentor-access.component';
import { AdminTechnologyAccessComponent } from './Components/admin-technology-access/admin-technology-access.component';
import { NavComponent } from './Components/nav/nav.component';

const routes: Routes=[
  {path:'login', component:LoginComponent},
  {path:'',component:IndexComponent}
  ];
  
 
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    UserSignUpComponent,
    MentorSignUpComponent,
    UserLandingPageComponent,
    MentorLandingPageComponent,
    MentorPaymentComponent,
    AdminLandingPageComponent,
    AdminUserAccessComponent,
    AdminMentorAccessComponent,
    AdminTechnologyAccessComponent,
    NavComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
