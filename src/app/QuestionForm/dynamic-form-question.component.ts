import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormBase } from '../FormModule/form-base';
import { FormControlService } from '../FormModule/form-control.service';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  providers: [ FormControlService ]
})
export class DynamicFormQuestionComponent implements OnInit, OnChanges {

  @Input() questions: FormBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  @Input() currentControl;

  constructor(private qcs: FormControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
  ngOnChanges($event) {
    console.log('DynamicFormQuestionComponent-ngOnChanges', this.currentControl);
  }
}
