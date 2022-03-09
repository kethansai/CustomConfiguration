import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  constructor(private shared: SharedService, private router: Router) { }

  message: string = "";
  corporation = ["CORPORATION 1", "CORPORATION 2", "CORPORATION 3", "CORPORATION 4"];
  container: any = [{ CORP: "", PL: "", Entity: "", field: "" }];
  
  setPL(event: any, i: any) {
    this.container[i].PL = event.target.value;
  }
  setEntity(event: any, i: any) {
    this.container[i].Entity = event.target.value;
  }
  setField(event: any, i: any) {
    this.container[i].field = event.target.value;
  }
  addCard(event: any) {
    let corpValue = event.target.value;
    // let checkList = (corpValue: any) => {
    //   return this.container.some((corp:any) => {
    //     return (corpValue === corp.CORP || corpValue ==="")
    //   })
    // }
    // if (this.container[0].CORP === "") {
    //   this.container[0].CORP = corpValue;
    // } else {
    //   if (!checkList(corpValue)) {
    //     this.container.push({ CORP: corpValue, PL: "", Entity: "", field: "" })
    //   }
    // }
    if(this.container[0].CORP === ""){
      this.container[0].CORP = corpValue;
    }else{
      this.container.push({ CORP: corpValue, PL: "", Entity: "", field: "" })
    }
    event.target.value = "";
  }

  delete(i: any) {
    this.container.splice(i, 1);
  }
  compare() {
    const check = () => {
      return this.container.some((obj:any) => {
        return (obj.CORP === "" || obj.Entity === "" || obj.PL === "" || obj.field === "");
      })
    }
    if (!check()) {
      this.shared.setContainer(this.container);
      this.router.navigateByUrl('/page2');
    } else {
      this.message = "Required All fields";
    }
    // this.shared.setContainer(this.container);
    // this.router.navigateByUrl('/page2');
  }


}
