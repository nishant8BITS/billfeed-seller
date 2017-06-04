import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	public loginFormControl: FormGroup;

	public newUser = {
	    email: '',
	    password: ''
	};

  constructor(public navCtrl: NavController, 
  				public navParams: NavParams,
  				private formBuilder: FormBuilder) {



    this.loginFormControl = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public login(){
  	
  }

}
