import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {
  nome='';
  email='';
  senha='';

  constructor(private navCtrl: NavController) {
   }

  ngOnInit() {

  }
  cadastrar(){
    this.navCtrl.navigateRoot('login');
  }

  mudancas(){
    console.log('nome',this.nome);
    console.log('email',this.email);
    console.log('senha',this.senha);
  }
}
