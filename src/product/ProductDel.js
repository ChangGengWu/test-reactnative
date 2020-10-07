import React, {useState} from 'react';

import { Button , TextInput, View } from 'react-native';

export default function ProductAdd(props) {

  const [name, setName] = useState("");

  const [price, setPrice] = useState("");



  function p_delete(){

    props.update({name,price});

  }



  return (

    <View>

    <Button onPress={p_delete} title="刪除"/>

    </View>

  );

}