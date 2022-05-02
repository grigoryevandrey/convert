import { BASE_URL, CMC_API_KEY } from './config';
import { retrieve } from './client';
import { logError } from './logging';

const extractPrice = (data: any, toTicker: string) => {
  return data.data[0].quote[toTicker.toUpperCase()].price;
};

export const convert = async (fromTicker: any, toTicker: any, amount: any) => {
  if (!CMC_API_KEY) {
    logError(`Please, provide an api key using CMC_API_KEY env variable.`);
    return;
  }

  const url = BASE_URL;
  const method = 'GET';
  const headers = {
    'X-CMC_PRO_API_KEY': CMC_API_KEY,
  };
  const params = { symbol: fromTicker, convert: toTicker, amount };

  const fetched = await retrieve({ url, method, headers, params });

  if (!fetched) return;

  return extractPrice(fetched, toTicker);
};
