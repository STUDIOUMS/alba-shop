import { TEXTS } from "@/texts";
import { Alert, AlertTitle } from "@mui/material";

const ErrorAlert = () => {
  return (
    <Alert variant="outlined" severity="error">
      <AlertTitle>{TEXTS.notifications.error.title}</AlertTitle>
      {TEXTS.notifications.error.text}
    </Alert>
  );
};

export default ErrorAlert;
