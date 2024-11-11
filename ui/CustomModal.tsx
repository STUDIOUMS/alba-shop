import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import Image from "next/image";
import closeIcon from "@/assets/close.svg";

type CustomModalProps = {
  children: React.ReactNode;
  close: () => void;
  open: boolean;
  title: string;
};

const CustomModal = (props: CustomModalProps): JSX.Element => {
  const { children, close, open, title } = props;
  return (
    <Dialog
      open={open}
      onClose={close}
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "8px",
          maxWidth: "520px",
          position: "relative",
        },
      }}
    >
      <DialogTitle sx={{ p: 8, mb: 0, pb: 3 }} fontSize={24}>
        {title}
        <IconButton
          onClick={close}
          sx={{ position: "absolute", right: 14, top: 14 }}
        >
          <Image src={closeIcon} alt="" width={20} height={20} />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ p: "8px 30px 30px !important" }}>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
