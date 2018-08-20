import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, IonicPage, LoadingController, MenuController } from 'ionic-angular';

import { EmailValidator } from  '../../validators/email';
import { Http, Headers, RequestOptions } from "@angular/http";
import { map } from 'rxjs/operators'
import { HomePage } from '../home/home';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  url = 'http://massimodemattia.altervista.org/progetto/api/utente/login.php?';
 /*
  account: { email: string, password: string } = {
    email: '',
    password: ''
  };
*/
  
    //@ViewChild('signupSlider') signupSlider: any;
    slideOneForm: FormGroup;
    submitAttempt: boolean = false;
    loginAttempt: boolean = false;
    
 
    constructor(public navCtrl: NavController, public formBuilder: FormBuilder, 
      public loadingCtrl: LoadingController, public http: Http, public menu: MenuController, private storage: Storage) {
        //this.menu.enable(false, 'leftMenu');
        this.menu.enable(false, "menuAll");


      this.slideOneForm = formBuilder.group({
          email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]\\w*@[a-zA-Z0-9-]+\.[a-zA-Z]{0,4}')]), EmailValidator.checkEmail],
          password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(30), Validators.pattern('[a-zA-Z\\w]*'), Validators.required])]
      });
  }

  login(email: HTMLInputElement, password: HTMLInputElement): void {
      
      if(!this.slideOneForm.valid){
        this.submitAttempt = true;
      }else {

        //invocare il servizio che verifica il login
        const loader = this.loadingCtrl.create({
          content: "Please wait...",
          duration: 3000
        });
        loader.present();
        var myData = JSON.stringify({email: email.value, password: password.value});
        
        

        this.http.post(this.url, myData).subscribe( (data) =>{
          var jsonObj = JSON.parse(data["_body"]);
            if(jsonObj.success){
             // alert('success '+jsonObj.success);
              this.navCtrl.push(HomePage);
             // alert('id'+jsonObj.utente.id);
             this.storage.set('nome', jsonObj.utente.nome );
            }else{
             // alert('success '+jsonObj.success);
              this.loginAttempt = true;
            }
          });

        console.log("login success!")
        console.log(this.slideOneForm.value);
      }
    }

    signup() {
      this.navCtrl.push('RegistrazionePage');
    }
 
}