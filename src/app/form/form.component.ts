import { ElementoService } from './../elemento.service';
import { Component, OnInit } from '@angular/core';
import { Elemento } from '../elemento.model';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor( private elementoService: ElementoService) { }

  ngOnInit() {
    this.up_date();
  }

  list: Elemento [] = [];

  inputElemento: string = "";
  id: string;
  status: boolean = false;

  up_date(){
    this.list = [];
    this.elementoService.getElementos()
                        .subscribe(data=>{
                                          this.list = data
                                        }),
                                  (error=> console.log(error));
  }

  adicionar(){
    if(this.inputElemento == ""){
      return;
    }
    this.elementoService.addElemento(new Elemento(this.inputElemento, this.id, this.status))
                        .subscribe(data => { this.up_date() 
                                          this.inputElemento= ""}),
                                  (error => console.log(error));
    
  }
}
