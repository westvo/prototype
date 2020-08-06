
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  template: `<div *ngIf="control&&question">
  <div class="checkbox" (click)="onCheckboxChange()" >
      <input class="magic-checkbox" type="checkbox" [checked]="control.value" [id]="prefixId + control.key"  />
      <label> {{question.label}} </label>
  </div>
  </div>
`,
  providers: []
})
export class FormCheckboxComponent implements OnInit {

  @Input() question;
  @Input() control: FormControl;

  @Input() prefixId = '';
  ngOnInit() {
    console.log(this.control);
  }

  onCheckboxChange() {
    this.control.setValue(!this.control.value);
  }
}
