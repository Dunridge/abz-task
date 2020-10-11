import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {User} from '../../../../interfaces/user';
import {USERS} from '../../../../model/users';
import {POSITIONS} from '../../../../model/positions';
import {UserForm} from '../../../../interfaces/user-form';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DOCUMENT} from '@angular/common';
import {element} from 'protractor';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  users: User[] = USERS;
  positions: string[] = POSITIONS;
  public selection = '';
  public defaultSelected = 'Frontend developer';

  feedback: UserForm;
  feedbackForm: FormGroup;

  selectedFile: File;

  constructor(
    private fb: FormBuilder,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
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
    console.log(this.selectedFile.name);
    this.renderer.setAttribute(this.document.getElementById('photo-input'), 'placeholder', this.selectedFile.name);
  }

}
