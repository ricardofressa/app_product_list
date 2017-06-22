import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios'

import Items from './Items';

export default class ListItems extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = { listItems: [] }; 
  }

  componentWillMount() {
    // request HTTP
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => { this.setState({ listItems: response.data }); })
      .catch(() => { console.log('Erro ao recuperar os dados'); }); 
  }

  render() {
    return (
      <View>
	    	{ this.state.listItems.map(item => ( <Items key={item.titulo} item={item} /> ) ) }
      </View>
    );
  }
}
