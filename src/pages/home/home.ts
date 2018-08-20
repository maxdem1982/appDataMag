import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, IonicPage, LoadingController, MenuController } from 'ionic-angular';

import { EmailValidator } from  '../../validators/email';
import { Http, Headers, RequestOptions } from "@angular/http";
import { map } from 'rxjs/operators'
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, 
      public loadingCtrl: LoadingController, public http: Http,public menu: MenuController) {
        this.menu.enable(true, "menuAll");
  }

  toScarico() {
    alert('TODO');
    //this.navCtrl.push('');
  }
 
}