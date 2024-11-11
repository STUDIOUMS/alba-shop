import { useOrderStore } from "@/store/useOrderStore";
import CustomBtn from "@/ui/CustomBtn";
import CustomModal from "@/ui/CustomModal";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

type BasketModalProps = {
  close: () => void;
  open: boolean;
};

const BasketModal = (props: BasketModalProps): JSX.Element => {
  const { close, open } = props;
  const { deleteAllOrders } = useOrderStore();

  return (
    <CustomModal close={close} open={open} title="Очистить корзину">
      <Typography variant="body1" sx={{ mb: 6 }}>
        Все товары будут удалены из корзины.
      </Typography>
      <Stack direction="row">
        <CustomBtn fullWidth sx={{ mr: 4 }} onClick={() => deleteAllOrders()}>
          Очистить
        </CustomBtn>
        <CustomBtn
          variant="outlined"
          color="secondary"
          fullWidth
          onClick={close}
        >
          Отмена
        </CustomBtn>
      </Stack>
    </CustomModal>
  );
};

export default BasketModal;
