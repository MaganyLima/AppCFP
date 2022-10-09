import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-lcmto',
  templateUrl: './registrar-lcmto.page.html',
  styleUrls: ['./registrar-lcmto.page.scss'],
})
export class RegistrarLcmtoPage implements OnInit {
  public categoriaLan;
  tipo='';
  valor='';
  data='';
  categoria='';
  descricao='';

  constructor(public navCtrl: NavController,public http: HttpClient) {
    this.categoriaLan=[
      {nome:'Alimentação'},
      {nome:'Assinaturas'},
      {nome:'Casa'},
      {nome:'Compras'},
      {nome:'Cuidados pessoais'},
      {nome:'Empréstimo'},
      {nome:'Hobbies e lazer'},
      {nome:'Impostos e taxas'},
      {nome:'Investimento'},
      {nome:'Mercado'},
      {nome:'Outros'},
      {nome:'Salário'},
      {nome:'Saúde'},
      {nome:'Serviços'},
      {nome:'Trabalho'},
      {nome:'Transporte'},
    ];
  }

  ngOnInit() {
  }
  registrar(){
    this.navCtrl.navigateRoot('lancamentos');
    this.http.post<any[]>('http://localhost/appcfp/adicionar.php',
    {tipo : this.tipo, valor : this.valor, data: this.data, descricao : this.descricao, categoria : this.categoria})
    .subscribe(valor =>{});
  };
  inicio(){
    this.navCtrl.navigateRoot('inicio');
  };
  lancamento(){
    this.navCtrl.navigateRoot('lancamentos');
  };

}
