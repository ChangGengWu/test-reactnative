import React, {useState,useContext} from 'react';

import {Button, View, Text,StyleSheet,StatusBar } from 'react-native';

import * as firebase from 'firebase';

import * as FirebaseCore from 'expo-firebase-core';
import {AuthContext} from '../account/AuthContext';
// import styles from '../styles';



export default function SignOut() {
  const authContext = useContext(AuthContext)

  if (!firebase.apps.length) {

    firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);

  }

  

  const [message, setMessage] = useState("");

  

  async function signOut(){

    try{

      await firebase.auth().signOut();

      console.log('User signed out successfully!');
      authContext.setStatus(false);

    }

    catch(error){

      setMessage(error.message);

    }

  };



  return(
    <View style={styles.container}>

    <View style={styles.form}>  

      <Text>{message}</Text>      

      <Button

        title="登出"

        onPress={signOut}

      />

      <Text>{message}</Text>

      <Text>

        我要登入

      </Text>                          

    </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  loading:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#00ffff',
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
  form: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    marginTop: StatusBar.currentHeight || 0,
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },

});