import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'register.html',
})
export class RegisterPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
  }

  onSignup(form: NgForm){
    this.authService.signup(form.value.name, form.value.email,form.value.phone,form.value.username,form.value.password)
    .then(data => console.log(data)).catch(error => console.log(error));
  }
}
