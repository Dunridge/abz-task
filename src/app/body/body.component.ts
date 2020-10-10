import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {USERS} from '../../model/users';
import {UserForm} from '../../interfaces/user-form';
import {FormBuilder, FormGroup} from '@angular/forms';
import {POSITIONS} from '../../model/positions';
import {DOCUMENT} from '@angular/common';

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

  selectedFile: File;

  constructor(
    private fb: FormBuilder,
    @Inject(DOCUMENT) private document: Document
  ) {
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
    // TODO: now add this to the form or send it to the server -- read the API docs (this.selectedFile)
    console.log(this.selectedFile);
    this.feedbackForm.reset();
  }

  onFileChanged($event: Event): void {
    console.log($event);
    // @ts-ignore
    this.selectedFile = $event.target.files[0];
  }
}
