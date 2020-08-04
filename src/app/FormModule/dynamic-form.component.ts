import { Component, Input, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormBase } from './form-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnChanges {
  @Input() question: FormBase<string>;
  @Input() form: FormGroup;
  @Input() prefixId = '';
  @Input() currentControl;
  get isValid() { return this.form.controls[this.question.key] && this.form.controls[this.question.key].valid; }

  setValue($event) {
    console.log($event);
  }

  ngOnChanges($event) {
    console.log('question', this.question);
    console.log('DynamicFormComponent-ngOnChanges', this.currentControl);
  }
}

