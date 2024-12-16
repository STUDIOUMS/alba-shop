"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Box, Chip, Typography } from "@mui/material";
import { Pack } from "@/types";
import { CURRENCY } from "@/constants";
import { getPackNames } from "@/utils/helpers";

type ChosenFilterProps = {
  packs: Pack[];
};

const ChosenFilter = (props: ChosenFilterProps): JSX.Element => {
  const { packs } = props;
  const [packString, setPackString] = useState<string>("");
  const searchParams = useSearchParams();

  const isHit = searchParams.has("hit");
  const isDiscount = searchParams.has("discount");
  const isNew = searchParams.has("new");
  const isPriceMin = searchParams.has("price_min");
  const priceMin = searchParams.get("price_min");
  const isPriceMax = searchParams.has("price_max");
  const priceMax = searchParams.get("price_max");
  const isPack = searchParams.has("pack");
  const packParams = searchParams.get("pack")?.split(",");

  useEffect(() => {
    const output = getPackNames(packs, packParams);
    setPackString(output);
  }, [searchParams, packParams, packs]);

  const output: string[] = [];
  if (isHit) output.push("Хит");
  if (isDiscount) output.push("Скидки");
  if (isNew) output.push("Новинки");
  if (isPriceMin) output.push(`От: ${priceMin} ${CURRENCY}`);
  if (isPriceMax) output.push(`До: ${priceMax} ${CURRENCY}`);
  if (isPack) output.push(`Упаковка: ${packString}`);

  if (!output.length) {
    return <></>;
  }

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="body2" component="div" sx={{ mb: 2 }}>
        Выбранные параметры:
      </Typography>
      {output.map((el, index) => (
        <Chip key={index} label={el} variant="filled" sx={{ mr: 2 }} />
      ))}
    </Box>
  );
};

export default ChosenFilter;
