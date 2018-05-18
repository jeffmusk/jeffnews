import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment' ;
import {Observable} from 'rxjs/Observable';
import {Apinotice} from '../../../shared/model/apinotice';

const URLARG = "https://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey="
var apiKey = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getApiNotice(): Observable<any> {
  	return this.http.get("https://newsapi.org/v2/top-headlines?country=ar&apiKey=0c60ca0732284356bbccab4752ae45fa");
  }

  
}
