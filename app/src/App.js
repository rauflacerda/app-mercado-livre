import React, { Component } from 'react';
import './App.css';
import FormSearch from './components/FormSearch';
import BreadCrumb from './components/BreadCrumb';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const Home = () => {

  return '';

} 

class App extends Component {
    
 constructor(props){
       super(props);
       
       this.state = {
          searchText:''
       }
       
  }
    
  setProducts = (products) => {
              
        this.setState({products},() => {
            
            console.log(this.state);
        
        }); 
             
    
  }     

    render ( ) {
     
      return(
      <Router>
        <div className="App">
            <header>
            <nav className="menu-top content-center">
             <Link to="/"><img src="/images/Logo_ML.png" className="logo" alt="Logo" /></Link>
              <FormSearch handleChange={this.setProducts} />        
            </nav>
            </header>
            <nav className="content-center">
             <BreadCrumb />           
            </nav>        
            <Route exact path="/" component={Home} />
            <Route path="/items" component={ProductList} />
            <Route path="/item/:id" component={ProductDetail} />          
        </div>
      </Router>
      )
    }

}


export default App;
