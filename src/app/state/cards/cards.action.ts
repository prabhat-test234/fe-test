import { createAction, props } from '@ngrx/store';
import { ICreditCardDetails } from 'src/app/models/CreditCardDetails';



export const loadCardDetails = createAction('[Card] load');
export const loadCardSuccess = createAction('[Card] load success', props<{ cards: Array<ICreditCardDetails> }>());
export const loadCardFailure = createAction('[Card] load failure', props<{ error: string }>());

// export const addCard = createAction('[Card] add', props<{ card: ICreditCardDetails }>());
export const addCardSuccess = createAction('[Card] add success', props<{ card: ICreditCardDetails }>());
export const addCardFailure = createAction('[Card] add failure', props<{ error: string }>());