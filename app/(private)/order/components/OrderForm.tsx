"use client";

import { COURIER_PRICE, ERROR_TEXT } from "@/constants";
import {
  Delivery,
  Face,
  FormOrderValues,
  Payment,
  CreatedOrder,
} from "@/types";
import CustomBtn from "@/ui/CustomBtn";
import CustomInput from "@/ui/CustomInput";
import {
  FormControlLabel,
  Grid2,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ChooseFace from "./ChooseFace";
import OrderSection from "./OrderSection";
import OrderCart from "@/components/OrderCart";
import Link from "next/link";
import { useOrderStore } from "@/store/useOrderStore";
import { AlertCourier, AlertPickup } from "@/components/Alerts";
import { getTotalPrice } from "@/utils/helpers";

const OrderForm = (): JSX.Element => {
  const { orders } = useOrderStore();
  const [face, setFace] = useState<Face>("individual");
  const [delivery, setDelivery] = useState<Delivery>("pickup");
  const [payment, setPayment] = useState<Payment>("acquiring");

  const totalPrice = getTotalPrice(orders);
  const deliveryPrice =
    delivery === "courier" && totalPrice < 1000 ? COURIER_PRICE : 0;
  const totalPriceDelivery = totalPrice + deliveryPrice;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormOrderValues>();

  const placeOrder = (data: FormOrderValues) => {
    const newOrder: CreatedOrder = {
      addition: data.addition,
      name: data.name,
      phone: data.phone,
      address: data.address,
      city: data.city,
      company: data.company,
      email: data.email,
      inn: data.inn,
      delivery,
      deliveryPrice,
      list: orders,
      payment,
      price: totalPrice,
      status: "waiting",
      total: totalPriceDelivery,
    };
    console.log(newOrder);
  };

  return (
    <Grid2 container spacing={6}>
      <Grid2 size={{ xs: 12, lg: 8 }}>
        <form onSubmit={handleSubmit(placeOrder)}>
          <OrderSection title="Личные данные">
            <ChooseFace face={face} setFace={setFace} setPayment={setPayment} />

            <Grid2 container spacing={6}>
              <Grid2 size={{ xs: 12, lg: 6 }}>
                <CustomInput
                  label="Ваше ФИО *"
                  fullWidth
                  sx={{ m: 0 }}
                  error={errors.name ? true : false}
                  helperText={errors.name && errors.name.message}
                  slotProps={{
                    input: {
                      ...register("name", { required: ERROR_TEXT }),
                    },
                  }}
                />
              </Grid2>

              <Grid2 size={{ xs: 12, lg: 6 }}>
                <CustomInput
                  type="email"
                  label="E-mail"
                  fullWidth
                  sx={{ m: 0 }}
                  slotProps={{
                    input: {
                      ...register("email"),
                    },
                  }}
                />
              </Grid2>

              <Grid2 size={{ xs: 12, lg: 6 }}>
                <CustomInput
                  type="tel"
                  label="Телефон *"
                  fullWidth
                  sx={{ m: 0 }}
                  slotProps={{
                    input: {
                      ...register("phone", { required: ERROR_TEXT }),
                    },
                  }}
                  error={errors.phone ? true : false}
                  helperText={errors.phone && errors.phone.message}
                />
              </Grid2>

              {face === "legal" && (
                <>
                  <Grid2 size={{ xs: 12, lg: 6 }}>
                    <CustomInput
                      label="ИНН организации"
                      fullWidth
                      sx={{ m: 0 }}
                      slotProps={{
                        input: {
                          ...register("inn", { required: ERROR_TEXT }),
                        },
                      }}
                      error={errors.inn ? true : false}
                      helperText={errors.inn && errors.inn.message}
                    />
                  </Grid2>

                  <Grid2 size={{ xs: 12, lg: 6 }}>
                    <CustomInput
                      label="Название организации"
                      fullWidth
                      sx={{ m: 0 }}
                      slotProps={{
                        input: {
                          ...register("company", { required: ERROR_TEXT }),
                        },
                      }}
                      error={errors.company ? true : false}
                      helperText={errors.company && errors.company.message}
                    />
                  </Grid2>
                </>
              )}
            </Grid2>
          </OrderSection>

          <OrderSection title="Доставка">
            <RadioGroup sx={{ mb: 4 }} value={delivery}>
              <FormControlLabel
                value="pickup"
                control={
                  <Radio size="small" onChange={() => setDelivery("pickup")} />
                }
                label="Самовывоз"
              />
              <FormControlLabel
                value="courier"
                control={
                  <Radio size="small" onChange={() => setDelivery("courier")} />
                }
                label={`Курьерcкая доставка - ${
                  totalPrice > 1000 ? 0 : COURIER_PRICE
                }₽`}
              />
            </RadioGroup>
            {delivery === "pickup" && <AlertPickup />}
            {delivery === "courier" && <AlertCourier />}
            {delivery === "courier" && (
              <Grid2 container spacing={6} sx={{ mt: 6 }}>
                <Grid2 size={{ xs: 12, lg: 6 }}>
                  <CustomInput
                    label="Город"
                    fullWidth
                    sx={{ m: 0 }}
                    slotProps={{
                      input: {
                        ...register("city", { required: ERROR_TEXT }),
                      },
                    }}
                    error={errors.city ? true : false}
                    helperText={errors.city && errors.city.message}
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 6 }}>
                  <CustomInput
                    label="Улица, дом, кв"
                    fullWidth
                    sx={{ m: 0 }}
                    slotProps={{
                      input: {
                        ...register("address", { required: ERROR_TEXT }),
                      },
                    }}
                    error={errors.address ? true : false}
                    helperText={errors.address && errors.address.message}
                  />
                </Grid2>
              </Grid2>
            )}
          </OrderSection>

          <OrderSection title="Оплата">
            <RadioGroup value={payment}>
              {face === "individual" && (
                <>
                  <FormControlLabel
                    value="acquiring"
                    control={
                      <Radio
                        size="small"
                        onChange={() => setPayment("acquiring")}
                      />
                    }
                    label="Оплатить онлайн"
                  />
                  <FormControlLabel
                    value="delivery-card"
                    control={
                      <Radio
                        size="small"
                        onChange={() => setPayment("delivery-card")}
                      />
                    }
                    label="Оплата при доставке (Картой курьеру)"
                  />
                  <FormControlLabel
                    value="delivery-cash"
                    control={
                      <Radio
                        size="small"
                        onChange={() => setPayment("delivery-cash")}
                      />
                    }
                    label="Оплата при доставке (Наличными курьеру)"
                  />
                </>
              )}
              {face === "legal" && (
                <>
                  <FormControlLabel
                    value="bill"
                    control={
                      <Radio size="small" onChange={() => setPayment("bill")} />
                    }
                    label="Оплата по счету без НДС"
                  />
                  <FormControlLabel
                    value="bill-nds"
                    control={
                      <Radio
                        size="small"
                        onChange={() => setPayment("bill-nds")}
                      />
                    }
                    label="Оплата по счету с НДС"
                  />
                </>
              )}
            </RadioGroup>
          </OrderSection>

          <OrderSection title="Примечание к заказу">
            <CustomInput
              label="Ваш текст"
              rows={4}
              multiline
              fullWidth
              sx={{ m: 0 }}
              slotProps={{
                input: {
                  ...register("addition"),
                },
              }}
            />
          </OrderSection>

          <Stack direction="row" justifyContent="space-between">
            <Link href="/basket" passHref>
              <CustomBtn variant="outlined" color="secondary">
                Вернуться в корзину
              </CustomBtn>
            </Link>
            <CustomBtn type="submit">Оформить заказ</CustomBtn>
          </Stack>
        </form>
      </Grid2>

      <Grid2 size={{ xs: 12, lg: 4 }}>
        <OrderCart
          delivery={delivery}
          deliveryPrice={deliveryPrice}
          orders={orders}
          totalPrice={totalPriceDelivery}
        />
      </Grid2>
    </Grid2>
  );
};

export default OrderForm;
