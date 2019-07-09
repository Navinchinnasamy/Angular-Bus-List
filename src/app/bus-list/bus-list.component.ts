import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  searchText = '';
  buses: Bus[];

  constructor(private busService: BusService) {
  }

  ngOnInit() {
    this.getBuses();
  }

  getBuses(): void {
    this.busService.getBuses()
        .subscribe(buses => {
            this.buses = buses;
        });
  }

  onKey(event: any) { // without type info
    this.searchText = event.target.value;
  }

}
