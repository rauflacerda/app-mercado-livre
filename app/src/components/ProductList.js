import React, { Component } from 'react';
// import ProductSearch from '../services/products-search';
import ProductSearchService from '../services/products-search';
import { Link } from "react-router-dom";
class ProductList extends Component {
    
   constructor(props){
     
      super(props);          
      this.state = {products: [] };
      this.updateProducts();
   } 


   updateProducts (){

      console.log(this);
      ProductSearchService(this.props.location.state.search).then((res) => {
             console.log(res);
         this.setState({products : res.data});
             
      },(err) => {
         
         console.log(err);
          
      });

   }
   
   
   componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.location.search !== prevProps.location.search) {
        this.updateProducts();
      }
    }


   render (){
     
     return (
        <div className="content-center product-list">
            {this.state.products.map( res => (
                <section className="list-item">
                     <Link to={(`/item/${res.id}`)}>
                     <img src={res.thumbnail} />
                     <div className="item-description" >
                        <h2><span className="currency-type">$</span>{res.price} <img src="images/ic_shipping.png"/></h2>
                        <p>{res.title}</p>
                     </div>                   
                     </Link>
                     <div className="item-right"> {res.address.state_name}</div>
                </section> 
            
             ))}                       
        </div>
    );   
   }
    
  
}

export default ProductList;
