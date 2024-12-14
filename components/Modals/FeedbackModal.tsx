"use client";

import { ERROR_TEXT } from "@/constants";
import useMutateData from "@/hooks/useMutateData";
import { useAppStore } from "@/store/useAppStore";
import { Feedback } from "@/types";
import CustomBtn from "@/ui/CustomBtn";
import CustomInput from "@/ui/CustomInput";
import CustomModal from "@/ui/CustomModal";
import { CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FeedbackModalProps = {
  show: boolean;
  close: () => void;
};

const FeedbackModal = (props: FeedbackModalProps): JSX.Element => {
  const { close, show } = props;
  const { setMessage } = useAppStore();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const { mutate, isPending } = useMutateData<Feedback>({
    key: ["feedback"],
    method: "POST",
    uri: "/web/feedback/",
  });

  const feedbackHandler = (data: FormData) => {
    mutate(
      {
        message: data.message,
        sender: data.name,
        senderEmail: data.email,
        senderPhone: data.phone,
      },
      {
        onSuccess: () => {
          reset();
          close();
          setMessage(
            "Ваше сообщение было отправлено. Менеджер свяжется с вами в ближайшее время"
          );
        },
      }
    );
  };

  return (
    <CustomModal close={close} open={show} title="Обратная связь">
      <form
        onSubmit={handleSubmit(feedbackHandler)}
        autoCorrect="false"
        noValidate
      >
        <CustomInput
          label="ФИО"
          fullWidth
          inputProps={{ ...register("name", { required: ERROR_TEXT }) }}
          helperText={errors.name && errors.name.message}
          error={errors.name ? true : false}
        />

        <CustomInput
          label="E-mail"
          fullWidth
          type="email"
          inputProps={{
            ...register("email", {
              required: ERROR_TEXT,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Введите корректный E-mail",
              },
            }),
          }}
          helperText={errors.email && errors.email.message}
          error={errors.email ? true : false}
        />

        <CustomInput
          label="Телефон"
          fullWidth
          type="tel"
          inputProps={{ ...register("phone", { required: ERROR_TEXT }) }}
          helperText={errors.phone && errors.phone.message}
          error={errors.phone ? true : false}
        />

        <CustomInput
          label="Сообщение"
          fullWidth
          multiline
          rows={3}
          inputProps={{ ...register("message", { required: ERROR_TEXT }) }}
          helperText={errors.message && errors.message.message}
          error={errors.message ? true : false}
        />

        <CustomBtn type="submit" color="primary" fullWidth>
          Оправить
          {isPending && (
            <CircularProgress size={20} color="secondary" sx={{ ml: 3 }} />
          )}
        </CustomBtn>
      </form>
    </CustomModal>
  );
};

export default FeedbackModal;
