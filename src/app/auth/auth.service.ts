import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
   url = 'http://localhost:3002/userdetails/';
  constructor(private http: HttpClient) { }

  Enrolldetails(params) {
    const enroldata = new Promise((resolve, reject) => {
      this.http.post(this.url, params).toPromise().then((res) => {
        resolve(res);
      }).catch((err) =>{
        reject(err);
      }).finally(() =>{
        console.log('posted data successfully');
      })
    })
    return enroldata;

  }

  loginuser(params) {
    const loginuser = new Promise((resolve, reject) => {
      this.http.post(this.url + 'userlogin',params).toPromise().then((res) => {
        resolve(res);
      }).catch((err)=> {
        reject(err);
      }).finally(()=> {
        console.log('user login successfully');
      })
    })
    return loginuser;
  }
}
