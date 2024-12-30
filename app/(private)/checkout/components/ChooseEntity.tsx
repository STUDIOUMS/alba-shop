import CustomBtn from "@/ui/CustomBtn";
import { Stack } from "@mui/material";
import { SetStateAction } from "react";
import { Entity, Payment } from "./types";

type ChooseEntityProps = {
  entity: Entity;
  setFace: React.Dispatch<SetStateAction<Entity>>;
  setPayment: React.Dispatch<SetStateAction<Payment>>;
};

const ChooseEntity = (props: ChooseEntityProps): JSX.Element => {
  const { entity, setFace, setPayment } = props;

  return (
    <Stack direction="row" sx={{ mb: 6 }}>
      <CustomBtn
        variant={entity === "individual" ? "contained" : "outlined"}
        color={entity === "individual" ? "primary" : "secondary"}
        onClick={() => {
          setFace("individual"), setPayment("online");
        }}
        size="small"
        sx={{ mr: 4 }}
      >
        Физическое лицо
      </CustomBtn>
      <CustomBtn
        variant={entity === "legal" ? "contained" : "outlined"}
        color={entity === "legal" ? "primary" : "secondary"}
        onClick={() => {
          setFace("legal"), setPayment("bill");
        }}
        size="small"
      >
        Юридическое лицо
      </CustomBtn>
    </Stack>
  );
};

export default ChooseEntity;
