
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-checkbox-component',
  template: `
  <div *ngFor="let data of options; let i=index">
  <div class="checkbox"  (click)="onCheckboxChange(data)" >
      <input class="magic-checkbox" type="checkbox"
     [checked]="data.checked" [value]="data.key"  [id]="prefixId + data.key"  />
      <label> {{data.value}}  </label> </div>
  </div>
`,
  providers: []
})
export class FormCheckboxGroupComponent implements OnInit {

  @Input() options = [];
  @Input() formControlName: string;
  @Input() control: FormControl;

  @Input() prefixId = '';
  ngOnInit() {

  }

  onCheckboxChange(data) {
    let array = this.control.value || [];
    data.checked = !data.checked;
    if (data.checked) {
      array.push(data.key);
      this.control.setValue(array);
    } else {
      array = array.filter((item) => item !== data.key);
      this.control.setValue(array);
      // this.options.map(v => {v.checked = array[v.value]; return v; });
    }
  }
}
