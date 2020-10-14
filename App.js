import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import {Alert, Button, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Click from './src/Click';
import ProductList from './src/product/ProductList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen({ navigation }) {

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',flexDirection: 'column'}}>

      <Text>Home Screen</Text>

      <Button

        title="Go to Details"

        onPress={() => navigation.navigate('Details')}

      />
      <Button

      title="Go to Products"

      onPress={() => navigation.navigate('Products')}

      />

    </View>

  );

}

function DetailsScreen({ navigation }) {

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>Details Screen</Text>

        <Button

        title="Go to Home"

        onPress={() => navigation.navigate('Home')}

      />

      </View>

    );

  }

  
function ProductScreen({ navigation }) {

  return (

    <View style={styles.container}>

      <ProductList/>

    </View>

  );

}
const Stack = createStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
    <Stack.Screen name="Products" component={ProductScreen} />
    </Stack.Navigator>

  </NavigationContainer>

    // <View style={styles.container}>

    //   <ProductList/>

    // </View>

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
  index_button:{
    margin:10,
    padding:10
  }
});
