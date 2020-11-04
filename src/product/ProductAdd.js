import React, {useState} from 'react';

import { Button , TextInput, View ,Modal } from 'react-native';

import * as firebase from 'firebase';

import firestore from 'firebase/firestore'

import {config} from './firebase_config';

export default function ProductAdd(props) {

  // const [name, setName] = useState("");

  // const [price, setPrice] = useState("");

  const [desc, setDesc] = useState("");

  const [price, setPrice] = useState("");

  if (!firebase.apps.length) {

    firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);

  } 

  const db = firebase.firestore();



  // function update(){
  //   //父類別的update
  //    props.update({name,price});

  // }

  async function update(){

    try {

      const docRef = await db.collection("product").add({

        desc: desc,

        price: parseInt(price)

      });

      console.log(docRef.id);

      setDesc("");

      setPrice("");

      props.update();

    }

    catch(error) {

      console.error("Error adding document: ", error);

    }

  }

    function cancel(){

    setDesc("");

    setPrice("");

    props.update();

  }



  return (

    <Modal visible={props.modalVisible}>

    <TextInput placeholder="產品說明" value={desc} onChangeText={text=>setDesc(text)}/>

    <TextInput placeholder="價格" value={price} onChangeText={text=>setPrice(text)}/>

    <Button onPress={update} title="新增"/>

    <Button onPress={cancel} title="取消"/>

    </Modal>

  );

}