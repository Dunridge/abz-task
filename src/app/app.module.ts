import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SignUpComponent } from './body/sign-up/sign-up.component';
import { RelationshipsComponent } from './body/relationships/relationships.component';
import { RequirementsComponent } from './body/requirements/requirements.component';
import { UsersComponent } from './body/users/users.component';
import { AboutMeComponent } from './body/about-me/about-me.component';
import { UserComponent } from './body/users/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SignUpComponent,
    RelationshipsComponent,
    RequirementsComponent,
    UsersComponent,
    AboutMeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
