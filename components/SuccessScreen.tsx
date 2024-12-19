import { useOrderStore } from "@/store/useOrderStore";
import { Alert, Typography } from "@mui/material";

const SuccessScreen = (): JSX.Element => {
  const { placed } = useOrderStore();

  return (
    <div>
      <Typography variant="h2">
        Заказ №{placed?.number} успешно добавлен
      </Typography>
      <Alert variant="outlined" color="info" sx={{ mb: 6 }}>
        Менеджер свяжется с Вами в течении 15 минут.
      </Alert>
      <Typography variant="h3">Детали заказа</Typography>
    </div>
  );
};

export default SuccessScreen;
