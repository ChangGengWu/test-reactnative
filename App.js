import React, {useState} from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import { createStackNavigator } from '@react-navigation/stack';

import PersonList from './src/person/PersonList';

import ProductList from './src/product/ProductList';

import SignUp from './src/account/SignUp';
import SignIn from './src/account/SignIn';
import SignOut from './src/account/SignOut';
import {AuthContext} from './src/account/AuthContext';
import ImageUpload from './src/storage/ImageUpload';
import indextest from './src/note-index/index';
// import Click from './Click';



//const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();



function App() {
  const [isSignedIn,setIsSignedIn] = useState(false);

  const [count, setCount] = useState(10);

  let countString = "count in App:"+count;

  function updateCount(newCount){

    setCount(newCount);

  }

  return (

    <NavigationContainer>
      <AuthContext.Provider value={{isSignedIn: isSignedIn, setStatus:setIsSignedIn }}>
      <Tab.Navigator>
      {isSignedIn?(
        <>
        <Tab.Screen name="Person" component={PersonList} />
        <Tab.Screen name="Product" component={ProductList} />
        <Tab.Screen name="Image" component={ImageUpload}/>
        <Tab.Screen name="SignOut" component={SignOut} />
        </>
        )
        :(
          <>
          <Tab.Screen name="SignIn" component={SignIn} />
          <Tab.Screen name="SignUp" component={SignUp} />
          <Tab.Screen name="index" component={indextest}/>
          </>
        )
        }
        

        {/* <Tab.Screen name="Click" component={Click} initialParams={{ count: 10 }}/> */}

      </Tab.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>

  );

}

export default App;



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
