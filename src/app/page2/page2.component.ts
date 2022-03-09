import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  container:any;
  configData:string[][]=[];
  config:string[]=[];
  form:any = [];

  From:any;
  To:any;
  message:string="";

  constructor(private shared:SharedService,private routing:Router) { }

  ngOnInit(): void {
    this.container = this.shared.getContainer();
    // console.log(this.container);
    this.container.forEach((obj:any)=>{
      this.configData.push([obj.CORP]);
    })
    this.form = [
      {type:'text',name:'Column Name'},
      {type:'number',name:'Display Name'},
      {type:'email',name:'Sort Order'},
      {type:'password',name:'Date Last Edited'},
      {type:'text',name:'Edit Type'}];

    if(this.container[0].CORP ===""){
      this.routing.navigateByUrl('/page1');
    }
  }
  copyConfig(){
  //  console.log("Copy config",this.config);
   this.configData.forEach((d1,i)=>{
     this.config.forEach((d2,j)=>{
       this.configData[i][j+1] = d2;
     })
   })
  //  console.log(this.configData);
  }
  updateConfig(){
    console.log("update configuration");
    console.log(this.configData);
  }
  customCopyConfig(){
    if(this.From === 0 || this.To === 0 || this.From === this.To){
      // console.log("Not Valid");
      this.message = "Invalid Input!";
    }else{
      this.From--;this.To--;
      if(this.configData[this.From] !== undefined && this.configData[this.To] !== undefined){
        this.configData[this.From].forEach((data,i)=>{
          i!==0 ?this.configData[this.To][i] = data:null;
        })
      }else{
        this.message = "Unable copy Data!";
      }
    }
  }
}
