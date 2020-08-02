import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormQuestionComponent } from './QuestionForm/dynamic-form-question.component';
import { DynamicFormComponent } from './FormModule/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionFormService } from './QuestionForm/question-form.service';
import { FormCheckboxGroupComponent } from './FormModule/form-checkbox-group.component';
import { FormLoginComponent } from './LoginForm/login-form.component';
import { LoginFormService } from './LoginForm/login-form.service';
import { FormRadioButtonComponent } from './FormModule/form-radio-button.component';
import { EditorComponent } from './EditorComponent/editor.component';


@NgModule({
  declarations: [
    AppComponent, DynamicFormComponent,
    DynamicFormQuestionComponent,
    FormCheckboxGroupComponent,
    FormRadioButtonComponent,
    FormLoginComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [QuestionFormService, LoginFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
