
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-radio-button-component',
  template: `
  <div class="form-check" *ngFor="let opt of options">
  <input class="form-check-input" type="radio" [name]="opt.key" [id]="prefixId + opt.key"
  (change)="onRadioButtonChange($event)" [checked]="opt.key===control.value">
  <label class="form-check-label" [for]="opt.key">
    {{opt.value}}
  </label>
</div>
`,
  providers: []
})
export class FormRadioButtonComponent implements OnInit {

  @Input() options = [];
  @Input() formControlName: string;
  @Input() control: FormControl;
  @Input() prefixId = '';

  ngOnInit() {

  }

  onRadioButtonChange(e) {
    this.control.setValue(e.target.name);
  }
}
