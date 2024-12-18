import { useOrderStore } from "@/store/useOrderStore";
import { Alert, Typography } from "@mui/material";

const SuccessScreen = (): JSX.Element => {
  const { placed } = useOrderStore();

  return (
    <div>
      <Typography variant="h2">
        Заказ №{placed?.number} успешно добавлен
      </Typography>
      <Alert variant="outlined" color="info">
        Менеджер свяжется с Вами в течении 15 минут.
      </Alert>
    </div>
  );
};

export default SuccessScreen;
