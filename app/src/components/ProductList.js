import React, { Component } from 'react';
import ProductSearchService from '../services/products-search';
import { Link } from "react-router-dom";
let ProductLoaded = false;
class ProductList extends Component {
    
   constructor(props){     
      super(props);          
      this.state = {products: [] };
      this.updateProducts();
   } 


   updateProducts (){
     
      ProductSearchService(this.props.location.state.search).then((res) => {
             
         this.setState({products : res.data});
         ProductLoaded = true;
             
      },(err) => {
         
         ProductLoaded = true;
          
      });

   }
   
   
   componentDidUpdate(prevProps) {
   
      if (this.props.location.search !== prevProps.location.search) {
        this.updateProducts();
      }
    }


   render (){
     
     return (
        <div className="content-center product-list">
            {(this.state.products.length > 0 || ProductLoaded ===  false) ? (this.state.products.map( res => (
                <section className="list-item" key={res.id}>
                     <Link to={(`/item/${res.id}`)}>
                     <img src={res.thumbnail} alt={res.thumbnail}/>
                     <div className="item-description" >
                        <h2><span className="currency-type">$</span>{res.price} <img src="/images/ic_shipping.png" alt="Transportadora" /></h2>
                        <p>{res.title}</p>
                     </div>                   
                     </Link>
                     <div className="item-right"> {res.address.state_name}</div>
                </section> 
            
              ))
             ): <div className="message-empty-result text-gray"> Não foram encontrados resultados na busca</div>}                       
        </div>
    );   
   }
    
  
}

export default ProductList;
