import React, {useState} from 'react';

import { Button , TextInput, Modal,StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import {axios_config, url} from './config';
import { View } from 'native-base';



export default function PersonAdd(props) {

  const [name, setName] = useState("");

  const [city, setCity] = useState("");

  const [age, setAge] = useState("0");

  

  async function sendData () {

      const newPerson={

        fields:{

          name:name,

          city:city,

          age:parseInt(age)

        }

      }

      //console.log(newPerson);

      try {

      	const result = await axios.post(url,newPerson, axios_config);

      	console.log(result);

      	//setPersons(result.data.records);

      	props.update();

      }

      catch (e){

        console.log("error:"+e);

      }

  }



  function update(){

    sendData();

  }



  return (

    <Modal visible={props.modalVisible} style={styles.centeredView}>
    <View style={styles.modalView}>

    <TextInput placeholder="姓名" value={name} onChangeText={text=>setName(text)}/>

    <TextInput placeholder="城市" value={city} onChangeText={text=>setCity(text)}/>

    <TextInput placeholder="年齡" value={age} onChangeText={text=>setAge(text)}/>

    <Button onPress={update} title="新增"/>
    <Button onPress={props.update} title="刪除"/>
    </View>
    </Modal>

  );

}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
