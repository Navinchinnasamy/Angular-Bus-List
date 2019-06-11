import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import BussesList from '../../assets/busses.json';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  busses: Bus[] = BussesList;

  constructor() { 
    console.log(BussesList);
  }

  ngOnInit() {
  }

}
