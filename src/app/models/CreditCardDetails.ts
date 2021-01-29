export interface ICreditCardDetails {
  cardNumber: string;
  cardHolder: string;
  expirationDate: Date;
  securityCode?: string;
  amount: number;
}