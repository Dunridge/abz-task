import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BodyComponent} from './body/body.component';
import {SignUpComponent} from './body/sign-up/sign-up.component';
import {RelationshipsComponent} from './body/relationships/relationships.component';
import {RequirementsComponent} from './body/requirements/requirements.component';
import {UsersComponent} from './body/users/users.component';
import {AboutMeComponent} from './body/about-me/about-me.component';
import {UserComponent} from './body/users/user/user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { AssignmentComponent } from './body/sections/assignment/assignment.component';
import { AcquaintanceComponent } from './body/sections/acquaintance/acquaintance.component';
import { RegistrationComponent } from './body/sections/registration/registration.component';
import { FooterComponent } from './body/sections/footer/footer.component';

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
    UserComponent,
    AssignmentComponent,
    AcquaintanceComponent,
    RegistrationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatListModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
