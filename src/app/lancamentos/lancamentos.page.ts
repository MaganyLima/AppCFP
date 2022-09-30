import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.page.html',
  styleUrls: ['./lancamentos.page.scss'],
})
export class LancamentosPage implements OnInit {
  public tdsLancamentos: Array<any>=[];
  public lan;

  constructor(public navCtrl: NavController, public http: HttpClient ) {
  }

  ngOnInit() {
    this.atualizalancamentos();
  }
  loadData(event){};

  atualizalancamentos(){
    this.tdsLancamentos=[];
    this.http.get<any[]>('http://localhost/cfp/consultaLancamentos.php')
    .subscribe( valor => {
      valor.forEach( dados => {
        this.tdsLancamentos.push([dados.tipo,dados.valor,dados.categoria,dados.descricao,dados.datas]);
      });
    });
  }
  inicio(){
    this.navCtrl.navigateRoot('inicio');
  }
  adicionar(){
    this.navCtrl.navigateRoot('registrar-lcmto');
  }
}
