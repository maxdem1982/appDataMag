import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, IonicPage } from 'ionic-angular';


import { EmailValidator } from  '../../validators/email';
import { Http, Headers, RequestOptions } from "@angular/http";
import {Utente} from "../../model/utente";
import { WelcomePage } from '../welcome/welcome';



/**
 * Generated class for the RegistrazionePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'registrazione',
  templateUrl: 'registrazione.html'
})
export class RegistrazionePage {
 
    utente : Utente = new Utente(0, null,null,null,null);
    //@ViewChild('signupSlider') signupSlider: any;
 
    slideOneForm: FormGroup;
 
    submitAttempt: boolean = false;
 
    constructor(public navCtrl: NavController, public formBuilder: FormBuilder,
      public http: Http) {
 
      this.slideOneForm = formBuilder.group({
          email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]\\w*@[a-zA-Z0-9-]+\.[a-zA-Z]{0,4}')]), EmailValidator.checkEmail],
          nome: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
          cognome: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
          password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(30), Validators.pattern('[a-zA-Z\\w]*'), Validators.required])]
      });
  }
/*
    save(){
      
 
      if(!this.slideOneForm.valid){
          this.submitAttempt = true;
      } else {
        alert("OK");
          console.log("success!")
          console.log(this.slideOneForm.value);
      }
    }
*/

    url = 'http://massimodemattia.altervista.org/progetto/api/utente/create.php?';
    createUser(formData){
     
      this.http.post(this.url, formData).subscribe( (data) =>{
        var jsonObj = JSON.parse(data["_body"]);
       
          if(jsonObj.success){
            this.utente = jsonObj.utente;
            alert('miracolo email'+this.utente.email);
            alert('miracolo id da db'+ this.utente.id);
            alert('utente crato');
            this.navCtrl.push(WelcomePage);

           // alert('id'+jsonObj.utente.id);
           //this.storage.set('nome', jsonObj.utente.nome );
          }else{
            alert('fail ');
            //this.loginAttempt = true;
          }
        });

      }

 
}