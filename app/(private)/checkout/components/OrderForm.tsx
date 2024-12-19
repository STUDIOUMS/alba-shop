"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { redirect } from "next/navigation";
import { COURIER_PRICE, EMAIL_PATTERN, ERROR_TEXT } from "@/constants";
import {
  Delivery,
  Face,
  FormOrderValues,
  Payment,
  CheckoutOrder,
} from "@/types";
import CustomBtn from "@/ui/CustomBtn";
import CustomInput from "@/ui/CustomInput";
import {
  CircularProgress,
  FormControlLabel,
  Grid2,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import ChooseFace from "./ChooseFace";
import OrderSection from "./OrderSection";
import OrderCart from "@/components/OrderCart";
import { useOrderStore } from "@/store/useOrderStore";
import { AlertCourier, AlertPickup } from "@/components/Alerts";
import { getOrderToLines, getTotalPrice } from "@/utils/helpers";
import useMutateData from "@/hooks/useMutateData";

const OrderForm = (): JSX.Element => {
  const { orders, setPlacedOrder, deleteAllOrders } = useOrderStore();
  const [face, setFace] = useState<Face>("individual");
  const [delivery, setDelivery] = useState<Delivery>("pickup");
  const [payment, setPayment] = useState<Payment>("online");

  const { mutate, isPending } = useMutateData<CheckoutOrder>({
    key: ["orders"],
    method: "POST",
    uri: "/orders",
  });

  const totalPrice = getTotalPrice(orders);
  const deliveryPrice =
    delivery === "courier" && totalPrice < 1000 ? COURIER_PRICE : 0;
  const totalPriceDelivery = totalPrice + deliveryPrice;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormOrderValues>();

  const placeOrderFunc = (formdata: FormOrderValues) => {
    const newOrder: CheckoutOrder = {
      address: formdata.address,
      clientEmail: formdata.email,
      clientFio: formdata.name,
      clientPhone: formdata.phone,
      deliveryType: delivery === "courier" ? 0 : 1,
      inn: formdata.inn,
      legalEntity: face === "legal",
      products: getOrderToLines(orders),
      note: formdata.addition,
      titleOrganization: formdata.company ? formdata.company : "",
      paymentType: payment,
    };
    mutate(newOrder, {
      onSuccess: (data) => {
        setPlacedOrder(data);
        deleteAllOrders();
        redirect("/basket");
      },
    });
  };

  return (
    <Grid2 container spacing={6}>
      <Grid2 size={{ xs: 12, lg: 8 }}>
        <form onSubmit={handleSubmit(placeOrderFunc)}>
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
                      ...register("email", {
                        required: ERROR_TEXT,
                        pattern: EMAIL_PATTERN,
                      }),
                    },
                  }}
                  error={errors.email ? true : false}
                  helperText={errors.email && errors.email.message}
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
              <CustomInput
                label="Улица, дом, кв"
                fullWidth
                sx={{ m: 0, mt: 4 }}
                slotProps={{
                  input: {
                    ...register("address", { required: ERROR_TEXT }),
                  },
                }}
                error={errors.address ? true : false}
                helperText={errors.address && errors.address.message}
              />
            )}
          </OrderSection>

          <OrderSection title="Оплата">
            <RadioGroup value={payment}>
              {face === "individual" && (
                <>
                  <FormControlLabel
                    value="online"
                    control={
                      <Radio
                        size="small"
                        onChange={() => setPayment("online")}
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
            <CustomBtn type="submit">
              Оформить заказ{" "}
              {isPending && (
                <CircularProgress size={20} color="secondary" sx={{ ml: 3 }} />
              )}
            </CustomBtn>
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
