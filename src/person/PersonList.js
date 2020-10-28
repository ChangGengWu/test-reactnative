import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {FlatList, View, Text,StyleSheet} from 'react-native';

import {Icon, Fab} from 'native-base';

import axios from 'axios';



import PersonAdd from './PersonAdd';

//import styles from '../styles';

import {axios_config, url} from './config';



export default function PersonList() {

  const get_url=url+"?maxRecords=50&view=Grid%20view";



  const [persons, setPersons] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);



  async function fetchData () {
      const result = await axios.get(get_url,axios_config);
      //console.log(result);
      setPersons(result.data.records);
   }



  useEffect(() => {

    fetchData();

  },[modalVisible]);



  function update(){

    setModalVisible(false);

  }



  const renderItem = ({ item, index }) => (

    <View style={styles.item}>

    <Text>{index}</Text>

    <Text style={styles.title}>{item.fields.name}</Text>

    <Text style={styles.title}>{item.fields.city},</Text>

    <Text style={styles.title}>{item.fields.age}</Text>

    </View>

  );





 return (

   <View style={styles.container}>

   <FlatList 

    data={persons} 

    renderItem = {renderItem}

    keyExtractor={(item, index) => ""+index}

    >

   </FlatList>

   <Fab onPress={()=>setModalVisible(true)}>

     <Icon ios='ios-add' android="md-add"/>

   </Fab>

   <PersonAdd modalVisible = {modalVisible} update={update}/>

   </View>

   

 );

}

const styles = StyleSheet.create({

  container: {
    //backgroundColor: '#00bfff',
    flex: 1,
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight || 5,
    padding: 20,
  },

  item: {

    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#00ffff',
    padding: 8,
    marginVertical: 10,
    marginHorizontal: 25,

  },

  title: {
    fontSize: 24,
    marginHorizontal: 10,
  },

});