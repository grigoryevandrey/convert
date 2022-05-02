import axios, { AxiosRequestConfig } from 'axios';
import { logError } from './logging';
import { ObjectLiteral } from './types';

export const retrieve = async (opts: AxiosRequestConfig): Promise<ObjectLiteral | null> => {
  try {
    const { data } = await axios(opts);

    const errorMessage = data.status.error_message;

    if (!!errorMessage) {
      logError(`API Error: ${errorMessage}`);
      return null;
    }

    return data;
  } catch (e) {
    const errorMessage = e.response?.data?.status?.error_message;

    if (errorMessage) {
      logError(`API Error: ${errorMessage}`);
    } else {
      logError(`Axios Error: ${e.message}`);
    }

    return null;
  }
};
