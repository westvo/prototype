import { Injectable } from '@angular/core';

import { FormBase } from '../../FormModule/form-base';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable()
export class ConfigOptionControlService {

  constructor(private http: HttpClient) {

  }

  fetchConfig(configUrl, method, params) {
    switch (method) {
      case 'post':
        return this.postConfig(configUrl, params);

      default:
        return this.getConfig(configUrl, params);
    }
  }

  private getConfig(configUrl, params) {
    const paramString = new URLSearchParams(params).toString();
    return this.http.get(configUrl + paramString);
  }

  private postConfig(configUrl, params) {
    return this.http.post(configUrl, params);
  }

  // TODO: get from a remote source of question metadata
  getProperties() {
    // value: {
    //   ap_url: 'https://mydictionaries.herokuapp.com/api/categories',
    //   method: 'get',
    //   array_expression: '',
    //   key: '_id',
    //   value: 'name'
    // },
    const configControls = [
      {
        controlType: 'textbox',
        key: 'api_url',
        label: 'API URL',
        type: 'string',
        order: 1,
        cssClass: 'col-md-12',
        // value: 'https://mydictionaries.herokuapp.com/api/categories',
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
        // value: 'get',
      },
      {
        controlType: 'textbox',
        key: 'key',
        label: 'Key',
        type: 'string',
        order: 3,
        cssClass: 'col-md-12',
        // value: '_id',
      },
      {
        controlType: 'textbox',
        key: 'value',
        label: 'Value',
        type: 'string',
        order: 3,
        cssClass: 'col-md-12',
        // value: 'name',
      },
    ];

    return of(configControls.sort((a, b) => a.order - b.order).map(f => f as FormBase<any>));
  }
}
