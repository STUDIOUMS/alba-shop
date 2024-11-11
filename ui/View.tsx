"use client";

import { Button, ButtonGroup, styled } from "@mui/material";
import gridIcon from "@/assets/grid.svg";
import listIcon from "@/assets/list.svg";
import Image from "next/image";
import { useAppStore } from "@/store/useAppStore";

const Btn = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.grey[400],
  "&.active": {
    backgroundColor: theme.palette.grey[300],
  },
}));

const View = (): JSX.Element => {
  const { view, setView } = useAppStore();

  return (
    <ButtonGroup variant="outlined" color="inherit">
      <Btn
        onClick={() => setView("grid")}
        className={view === "grid" ? "active" : ""}
      >
        <Image src={gridIcon.src} alt="" width={18} height={18} />
      </Btn>
      <Btn
        onClick={() => setView("list")}
        className={view === "list" ? "active" : ""}
      >
        <Image src={listIcon.src} alt="" width={24} height={24} />
      </Btn>
    </ButtonGroup>
  );
};

export default View;
