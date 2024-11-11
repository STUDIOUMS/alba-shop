"use client";

import { RelatedPacks } from "@/types";
import {
  Box,
  Button,
  ButtonGroup,
  ButtonProps,
  styled,
  Typography,
} from "@mui/material";

type PackagesProps = {
  currentPackID: number;
  handler: (id: number, name: string) => void;
  packs: RelatedPacks[];
};

const PackBtn = styled(Button)<ButtonProps>(({ theme }) => ({
  borderColor: theme.palette.grey[300],
  boxShadow: "none !important",
  color: theme.palette.common.black,
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 700,
  textTransform: "none",
  "&.MuiButton-contained": {
    backgroundColor: theme.palette.grey[300],
  },
}));

const Packages = (props: PackagesProps): JSX.Element => {
  const { currentPackID, handler, packs } = props;
  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h6" component="div" sx={{ mb: 1 }}>
        Фасовка:
      </Typography>
      <ButtonGroup>
        {packs.map((el) => (
          <PackBtn
            key={el.id}
            variant={currentPackID === el.id ? "contained" : "outlined"}
            onClick={() => handler(el.pack.id, el.pack.name)}
          >
            {el.pack.name}
          </PackBtn>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default Packages;
