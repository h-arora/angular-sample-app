import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'marco-polo-problem',
  templateUrl: './marco-polo-problem.component.html',
  styleUrls: ['./marco-polo-problem.component.scss']
})
export class MarcoPoloProblemComponent implements OnInit {

  from;
  to;
  cheatsheet;

  constructor() { }

  ngOnInit() {
  }

  getResult(){
    this.cheatsheet = this.getMarcoPoloCheatsheet(this.from, this.to);
  }

  private getMarcoPoloCheatsheet(from:number, to:number){
    let cheatsheet = "";

    for(let i = from; i<= to; i++){
      if(i%4 == 0 && i%7 == 0){
        cheatsheet += "marcopolo";
      }
      else if(i%4 == 0){
        cheatsheet += "marco";
      }
      else if (i%7 == 0){
        cheatsheet += "polo"
      }
      else {
        cheatsheet += i;
      }
      cheatsheet += ", ";
    }

    return cheatsheet;
  }



}
