import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-buses-now',
  templateUrl: './buses-now.component.html',
  styleUrls: ['./buses-now.component.css']
})
export class BusesNowComponent implements OnInit {
  currentTime: string;
  hrs: number;
  mns: number;
  mrd: string;
  busesnow: Bus[] = [];

  constructor(private busService: BusService) {
	setInterval(() => {
	  this.getCurrentTime();
	}, 1000);
  }

  ngOnInit() {
	setInterval(() => {
	  this.getBusesNow();
	}, (5*60*1000));
  }

  getCurrentTime(): void {
	let dt = new Date();
	let hrs = dt.getHours();
	let mns = dt.getMinutes();
	let mrd = (hrs >= 12) ? 'PM' : 'AM';
	hrs 	= (hrs % 12);
	hrs 	= hrs ? hrs : '12';
	this.hrs = hrs;
	this.mns = mns;
	this.mrd = mrd;
	this.currentTime = `${hrs}:${mns} ${mrd}`;
  }
  
  getBusesNow(): void {
	this.busService.searchBuses(`${this.hrs}:${this.mns} ${this.mrd}`)
		.subscribe(buses => this.busesnow = buses);
  }
}
