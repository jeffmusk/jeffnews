import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment' ;
import {Observable} from 'rxjs/Observable';
import {Apinotice} from '../../../shared/model/apinotice';

const URL = "https://newsapi.org/v2/top-headlines?sources=";
var apiKey = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
	fuente:string;
  constructor(private http:HttpClient) { }

  getApiNotice(f?): Observable<any> {
  	if (this.fuente == null) {
  		this.fuente = "google-news-ar";
  	}else {
  		if (f != null) { 
  			this.fuente = f;  			
  		}   				
  	}
  	return this.http.get(`${URL}${this.fuente}&apiKey=${apiKey}`);
  }

  
}
