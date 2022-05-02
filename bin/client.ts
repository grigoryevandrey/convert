import axios from 'axios';
import { logError } from './logging';

export const retrieve = async (opts: any) => {
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
