import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Items extends Component {

  render() {
    return (
      <View style={styles.itemStyle}>
        <View style={styles.foto}>
          <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto}} />
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.txtTitle}>{this.props.item.titulo}</Text>
          <Text style={styles.txtValue}>R$ {this.props.item.valor},00</Text>
          <Text style={styles.txtDetail}>{this.props.item.local_anuncio}</Text>
          <Text>{this.props.item.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemStyle: {
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row'
  },
  foto: {
    width: 102,
    height: 102
  },
  detailItem: {
    marginLeft : 20,
    flex: 1
  },
  txtTitle: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5
  },
  txtValue: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  txtDetail: {
    fontSize: 16
  }
});
