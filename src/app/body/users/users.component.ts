import { Component, OnInit } from '@angular/core';
import {User} from '../../../interfaces/user';
import {USERS} from '../../../model/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = USERS;

  constructor() { }

  ngOnInit(): void {
  }

}
