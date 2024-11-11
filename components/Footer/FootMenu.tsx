import { List, styled } from "@mui/material";
import Link from "next/link";
import { NAV_ITEMS } from "../Header/constants";

const MenuWrapper = styled(List)(({ theme }) => ({
  margin: 0,
  padding: 0,
  columnCount: 2,
  columnGap: theme.spacing(6),
  li: {
    fontFamily: theme.typography.h1.fontFamily,
    listStyle: "none",
    marginBottom: theme.spacing(0.5),
  },
}));

const FootMenu = (): JSX.Element => {
  return (
    <MenuWrapper>
      {NAV_ITEMS.map((item) => (
        <li key={item.id}>
          <Link href={item.path}>{item.title}</Link>
        </li>
      ))}
    </MenuWrapper>
  );
};

export default FootMenu;
