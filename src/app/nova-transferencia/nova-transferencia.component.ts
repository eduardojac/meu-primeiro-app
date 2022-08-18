import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})
export class NovaTransferenciaComponent implements OnInit {
  valor: number;
  destino: number;

  @Output() aoTransferir = new EventEmitter<any>()

  constructor(private service: TransferenciaService, private router: Router) { }

  ngOnInit(): void {
  }

  transferir() {
    console.log('Transferência solicitada...');
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado)
      this.limpar();
      this.router.navigateByUrl('extrato')
    },
    (error: any) => console.log(error)
    )

  }

  limpar() {
    this.valor = 0;
    this.destino = 0;
  }

}
