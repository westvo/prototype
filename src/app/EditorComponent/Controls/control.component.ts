import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBase } from 'src/app/FormModule/form-base';
import { of } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { FormControlService } from 'src/app/FormModule/form-control.service';
import { PropertiesFormService } from '../Properties/properties.service';

@Component({
  selector: 'app-editor-controls',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.sass']
})
export class EditorControlsComponent implements OnInit, OnChanges {

  @Input() currentFormControls: FormBase<any>[];
  controls;
  isShowModal = false;
  @Output() changeControl = new EventEmitter<any>();
  @Output() openModal = new EventEmitter<any>();
  @Output() addControl = new EventEmitter<any>();
  pform: FormGroup;
  newControl = {
    controlType: '',
    label: ''
  };
  properties;
  pControls: FormBase<any>[];

  constructor(private qcs: FormControlService, public propService: PropertiesFormService) {
    this.properties = this.propService.getProperties().subscribe(v => {
      this.pControls = v;
      this.pform = this.qcs.toFormGroup(v);
    });
  }

  ngOnInit() {
    of(this.currentFormControls).subscribe((v: any) => {
      this.controls = v.value;
      console.log(this.controls);
    });
  }

  ngOnChanges(changes) {
    if (changes.properties && changes.properties.currentValue !== changes.properties.previousValue) {
      console.log('changed');
      // this.form = this.qcs.toFormGroup(changes.properties.currentValue);
    }
  }

  selectControl(control) {
    console.log('control', control);
    this.changeControl.emit(control);
  }

  toggleModal() {
    this.isShowModal = !this.isShowModal;
    console.log('this.properties', this.properties);
    console.log('this.pControls', this.pControls);

    this.openModal.emit(this.isShowModal);
  }

  createControl() {
    const control =  this.pform.getRawValue();
    control.key = new Date().getTime().toString();
    this.addControl.emit(control);
    this.toggleModal();
  }

}
