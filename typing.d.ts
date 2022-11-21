export type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  startAddress: string;
  squareMeters: string;
  extraSquareMeters?: string;
  bulkyItems?: boolean;
  finalAddress: string;
  helpForPackingYes: string;
  helpForPackingNo: string;
};
type Offer = {
  distance: string;
  offer: number;
  offerNumber: string;
};
export type OfferDetails = Inputs & Offer;
