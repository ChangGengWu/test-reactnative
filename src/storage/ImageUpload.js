import React, {useState} from 'react';

import { Image, Button, Text, View, YellowBox } from 'react-native';

import * as ImagePicker from 'expo-image-picker';



import * as firebase from 'firebase';

import * as FirebaseCore from 'expo-firebase-core';



import styles from './styles'



export default function ImageUpload() {

  YellowBox.ignoreWarnings(['Setting a timer']);

  const [selectedImage, setSelectedImage] =

    React.useState({localUri:'https://i.imgur.com/TkIrScD.png'});

  const [message, setMessage] = useState(""); 


  if (!firebase.apps.length) {

    firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);

  } 



  let uploadImage = async(uri) => {

    setMessage("上傳中");

    const response = await fetch(uri);

    const blob = await response.blob();

    // Create a reference to "my-image"

    const ref = firebase.storage().ref().child("my-image");

    // Upload file  

    const snapshot = await ref.put(blob);

    // getDownloadURL

    const url = await snapshot.ref.getDownloadURL();

    console.log("url:"+url);

    setMessage("檔案已上傳");

  }



  let openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {

      setMessage("未給予存取照片的權限");

      return;

    }



    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    //console.log(pickerResult);



    if (!pickerResult.cancelled) {

      //if not cancelled

      setSelectedImage({ localUri: pickerResult.uri });

      uploadImage(pickerResult.uri);

    }



  }

  

  return (

    <View style={styles.container}>

      <Image source={{ uri: selectedImage.localUri }} style={styles.logo} />

      <Button onPress={openImagePickerAsync} title='選擇檔案'/>

      <Text>{message}</Text>

    </View>

  );

}