import { Injectable } from '@angular/core';

import { FormBase } from '../FormModule/form-base';
import { of } from 'rxjs';

@Injectable()
export class LoginFormService {

  // TODO: get from a remote source of question metadata
  getFormControls() {

    const controls = [

      {
        controlType: 'textbox',
        key: 'email',
        label: 'Email',
        type: 'email',
        order: 1,
        cssClass: 'col-md-12',
      },

      {
        controlType: 'textbox',
        key: 'password',
        label: 'Password',
        value: '',
        required: true,
        order: 2,
        type: 'password',
        cssClass: 'col-md-12',
      },
    ];

    return of(controls.sort((a, b) => a.order - b.order).map(f => f as FormBase<any>));
  }
}
