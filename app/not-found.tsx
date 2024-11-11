import CustomBtn from "@/ui/CustomBtn";
import Section from "@/ui/Section";
import { Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Section>
      <Typography variant="h1">Not Found</Typography>
      <p>Could not find requested resource</p>
      <CustomBtn href="/">Вернуться на главную</CustomBtn>
    </Section>
  );
}
