/**
 * Here you add all the apis urls defenition
 */

import request from '@base/features/base-api';
import { AxiosResponse } from 'axios';
import { config } from 'config';

export interface Api {
	getDrinks: (drinks: string) => Promise<AxiosResponse>;
	getRandom: () => Promise<AxiosResponse>;
}

export const createApi = (baseURL = config.ROOT_SERVER_URL): Api => ({
	getDrinks: (drink) => request.call({
		baseURL: 'http://6ew7g.mocklab.io/' || baseURL,
		method: 'get',
		url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
	}),
	getRandom: () => request.call({
		baseURL: 'http://6ew7g.mocklab.io/' || baseURL,
		method: 'get',
		url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
	})
});

export default createApi();
