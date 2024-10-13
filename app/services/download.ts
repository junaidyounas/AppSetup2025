import {apiInstance, apiInstance2} from './apiInstance';

const searchByUrl = (url: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    // Assuming `apiInstance` is an instance of some HTTP client (e.g., Axios)
    apiInstance
      .get(`api.php?url=${url}`)
      .then((response: {data: string | PromiseLike<string>}) => {
        console.log(
          '===> ~ file: download.ts:9 ~ .then ~ response:',
          response.data,
        );
        // Handle the successful response
        resolve(response.data);
      })
      .catch((error: any) => {
        console.log(
          '===> ~ file: download.ts:14 ~ searchByUrl ~ error:',
          error,
        );
        // Handle the error
        reject(error);
      });
  });
};

const searchByUrl2 = (url: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    // Assuming `apiInstance` is an instance of some HTTP client (e.g., Axios)
    apiInstance2
      .post('', {
        url: url
      })
      .then((response: { data: string | PromiseLike<string>; }) => {
        console.log("===> ~ file: download.ts:35 ~ .then ~ response:", response.data);
        // Handle the successful response
        resolve(response.data);
      })
      .catch((error: any) => {
        console.log("===> ~ file: download.ts:40 ~ searchByUrl ~ error:", error);
        // Handle the error
        reject(error);
      });
  });
};


export const downloadService = {
  searchByUrl,
  searchByUrl2
};
