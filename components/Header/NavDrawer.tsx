import { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { NAV_ITEMS } from "./constants";
import iconBars from "@/assets/bars.svg";

const NavDrawer = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <img src={iconBars.src} alt="" style={{ width: 20 }} />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }}>
          {NAV_ITEMS.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default NavDrawer;
