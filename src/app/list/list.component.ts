import { ElementoService } from './../elemento.service';
import { Elemento } from './../elemento.model';
import { Output, Input, Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor( private elementoService: ElementoService) { }

  ngOnInit() {

              if( this.elemento.status == true){
                this.cor = 'green';
              }
    }
  
  @Input() elemento: Elemento;

  cor:string;

  concluida(){
    this.elemento.status = true;
    console.log(this.elemento.status);

    this.cor = 'green';
    this.elementoService.putStatus(this.elemento)
                        .subscribe(data => {
                                          this.cor = 'green';
                                          console.log(data)
                                        },
                                  error => console.log(error));
  }
  
  deletar(){
    this.elementoService.deleteElement(this.elemento.id)
                        .subscribe(data => {
                          console.log(data)},
                          error => console.log(error));
  }
}
