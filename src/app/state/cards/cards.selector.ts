import {State} from '../index';
import { createSelector } from '@ngrx/store';
import * as fromCard from './cards.reducer';


export const selectCard = (state: State) => state.cards;

export const selectCards = createSelector(selectCard, (state: fromCard.State) => state.cards);
export const selectCardLoading = createSelector(selectCard, (state: fromCard.State) => state.isLoaded);
