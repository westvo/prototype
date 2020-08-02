
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-checkbox-component',
  template: `
  <div *ngFor="let data of options; let i=index">
    <label>
      <input type="checkbox" [value]="data.key" (change)="onCheckboxChange($event)" />
      {{data.value}}
    </label>
  </div>
`,
  providers: []
})
export class FormCheckboxGroupComponent implements OnInit {

  @Input() options = [];
  @Input() formControlName: string;
  @Input() control: FormControl;

  ngOnInit() {

  }

  onCheckboxChange(e) {
    let array = this.control.value || [];
    if (e.target.checked) {
      array.push(e.target.value);
      this.control.setValue(array);
    } else {
      array = array.filter((item) => item !== e.target.value);
      this.control.setValue(array);
    }
  }
}
