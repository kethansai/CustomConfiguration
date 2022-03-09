import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  container:[{CORP:string,PL:string,Entity:string,field:string}]=[{CORP:"",PL:"",Entity:"",field:""}];

  constructor() { }
  
  setContainer(data:any){
    this.container = data;
  }
  getContainer(){
    return this.container;
  }
}
