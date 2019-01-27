import { Component, OnInit } from '@angular/core';
import { InvoiceProcessorService } from 'src/app/services/invoice-processor.service';

@Component({
  selector: 'invoice-processor',
  templateUrl: './invoice-processor.component.html',
  styleUrls: ['./invoice-processor.component.scss']
})
export class InvoiceProcessorComponent implements OnInit {

  invoiceNumbers:string[];
  selectedFile;

  constructor(private invoiceProcessor:InvoiceProcessorService){

  }

  ngOnInit(){

  }

  onProcess(){
    if(this.selectedFile){
      let reader = new FileReader();
      reader.onload = (event)=>{
        this.invoiceNumbers = this.invoiceProcessor.processInvoice(reader.result);
      }
      reader.readAsText(this.selectedFile);
    }
  }

  onFileChange(event){
    if(event && event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];    
    }
  }

}
