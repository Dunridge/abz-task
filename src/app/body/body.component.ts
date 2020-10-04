import {Component, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {USERS} from '../../model/users';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  users: User[] = USERS;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.users);
  }

}
