const express = require('express')
const app = express()
const port = 8081
const path = require('path')
const publicDir = path.join(__dirname);
const bodyParser = require('body-parser')
const http = require('http');
const request = require('request');

const apiMercadoLibre = 'https://api.mercadolibre.com';



app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())


/**
 *  Seta o diretório do APP
 */
 
//app.use('/',express.static('app/build'));

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

    
/**	
 *  Retorna a lista de produtos
 */
app.get('/items', (req, res) => {

    const search = req.query.search;
	
	console.log(req.query);
	
    request(`${apiMercadoLibre}/sites/MLA/search?q=${search}`,(error, resRequest) => {
		if(!error && resRequest.statusCode == 200){
	         res.status(200).json(JSON.parse(resRequest.body).results.slice(0,3));
	    }else{
		    res.status(500).json({error});
		}
	    
	}); 
     
});

/**
 * Retorna os detalhes do produto
 */
app.get('/items/:id', (req, res) => {

     const id = req.params.id; 
	 
	 const description = (product) =>{

		request(`${apiMercadoLibre}/items/${id}/description`,(error, resRequest) => {

			console.log(resRequest.statusCode);
			if(!error && resRequest.statusCode == 200){
				product.description = JSON.parse(resRequest.body).plain_text;				
			}
			res.status(200).json(product);
			
			

		}) 

	 }


     request(`${apiMercadoLibre}/items/${id}`,(error, resRequest) => {
		if(!error && resRequest.statusCode == 200){
	        console.log(resRequest);
	        description(JSON.parse(resRequest.body));
	    }else{
		    res.status(500).json({error});
		}
	    
	});
     
});


app.listen(port, () => console.log(`App listening on port ${port}!`))
