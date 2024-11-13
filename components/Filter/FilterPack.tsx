"use client";

import CustomCheck from "@/ui/CustomCheck";
import { useEffect, useState } from "react";
import CheckField from "../CheckField";

type FilterPackProps = {
  id: string;
  label: string;
  handler: (val: string) => void;
  isChecked: boolean;
  reseted: boolean;
};

const FilterPack = (props: FilterPackProps): JSX.Element => {
  const { isChecked, handler, id, label, reseted } = props;
  const [check, setCheck] = useState<boolean>(isChecked);

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);
    handler(e.target.value);
  };

  useEffect(() => {
    if (reseted) {
      setCheck(false);
    }
  }, [reseted]);

  return (
    <CheckField
      label={label}
      control={<CustomCheck value={id} onChange={checkHandler} />}
      checked={check}
    />
  );
};

export default FilterPack;
