import { RelatedAttrs } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

type AttributesProps = {
  attrs: RelatedAttrs[];
};

const Attributes = (props: AttributesProps): JSX.Element => {
  const { attrs } = props;
  return (
    <TableContainer>
      <Table>
        <TableBody>
          {attrs.map((attr) => (
            <TableRow key={attr.id}>
              <TableCell
                component="th"
                scope="row"
                sx={(theme) => ({
                  pl: 0,
                  color: theme.palette.grey[500],
                  fontSize: theme.typography.body1.fontSize,
                })}
              >
                {attr.attribute.name}
              </TableCell>
              <TableCell
                sx={(theme) => ({
                  pr: 0,
                  fontSize: theme.typography.body1.fontSize,
                })}
              >
                {attr.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Attributes;
