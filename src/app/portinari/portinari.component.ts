import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portinari',
  templateUrl: './portinari.component.html',
  styleUrls: ['./portinari.component.css']
})
export class PortinariComponent implements OnInit {

  public textModel: string;
  public textMultiselect: string;
  public inputRequired: boolean;

  public options: Array<any> = [
    { value: '1', label: 'Multiselect 1' },
    { value: '2', label: 'Multiselect 2' }
  ];
  constructor() { }

  ngOnInit() {
    this.inputRequired = false;
  }

  public returnInputChange(ret) {
    this.textModel = ret;
  }

  public modelSwich(item) {
    this.inputRequired = item;
  }
}
