import { Injectable } from '@angular/core';

import { FormBase } from '../../FormModule/form-base';
import { of } from 'rxjs';

@Injectable()
export class PropertiesFormService {

  // TODO: get from a remote source of question metadata
  getProperties() {

    const props = [
      {
        controlType: 'textbox',
        key: 'label',
        label: 'Label',
        type: 'string',
        order: 1,
        cssClass: 'col-md-12',
      },
      {
        controlType: 'dropdown',
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3,
        cssClass: 'col-md-12',
      },

      {
        controlType: 'textbox',
        key: 'firstName',
        label: 'First name',
        value: 'Bombasts',
        required: true,
        order: 1,
        cssClass: 'col-md-12',
      },

      {
        controlType: 'textbox',
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
        cssClass: 'col-md-12',
      },


      {
        controlType: 'radio-button',
        key: 'gender',
        label: 'Gender',
        order: 4,
        cssClass: 'col-md-12',
        options: [
          { key: 'ml', value: 'Male' },
          { key: 'fml', value: 'Female' },
          { key: 'oth', value: 'Other' }
        ]
      },
      {
        controlType: 'checkbox-group',
        key: 'app',
        label: 'App',
        order: 5,
        options: [
          { key: 'ecommerce', value: 'Ecommerce' },
          { key: 'prj_mng', value: 'Project Management' },
          { key: 'crm', value: 'CRM' },
          { key: 'invt', value: 'Inventory' }
        ],
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

    ];

    return of(props.sort((a, b) => a.order - b.order).map(f => f as FormBase<any>));
  }
}
