"use client";

import { Pack } from "@/types";
import { Drawer, useMediaQuery, useTheme } from "@mui/material";
import CustomBtn from "@/ui/CustomBtn";
import { useState } from "react";
import FilterBox from "./Filter";
import useFilter from "@/hooks/useFilter";

type FilterProps = {
  packs: Pack[];
};

const Filter = (props: FilterProps): JSX.Element => {
  const { packs } = props;
  const [show, setShow] = useState(false);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  const {
    applyFilter,
    resetFilter,
    setDiscountState,
    setHitState,
    setNewState,
    choosePackHandler,
    discountState,
    hitState,
    newState,
    packState,
    isResetDisabled,
    setPrices,
    prices,
  } = useFilter();

  if (!isTablet)
    return (
      <FilterBox
        packs={packs}
        applyFilter={applyFilter}
        choosePackHandler={choosePackHandler}
        discountState={discountState}
        hitState={hitState}
        isResetDisabled={isResetDisabled}
        newState={newState}
        packState={packState}
        prices={prices}
        resetFilter={resetFilter}
        setDiscountState={setDiscountState}
        setHitState={setHitState}
        setNewState={setNewState}
        setPrices={setPrices}
      />
    );

  return (
    <>
      <CustomBtn
        variant="outlined"
        color="secondary"
        onClick={() => setShow(true)}
      >
        Показать фильтр
      </CustomBtn>
      <Drawer open={show} onClose={() => setShow(false)}>
        <FilterBox
          packs={packs}
          applyFilter={applyFilter}
          choosePackHandler={choosePackHandler}
          discountState={discountState}
          hitState={hitState}
          isResetDisabled={isResetDisabled}
          newState={newState}
          packState={packState}
          prices={prices}
          resetFilter={resetFilter}
          setDiscountState={setDiscountState}
          setHitState={setHitState}
          setNewState={setNewState}
          setPrices={setPrices}
        />
      </Drawer>
    </>
  );
};

export default Filter;
