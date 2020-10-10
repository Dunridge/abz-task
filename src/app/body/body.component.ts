import {Component, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {USERS} from '../../model/users';
import {UserForm} from '../../interfaces/user-form';
import {FormBuilder, FormGroup} from '@angular/forms';
import {POSITIONS} from '../../model/positions';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  users: User[] = USERS;
  positions: string[] = POSITIONS;
  public selection = '';
  public defaultSelected = 'Frontend developer';

  feedback: UserForm;
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    console.log(this.users);
  }

  private createForm(): void {
    this.feedbackForm = this.fb.group({
      name: '',
      email: '',
      phoneNumber: '',
      position: ''
    });
  }

  onSubmit(): void {
    this.feedback = this.feedbackForm.value;
    this.feedback.position = this.positions[this.selection];
    console.log(this.feedback);
    this.feedbackForm.reset();
  }
}
