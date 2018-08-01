import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {

   // name = navParams.get('data');

  constructor(public navCtrl: NavController) {
  }

  goTo(name) {
  name = name || 'No name Entered';

  this.navCtrl.push(ContactPage, {
    data: name
  });
}

}
