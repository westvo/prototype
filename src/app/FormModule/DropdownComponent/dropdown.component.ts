import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBase } from '../form-base';
import { FormControlService } from '../form-control.service';
import { ConfigOptionControlService } from '../ConfigComponent/config.service';

@Component({
  selector: 'app-dropdown-form-component',
  templateUrl: 'dropdown.component.html'
})

export class DropdownComponent implements OnInit, OnChanges {

  constructor(private configService: ConfigOptionControlService) { }
  @Input() question;
  @Input() control;
  @Input() prefixId;


  ngOnInit(): void {
    console.log('this.question.config', this.question.config);
    if (this.question.config) {
      console.log('ngOnInit-this.question', this.question);

    }
  }

  ngOnChanges(changes) {
    if (changes.question || changes.control) {
      if (this.question.config) {
        console.log('this.question', this.question);
        console.log('ngOnChanges-this.question', this.question);
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
            this.control.setValue(results[0].key);
          }
        });
      }
    }
  }
  changeValue(opt) {
    this.control.setValue(opt.currentTarget.value);
  }
}
