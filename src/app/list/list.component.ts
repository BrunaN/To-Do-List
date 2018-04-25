import { ElementoService } from './../elemento.service';
import { Elemento } from './../elemento.model';
import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor( private elementoService: ElementoService) { }

  ngOnInit() {
    }
  
  @Input() elemento: Elemento;
  cor:string;

  concluida(){
    this.elemento.status = true;
    console.log(this.elemento.status);

    this.cor = 'green';
    this.elementoService.putStatus(this.elemento)
                        .subscribe(data => {
                          console.log(data)},
                          error => console.log(error));
  }
  
  deletar(){
    this.elementoService.deleteElement(this.elemento.id);
  }
}
