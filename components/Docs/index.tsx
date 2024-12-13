import Link from "next/link";
import { DocType } from "@/types";
import { Box, styled, Typography } from "@mui/material";
import docFile from "@/assets/doc.svg";

type DocsProps = {
  docs: DocType[];
};

const Item = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  lineHeight: theme.typography.body1.lineHeight,
  marginBottom: theme.spacing(2),
  a: {
    position: "relative",
    paddingLeft: theme.spacing(8),
    "&::before": {
      backgroundImage: `url(${docFile.src})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: 20,
      content: '""',
      display: "block",
      position: "absolute",
      left: 0,
      width: 20,
      height: 20,
    },
  },
}));

const Docs = (props: DocsProps): JSX.Element => {
  const { docs } = props;

  if (!docs.length)
    return (
      <Typography variant="body1" component="div">
        Документов нет
      </Typography>
    );

  return (
    <Box>
      {docs.map((doc) => (
        <Item key={doc.id}>
          <Link
            href={doc.file}
            target="_blank"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            {doc.name}
          </Link>
        </Item>
      ))}
    </Box>
  );
};

export default Docs;
