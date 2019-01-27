import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceProcessorService {

  constructor() { }


  processInvoice(fileData):string[]{
    if(!fileData){
      return [];
    }
    let lines = fileData.split("\n");
    return this.getNumbersAfterConversion(lines);
  }

  private getNumbersAfterConversion(lines:string[]):string[]{
    let numbers = [];
    let binaryDigits = [];

    lines.forEach((line, index)=> {
      let chars = line.split("");
      if(index%4 == 0) {
        //process top line of digit
        binaryDigits = [];
        for(let i=1, j=0; i<chars.length; i+=3, j++){
          if(chars[i]==="_"){
            binaryDigits[j] ? binaryDigits[j] += '1':binaryDigits.push('1');
          }else{
            binaryDigits[j] ? binaryDigits[j] += '0':binaryDigits.push('0');
          }
        }
      }else if(index%4 != 3){
        //process 2nd and 3rd line
        for(let i1=0, j1=0; i1<chars.length ; i1++){
           //increment j after every 3 iters
           if(i1>0 && (i1%3 == 0)){
            j1++;
          }
          if(chars[i1]==="_" || chars[i1]==="|") {
             binaryDigits[j1] += '1';
          }else{
            binaryDigits[j1] += '0';
          }
        }
      }else {
        console.log("skipping blank line, storing processed number");
        let number = "";
        binaryDigits.forEach((binaryDigit)=>{
          number += SEVEN_SEG_BINARY_MAP[binaryDigit];
        })
        numbers.push(number);
      }
      
    })

    return numbers;
  }


}


const SEVEN_SEG_BINARY_MAP = {
  "1101111":0,
  "0001001":1,
  "1011110":2,
  "1011011":3,
  "0111001":4,
  "1110011":5,
  "1110111":6,
  "1001001":7,
  "1111111":8,
  "1111011":9
}
