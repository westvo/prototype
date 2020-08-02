import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormBase } from '../FormModule/form-base';
import { FormControlService } from '../FormModule/form-control.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './login-form.component.html',
  providers: [ FormControlService ]
})
export class FormLoginComponent implements OnInit {

  @Input() controls: FormBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: FormControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.controls);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
