import { Component } from '@angular/core';
import { PropertiesFormService } from './Properties/properties.service';
import { Observable } from 'rxjs';
import { FormBase } from '../FormModule/form-base';
import { ControlFormService } from './Controls/control.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass']
})
export class EditorComponent {
  title = 'editor';

  properties$: Observable<FormBase<any>[]>;
  currentFormControls;
  currentControl;
  constructor(propService: PropertiesFormService, controlService: ControlFormService) {
    this.properties$ = propService.getProperties();
    this.currentFormControls = controlService.getQuestions();
  }

  onPropertiesChange($event) {
    if ($event instanceof Event) {
    } else {
      console.log(1111, $event);
    }
  }
  selectControl($event) {
    console.log('editor-component-select-control', $event);
    this.currentControl = $event;
  }
}
