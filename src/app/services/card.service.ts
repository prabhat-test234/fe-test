import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { ICreditCardDetails } from '../models/CreditCardDetails';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  public static newCard: ICreditCardDetails;
  public errors = [];

  constructor(private http: HttpClient) {
  }

  addCreditcard(card: ICreditCardDetails) {
    // console.log(card)
    return this.http.post('http://localhost:4200/add', card);
  }


}
