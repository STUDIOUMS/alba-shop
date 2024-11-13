import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { SetStateAction, useCallback, useState } from "react";

type FilterReturn = {
  hitState: boolean;
  discountState: boolean;
  newState: boolean;
  packState: string[];
  applyFilter: () => void;
  resetFilter: () => void;
  setHitState: React.Dispatch<SetStateAction<boolean>>;
  setNewState: React.Dispatch<SetStateAction<boolean>>;
  setDiscountState: React.Dispatch<SetStateAction<boolean>>;
  choosePackHandler: (id: string) => void;
  isResetDisabled: boolean;
  setPrices: React.Dispatch<SetStateAction<number[]>>;
  prices: number[];
};

const MIN_PRICE = 0;
const MAX_PRICE = 1000;

const useFilter = (): FilterReturn => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // getting of existing params
  const isHit = searchParams.has("hit") ? true : false;
  const isDiscount = searchParams.has("discount") ? true : false;
  const isNew = searchParams.has("new") ? true : false;
  const isPack = searchParams.get("pack") || "";
  const isMin = Number(searchParams.get("price_min")) || MIN_PRICE;
  const isMax = Number(searchParams.get("price_max")) || MAX_PRICE;

  // State
  const [hitState, setHitState] = useState(isHit);
  const [discountState, setDiscountState] = useState(isDiscount);
  const [newState, setNewState] = useState(isNew);
  const [prices, setPrices] = useState<number[]>([isMin, isMax]);
  const [packState, setPackState] = useState<string[]>(
    isPack.length ? isPack.split(",") : []
  );

  const choosePackHandler = (id: string) => {
    if (packState.some((el) => el == id)) {
      setPackState(packState.filter((el) => el !== id));
    } else {
      setPackState((prev) => [...prev, id].sort());
    }
  };

  const createQueryString = useCallback(
    (h: boolean, d: boolean, n: boolean, pack: string, values: number[]) => {
      const params = new URLSearchParams(searchParams.toString());

      h ? params.set("hit", "true") : params.delete("hit");
      d ? params.set("discount", "true") : params.delete("discount");
      n ? params.set("new", "true") : params.delete("new");

      // setting prices
      if (values[0] !== MIN_PRICE || values[1] !== MAX_PRICE) {
        params.set("price_min", values[0].toString());
        params.set("price_max", values[1].toString());
      } else {
        params.delete("price_min");
        params.delete("price_max");
      }

      pack.length ? params.set("pack", pack) : params.delete("pack");

      return params.toString();
    },
    [searchParams]
  );

  const applyFilter = () => {
    const query = createQueryString(
      hitState,
      discountState,
      newState,
      packState.join(","),
      prices
    );
    router.push(pathname + "?" + query);
  };

  const isResetDisabled =
    !newState &&
    !hitState &&
    !discountState &&
    !packState.length &&
    prices[0] === MIN_PRICE &&
    prices[1] === MAX_PRICE;

  const resetFilter = () => {
    setDiscountState(false);
    setHitState(false);
    setNewState(false);
    setPackState([]);
    setPrices([MIN_PRICE, MAX_PRICE]);
    if (!!searchParams.toString().length) {
      router.push(pathname);
    }
  };

  return {
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
  };
};

export default useFilter;
