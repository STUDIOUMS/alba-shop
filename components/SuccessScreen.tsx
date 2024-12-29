import { useOrderStore } from "@/store/useOrderStore";
import { TEXTS } from "@/texts";
import { Alert, Typography } from "@mui/material";

const SuccessScreen = (): JSX.Element => {
  const { placed } = useOrderStore();

  return (
    <div>
      <Typography variant="h2">
        Заказ №{placed?.number} успешно добавлен
      </Typography>
      <Alert variant="outlined" color="info" sx={{ mb: 6 }}>
        {TEXTS.notifications.successfulResponse}
      </Alert>
    </div>
  );
};

export default SuccessScreen;
