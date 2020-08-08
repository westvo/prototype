import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlService } from 'src/app/FormModule/form-control.service';
import { PropertiesFormService } from '../../Properties/properties.service';
import { FormBase } from 'src/app/FormModule/form-base';
import { } from 'protractor';

@Component({
  selector: 'app-create-control-component',
  templateUrl: 'create-control.component.html',
  styleUrls: ['./create-control.component.sass']

})

export class CreateControlComponent implements OnInit {

  properties;
  @Input() isShowModal;
  pForm: FormGroup;
  pControls: FormBase<any>[];
  @Output() create = new EventEmitter<any>();
  @Output() closeModel = new EventEmitter<any>();

  constructor(private qcs: FormControlService, public propService: PropertiesFormService) {
    this.properties = this.propService.getProperties().subscribe(v => {
      this.pControls = v;
      this.pForm = this.qcs.toFormGroup(v);
    });
  }
  ngOnInit() { }

  toggleModal() {
    this.closeModel.emit(false);
  }
  createControl() {
    const control = this.pForm.getRawValue();
    control.key = control.key || new Date().getTime().toString();
    this.create.emit(control);
  }
}
