import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { ContactPage } from '../contact/contact';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goTo(name) {
  name = name || 'No name Entered';

  this.navCtrl.push(ContactPage, {
    data: name
  });
}

}
