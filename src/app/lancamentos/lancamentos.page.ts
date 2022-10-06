/* eslint-disable @typescript-eslint/no-unused-expressions */
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.page.html',
  styleUrls: ['./lancamentos.page.scss'],
})
export class LancamentosPage implements OnInit {
  public tdsLancamentos: any[];
  public receitasMensal: any[];
  public despesasMensal: any[];
  public saldoMensal: any[];
  public lan;

  constructor(public navCtrl: NavController, public http: HttpClient ) {

  }

  ngOnInit() {
    this.atualizalancamentos();
    this.atualizarctamensal();
    this.atualizadspsamensal();
    this.atualizasaldomensal();
  }
  loadData(event){};

  atualizalancamentos(){
    this.tdsLancamentos=[];
    this.http.get<any[]>('http://localhost/appcfp/consulta.php')
    .subscribe( valor => {
      valor.forEach( dados => {
       this.tdsLancamentos.push([dados.tipo,dados.valor,dados.categoria,dados.descrição,dados.datas]);
       //console.log(dados);
      });
    });
  }

  atualizarctamensal(){
    this.receitasMensal=[];
    this.http.get<any[]>('http://localhost/appcfp/totalReceitasMensal.php')
    .subscribe( valor => {
      valor.forEach( dados =>{
        this.receitasMensal.push([dados.receita]);
                  //console.log(dados);
      });
    });
  }

  atualizadspsamensal(){
    this.despesasMensal=[];
    this.http.get<any[]>('http://localhost/appcfp/totalDespesasMensal.php')
    .subscribe( valor => {
      valor.forEach( dados =>{
        this.despesasMensal.push([dados.despesa]);
      });
    });
  }
  atualizasaldomensal(){
    this.saldoMensal=[];
    this.http.get<any[]>('http://localhost/appcfp/saldoMensal.php')
    .subscribe(valor => {
      valor.forEach(dados =>{
        this.saldoMensal.push([dados.saldo]);
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
