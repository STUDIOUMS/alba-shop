import { getData } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

type UseGetDataProps<T> = {
  key: string[];
  uri: string;
  initialData?: T;
};

const useGetData = <T,>(props: UseGetDataProps<T>) => {
  const { key, uri, initialData } = props;
  return useQuery({
    queryKey: key,
    queryFn: () => getData<T>(uri),
    initialData,
  });
};

export default useGetData;
