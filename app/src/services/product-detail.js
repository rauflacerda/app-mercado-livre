import {http} from  './http'

const productDetailService = id => http.get(`items/${id}`); 

export default productDetailService;
