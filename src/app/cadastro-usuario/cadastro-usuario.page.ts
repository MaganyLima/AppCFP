import { HttpClient } from '@angular/common/http';
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

  constructor(private navCtrl: NavController,public http: HttpClient) {
   }

  ngOnInit() {

  }
  cadastrar(){
    this.navCtrl.navigateRoot('login');
      this.http.post<any[]>('http://localhost/appcfp/cadastroUsuario.php',
    {nome : this.nome, email : this.email, senha: this.senha})
    .subscribe(valor =>{});
  }

}
