import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class FormSearch extends Component {

    constructor(props, context){
       super(props, context);
       this.query ='';
    }


    onSubmit = (event) => {
      event.preventDefault();  
      const query = this.query;
      this.props.history.push(`/items?q=${query}`, {search: query});
    

    }

    changeInput = (event) => {

        this.query = event.target.value;
    }
    

    render () {
      
      return (
       <form >
         <input type="search" required placeholder="Nunca deixe de buscar"  name="query"  onChange={this.changeInput}/>
         <button onClick={this.onSubmit} ><img src="/images/ic_Search.png" alt="Busca" /></button>
       </form>
      )
    }
}

export default withRouter(FormSearch);
