import { styled, Tab, TabProps } from "@mui/material";

const TabBox = styled(Tab)(({ theme }) => ({
  textTransform: "none",
}));

const CustomTab = (props: TabProps) => {
  return <TabBox {...props} />;
};

export default CustomTab;
