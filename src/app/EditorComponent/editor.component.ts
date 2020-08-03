import { Component } from '@angular/core';
import { PropertiesFormService } from './Properties/properties.service';
import { Observable, of } from 'rxjs';
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
  props;
  constructor(public propService: PropertiesFormService, controlService: ControlFormService) {
    this.properties$ = this.propService.getProperties();
    this.properties$.subscribe(controls =>
      controls.map(control => {
        console.log('EditorComponent-constructor-control', control);
        control.value = this.currentControl && this.currentControl[control.key];
        return control;
      }
      ));
    this.currentFormControls = controlService.getQuestions();
  }

  onPropertiesChange($event) {
    if ($event instanceof Event) {
    } else {
      console.log(1111, $event);
      console.log('updated props');
      this.props = $event;
    }
  }

  selectControl($event) {
    console.log('editor-component-select-control', $event);
    this.currentControl = $event;

    console.log('currentControl', this.currentControl);
    console.log('props', this.properties$);
    
  }
}
