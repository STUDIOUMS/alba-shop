import Link from "next/link";
import { DocType } from "@/types";
import { Box, Typography } from "@mui/material";
import iconFile from "@/assets/doc.svg";
import Image from "next/image";

type DocsProps = {
  docs: DocType[];
};

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
        <Typography variant="body1" component="div" key={doc.id} sx={{ mb: 2 }}>
          <Link
            href={doc.file}
            target="_blank"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <Image
              src={iconFile.src}
              alt=""
              width={20}
              height={20}
              style={{ marginRight: 12 }}
            />
            {doc.name}
          </Link>
        </Typography>
      ))}
    </Box>
  );
};

export default Docs;
