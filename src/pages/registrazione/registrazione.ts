import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, IonicPage } from 'ionic-angular';


import { EmailValidator } from  '../../validators/email';

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
 
    //@ViewChild('signupSlider') signupSlider: any;
 
    slideOneForm: FormGroup;
 
    submitAttempt: boolean = false;
 
    constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
 
      this.slideOneForm = formBuilder.group({
          email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]\\w*@[a-zA-Z0-9-]+\.[a-zA-Z]{0,4}')]), EmailValidator.checkEmail],
          firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
          lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
          password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(30), Validators.pattern('[a-zA-Z\\w]*'), Validators.required])]
      });
  }

    save(){
      
 
      if(!this.slideOneForm.valid){
          this.submitAttempt = true;
      } else {
        alert("OK");
          console.log("success!")
          console.log(this.slideOneForm.value);
      }
    }
 
}