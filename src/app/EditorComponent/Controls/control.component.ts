import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBase } from 'src/app/FormModule/form-base';
import { of } from 'rxjs';

@Component({
  selector: 'app-editor-controls',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.sass']
})
export class EditorControlsComponent implements OnInit {

  @Input() currentFormControls: FormBase<any>[];
  controls;
  @Output() changeControl = new EventEmitter<any>();
  constructor() {

  }

  ngOnInit() {
    of(this.currentFormControls).subscribe((v: any) => {
      this.controls = v.value;
      console.log(this.controls);
    });
  }

  selectControl(control) {
    console.log('control', control);
    this.changeControl.emit(control);
  }
}
