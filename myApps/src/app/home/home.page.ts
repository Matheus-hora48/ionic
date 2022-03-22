import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private navegacao: NavController) { }

  ngOnInit() {
  }

  abrirBotoes(){
    this.navegacao.navigateForward('botoes')
  }

  abrirLista(){
    this.navegacao.navigateForward('lista')
  }

  public titulo: String = "Meu primeiro App"
  public imagemRan: String = "https://source.unsplash.com/800x800"

  public atualiza():void{
    this.titulo = 'Texto alterado'
  }
}
