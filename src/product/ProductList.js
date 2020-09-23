import React from 'react';

import {FlatList, View, Text, StatusBar,StyleSheet} from 'react-native';

// 產品描述 / desc (String)
// 價格 / price (int)
// 產品類型 / category (String) (個人電腦、筆記型電腦、平板電腦、智慧型手機)
// 庫存量 / inventory (int) 
// 安全存量 / safetyStock (int)

const data =[

  {desc:"2016 Apple product",name:"iPhone 7", price:12000, category:"智慧型手機",inventory:6, safetyStock:5},

  {desc:"2017 Apple product",name:"iPhone 8", price:14000, category:"智慧型手機",inventory:7, safetyStock:4},

  {desc:"Apple product",name:"iPad", price:14000, category:"平板電腦",inventory:8, safetyStock:6},

]

/*

const Item = ({name}) => (

  <View>

    <Text>{name}</Text>

  </View>

);

*/



const renderItem = ({ item, index }) => (

  <View style={styles.item}>

  <Text>{item.desc}</Text>  

  <Text style={styles.title}>{item.name}</Text>

  <Text>{item.price}</Text>

  <Text>{item.category}</Text> 

  <Text>{item.inventory}</Text> 

  <Text>{item.safetyStock}</Text>

  <Text>/{index}</Text>

  </View>

);



export default function ProductList() {





 return (

   <View style={styles.container}>

   <FlatList 

    data={data} 

    renderItem = {renderItem}

    keyExtractor={item => item.name}

    >

   </FlatList>

   </View>

 );

}



const styles = StyleSheet.create({

  container: {

    //backgroundColor: '#00bfff',

    flex: 1,

    flexDirection: 'row',

    marginTop: StatusBar.currentHeight || 0,

  },

  item: {

    flex: 1,

    // flexDirection: 'row',

    backgroundColor: '#00ffff',

    padding: 8,

    marginVertical: 8,

    marginHorizontal: 16,

  },

  title: {

    fontSize: 24,

  },

});