import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { Tipo } from '../models/tipo';

@Injectable()
export class TipoData {

  apiUrl = "http://localhost:3000";
  // apiUrl = "http://10.0.3.2:3000"; //VERSÃO NOVA DO GENYMOTION
  // apiUrl = "http://10.0.2.2:3000"; //VERSÂO ANTIGA DO GENYMOTION
  // apiUrl = "http://10.1.22.53:3000"; // IP DO SERVIDOR NA REDE

  constructor(public http: Http) { }

  //carrega todos os tipo de comida
  findAll(): Observable<Tipo[]> {
      return this.http.get(`${this.apiUrl}/tipo`)
          .map(res => <Tipo[]>res.json());
  }


  create(data){
    let body = JSON.stringify(data); 

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.apiUrl}/tipo`, body, options)
      .map(res => res.json());
  }

  update(data){
    console.log("PROVIDER = ", data);
    let body = JSON.stringify(data); 

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.apiUrl}/tipo`, body, options)
      .map(res => res.json());
  }

  delete(data){
      return this.http.delete(`${this.apiUrl}/tipo/${data._id}`).map(res => res);
  }

}
