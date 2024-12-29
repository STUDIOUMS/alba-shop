import { mutateData } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";
import { ApiMethod } from "../utils/api";

type UseMutateDataProps = {
  key: string[];
  uri: string;
  method: ApiMethod;
};

const useMutateData = <T, K>(props: UseMutateDataProps) => {
  const { key, uri, method } = props;
  return useMutation({
    mutationKey: key,
    mutationFn: (data: T) =>
      mutateData<T, K>({
        method,
        uri,
        body: data,
      }),
  });
};

export default useMutateData;
