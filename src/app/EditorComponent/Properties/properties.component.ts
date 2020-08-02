import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBase } from 'src/app/FormModule/form-base';
import { FormGroup } from '@angular/forms';
import { FormControlService } from 'src/app/FormModule/form-control.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.sass']
})
export class PropertiesComponent implements OnInit {

  @Input() properties: FormBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  @Output() change = new EventEmitter<any>();

  constructor(private qcs: FormControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.properties);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.change.emit(this.form.getRawValue());
  }
}
