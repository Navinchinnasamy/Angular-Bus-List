import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterPipe} from './filter.pipe';
import { BusListComponent } from './bus-list/bus-list.component';

@NgModule({
  declarations: [
    AppComponent,
	FilterPipe,
    BusListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
