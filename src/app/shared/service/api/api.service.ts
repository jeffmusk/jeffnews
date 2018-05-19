import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment' ;
import {Observable} from 'rxjs/Observable';
import {Apinotice} from '../../../shared/model/apinotice';

const URL = "https://newsapi.org/v2/top-headlines?sources=";
var source = "google-news-ar";
var apiKey = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getApiNotice(): Observable<any> {
  	source = "hacker-news" ;
  	return this.http.get(`${URL}${source}&apiKey=${apiKey}`);
  }

  
}
