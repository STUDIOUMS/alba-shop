import { Alert, AlertTitle } from "@mui/material";

const ErrorAlert = () => {
  return (
    <Alert variant="outlined" severity="error">
      <AlertTitle>500 - Ошибка сервера</AlertTitle>
      Попробуйте посетить данную страницу позже.
    </Alert>
  );
};

export default ErrorAlert;
