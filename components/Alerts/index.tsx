import { Alert, AlertProps, Typography } from "@mui/material";
import { COURIER_PRICE } from "@/constants";

export const AlertPickup = (props: AlertProps): JSX.Element => {
  return (
    <Alert color="info" severity="info" {...props}>
      <b>Адрес:</b> г.Тюмень, ул. Коммунистическая, 70, корп. 3, стр. 6
      <br />
      <b>Время доставки:</b> с 10-00 по 18-00 (Пн-Сб)
    </Alert>
  );
};

export const AlertCourier = (props: AlertProps): JSX.Element => {
  return (
    <Alert color="info" severity="info" {...props}>
      Курьерcкая доставка <b>{COURIER_PRICE}₽</b> при заказе до 1000₽, свыше -{" "}
      <b>бесплатно</b>
    </Alert>
  );
};

export const AlertDelivery = (props: AlertProps): JSX.Element => {
  return (
    <Alert color="info" severity="info" {...props}>
      <div style={{ marginBottom: 12 }}>
        <b>Адрес:</b> г.Тюмень, ул. Коммунистическая, 70, корп. 3, стр. 6<br />
        <b>Время доставки:</b> с 10-00 по 18-00 (Пн-Сб)
      </div>
      <div>
        Курьерcкая доставка <b>{COURIER_PRICE}₽</b> при заказе до 1000₽, свыше -{" "}
        <b>бесплатно</b>
      </div>
    </Alert>
  );
};
