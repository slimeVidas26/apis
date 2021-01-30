import React from 'react'
import { StyleSheet, Text, View , Button } from 'react-native';
import {data} from '../config/MainConfig'


function HomeScreen({navigation}) {
  
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style = {{fontSize : 24}}>{data.Home.title}</Text>
          <Button title = 'Go to Details'
           onPress = {()=>navigation.navigate('Details' , {
             otherParam : 'Anything You Want here'
           })}/>
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

export default HomeScreen;


