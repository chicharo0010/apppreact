import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Text, View,StyleSheet,Image, Button, TextInput } from 'react-native';
import image from './assets/mordo.jpg'
import { TouchableOpacity } from 'react-native';

const App = () =>{
  const [count, setCount]= useState(0);
  const onPress= ()=>setCount(prevCount =>prevCount+1)
  
  return(
    
    <View style={style.container}>
      <Text style={style.title}>HELLO WORLD</Text>
      {/* <Text style={style.texto}>¿ya m puedo ir? 😊</Text> */}
      <Image source={image} 
      style={style.image}/>
  <Button
    title= "Presionar aqui"
    color="#4A4A4A"
    onPress={()=> alert('Hello World')}/>

<br/><br/>
<Text style={style.texto2}>ingresa tu nombre</Text>
<TextInput multiline={false} />
<br/><br/>
<Text style={style.texto2}>ingresa tu apellido</Text>
<TextInput multiline={false} />
<br/><br/>
        <View style={style.container}>  
  <text>
      count: {count}
  </text>
        </View>
      <TouchableOpacity 
        style={style.button}
        onPress={onPress}
      ><br/><br/>
        <Text style={style.buttonText}>presioname</Text>
      </TouchableOpacity>
        </View>
  );
};

const style=StyleSheet.create({
  container:{flex: 1,justifyContent: 'center',alignItems: 'center', backgroundcolor: 'green'},
  title:{fontSize:30},
  texto:{backgroundcolor:'yellow', fontSize:50},
  texto2:{ fontSize:15},
  image:{height : 200, width:200,borderRadius:90},
  button:{backgroundColor:'red', padding: 7  , marginTop:10},
  buttonText:{fontSize:20,color:'#4A4A4A'}

})

export default App;
