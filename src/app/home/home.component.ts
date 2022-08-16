import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  valor: number;
  destino: number;

  @Output() aoTransferir =  new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  transferir() {
    console.log('Transferência solicitada...');
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
    this.limpar();
  }

  limpar() {
    this.valor = 0;
    this.destino = 0;
  }

}
