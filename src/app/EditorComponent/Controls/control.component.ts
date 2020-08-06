import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBase } from 'src/app/FormModule/form-base';
import { of } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { FormControlService } from 'src/app/FormModule/form-control.service';
import { PropertiesFormService } from '../Properties/properties.service';

@Component({
  selector: 'app-editor-controls',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.sass']
})
export class EditorControlsComponent implements OnInit {

  @Input() currentFormControls: FormBase<any>[];
  controls;
  isShowModal = false;
  @Output() changeControl = new EventEmitter<any>();
  @Output() openModal = new EventEmitter<any>();
  @Output() addControl = new EventEmitter<any>();

  newControl = {
    controlType: '',
    label: ''
  };

  constructor() {
  }

  ngOnInit() {
    of(this.currentFormControls).subscribe((v: any) => {
      this.controls = v.value;
    });
  }


  selectControl(control) {
    this.changeControl.emit(control);
  }

  toggleModal() {
    this.isShowModal = !this.isShowModal;
    this.openModal.emit(this.isShowModal);
  }

 createControl(control) {
  this.addControl.emit(control);
  this.toggleModal();
 }
}
