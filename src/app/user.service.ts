import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 constructor(private http: HttpClient) { }
    baseUrl='http://localhost:9006/api/CreateClient'




    
login(credentials:{email:string, password:string}):Observable<any>{
  return this.http.post('http://localhost:9006/api/CreateClient', credentials, {responseType: 'text'})
}







}
