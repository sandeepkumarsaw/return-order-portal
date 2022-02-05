import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { procDetailsService } from '../componentProc.service';

@Component({
  selector: 'app-component-processing-details',
  templateUrl: './procDetails.component.html',
  styleUrls: ['./procDetails.component.css']
})
export class ProcDetailsComponent implements OnInit {
  
  procDetailsData = {
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

  procDetailsResponse:any = []

  constructor(private _compProcD: procDetailsService, private _router: Router) { }

  ngOnInit(): void {}

  postData() {
    console.log(this.procDetailsData)
    this._compProcD.sendProcessDetailData(this.procDetailsData)
      .subscribe(
        res => {
          console.log(res)
          this.procDetailsResponse = res
          this._router.navigate([''])
        },
      err => console.log(err)
    )
  }
}