"use client";

import { useForm } from "react-hook-form";
import { FORM_SETTINGS } from "@/constants";
import useMutateData from "@/hooks/useMutateData";
import { useAppStore } from "@/store/useAppStore";
import { TEXTS } from "@/texts";
import { Feedback, FeedbackResponse } from "@/types";
import CustomBtn from "@/ui/CustomBtn";
import CustomInput from "@/ui/CustomInput";
import CustomModal from "@/ui/CustomModal";
import { CircularProgress } from "@mui/material";
import { useMask } from "@react-input/mask";

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

  const phoneRef = useMask(FORM_SETTINGS.mask);

  const { mutate, isPending } = useMutateData<Feedback, FeedbackResponse>({
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
          setMessage(TEXTS.feedback.success);
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
          inputProps={{
            ...register("name", { required: TEXTS.forms.errorText }),
          }}
          helperText={errors.name && errors.name.message}
          error={errors.name ? true : false}
        />

        <CustomInput
          label="E-mail"
          fullWidth
          type="email"
          inputProps={{
            ...register("email", FORM_SETTINGS.email),
          }}
          helperText={errors.email && errors.email.message}
          error={errors.email ? true : false}
        />

        <CustomInput
          label="Телефон"
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

        <CustomInput
          label="Сообщение"
          fullWidth
          multiline
          rows={3}
          inputProps={{
            ...register("message", { required: TEXTS.forms.errorText }),
          }}
          helperText={errors.message && errors.message.message}
          error={errors.message ? true : false}
        />

        <CustomBtn type="submit" color="primary" fullWidth>
          Отправить
          {isPending && (
            <CircularProgress size={20} color="secondary" sx={{ ml: 3 }} />
          )}
        </CustomBtn>
      </form>
    </CustomModal>
  );
};

export default FeedbackModal;
