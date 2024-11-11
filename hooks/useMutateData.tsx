import { mutateData } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";
import { ApiMethod } from "../utils/api";

type UseMutateDataProps<T> = {
  key: string[];
  uri: string;
  method: ApiMethod;
};

const useMutateData = <T,>(props: UseMutateDataProps<T>) => {
  const { key, uri, method } = props;
  return useMutation({
    mutationKey: key,
    mutationFn: (data: T) =>
      mutateData<T>({
        method,
        uri,
        body: data,
      }),
  });
};

export default useMutateData;
