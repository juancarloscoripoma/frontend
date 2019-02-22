import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {any} from 'codelyzer/util/function';
import {Cookie} from '../shared/model/cookie';
import {RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ClientDbService {

  private url: string;
  private urlLogin: string;
  private cookie: Cookie;

  private accessToken = new BehaviorSubject<string>(null);
  private tokenType = new BehaviorSubject<string>(null);
  private refreshToken = new BehaviorSubject<string>(null);
  private expiresIn = new BehaviorSubject<string>(null);

  private scope = new BehaviorSubject<string>(null);


  constructor(private http: HttpClient) {
    this.url = environment.resource + 'clientbe/api/';
    this.urlLogin = environment.resourceLogin;
    // this.cookie = new Cookie();
  }

  getClientsAll(pagination: string): Observable<any> {
    // http://127.0.1.1:8765/clientbe/api/clients?orderBy=id&page=0&size=50&sort=asc
    /*
    localStorage.setItem('token', '$2a$10$xur7IABZbTugwHZd5j9jduW1I6ATgPQ63wBba7FP0N11zaiEiYzY6');
    const data = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders()
        .append('Content-Type', 'application/json')
        .append('Authorization', 'Bearer  ' + data)
    };
    */
    console.log('AccessToken: ' + this.getAccessToken() + ' _=' + new Date().getTime());

    return this.http.get(`${this.url}clients?${pagination}`, {
      headers: new HttpHeaders().set('Authorization', this.authHeader)
    });


    // return this.http.get(`${this.url}clients?${pagination}`, httpOptions);
    // return this.http.get<any>( `${this.url}clients?${pagination}` );
  }

  public get authHeader(): string {
    return `Bearer ${this.getAccessToken()}`;
  }

  login(email: string, password: string): Observable<any> {

    const httpParams = new HttpParams()
      .set('client_id', 'client')
      .set('grant_type', 'password')
      .set('username', 'admin@admin.com')
      .set('password', 'admin1');

    const basicHeader = btoa('client' + ':' + 'secret');

    const headers1 = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic ' + basicHeader)
      .set('AuthorizationBasic', basicHeader)
      .set('Login', 'login');

    /*
    return this.http.post<any>('http://localhost:8765/uaa/login', httpParams, {headers: headers1})
      .subscribe(
        res =>{
          console.log(res);
        },
        err => {
          console.log(err.message);
        }
      )}
    */
    // @ts-ignore
    return this.http.post('http://localhost:8765/uaa/login', httpParams, {headers: headers1})
      .subscribe(
        res => {
          console.log(res.toString());
          console.log(JSON.stringify(res));
          // @ts-ignore
          const demo = JSON.parse(JSON.stringify(res)); // JSON.stringify(res);
          this.setAccessToken(demo.access_token);
          this.setTokenType(demo.token_type);
          this.setRefreshToken(demo.refresh_token);
          this.setExpiresIn(demo.expires_in);
          this.setScope(demo.scope);
          // this.cookie = JSON.parse(JSON.stringify(res)) ;
          // this.cookie.access_token = demo.access_token;
          console.log('\nAccessToken: ' + this.getAccessToken() + '\nTokenType: ' + this.getTokenType() + '\nRefreshToken: ' + this.getRefreshToken() + '\nExpiresIn: ' + this.getExpiresIn() + '\nScope: ' + this.getScope());

        },
        err => {
          console.log(err.message);
        }
      );
    /*.pipe(tap((res: any) => {
      // console.log(res);
      this.setAccessToken(res);
    }));*/
  }

  /*
    setAccessToken(data: any): void {
      const expiresIn = new Date().getTime() + (1000 * data.expires_in);
      const expireDate = new Date(expiresIn);

      this.cookieService.set('access_token', data.access_token, expireDate);
      this.cookieService.set('refresh', data.refresh_token, expireDate);
      this.cookieService.set('expires_in', expiresIn.toString());
      this.cookieService.set('user_account', '');
      this.cookieService.set('user_data', null);

    }
    */

  public getAccessToken(): string {
    return this.accessToken.getValue();
  }

  public setAccessToken(accessToken: string) {
    this.accessToken.next(accessToken);
  }

  public getTokenType(): string {
    return this.tokenType.getValue();
  }

  public setTokenType(tokenType: string) {
    this.tokenType.next(tokenType);
  }

  public getRefreshToken(): string {
    return this.refreshToken.getValue();
  }

  public setRefreshToken(refreshToken: string) {
    this.refreshToken.next(refreshToken);
  }

  public getExpiresIn(): string {
    return this.expiresIn.getValue();
  }

  public setExpiresIn(expiresIn: string) {
    this.expiresIn.next(expiresIn);
  }

  public getScope(): string {
    return this.scope.getValue();
  }

  public setScope(scope: string) {
    this.scope.next(scope);
  }

}

export const CREDENTIALS = {
  client_id: 'client',
  secret: 'secret',
  grant_type: 'admin1'
};

export class CookieService {

}
