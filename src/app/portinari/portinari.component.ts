import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portinari',
  templateUrl: './portinari.component.html',
  styleUrls: ['./portinari.component.css']
})
export class PortinariComponent implements OnInit {

  public textModel: string;
  public inputRequired: boolean;

  constructor() { }

  ngOnInit() {
    this.inputRequired = false;
  }

  public returnInputChange(ret) {
    this.textModel = ret;
  }

  public modelSwich() {
    this.inputRequired = !this.inputRequired;

  }
}
