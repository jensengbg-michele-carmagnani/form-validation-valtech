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

export type Uuidv4 = {
  uuidv4: string | number | bigint | undefined | object | function;
};
