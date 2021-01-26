import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {data} from '../config/MainConfig'


function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style = {{fontSize : 24}}>{data.Details.title}</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default DetailsScreen;


