import React, { Component } from 'react';
import { View } from 'react-native';

import Items from './Items';

export default class ListItems extends Component {
  
  render() {
    return (
      <View>
      	<Items />
      	<Items />
      	<Items />
      </View>
    );
  }
}
