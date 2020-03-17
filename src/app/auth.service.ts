import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './_models/user';
import { ResponseMessage } from './_models/response';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUserJUPITER')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  login(email: string, password: string) {
    return this.http.post<any>(`api/signin`, { email, password })
      .pipe(map((response: ResponseMessage ) => {
        if(response.status == '200') {

          // login successful if there's a jwt token in the response
          if (response.data.user) {
            const user = { ...response.data.user, token: response.data.token }
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUserJUPITER', JSON.stringify(user));
            
            this.currentUserSubject.next(user);
  
          }
        }
        return response;

      }));
  }
  signUp(body) {
    return this.http.post('api/signup', body);
    }
  toggleactive(id) {
    return this.http.get(`api/toggleActive/${id}`);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUserJUPITER');
    this.currentUserSubject.next(null);
}

}
