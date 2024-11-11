"use client";

import { Pack } from "@/types";
import CheckField from "../CheckField";
import { Box, FormGroup } from "@mui/material";
import CustomBtn from "@/ui/CustomBtn";
import Range from "@/ui/Range";
import { FilterDiv, FilterFooter, FilterHeader } from "./styles";
import useFilter from "@/hooks/useFilter";

type FilterProps = {
  packs: Pack[];
};

const Filter = (props: FilterProps): JSX.Element => {
  const { packs } = props;

  const {
    applyFilter,
    chooseFilterParam,
    choosePackHandler,
    isDiscount,
    isHit,
    isNew,
    isPack,
  } = useFilter();

  return (
    <FilterDiv>
      <FilterHeader>Фильтр</FilterHeader>
      <Box>
        <Box sx={{ p: 4 }}>
          <FormGroup>
            <CheckField
              handler={chooseFilterParam}
              label="Хит"
              value="hit"
              checked={isHit}
            />
            <CheckField
              handler={chooseFilterParam}
              label="Скидка"
              value="discount"
              checked={isDiscount}
            />
            <CheckField
              handler={chooseFilterParam}
              label="Новинки"
              value="new"
              checked={isNew}
            />
          </FormGroup>
        </Box>

        <FilterHeader size="small">Цена</FilterHeader>
        <Box sx={{ p: 4 }}>
          <Range />
        </Box>

        <FilterHeader size="small">Упаковка</FilterHeader>
        <Box sx={{ p: 4 }}>
          <FormGroup>
            {packs.map((el) => {
              return (
                <CheckField
                  key={el.id}
                  handler={choosePackHandler}
                  label={el.name}
                  value={el.id.toString()}
                  checked={isPack.includes(el.id.toString())}
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
          disabled
          onClick={() => {}}
        >
          Сбросить
        </CustomBtn>
      </FilterFooter>
    </FilterDiv>
  );
};

export default Filter;
