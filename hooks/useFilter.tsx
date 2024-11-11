import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useState } from "react";

type FilterReturn = {
  isHit: boolean;
  isDiscount: boolean;
  isNew: boolean;
  isPack: string;
  applyFilter: () => void;
  chooseFilterParam: (val: string) => void;
  choosePackHandler: (id: string) => void;
};

const useFilter = (): FilterReturn => {
  // url params
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // getting of existing params
  const isHit = searchParams.has("hit") ? true : false;
  const isDiscount = searchParams.has("discount") ? true : false;
  const isNew = searchParams.has("new") ? true : false;
  const isPack = searchParams.get("pack") || "";

  // State
  const [filterState, setFilterState] = useState<string[]>([]);
  const [packState, setPackState] = useState<string[]>([]);

  const chooseFilterParam = (val: string) => {
    setFilterState((prev) => {
      if (!prev.includes(val)) return [...prev, val];
      return prev.filter((el) => el !== val);
    });
  };

  const choosePackHandler = (id: string) => {
    setPackState((prev) => {
      if (!prev.includes(id)) return [...prev, id];
      return prev.filter((el) => el !== id);
    });
  };

  const createQueryString = useCallback(
    (filters: string[], packs: string) => {
      const params = new URLSearchParams(searchParams.toString());
      filters.forEach((el) => params.set(el, "true"));
      isPack.length ? params.set("pack", packs) : params.delete("pack");
      return params.toString();
    },
    [searchParams]
  );

  const applyFilter = () => {
    const query = createQueryString(filterState, packState.join(","));
    console.log(query);

    router.push(pathname + "?" + query);
  };

  return {
    applyFilter,
    chooseFilterParam,
    choosePackHandler,
    isDiscount,
    isHit,
    isNew,
    isPack,
  };
};

export default useFilter;
