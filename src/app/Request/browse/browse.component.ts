import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IdfPathService } from '../../request/idf-path.service';
import { OptObjectService } from '../../shared/opt-object.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  step = 0;
  optData;
  // srcResult = {"idf_path":'', "weather_path":''};
  srcResult = {  
    "idf_path": "/media/booodey/BODEY/Projects/uniopt/server/uniopt-server/EPinterface/demo/singleZonePurchAir_template.idf",
    "weather_path":"/home/booodey/EnergyPlus/WeatherData/USA_IL_Chicago-OHare.Intl.AP.725300_TMY3.epw"
    };

    constructor(private _ser:IdfPathService, private _opt:OptObjectService) { }

    ngOnInit() {
      this._opt.currentObj.subscribe(data => this.optData = data);
    }
  
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  onFileSelected() {
    // const inputNode: any = document.getElementById('file').path;
    //let BR = (<HTMLInputElement>document.getElementById('file')).files[0].path;
    //this.srcResult['idf_path'] = BR;
    //console.log(BR);
  }
  
  onFileSelected2() {
    //let BR = (<HTMLInputElement>document.getElementById('file2')).files[0].path;
    //this.srcResult['weather_path'] = BR;
    //console.log(BR);
    //console.log(this.srcResult);
  }

  onClickNext(){
    //console.log(this.srcResult);
    this._ser.sendIdfFileToBackend(this.srcResult).subscribe(data => this._opt.changeObject(data));

  }
  
}
  