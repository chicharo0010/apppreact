import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Text, View,StyleSheet,Image } from 'react-native';
import image from './assets/mordo.jpg'

const App = () =>{
  return(
    
    <View style={style.container}>
      <Text style={style.title}>HELLO WORLD</Text>
      {/* <Text style={style.texto}>¿ya m puedo ir? 😊</Text> */}
      <Image source={image} 
      style={style.image}/>
        </View>
  );
};

const style=StyleSheet.create({
  container:{flex: 1,justifyContent: 'center',alignItems: 'center', backgroundcolor: 'green'},
  title:{fontSize:30},
  texto:{backgroundcolor:'yellow', fontSize:50},
  image:{height : 200, width:200,borderRadius:90}
})

export default App;