import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import {Alert, Button, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Click from './src/Click';
import ProductList from './src/product/ProductList';


export default function App() {

  return (

    <View style={styles.container}>

      <ProductList/>

    </View>

  );
  // const [count, setCount] = useState(10);

  // let countString = "count in App:"+count;

  // function updateCount(newCount){

  //   setCount(newCount);

  // }

  // useEffect(()=>{

  //   Alert.alert("count in App:"+count);});
  // return (

  //   <View style={styles.container}>

  //     <Text>Hello</Text>

  //     <Button title={countString} onPress={()=>setCount(count+1)}/>

  //     <Click count={count} update={updateCount}/>

  //   </View>

  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
