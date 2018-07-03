import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DisplayPage} from '../display/display';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth';
@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})

export class SigninPage {
  public myStyles: Object = {showEmail: false};
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
  }
  pickPizza(){
    this.navCtrl.push(DisplayPage);
  }
  onSignin(form: NgForm){
    this.authService.signin(form.value.email, form.value.password)
    .then(data => console.log(data)).catch(error => console.log(error));
  }
}
