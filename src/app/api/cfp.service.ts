import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CfpService {
  private url: string = 'http://127.0.0.1:5000/consultar'

  constructor(private http:HttpClient) { }

  consultar(){
    return this.http.get(this.url) 
  }

}

