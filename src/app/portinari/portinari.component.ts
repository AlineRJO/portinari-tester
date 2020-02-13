import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField, PoDynamicFormFieldChanged, PoDynamicFormValidation, PoNotificationService } from '@portinari/portinari-ui';
import {Fields} from './mock-data';

@Component({
  selector: 'app-portinari',
  templateUrl: './portinari.component.html',
  styleUrls: ['./portinari.component.css']
})
export class PortinariComponent implements OnInit {
  public person = { };
  public fields: Array<PoDynamicFormField> = Fields;
  constructor() { }

  ngOnInit() {
  }

  onLoadFields(value: any) {
    console.log('onLoadFields');
    return null;
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {

    if (changedValue.property === 'state') {
      return {
        value: { city: undefined},
        fields: [
          { property: 'city', gridColumns: 6, disabled: false }
        ]
      };
    }

  }
}
