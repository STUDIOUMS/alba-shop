"use client";

import { Typography, Box, BoxProps, styled } from "@mui/material";

type SectionProps = BoxProps & {
  children: React.ReactNode;
  title?: string;
};

const Div = styled(Box)<BoxProps>(({ theme }) => ({
  paddingBottom: theme.spacing(10),
  paddingTop: theme.spacing(10),
}));

const Section = (props: SectionProps) => {
  const { children, title } = props;
  return (
    <Div {...props}>
      {title && (
        <Typography
          variant="h1"
          component="div"
          textAlign="center"
          sx={{ mb: 8 }}
        >
          {title}
        </Typography>
      )}
      {children}
    </Div>
  );
};

export default Section;
