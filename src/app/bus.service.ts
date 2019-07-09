import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Bus } from './bus';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BusService {
  private busUrl = 'api/buses';

  constructor(
      private http: HttpClient,
      private messageService: MessageService
  ) { }

  // GET: List of all Buses
  getBuses(): Observable<Bus[]> {
    return this.http.get<Bus[]>(this.busUrl).pipe(
        tap(_ => this.log('Buses List Fetched.')),
        catchError(this.handleError<Bus[]>('getBuses', []))
    );
  }

  // GET: Bus whose name contains search term
  searchBuses(term: string): Observable<Bus[]> {
    if (!term.trim()) {
      // If not search term return empty Bus array
      return of([]);
    }

    return this.http.get<Bus[]>(`${this.busUrl}/?bus=${term}`).pipe(
        tap(_ => this.log(`Found buses whose name matching the term ${term}`)),
        catchError(this.handleError<Bus[]>('searchBuses', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as Observable result
   */
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      // TODO: Send the error to remote logging infrastructure
      console.error(error);

      // TODO: Better job of transforming the error to user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`BusService: ${message}`);
  }
}
