export type ApiMethod = "POST" | "PATCH" | "PUT" | "DELETE";

type MutateDataProps<T> = {
  uri: string;
  method: ApiMethod;
  body?: T;
};

export const getData = async <T>(uri: string): Promise<T> => {
  const response = await fetch(process.env.API_URL + uri);
  const data = await response.json();
  return data;
};

export const mutateData = async <T>(props: MutateDataProps<T>) => {
  const { method, uri, body } = props;
  const response = await fetch(process.env.API_URL + uri, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return data;
};
