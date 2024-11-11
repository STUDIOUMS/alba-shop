import { Container, ContainerProps, styled } from "@mui/material";

const Div = styled(Container)(({ theme }) => ({
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
}));

const CustomContainer = (props: ContainerProps) => {
  return <Div disableGutters {...props} />;
};

export default CustomContainer;
