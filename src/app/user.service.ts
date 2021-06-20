import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Subject } from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient,public fireservices: AngularFirestore) {}
    
    getData() {
      let url="https://api.first.org/data/v1/news";
      console.log(url);
      return this.http.get(url);
    }

}