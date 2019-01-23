import React, { Component } from 'react';
import '../App.css';
import FormSearch from './FormSearch';
import BreadCrumb from './BreadCrumb';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
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
    
  render ( ) {
     
      return(
      <Router>
        <div className="App">
            <header>
            <nav className="menu-top content-center">
             <Link to="/"><img src="/images/Logo_ML.png" className="logo" alt="Logo Mercado Livre" /></Link>
              <FormSearch />        
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
