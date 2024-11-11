import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type SortReturn = {
  sortHandler: (value: string) => void;
  value: string;
};

const useSort = (): SortReturn => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const value = searchParams.get("ordering") || "";

  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("ordering", value);
      return params.toString();
    },
    [searchParams]
  );

  const sortHandler = (value: string): void => {
    const val = createQueryString(value);
    router.push(pathname + "?" + val);
  };
  return {
    sortHandler,
    value,
  };
};

export default useSort;
