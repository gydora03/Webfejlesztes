import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GuessService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getGuessList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'guesses-list');
  }

  createGuess(guess: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-guess', guess);
  }

  deleteGuess(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-guess/${id}`, { responseType: 'text' });
  }

  getGuess(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/guess/${id}`);
  }

  updateGuess(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-guess/${id}`, value);
  }

}
