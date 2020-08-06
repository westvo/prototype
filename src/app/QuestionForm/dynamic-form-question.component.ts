import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormBase } from '../FormModule/form-base';
import { FormControlService } from '../FormModule/form-control.service';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  providers: [FormControlService]
})
export class DynamicFormQuestionComponent implements OnInit, OnChanges {

  @Input() questions: FormBase<string>[] = [];
  form: FormGroup;
  payLoad = '';


  @Input() currentControl;
  @Input() props;

  constructor(private qcs: FormControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
  ngOnChanges(changes) {
    console.log('DynamicFormQuestionComponent-ngOnChanges', this.currentControl);
    if (changes.currentControl) {
      this.form = this.qcs.toFormGroup(this.questions);
    }
    if (changes.props && changes.props.currentValue !== changes.props.previousValue && changes.props.currentValue.controlType ) {
      console.log('props', this.props);
      console.log('DynamicFormQuestionComponent-ngOnChanges', this.currentControl);

      const keys = Object.keys(this.currentControl);
      const control = this.questions.find(q => q.key === this.currentControl.key);

      console.log('keys', keys);
      console.log('control', control);

      keys.forEach(k => {
        console.log('this.props[k]', this.props[k]);
        if (this.props[k]) {
          control[k] = this.props[k];
        }
      });

    }
  }
}
