import {Component, OnInit} from '@angular/core';
import {Bus} from '../bus';
import {BusService} from '../bus.service';

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
	shownow: boolean = false;

  constructor(private busService: BusService) {
	setInterval(() => {
	  this.getCurrentTime();
	}, 1000);
	  setInterval(() => {
		  this.getBusesNow();
	  }, (30 * 1000));
  }

  ngOnInit() {
  }

  getCurrentTime(): void {
	  const dt = new Date();
	let hrs = dt.getHours();
	  const mns = dt.getMinutes();
	  const mrd = (hrs >= 12) ? 'PM' : 'AM';
	hrs 	= (hrs % 12);
	  hrs = hrs ? hrs : 12;
	this.hrs = hrs;
	this.mns = mns;
	this.mrd = mrd;
	this.currentTime = `${hrs}:${mns} ${mrd}`;
  }

  getBusesNow(): void {
	  this.busService.getBuses()
		  .subscribe(buses => {
			  this.busesnow = buses.filter((b) => {
				  const tmp = b.timing.split(':');
				  const tmp1 = tmp[1].split(' ');
				  return (parseInt(tmp[0]) == this.hrs && parseInt(tmp1[0]) >= this.mns && parseInt(tmp1[0]) < (this.mns + 10));
			  });
			  this.shownow = (this.busesnow.length > 0) ? true : false;
		  });
  }
}
