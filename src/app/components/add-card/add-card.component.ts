import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ICreditCardDetails } from 'src/app/models/CreditCardDetails';
import { CardService } from 'src/app/services/card.service';
import { State } from 'src/app/state';
import { addCardSuccess } from 'src/app/state/cards/cards.action';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = [];
  constructor(private fb: FormBuilder, private cardService: CardService, private store: Store<State>,
              private router: Router) { }

  cardForms = this.fb.group({
    cardNumber: ['', Validators.required],
    cardHolder: ['', Validators.required],
    expirationDate: [null, Validators.required],
    securityCode: [''],
    amount: ['', [Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.min(1)]]
  })
  today =  new Date();
  toDateMinValue = new Date(this.today.setDate(this.today.getDate() + 1));

  ngOnInit(): void {
  }

  onSubmit() {
    const card: ICreditCardDetails = this.cardForms.value;
    const sub = this.cardService.addCreditcard(card).subscribe(res => {
      this.store.dispatch(addCardSuccess({card}));
    });
    this.subscriptions.push(sub);
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
