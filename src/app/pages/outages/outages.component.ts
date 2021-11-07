import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-outages',
  templateUrl: './outages.component.html',
  styleUrls: ['./outages.component.scss']
})
export class OutagesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
  }

}
