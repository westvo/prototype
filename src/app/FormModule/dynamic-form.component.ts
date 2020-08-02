import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormBase } from './form-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent {
  @Input() question: FormBase<string>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

  setValue($event) {
    console.log($event);
  }
}

