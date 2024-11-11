import { Face, Payment } from "@/types";
import CustomBtn from "@/ui/CustomBtn";
import { Stack } from "@mui/material";
import { SetStateAction } from "react";

type ChooseFaceProps = {
  face: Face;
  setFace: React.Dispatch<SetStateAction<Face>>;
  setPayment: React.Dispatch<SetStateAction<Payment>>;
};

const ChooseFace = (props: ChooseFaceProps): JSX.Element => {
  const { face, setFace, setPayment } = props;

  return (
    <Stack direction="row" sx={{ mb: 6 }}>
      <CustomBtn
        variant={face === "individual" ? "contained" : "outlined"}
        color={face === "individual" ? "primary" : "secondary"}
        onClick={() => {
          setFace("individual"), setPayment("acquiring");
        }}
        size="small"
        sx={{ mr: 4 }}
      >
        Физическое лицо
      </CustomBtn>
      <CustomBtn
        variant={face === "legal" ? "contained" : "outlined"}
        color={face === "legal" ? "primary" : "secondary"}
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

export default ChooseFace;
