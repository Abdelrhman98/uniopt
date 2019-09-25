import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IdfPathService } from '../../request/idf-path.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  step = 0;
  // srcResult = {"idf_path":'', "weather_path":''};
  srcResult = {
    "idf_path": "/mnt/D/F/uniopt/uniopt-server/EPinterface/demo/singleZonePurchAir.idf",
    "weather_path":"/home/ahmed/EnergyPlus/WeatherData/USA_IL_Chicago-OHare.Intl.AP.725300_TMY3.epw"
    };
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor(private _ser:IdfPathService) { }

  ngOnInit() {
  }

  onFileSelected() {
    // const inputNode: any = document.getElementById('file').path;
    let BR = (<HTMLInputElement>document.getElementById('file')).files[0].path;
    this.srcResult['idf_path'] = BR;
    //console.log(BR);
  }
  
  onFileSelected2() {
    let BR = (<HTMLInputElement>document.getElementById('file2')).files[0].path;
    this.srcResult['weather_path'] = BR;
    //console.log(BR);
    //console.log(this.srcResult);
  }

  onClickNext(){
    //console.log(this.srcResult);
    this._ser.sendIdfFileToBackend(this.srcResult).subscribe(data => console.log(data));
  }
  
}
