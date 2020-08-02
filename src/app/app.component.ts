import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBase } from './FormModule/form-base';
import { QuestionFormService } from './QuestionForm/question-form.service';
import { LoginFormService } from './LoginForm/login-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'prototype';
  questions$: Observable<FormBase<any>[]>;
  controls$: Observable<FormBase<any>[]>;

  constructor(service: QuestionFormService, loginService: LoginFormService) {
    this.questions$ = service.getQuestions();
    this.controls$ = loginService.getFormControls();
  }
}
