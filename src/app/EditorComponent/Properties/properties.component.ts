import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBase } from 'src/app/FormModule/form-base';
import { FormGroup } from '@angular/forms';
import { FormControlService } from 'src/app/FormModule/form-control.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.sass']
})
export class PropertiesComponent implements OnInit, OnChanges {

  @Input() properties: FormBase<string>[] = [];
  @Input() currentControl;
  form: FormGroup;
  payLoad = '';

  @Output() change = new EventEmitter<any>();

  constructor(private qcs: FormControlService) {

  }

  ngOnInit() {
    if (this.properties) { this.form = this.qcs.toFormGroup(this.properties); }
  }

  ngOnChanges() {
    if (this.currentControl) {
      console.log('ngOnChanges');
      this.properties.forEach(prop => {
        const control = this.form.controls[prop.key];
        control.setValue(this.currentControl[prop.key]);
      });
    }
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.change.emit(this.form.getRawValue());
  }
}
