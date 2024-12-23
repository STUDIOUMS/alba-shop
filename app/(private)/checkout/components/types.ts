export type PayDataItem = {
  Name: string;
  Price: number;
  Quantity: number;
  Amount: number;
  Tax: "vat10" | "vat20";
  Ean13?: string;
};

export type PayData = {
  TerminalKey: "TinkoffBankTest";
  Amount: number;
  OrderId: string;
  Description: string;
  Token: string;
  DATA: {
    Phone: string;
    Email: string;
  };
  Receipt: {
    Email: string;
    Phone: string;
    Taxation: string;
    Items: PayDataItem[];
  };
};

export type PaymentResponse = {
  Success: boolean;
  ErrorCode: number;
  TerminalKey: string;
  Status: string;
  PaymentId: string;
  OrderId: string;
  Amount: number;
  PaymentURL: string;
};
