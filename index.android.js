import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import ListItems from './src/components/ListItems'; 

class appProductList extends Component {
  
  render() {
    return (
      <ListItems />
    );
  }
}

AppRegistry.registerComponent('app_product_list', () => appProductList);
