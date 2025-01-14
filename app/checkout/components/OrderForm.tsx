"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { COURIER_PRICE, FORM_SETTINGS } from "@/constants";
import { FormOrderValues } from "@/types";
import CustomInput from "@/ui/CustomInput";
import { FormControlLabel, Grid2, Radio, RadioGroup } from "@mui/material";
import ChooseEntity from "./ChooseEntity";
import OrderSection from "./OrderSection";
import OrderCart from "@/components/OrderCart";
import { useOrderStore } from "@/store/useOrderStore";
import { AlertCourier, AlertPickup } from "@/components/Alerts";
import { getTotalPrice } from "@/utils/helpers";
import useMutateData from "@/hooks/useMutateData";
import { useMask } from "@react-input/mask";
import { TEXTS } from "@/texts";
import { CheckoutOrder, Delivery, Entity, Payment, SuccessfulOrder } from "./types";
import { createNewOrder } from "./utils";
import SuccessScreen from "@/components/SuccessScreen";
import OrderFormButtons from "./OrderFormButtons";
import { redirect } from "next/navigation";

const OrderForm = (): JSX.Element => {
  const { orders, deleteAllOrders } = useOrderStore();
  const [entity, setEntity] = useState<Entity>("individual");
  const [delivery, setDelivery] = useState<Delivery>("pickup");
  const [payment, setPayment] = useState<Payment>("online");
  const [success, setSuccess] = useState<SuccessfulOrder | null>(null);
  const phoneRef = useMask(FORM_SETTINGS.mask);

  const { mutate, isPending } = useMutateData<CheckoutOrder, SuccessfulOrder>({
    key: ["orders"],
    method: "POST",
    uri: "/orders/",
  });

  const { deliveryPrice, totalPrice, totalWithDelivery } = useMemo(
    () => getTotalPrice(orders, delivery),
    [orders, delivery]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormOrderValues>();

  const placeOrderFunc = async (formdata: FormOrderValues) => {
    const newOrder = createNewOrder(formdata, entity, delivery, payment, orders);
    mutate(newOrder, {
      onSuccess: (data) => {
        if (payment !== "online") {
          setSuccess(data);
          deleteAllOrders();
        } else {
          if (data.paymentUrl) {
            window.open(data.paymentUrl, "_self");
          }
        }
      },
    });
  };

  if (!!success) return <SuccessScreen placedOrder={success} />;
  if (!success && !orders.length) redirect("/basket");

  return (
    <Grid2 container spacing={6}>
      <Grid2 size={{ xs: 12, lg: 8 }}>
        <form onSubmit={handleSubmit(placeOrderFunc)}>
          <OrderSection title="Личные данные">
            <ChooseEntity entity={entity} setFace={setEntity} setPayment={setPayment} />

            <Grid2 container spacing={4}>
              <Grid2 size={{ xs: 12, lg: 6 }}>
                <CustomInput
                  label="Ваше ФИО *"
                  fullWidth
                  sx={{ m: 0 }}
                  error={errors.name ? true : false}
                  helperText={errors.name && errors.name.message}
                  slotProps={{
                    input: {
                      ...register("name", { required: TEXTS.forms.errorText }),
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
                      ...register("email", FORM_SETTINGS.email),
                    },
                  }}
                  error={errors.email ? true : false}
                  helperText={errors.email && errors.email.message}
                />
              </Grid2>

              <Grid2 size={{ xs: 12, lg: 6 }}>
                <CustomInput
                  label="Телефон *"
                  fullWidth
                  type="tel"
                  inputProps={{
                    ...register("phone", FORM_SETTINGS.phone),
                  }}
                  placeholder={FORM_SETTINGS.mask.mask}
                  inputRef={phoneRef}
                  helperText={errors.phone && errors.phone.message}
                  error={errors.phone ? true : false}
                  defaultValue="+7 "
                />
              </Grid2>

              {entity === "legal" && (
                <>
                  <Grid2 size={{ xs: 12, lg: 6 }}>
                    <CustomInput
                      label="ИНН организации"
                      fullWidth
                      sx={{ m: 0 }}
                      slotProps={{
                        input: {
                          ...register("inn", {
                            required: TEXTS.forms.errorText,
                          }),
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
                          ...register("company", {
                            required: TEXTS.forms.errorText,
                          }),
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
                control={<Radio size="small" onChange={() => setDelivery("pickup")} />}
                label="Самовывоз"
              />
              <FormControlLabel
                value="courier"
                control={<Radio size="small" onChange={() => setDelivery("courier")} />}
                label={`Курьерcкая доставка - ${totalPrice > 1000 ? 0 : COURIER_PRICE}₽`}
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
                    ...register("address", { required: TEXTS.forms.errorText }),
                  },
                }}
                error={errors.address ? true : false}
                helperText={errors.address && errors.address.message}
              />
            )}
          </OrderSection>

          <OrderSection title="Оплата">
            <RadioGroup value={payment}>
              {entity === "individual" && (
                <>
                  <FormControlLabel
                    value="online"
                    control={<Radio size="small" onChange={() => setPayment("online")} />}
                    label="Оплатить онлайн"
                  />
                  <FormControlLabel
                    value="delivery-card"
                    control={
                      <Radio size="small" onChange={() => setPayment("delivery-card")} />
                    }
                    label="Оплата при доставке (Картой курьеру)"
                  />
                  <FormControlLabel
                    value="delivery-cash"
                    control={
                      <Radio size="small" onChange={() => setPayment("delivery-cash")} />
                    }
                    label="Оплата при доставке (Наличными курьеру)"
                  />
                </>
              )}
              {entity === "legal" && (
                <>
                  <FormControlLabel
                    value="bill"
                    control={<Radio size="small" onChange={() => setPayment("bill")} />}
                    label="Оплата по счету без НДС"
                  />
                  <FormControlLabel
                    value="bill-nds"
                    control={
                      <Radio size="small" onChange={() => setPayment("bill-nds")} />
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

          <OrderFormButtons isPending={isPending} payment={payment} />
        </form>
      </Grid2>

      <Grid2 size={{ xs: 12, lg: 4 }}>
        <OrderCart
          delivery={delivery}
          deliveryPrice={deliveryPrice}
          orders={orders}
          totalPrice={totalWithDelivery}
        />
      </Grid2>
    </Grid2>
  );
};

export default OrderForm;
