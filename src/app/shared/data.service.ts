import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _HttpClient:HttpClient) { }


  getData(lang:string):Observable<any>{
    return this._HttpClient.get(`https://abudiyab-soft.com/api/memberships?language=${lang}`);
  }
}
