import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormQuestionComponent } from './QuestionForm/dynamic-form-question.component';
import { DynamicFormComponent } from './FormModule/dynamic-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuestionFormService } from './QuestionForm/question-form.service';
import { FormCheckboxGroupComponent } from './FormModule/CheckboxGroupComponent/checkbox-group.component';
import { FormLoginComponent } from './LoginForm/login-form.component';
import { LoginFormService } from './LoginForm/login-form.service';
import { FormRadioButtonComponent } from './FormModule/form-radio-button.component';
import { EditorComponent } from './EditorComponent/editor.component';
import { PropertiesComponent } from './EditorComponent/Properties/properties.component';
import { PropertiesFormService } from './EditorComponent/Properties/properties.service';
import { FormControlService } from './FormModule/form-control.service';
import { EditorControlsComponent } from './EditorComponent/Controls/control.component';
import { ControlFormService } from './EditorComponent/Controls/control.service';
import { EditorMainComponent } from './EditorComponent/Main/main.component';
import { FormOptionPropertiesComponent } from './FormModule/OptionComponent/options.component';
import { FormCheckboxComponent } from './FormModule/form-checkbox.component';
import { CreateControlComponent } from './EditorComponent/Controls/CreateControlModal/create-control.component';
import { ConfigFormComponent } from './FormModule/ConfigComponent/config.component';
import { ConfigOptionControlService } from './FormModule/ConfigComponent/config.service';
import { HttpClientModule } from '@angular/common/http';
import { DropdownComponent } from './FormModule/DropdownComponent/dropdown.component';
import { DatePickerComponent } from './FormModule/DatePickerComponent/date-picker.component';


@NgModule({
  declarations: [
    AppComponent, DynamicFormComponent,
    DynamicFormQuestionComponent,
    FormCheckboxGroupComponent,
    FormRadioButtonComponent,
    FormLoginComponent,
    EditorComponent,
    PropertiesComponent,
    EditorControlsComponent,
    EditorMainComponent,
    FormOptionPropertiesComponent,
    FormCheckboxComponent,
    CreateControlComponent,
    ConfigFormComponent,
    DropdownComponent,
    DatePickerComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [QuestionFormService, LoginFormService, PropertiesFormService,
    FormControlService, ControlFormService, ConfigOptionControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
