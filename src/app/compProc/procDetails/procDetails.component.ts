import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { procDetailsService } from '../compProc.service';

@Component({
  selector: 'app-component-processing-details',
  templateUrl: './procDetails.component.html',
  styleUrls: ['./procDetails.component.css']
})
export class ProcDetailsComponent implements OnInit {

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

  constructor(private _compProcD: procDetailsService, private _router: Router) { }

  ngOnInit(): void {}

  postData() {
    
    console.log(this.compProcData)
    this._compProcD.sendProcessDetailData(this.compProcData)
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