import React from 'react'
import { StyleSheet, Text, View , Button } from 'react-native';
import {data} from '../config/MainConfig'


function DetailsScreen({route , navigation}) {

  const {name , params} = route;
  const {itemId , otherParam} = params;


  
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style = {{fontSize : 24}}>{name}</Text>
          <Text style = {{fontSize : 22}}>itemId : {JSON.stringify(itemId)}</Text>
          <Text style = {{fontSize : 20}}>otherParam : {JSON.stringify(otherParam)}</Text>

          <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />

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


