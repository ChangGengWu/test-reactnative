import React, {useState, useEffect} from 'react';

import {FlatList, View, Text} from 'react-native';

//import {Icon, Fab} from 'native-base';

import axios from 'axios';



//import ProductAdd from './ProductAdd';

import styles from '../styles';



export default function PersonList() {

  const axios_config = {
     headers: {'Authorization': 'Bearer keySEVC5l6huQZqzW'}
    };
    
  const url="https://api.airtable.com/v0/appyYwH8evTKvaSFF/Table%201?maxRecords=30&view=Grid%20view";

  const [persons, setPersons] = useState([]);



  const renderItem = ({ item, index }) => (

    <View style={styles.item}>

    <Text>{index}</Text>

    <Text style={styles.title}>{item.fields.name}</Text>

    <Text>{item.fields.city},</Text>

    <Text>{item.fields.age}</Text>

    </View>

  );



  async function fetchData () {

      const result = await axios.get(url,axios_config);

      //console.log(result);

      setPersons(result.data.records);

  }



  useEffect(() => {

    fetchData();

  },[]);



 return (

   <View style={styles.container}>

   <FlatList 

    data={persons} 

    renderItem = {renderItem}

    keyExtractor={(item, index) => ""+index}

    >

   </FlatList>

   </View>

   

 );

}