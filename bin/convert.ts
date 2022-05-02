import { BASE_URL, CMC_API_KEY } from './config';
import { retrieve } from './client';
import { logError } from './logging';
import { ObjectLiteral } from './types';

const extractPrice = (data: ObjectLiteral, toTicker: string): number => {
  return data.data[0].quote[toTicker.toUpperCase()].price;
};

export const convert = async (fromTicker: string, toTicker: string, amount: number): Promise<number | void> => {
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
