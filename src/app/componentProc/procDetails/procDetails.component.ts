import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentProcService } from '../componentProc.service';

@Component({
  selector: 'app-component-processing-details',
  templateUrl: './procDetails.component.html',
  styleUrls: ['./procDetails.component.css']
})
export class ProcDetailsComponent implements OnInit {
  
  dispProcDetails = true;

  procDetailsData = {
    name: null,
    contactNumber: null,
    creditCardNumber: null,
    isPriorityRequest: false,
    componentDetail: {
      componentType: null,
      componentName: null,
      quantity: null
    }
  }

  procDetailsRes = {
    requestId: null,
    processingCharge: null,
    packagingAndDeliveryCharge: null,
    dateOfDelivery: null
  }

  completeProcDetails = {
    requestId: null,
    creditCardNumber: null,
    creditLimit: null,
    processingCharge: null
  }

  completeProcRes = "";

  constructor(private _compProcD: ComponentProcService, private _router: Router) { }

  ngOnInit(): void {}

  postprocDetailsData() {
    console.log(this.procDetailsData)
    this._compProcD.sendProcessDetailData(this.procDetailsData)
      .subscribe(
        res => {
          console.log(res)
          this.procDetailsRes.requestId = res.requestId
          this.procDetailsRes.processingCharge = res.processingCharge
          this.procDetailsRes.packagingAndDeliveryCharge = res.packagingAndDeliveryCharge
          this.procDetailsRes.dateOfDelivery = res.dateOfDelivery
          this.dispProcDetails = false
          // this._router.navigate([''])
        },
      err => console.log(err)
    )
  }

  postCompleteProcDetails() {
    this.completeProcDetails.requestId = this.procDetailsRes.requestId
    this.completeProcDetails.creditCardNumber  = this.procDetailsData.creditCardNumber
    this.completeProcDetails.processingCharge = this.procDetailsRes.processingCharge

    console.log(this.completeProcDetails)
    
    this._compProcD.sendCompleteProcData(this.completeProcDetails)
      .subscribe(
        res => {
          console.log(res)
          this.completeProcRes = res.res
          // this._router.navigate([''])
        },
      err => console.log(err)
    )
  }
}