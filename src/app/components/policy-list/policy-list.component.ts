import { Component, OnInit, Input } from '@angular/core';
import { policyItem } from '../policy-item/policy-item.component';
import data from './../../config/data.json';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css'],
})
export class PolicyListComponent implements OnInit {
  policyDataList: policyItem[] = data;

  constructor() { }

  ngOnInit(): void { }
}
