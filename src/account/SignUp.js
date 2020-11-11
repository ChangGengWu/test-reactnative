import React, {useState} from 'react';
import {Button, View, Text, TextInput,StatusBar, StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import * as FirebaseCore from 'expo-firebase-core';
// import {config} from './firebase_config';

export default function SignUp() {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");//for error message from signUp
    if (!firebase.apps.length) {
      firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
    }
  
    async function signUp(){
      try {
        const res = await firebase.auth()
          .createUserWithEmailAndPassword(email, password);
        res.user.updateProfile({displayName: displayName});
        //console.log('User registered successfully!');
        setDisplayName('');
        setEmail('');
        setPassword('');
        setMessage('');
      }
      catch(error){
        setMessage(error.message);
      }
    }   
  
    return(
    <View style={styles.container}>
      <View style={styles.form}>  
        <TextInput
          style={styles.inputStyle}
          placeholder="姓名"
          value={displayName}
          onChangeText={text=>setDisplayName(text)}
        />      
        <TextInput
          style={styles.inputStyle}
          placeholder="電子信箱"
          value={email}
          onChangeText={text=>setEmail(text)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="密碼"
          value={password}
          onChangeText={text=>setPassword(text)}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
          title="註冊"
          onPress={signUp}
        />
        <Text>{message}</Text>
        <Text>
          已經註冊，我要登入
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