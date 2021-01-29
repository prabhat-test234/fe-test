import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ICreditCardDetails } from 'src/app/models/CreditCardDetails';
import { State } from 'src/app/state';
import { loadCardDetails } from 'src/app/state/cards/cards.action';
import { selectCardLoading, selectCards } from 'src/app/state/cards/cards.selector';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subscriptions: Array<Subscription> = [];
  isLoaded$: Observable<boolean>;
  displayedColumns: string[] = ['sno', 'cardNumber','cardHolder', 'expirationDate', 'securityCode', 'amount'];
  dataSource = new MatTableDataSource<any>();


  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.subscriptions.push(this.store.pipe(
      select(selectCards),
    ).subscribe(cards => {
      this.dataSource = new MatTableDataSource<ICreditCardDetails>(cards);
    }));
    this.isLoaded$ = this.store.pipe(select(selectCardLoading));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
