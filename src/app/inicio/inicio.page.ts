import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  sair(){
    this.navCtrl.navigateRoot('login');
  };
  adicionar(){
    this.navCtrl.navigateRoot('registrar-lcmto');
  };
  lancamentos(){
    this.navCtrl.navigateRoot('lancamentos');
  };

}
