import { Component, OnInit } from '@angular/core';
import { OptObjectService } from '../../shared/opt-object.service';
import { FormControl,Validators,FormGroup } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}




@Component({
  selector: 'app-op-config',
  templateUrl: './op-config.component.html',
  styleUrls: ['./op-config.component.scss']
})



export class OpConfigComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
   
  ];

  selectedDataOpt = {"mainComp":'',"compAttr":""};
  optData:any;// all data objects 
  
  mainCompArray:string[] = [];
  compAttr:string[] = [];
  attrType:string[] = [];

  optForm:FormGroup;
  constructor(private _opt:OptObjectService) { }

  ngOnInit() {
    this._opt.currentObj.subscribe(data =>{ this.optData = data, this.addMainCompArray()});
    
    /*this.optForm = new FormGroup
    ({
      'mainComponent'         : new FormControl(this.optForm.mainComponent, [Validators.required]),
      'ComponentAttribute'    : new FormControl(this.optForm.ComponentAttribute),
      'attributeType'     : new FormControl(this.optForm.attributeType, Validators.required)
    });*/
  }
  

  addMainCompArray(){
    const p = this.optData.objects;
    for (var key in p) {
      if (p.hasOwnProperty(key)) {
          this.mainCompArray.push(key);
      }
    }
  }

  addCompAttrArray($event){
    this.selectedDataOpt["mainComp"] = $event.value;
    const p = this.optData.objects[$event.value];
    for (var key in p) {
      if (p.hasOwnProperty(key)) {
          this.compAttr.push(key);
      }
    }
  }

  addAttrTypeArray($event){
    this.selectedDataOpt['compAttr']=$event.value;
    const p = this.optData.objects[this.selectedDataOpt["mainComp"]][$event.value];
    for (var key in p) {
      if (p.hasOwnProperty(key)) {
          this.attrType.push(key);
      }
    }
    console.log(this.optForm.value);
  }
}
