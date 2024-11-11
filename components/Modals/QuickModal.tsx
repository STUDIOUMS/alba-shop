import { ERROR_TEXT } from "@/constants";
import CustomBtn from "@/ui/CustomBtn";
import CustomInput from "@/ui/CustomInput";
import CustomModal from "@/ui/CustomModal";
import { CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";

type FormData = {
  phone: string;
};

type QuickModalProps = {
  close: () => void;
  productId: number;
  show: boolean;
};

const QuickModal = (props: QuickModalProps): JSX.Element => {
  const { close, productId, show } = props;
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const quickHandler = (data: FormData) => {
    console.log(data, productId);
  };

  return (
    <CustomModal close={close} open={show} title="Быстрый заказ">
      <form onSubmit={handleSubmit(quickHandler)} autoCorrect="false">
        <CustomInput
          label="Номер телефона"
          fullWidth
          inputProps={{ ...register("phone", { required: ERROR_TEXT }) }}
          helperText={errors.phone && errors.phone.message}
          error={errors.phone ? true : false}
        />
        <CustomBtn type="submit" color="primary" fullWidth>
          Оправить
          <CircularProgress size={20} color="secondary" sx={{ ml: 3 }} />
        </CustomBtn>
      </form>
    </CustomModal>
  );
};

export default QuickModal;
