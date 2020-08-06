import { Injectable } from '@angular/core';

import { FormBase } from '../../FormModule/form-base';
import { of } from 'rxjs';

@Injectable()
export class ConfigOptionControlService {

  // TODO: get from a remote source of question metadata
  getProperties() {

    const configControls = [
      {
        controlType: 'textbox',
        key: 'ap_url',
        label: 'API URL',
        type: 'string',
        order: 1,
        cssClass: 'col-md-12',
      }, {
        controlType: 'dropdown',
        key: 'method',
        label: 'Method',
        options: [
          { key: 'get', value: 'GET' },
          { key: 'post', value: 'POST' },
        ],
        order: 2,
        cssClass: 'col-md-12',
      },
      {
        controlType: 'textbox',
        key: 'key',
        label: 'Key',
        type: 'string',
        order: 3,
        cssClass: 'col-md-12',
      },
      {
        controlType: 'textbox',
        key: 'value',
        label: 'Value',
        type: 'string',
        order: 3,
        cssClass: 'col-md-12',
      },
    ];

    return of(configControls.sort((a, b) => a.order - b.order).map(f => f as FormBase<any>));
  }
}
