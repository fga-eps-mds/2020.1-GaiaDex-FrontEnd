import { ENDPOINTS, baseHeaders } from './index';

const scannerPlant = async (scannerBody) => {
  const SCANNER = ENDPOINTS.API.scanner;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + SCANNER.route, {
      method: SCANNER.method,
      headers: baseHeaders(),
      body: JSON.stringify({
        filename: scannerBody.filename,
        data: scannerBody.data,
        mime: scannerBody.mime,
        plantType: scannerBody.plantType,
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};

export default scannerPlant;
