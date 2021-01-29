import * as fromCard from './cards/cards.reducer';
import {ActionReducer, ActionReducerMap, combineReducers, compose, MetaReducer} from '@ngrx/store';
import {localStorageSync} from 'ngrx-store-localstorage';

export interface State{
  cards: fromCard.State;
}

export const reducers: ActionReducerMap<State> = {
  cards: fromCard.cardReducer,
};


export function reducer(state: any, action: any) {
 return reducers;
}

export function localStorageSyncReducer(red: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['cards'], rehydrate: true})(red);
}

export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];
