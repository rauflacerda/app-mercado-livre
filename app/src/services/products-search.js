import {http} from  './http'

const productsSearchService = query => http.get(`items?search=${query}`); 

export default productsSearchService;
