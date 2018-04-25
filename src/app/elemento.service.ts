import { Elemento } from './elemento.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ElementoService{
    constructor(private http: Http){}

    url: string = "http://rest.learncode.academy/api/bruna/to-do";
    list: Elemento [] = []

    getElementos(){
        return this.http.get(this.url)
                        .map((response:Response) => {
                            this.list = [];
                            for(let elemento of response.json()){
                                this.list.push(new Elemento(elemento.nome, elemento.id, elemento.status))
                            }
                            return this.list
                        })
                        .catch((error:Response)=> Observable.throw(error));
    }

    addElemento(elemento: Elemento){
        return this.http.post(this.url, elemento)
                        .map((response:Response)=> { response.json()
                                                     this.list.push(elemento);
                                                })
                        .catch((error: Response)=> Observable.throw(error));
    }

    putStatus(elemento: Elemento){
        return this.http.put((this.url + "/" + elemento.id), elemento);
    }

    deleteElement(id){
        return this.http.delete((this.url + "/" + id), id)
            .map((response: Response) => {
                for ( let i = 0; i < this.list.length; i++ ){
                    if( this.list[i].id == id){
                        this.list.splice(i, 1);
                    }
                }
                return response.text;
            })
            .catch((error: Response) => Observable.throw(error));
    };
}