import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './body/body.component';
import {AboutMeComponent} from './body/about-me/about-me.component';
import {RelationshipsComponent} from './body/relationships/relationships.component';
import {RequirementsComponent} from './body/requirements/requirements.component';
import {UsersComponent} from './body/users/users.component';
import {SignUpComponent} from './body/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'home',
    component: BodyComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: 'relationships',
    component: RelationshipsComponent
  },
  {
    path: 'requirements',
    component: RequirementsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
