import { get as getConfig } from 'config';
import * as request from 'request';

interface NaverApiConfig {
  clientId: string;
  clientSecret: string;
}

class NaverBookApi {
  clientId: string;
  clientSecret: string;

  constructor({ clientId, clientSecret }: NaverApiConfig) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  search(keyword: string) {
    return new Promise((resolve, reject) => {
      request({
        method: 'get',
        url: 'https://openapi.naver.com/v1/search/book.json',
        qs: { query: keyword },
        headers: {
          'X-Naver-Client-Id': this.clientId,
          'X-Naver-Client-Secret': this.clientSecret,
        },
        json: true,
      }, (error, _, body) => {
        if (error) return reject(error);
        console.log(body);
        resolve(body.items);
      });
    });
  }
}

export default new NaverBookApi(getConfig('NaverApi'));
