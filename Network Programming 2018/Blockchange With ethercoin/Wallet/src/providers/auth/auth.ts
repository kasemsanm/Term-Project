import { HttpClient } from '@angular/common/http';
import { Injectable, state } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient,private afAuth:AngularFireAuth) {
  }

  Singup(email:string,password:string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password);
  }

  Singin(email:string,password:string){
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }

  Singout(){
    return this.afAuth.auth.signOut();
  }

  authenticated(): Observable<boolean> {
    return Observable.from(this.afAuth.authState)
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
      if (!authenticated) return false;
      else return true;      
    })
  }
}
