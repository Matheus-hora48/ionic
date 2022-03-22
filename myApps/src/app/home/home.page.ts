import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public titulo: String = "Meu primeiro App"
  public imagemRan: String = "https://source.unsplash.com/800x800"

  public atualiza():void{
    this.titulo = 'Texto alterado'
  }
}
