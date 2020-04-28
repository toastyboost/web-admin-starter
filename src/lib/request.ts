const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || '';

type ResponseMeta = {
  code: number;
  url: string;
  method: string;
};

export interface SuccessResponse extends ResponseMeta {
  payload: object;
}

export interface FailResponse extends ResponseMeta {
  data: {
    message: '';
  };
}

export type FormData = {
  file: File;
  name: string;
  meta?: {
    [index: string]: string;
  };
};

export type RequestProps = {
  method?: string;
  url: string;
  body?: object;
  file?: FormData;
};

function attachFormData({ file, name, meta }: FormData) {
  const data = new FormData();
  data.append(name, file);
  meta && Object.keys(meta).map((value) => data.append(value, meta[value]));
  return data;
}

export const request = async ({
  url,
  method = 'get',
  body,
  file,
}: RequestProps): Promise<any> => {
  const fetchUrl = SERVER_ENDPOINT + url;

  const headers = {
    ...(!file && { 'Content-Type': 'application/json' }),
    Accept: 'application/json',
  };

  const fetchOptions = {
    headers,
    method,
    ...(body && { body: JSON.stringify(body) }),
    ...(file && { body: attachFormData(file) }),
  };

  const response = await fetch(fetchUrl, fetchOptions);

  const meta = {
    code: response.status,
    url,
    method,
  };

  let result = {};

  if (response.headers.get('Content-Type')?.includes('application/json')) {
    result = await response.json();
  }

  const resBody: FailResponse | SuccessResponse = {
    payload: result,
    ...meta,
  };

  if (response.ok) return resBody;

  throw resBody;
};
