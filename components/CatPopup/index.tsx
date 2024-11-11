import { Cat } from "@/types";
import CustomBtn from "@/ui/CustomBtn";
import { Box, Container, Grid2, Menu, Typography } from "@mui/material";
import { useState } from "react";
import { Wrap } from "../Header/styles";
import CatPopupItem from "./CatPopupItem";

type CatPopupProps = {
  cats: Cat[];
};

const CatPopup = (props: CatPopupProps): JSX.Element => {
  const { cats } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CustomBtn color="primary" variant="outlined" onClick={handleClick}>
        Каталог
      </CustomBtn>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ mt: 2 }}
        component="div"
        slotProps={{
          paper: {
            sx: {
              left: "0 !important",
              right: "0 !important",
              padding: "0 !important",
              width: "100%",
              maxWidth: "none",
            },
          },
        }}
      >
        <Wrap>
          <Box sx={{ pt: 6, pb: 6, width: "100%" }}>
            <Typography variant="h2">Каталог</Typography>
            <Grid2 container spacing={8}>
              {cats
                .filter((el) => el.parent === null)
                .map((cat) => {
                  const subcats = cats.filter(
                    (el) => el.parent && el.parent.pk === cat.id
                  );
                  return (
                    <CatPopupItem key={cat.id} cat={cat} subcats={subcats} />
                  );
                })}
            </Grid2>
          </Box>
        </Wrap>
      </Menu>
    </>
  );
};

export default CatPopup;
