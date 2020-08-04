
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-option-component',
  templateUrl: './option.component.html',
  providers: []
})
export class FormOptionPropertiesComponent implements OnInit {

  @Input() options;
  @Input() formControlName: string;
  @Input() control: FormControl;
  @Input() prefixId = '';
  newOption = { key: '', value: '' };

  ngOnInit() {
    console.log('options', this.options);
  }

  setOptions(key, $event, opt, i) {
    opt[key] = $event.target.value;
    this.options[i] = opt;
    this.control.setValue(this.options);
  }

  setValueNewOptions(key, $event) {
    this.newOption[key] = $event.target.value;
  }

  addNewOption() {
    this.options.push(this.newOption);
    this.control.setValue(this.options);
    this.newOption = { key: '', value: '' };
  }
  removeOption(i) {
    this.options.splice(i, 1);
    this.control.setValue(this.options);
  }
}
