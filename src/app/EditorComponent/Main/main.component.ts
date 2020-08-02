import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBase } from 'src/app/FormModule/form-base';

@Component({
  selector: 'app-editor-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class EditorMainComponent implements OnInit, OnChanges {

  @Input() questions: FormBase<string>[] = [];
  @Input() currentControl;
  
  constructor() {

  }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log('EditorMainComponent-ngOnChanges-currentControl', this.currentControl);
    this.currentControl = this.currentControl;
  }
}
