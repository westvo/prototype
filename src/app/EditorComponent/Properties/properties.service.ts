import { Injectable } from '@angular/core';

import { FormBase } from '../../FormModule/form-base';
import { of } from 'rxjs';

@Injectable()
export class PropertiesFormService {

  // TODO: get from a remote source of question metadata
  getProperties() {

    const props = [
      {
        controlType: 'dropdown',
        key: 'controlType',
        label: 'Control Type',
        options: [
          { key: 'dropdown', value: 'Dropdown' },
          { key: 'textbox', value: 'Textbox' },
          { key: 'textarea', value: 'Textarea' },
          { key: 'radio-button', value: 'Radio' },
          { key: 'checkbox-group', value: 'Checkbox group' },
        ],
        order: 1,
        cssClass: 'col-md-12',
      },
      {
        controlType: 'textbox',
        key: 'key',
        label: 'Key',
        type: 'string',
        order: 2,
        cssClass: 'col-md-12',
      },
      {
        controlType: 'textbox',
        key: 'label',
        label: 'Label',
        type: 'string',
        order: 3,
        cssClass: 'col-md-12',
      },
      {
        controlType: 'dropdown',
        key: 'type',
        label: 'Type',
        options: [
          { key: 'text', value: 'text' },
          { key: 'email', value: 'Email' },
          { key: 'textarea', value: 'Textarea' },
          { key: 'radio', value: 'Radio' },
          { key: 'checkbox', value: 'Checkbox' },
        ],
        order: 4,
        cssClass: 'col-md-12',
      },
      {
        controlType: 'textbox',
        key: 'cssClass',
        label: 'CSS Class',
        type: 'string',
        order: 5,
        value: 'col-md-6',
        cssClass: 'col-md-12',
      },
      {
        controlType: 'textarea',
        key: 'description',
        label: 'Description',
        type: 'textarea',
        order: 6,
        cssClass: 'col-md-12',
      },
      {
        controlType: 'textarea',
        key: 'order',
        label: 'Order',
        type: 'number',
        order: 7,
        cssClass: 'col-md-12',
      },
      {
        controlType: 'control-option',
        key: 'options',
        label: 'Options',
        type: '',
        order: 7,
        cssClass: 'col-md-12',
      },
      {
        controlType: 'option-config',
        key: 'config',
        label: 'Config',
        order: 8,
        cssClass: 'col-md-12',

      }
    ];

    return of(props.sort((a, b) => a.order - b.order).map(f => f as FormBase<any>));
  }
}
