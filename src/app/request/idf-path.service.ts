import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class IdfPathService {
  private _url:string = "http://localhost:5000/EP/start";
  constructor(private _http:HttpClient) { }
  
  sendIdfFileToBackend(data:any){
    return this._http.post(this._url, data);
    
  }
}

// localhost:5000/EP/start
// 127.0.0.1:5000/EP/start