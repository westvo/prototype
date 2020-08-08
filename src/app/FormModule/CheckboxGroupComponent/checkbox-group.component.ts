
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConfigOptionControlService } from '../ConfigComponent/config.service';

@Component({
  selector: 'app-form-checkbox-component',
  templateUrl: 'checkbox-group.component.html',
  providers: []
})
export class FormCheckboxGroupComponent implements OnInit, OnChanges {

  constructor(private configService: ConfigOptionControlService) { }
  @Input() question;
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
    }
  }

  ngOnChanges(changes) {
    if (changes) {
      if (this.question.config) {
        const payload = this.question.config;
        this.configService.fetchConfig(payload.api_url, payload.method, payload.params).subscribe((data: any) => {
          let options = data;
          if (data && payload.expression) {
            const expressions = payload.expression.split('.');
            expressions.forEach((exp: string) => {
              options = options[exp];
            });
          }
          if (options && payload.key && payload.value) {
            const results = options.map((obj: any) => {
              return { key: obj[payload.key], value: obj[payload.value] };
            });
            this.question.options = results;
          }
        });

      }
    }
  }
}
