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
  onSubmit() {
   const payload = this.cForm.getRawValue();
   console.log('payload', payload);
  }
}
