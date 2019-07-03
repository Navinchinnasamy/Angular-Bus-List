import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
var BussesList = require('../../assets/busses.json');

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  searchText: String = "";
  busses: Bus[] = BussesList;

  constructor() {
  }

  ngOnInit() {
  }
  
  onKey(event: any) { // without type info
    this.searchText = event.target.value;
  }

}
