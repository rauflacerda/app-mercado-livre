import React, { Component } from 'react';
import ProductDetailService from '../services/product-detail';

/**
 * Product Detail 
 * 
 **/


 
class ProductDetail extends Component {

    constructor(props){

        super(props);
        console.log(this.state);
        this.state = {product:{}};
        this.updateProduct();    
    }



    updateProduct(){

       
        ProductDetailService(this.props.match.params.id).then((res) => {
               
           this.setState({product : res.data});
               
        },(err) => {
           
           console.log(err);
            
        });

    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.location.item !== prevProps.location.item) {
          this.updateProduct();
        }
    }
  

    render (){
        const product = this.state.product; 
        return (
            <div className="content-center">
                <div className="wrapper-content bg-white">
                    <section className="product-col-1">
                    <img src={product.thumbnail}  title={product.title}/>
                    <div>
                    <h2> Descrição do produto:</h2>
                    <p className="text-gray">{product.description}</p>
                    </div>
                    </section>
                    <div className="product-col-2">
                    <span className="text-small">Nuevo - 234 vendidos</span>
                    <h2 className="product-title">{product.title}</h2>
                    <span className="price">${product.price}</span>
                    <button className="btn-primary">Comprar</button>
                    </div>    
                </div>      
            </div>
        )
   }  
}

export default ProductDetail;
