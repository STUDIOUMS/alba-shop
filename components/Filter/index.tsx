"use client";

import { Pack } from "@/types";
import CheckField from "../CheckField";
import { Box, FormGroup } from "@mui/material";
import CustomBtn from "@/ui/CustomBtn";
import Range from "@/ui/Range";
import { FilterDiv, FilterFooter, FilterHeader } from "./styles";
import useFilter from "@/hooks/useFilter";
import CustomCheck from "@/ui/CustomCheck";

type FilterProps = {
  packs: Pack[];
};

const Filter = (props: FilterProps): JSX.Element => {
  const { packs } = props;

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
    isPack,
    isResetDisabled,
  } = useFilter();

  return (
    <FilterDiv>
      <FilterHeader>Фильтр</FilterHeader>
      <Box>
        <Box sx={{ p: 4 }}>
          <FormGroup>
            <CheckField
              label="Хит"
              control={
                <CustomCheck
                  value="hit"
                  checked={hitState}
                  onChange={(e) => setHitState(e.target.checked)}
                />
              }
            />
            <CheckField
              label="Скидка"
              control={
                <CustomCheck
                  value="discount"
                  checked={discountState}
                  onChange={(e) => setDiscountState(e.target.checked)}
                />
              }
            />
            <CheckField
              label="Новинки"
              control={
                <CustomCheck
                  value="new"
                  checked={newState}
                  onChange={(e) => setNewState(e.target.checked)}
                />
              }
            />
          </FormGroup>
        </Box>

        <FilterHeader size="small">Цена</FilterHeader>
        <Box sx={{ p: 4 }}>
          <Range />
        </Box>

        <FilterHeader size="small">Фасовка</FilterHeader>
        <Box sx={{ p: 4 }}>
          <FormGroup>
            {packs.map((pack) => {
              return (
                <CheckField
                  key={pack.id}
                  label={pack.name}
                  control={
                    <CustomCheck
                      value={pack.id}
                      onChange={(e) => choosePackHandler(e.target.value)}
                    />
                  }
                />
              );
            })}
          </FormGroup>
        </Box>
      </Box>

      <FilterFooter direction="row">
        <CustomBtn
          variant="outlined"
          color="primary"
          fullWidth
          onClick={applyFilter}
          sx={{ mr: 2 }}
        >
          Применить
        </CustomBtn>
        <CustomBtn
          variant="outlined"
          color="secondary"
          fullWidth
          disabled={isResetDisabled}
          onClick={resetFilter}
        >
          Сбросить
        </CustomBtn>
      </FilterFooter>
    </FilterDiv>
  );
};

export default Filter;
