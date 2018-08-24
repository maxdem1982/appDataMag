import { Injectable,} from '@angular/core';
import { Http } from '../../node_modules/@angular/http';
import { Utente } from '../model/utente';
 
@Injectable()
export class UserProvider {
    
    utente : Utente = new Utente(0, null,null,null,null);
    constructor(public http: Http) {
 
    }
 
    getUsers(){
 
        return this.http.get('https://someserver.com/api/users').map(res => res.json());
 
    }
 
    addUser(username, password){
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        let credentials = {
            username: username,
            password: password
        };
 
        return this.http.post('https://someserver.com/api/users', JSON.stringify(credentials), {});
 
    }

    url = 'http://massimodemattia.altervista.org/progetto/api/utente/create.php?';
    createUser(formData){
     
      return this.http.post(this.url, formData);

      }

 
}