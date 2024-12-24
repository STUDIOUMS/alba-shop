export type PayDataItem = {
  Name: string;
  Price: number;
  Quantity: number;
  Amount: number;
  Tax: "none" | "vat0" | "vat10" | "vat20" | "vat110" | "vat120";
  Ean13?: string;
};

export type PayData = {
  TerminalKey: string;
  Amount: number;
  OrderId: string;
  Description: string;
  Token: string;
  DATA: {
    Phone: string;
    Email: string;
  };
  CustomerKey?: string;
  SuccessURL?: string;
  FailURL?: string;
  Receipt?: {
    Email: string;
    Phone: string;
    Taxation:
      | "osn"
      | "usn_income"
      | "usn_income_outcome"
      | "envd"
      | "esn"
      | "patent";
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
