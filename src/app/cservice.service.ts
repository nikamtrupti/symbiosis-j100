import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from './model/api.response';
import { RegisterComponent } from './register/register.component';
// import { LoginpageComponent } from './loginpage/loginpage.component';


@Injectable({
  providedIn: 'root'
})
export class CserviceService {
  

  constructor(private http: HttpClient) { }
    baseUrl='http://localhost:9006/api/CreateClient'

    getRegister() :Observable<ApiResponse>{
      return this.http.get<ApiResponse>(this.baseUrl);
    }

createRegistration(Register:RegisterComponent):Observable<ApiResponse>{
  return this.http.post<ApiResponse>(this.baseUrl,Register)
}

// login(credentials:{email:string, password:string}):Observable<any>{
//   return this.http.post('http://localhost:9006/api/CreateClient', credentials, {responseType: 'text'})
// }


// login(loginpage:LoginpageComponent):Observable<ApiResponse>{
//   return this.http.post<ApiResponse>(this.baseUrl,loginpage)
// }



// login(client: { client_email: string; client_password: string; clientRole: string }): Observable<ApiResponse> {
//   return this.http.post<ApiResponse>(`${this.baseUrl}/login`, client);
// }

}
