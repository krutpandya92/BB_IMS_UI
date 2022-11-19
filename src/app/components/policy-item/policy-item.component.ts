import { Component, OnInit, Input } from '@angular/core';

export interface policyItem {
  Id: string;
  policyNo: string;
  type: string;
  providerName: string;
  issueDate: string;
  maturityDate: string;
  paymentCycle: string;
  sumAssured: string;
  userPhoneNumber: string;
  totalInstalmentsPaid: string;
  lastPaymentDate: string;
  expectedRoi: string;
  nominee: string;
  agentName: string;
  nextDueDate: string;
  nextDueAmount: string;
}

@Component({
  selector: 'app-policy-item',
  templateUrl: './policy-item.component.html',
  styleUrls: ['./policy-item.component.css'],
})
export class PolicyItemComponent implements OnInit {
  @Input() policyDataObj = <policyItem>{};
  showPayButton: boolean = false;
  showPayText: string = '';
  DiffDays: number = 0;
  DiffTime: any;
  CurrentDate = new Date();
  DueDate: any;
  constructor() {}

  ngOnInit(): void {
    this.DueDate = new Date('2022-11-30');
    if (this.policyDataObj != null && this.policyDataObj != undefined) {
      this.DiffTime =
        new Date(this.policyDataObj.nextDueDate).getTime() -
        this.CurrentDate.getTime();
      this.DiffDays = parseInt((this.DiffTime / (1000 * 3600 * 24)).toString());

      if (this.DiffDays <= 30) {
        this.showPayButton = true;
        if (this.DiffDays <= 0) {
          this.showPayText = 'Your Policy is Expire. Renew it Now.';
        } else {
          this.showPayText =
            'Your Policy is about Expire In ' + this.DiffDays + ' Days.';
        }
      } else {
        this.showPayButton = false;
        this.showPayText = 'Paid';
      }
    }
  }

  onPayClick(provider: string) {
    window.open('https://licindia.in/Home/Pay-Premium-Online', 'blank');
  }
}
