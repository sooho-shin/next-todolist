import axios, { AxiosRequestConfig } from 'axios';

const axiosFetch = async ({
  url,
  method = 'get',
  data,
}: {
  url: string;
  method?: string;
  data?: any;
}) => {
  const reUrl = url;

  //   const token = localStorage.getItem('token');
  const sendOption: AxiosRequestConfig = {
    method,
    url: `http://192.168.10.250:3031${reUrl}`,
    // url: `${reUrl}`,
    headers: {
      //   Authorization: token ? token : '',
      //   'x-locale': '',
    },
  };

  if (method === 'get' && data) {
    sendOption.params = data;
  }

  if (method === 'delete' && data) {
    sendOption.data = data;
  }

  if (method === 'post' && data) {
    sendOption.data = data;
  }

  if (method === 'put' && data) {
    sendOption.data = data;
  }

  const result = await axios(sendOption);
  return result.data;
};

export default axiosFetch;
