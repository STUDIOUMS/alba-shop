import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { NAV_ITEMS } from "./constants";
import catIcon from "@/assets/catalog.svg";
import Image from "next/image";

type NavDrawerProps = {
  close: () => void;
  open: boolean;
};

const NavDrawer = (props: NavDrawerProps): JSX.Element => {
  const { close, open } = props;
  const router = useRouter();

  const clickHandler = (path: string) => {
    close();
    router.push(path);
  };

  return (
    <Drawer open={open} onClose={close}>
      <Box sx={{ width: 250 }}>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => clickHandler(item.path)}>
              {item.path === "/cat" && (
                <Image
                  src={catIcon.src}
                  alt=""
                  width={28}
                  height={28}
                  style={{ marginRight: 12 }}
                />
              )}
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </Box>
    </Drawer>
  );
};

export default NavDrawer;
