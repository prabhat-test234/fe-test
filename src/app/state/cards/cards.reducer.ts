import * as Actions from './cards.action';
import {Action, createReducer, on} from '@ngrx/store';
import { ICreditCardDetails } from 'src/app/models/CreditCardDetails';

export interface State{
  cards: Array<ICreditCardDetails>;
  isLoaded: boolean;
}

export const initialState: State = {
  cards: [],
  isLoaded: false
};

const reducer = createReducer(
  initialState,
  on(Actions.loadCardSuccess, (state, {cards}) => ({...state, cards, isLoaded: true})),
  on(Actions.addCardSuccess, (state, {card}) => ({
    ...state,
    cards: [...state.cards, card],
    isLoaded: true
  })),
);

export function cardReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
