import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBase } from '../form-base';
import { ConfigOptionControlService } from './config.service';
import { FormControlService } from '../form-control.service';

@Component({
  selector: 'app-config-form-component',
  templateUrl: 'config.component.html'
})

export class ConfigFormComponent implements OnInit {
  constructor(private qcs: FormControlService, public configService: ConfigOptionControlService) {

  }
  configs;
  cControls: FormBase<string>[] = [];
  @Input() configValue;
  @Input() prefixId;
  cForm: FormGroup;
  payLoad = '';
  @Input() control;

  @Output() change = new EventEmitter<any>();

  ngOnInit() {

    console.log('ConfigFormComponent-ngOnInit-configValue', this.configValue);
    this.configs = this.configService.getProperties().subscribe(v => {
      if (v) {
        this.cControls = v;
        this.cForm = this.qcs.toFormGroup(this.cControls);
      }
    });

    // if (this.configValue) {

    //   const keys = Object.keys(this.configValue);

    //   keys.forEach(k => {
    //     const control = this.cForm.controls[k];
    //     // const control = this.cControls.find(q => q.key === k);
    //     console.log('control', control);
    //     if (control) {
    //       console.log('control value', this.configValue[k]);
    //       // control.setValue(this.configValue[k]);
    //     }
    //   });
    // }
  }
  onChange() {
    const payload = this.cForm.getRawValue();
    console.log('payload', payload);
    this.control.setValue(payload);

    // this.configService.fetchConfig(payload.api_url, payload.method, payload.params).subscribe((data: any) => {
    //   let options = data;
    //   if (data && payload.expression) {
    //     const expressions = payload.expression.split('.');
    //     expressions.forEach((exp: string) => {
    //       options = options[exp];
    //     });
    //   }
    //   if (options && payload.key && payload.value) {
    //     const results = options.map((obj: any) => {
    //       return { key: obj[payload.key], value: obj[payload.value] };
    //     });
    //   }
    // });
  }
}
