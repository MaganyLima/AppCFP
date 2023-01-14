/* eslint-disable @typescript-eslint/no-unused-expressions */
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CfpService } from '../api/cfp.service';
@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.page.html',
  styleUrls: ['./lancamentos.page.scss'],
})
export class LancamentosPage implements OnInit {
  
  constructor(public navCtrl: NavController, public http: HttpClient,private cfpservice:CfpService ) {
    this.consultar();

  }
  consultar() {
    this.cfpservice.consultar().subscribe(data =>{
      console.log(data);
    });
  }
  

  ngOnInit() {
    //this.atualizalancamentos();
    /*
    this.atualizarctamensal();
    this.atualizadspsamensal();
    this.atualizasaldomensal();
    */
  }
  //loadData(event){};
/*
  atualizalancamentos(){
    this.tdsLancamentos=[];
    this.http.get<any[]>("http://127.0.0.1:5000/consultar")
    .subscribe( valor => {
      valor.forEach( dados => {
        this.tdsLancamentos.push([dados.tp_registro,dados.valor,dados.categoria,dados.descricao,dados.data]);
       //console.log(dados);
      });
    });
  }
  */
/*
  atualizarctamensal(){
    this.receitasMensal=[];
    this.http.get<any[]>('')
    .subscribe( valor => {
      valor.forEach( dados =>{
        this.receitasMensal.push([dados.receita]);
                  //console.log(dados);
      });
    });
  }

  atualizadspsamensal(){
    this.despesasMensal=[];
    this.http.get<any[]>('')
    .subscribe( valor => {
      valor.forEach( dados =>{
        this.despesasMensal.push([dados.despesa]);
      });
    });
  }
  atualizasaldomensal(){
    this.saldoMensal=[];
    this.http.get<any[]>('')
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
  */
}
