import { Alert, Typography } from "@mui/material";
import { SuccessfulOrder } from "@/app/checkout/components/types";
import { TEXTS } from "@/texts";

type SuccessScreenProps = {
  placedOrder: SuccessfulOrder;
};

const SuccessScreen = (props: SuccessScreenProps): JSX.Element => {
  const { placedOrder } = props;
  return (
    <div>
      <Typography variant="h2">
        Заказ №{placedOrder.number} успешно добавлен
      </Typography>
      <Alert variant="outlined" color="info" sx={{ mb: 6 }}>
        {TEXTS.notifications.successfulResponse}
      </Alert>
    </div>
  );
};

export default SuccessScreen;
