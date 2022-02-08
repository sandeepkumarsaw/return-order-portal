import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ComponentProcService } from '../componentProc.service';

@Component({
  selector: 'app-component-processing-details',
  templateUrl: './procDetails.component.html',
  styleUrls: ['./procDetails.component.css']
})

export class ProcDetailsComponent implements OnInit {
  
  dispProcDetails = true
  completeProcRes = ""

  procDetailsForm: FormGroup

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

  constructor(private _compProcD: ComponentProcService, private _formBuil: FormBuilder, private _router: Router) {}

  ngOnInit(): void {
    
    this.procDetailsForm = this._formBuil.group({
      name: [null, [Validators.pattern(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/), Validators.required]],
      contactNumber: [null, [Validators.pattern(/((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/), Validators.required]],
      creditCardNumber: ["admincard", Validators.required],
      creditLimit: [1000, [Validators.min(1), Validators.required]],
      isPriorityRequest: [false],
      
      componentDetail: this._formBuil.group({
        componentType: ["Accessory"],
        componentName: [null, Validators.required],
        quantity: [1, Validators.min(1)]
      })
    })
  }

  postprocDetailsForm() {

    console.log(this.procDetailsForm)

    if(!this.procDetailsForm.valid) { return }
    
    let procDetailsObj = {
      name: this.procDetailsForm.get('name').value,
      contactNumber: this.procDetailsForm.get('contactNumber').value,
      creditCardNumber: this.procDetailsForm.get('creditCardNumber').value,
      isPriorityRequest: this.procDetailsForm.get('isPriorityRequest').value,
      
      componentDetail: {
        componentType: this.procDetailsForm.get('componentDetail').get('componentType').value,
        componentName: this.procDetailsForm.get('componentDetail').get('componentName').value,
        quantity: this.procDetailsForm.get('componentDetail').get('quantity').value
      }
    }

    console.log(procDetailsObj)
    
    this._compProcD.sendProcessDetailData(procDetailsObj)
      .subscribe(
        res => {
          console.log(res)
          this.procDetailsRes.requestId = res.requestId
          this.procDetailsRes.processingCharge = res.processingCharge
          this.procDetailsRes.packagingAndDeliveryCharge = res.packagingAndDeliveryCharge
          this.procDetailsRes.dateOfDelivery = res.dateOfDelivery
          this.dispProcDetails = false
        },
      err => console.log(err)
    )
  }

  postCompleteProcDetails() {
    this.completeProcDetails.requestId = this.procDetailsRes.requestId
    this.completeProcDetails.creditCardNumber  = this.procDetailsForm.get('creditCardNumber').value
    this.completeProcDetails.creditLimit  = this.procDetailsForm.get('creditLimit').value
    this.completeProcDetails.processingCharge = this.procDetailsRes.processingCharge

    console.log(this.completeProcDetails)
    
    this._compProcD.sendCompleteProcData(this.completeProcDetails)
      .subscribe(
        res => {
          console.log(res)
          this.completeProcRes = res.res
        },
      err => {
        console.log(err)
        this.completeProcRes = err.err.statusText
      }
    )
  }
}