import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompProcService } from '../compProc.service';

@Component({
  selector: 'app-component-processing-details',
  templateUrl: './compProcDetails.component.html',
  styleUrls: ['./compProcDetails.component.css']
})
export class CompProcDComponent implements OnInit {

  compProcData = {
    name: "",
    contactNumber: "",
    creditCardNumber: "",
    isPriorityRequest: false,
    componentDetail: {
      componentType: "",
      componentName: "",
      quantity: 0
    }
  }

  constructor(private _compProcD: CompProcService, private _router: Router) { }

  ngOnInit(): void {}

  compProcDataSend() {
    
    console.log(this.compProcData)
    this._compProcD.sendData(this.compProcData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('requestId', res.requestId)
          localStorage.setItem('processingCharge', res.processingCharge)
          localStorage.setItem('packagingAndDeliveryCharge', res.packagingAndDeliveryCharge)
          localStorage.setItem('dateOfDelivery', res.dateOfDelivery)
          this._router.navigate([''])
        },
      err => console.log(err)
    )
  }
}