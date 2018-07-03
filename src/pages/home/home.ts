import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  signIn(){
    this.navCtrl.push(SigninPage);
  }
}
