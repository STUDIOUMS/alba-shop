import { Box, FormGroup } from "@mui/material";
import Range from "@/ui/Range";
import CustomCheck from "@/ui/CustomCheck";
import { FilterDiv, FilterFooter, FilterHeader } from "./styles";
import FilterPack from "./FilterPack";
import CheckField from "../CheckField";
import { Pack } from "@/types";
import CustomBtn from "@/ui/CustomBtn";
import { FilterReturn } from "@/hooks/useFilter";

type FilterBoxProps = FilterReturn & {
  packs: Pack[];
};

const FilterBox = (props: FilterBoxProps): JSX.Element => {
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
    packs,
  } = props;

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
          <Range setValues={setPrices} values={prices} max={1000} />
        </Box>

        <FilterHeader size="small">Фасовка</FilterHeader>
        <Box sx={{ p: 4 }}>
          <FormGroup>
            {packs.map((pack) => (
              <FilterPack
                key={pack.id}
                handler={choosePackHandler}
                id={pack.id.toString()}
                label={pack.name}
                isChecked={
                  packState.length
                    ? packState.some((el) => el === pack.id.toString())
                    : false
                }
                reseted={!packState.length}
              />
            ))}
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

export default FilterBox;
