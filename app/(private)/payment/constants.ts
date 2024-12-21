export const URL = {
  pay: "https://securepay.tinkoff.ru/v2/Init",
  payTest: "https://rest-api-test.tinkoff.ru/v2/Init",
  status: "https://securepay.tinkoff.ru/v2/GetState",
};

export const payData = {
  TerminalKey: "TinkoffBankTest",
  Amount: 500,
  OrderId: "21095",
  Description: "Подарочная карта на 1000 рублей",
  Token: "68711168852240a2f34b6a8b19d2cfbd296c7d2a6dff8b23eda6278985959346",
  DATA: {
    Phone: "+71234567890",
    Email: "a@test.com",
  },
  Receipt: {
    Email: "a@test.ru",
    Phone: "+79031234567",
    Taxation: "osn",
    Items: [
      {
        Name: "Наименование товара 1",
        Price: 100,
        Quantity: 1,
        Amount: 100,
        Tax: "vat10",
        Ean13: "303130323930303030630333435",
      },
      {
        Name: "Наименование товара 2",
        Price: 200,
        Quantity: 2,
        Amount: 400,
        Tax: "vat20",
      },
    ],
  },
};

export const payStatus = {
  TerminalKey: "TinkoffBankTest",
  PaymentId: "13660",
  Token: "7241ac8307f349afb7bb9dda760717721bbb45950b97c67289f23d8c69cc7b96",
  IP: "192.168.0.52",
};
