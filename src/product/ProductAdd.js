import React, {useState} from 'react';

import { Button , TextInput, View } from 'react-native';

export default function ProductAdd(props) {

  const [name, setName] = useState("");

  const [price, setPrice] = useState("");



  function update(){
    //父類別的update
    props.update({name,price});

  }



  return (

    <View>

    <TextInput placeholder="產品名稱" value={name} onChangeText={text=>setName(text)}/>

    <TextInput placeholder="價格" value={price} onChangeText={text=>setPrice(text)}/>

    <Button onPress={update} title="新增"/>

    </View>

  );

}