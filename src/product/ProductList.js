// import styles from '../styles';
// 產品描述 / desc (String)
// 價格 / price (int)
// 產品類型 / category (String) (個人電腦、筆記型電腦、平板電腦、智慧型手機)
// 庫存量 / inventory (int) 
// 安全存量 / safetyStock (int)

import React ,{useState}from 'react';

import {FlatList, View, Text, StatusBar,StyleSheet,TouchableOpacity} from 'react-native';

import ProductAdd from './ProductAdd';




const data =[

  {name:"iPhone 7", price:12000},

  {name:"iPhone 8", price:10000},

  {name:"iPhone X", price:20000},

]



export default function ProductList() {

  

  const [selected, setSelected] = useState(null);
  const [products, setProducts] = useState(data);


  const renderItem = ({ item, index }) => {

    const backgroundColor = index === selected ? "#f9c2ff" : "#00ffff";

    return(  

    <TouchableOpacity onPress = {()=>setSelected(index)} style={[styles.item, {backgroundColor}]}>

      <Text style={styles.title}>{item.name}</Text>

      <Text>{item.price}</Text>

      {/* <Text>/{index}</Text> */}

    </TouchableOpacity>

    )

  };



  function update(newProduct){

    setProducts(oldProducts=>[...oldProducts, newProduct]);

  }

  
  function p_delete(newProduct){

    setProducts(oldProducts=>oldProducts.filter(name =>(name !== name)));

  }





 return (

   <View style={styles.container}>

   <FlatList

    data={products} 

    renderItem = {renderItem}

    keyExtractor={item => item.name}

    >

   </FlatList>

   <ProductAdd update={update}/>

   </View>

 );

}

/*

const Item = ({name}) => (

  <View>

    <Text>{name}</Text>

  </View>

);

*/



// const renderItem = ({ item, index }) => (

//   <TouchableOpacity onPress = {()=>setSelected(index)} style={[styles.item, {backgroundColor}]} style={[styles.item, {backgroundColor}]}>

//   <Text>{item.desc}</Text>  

//   <Text style={styles.title}>{item.name}</Text>

//   <Text>{item.price}</Text>

//   <Text>{item.category}</Text> 

//   <Text>{item.inventory}</Text> 

//   <Text>{item.safetyStock}</Text>

//   <Text>/{index}</Text>

//   </TouchableOpacity>

// );



// export default function ProductList() {

  

//   const [selected, setSelected] = useState(null);

  

//   const renderItem = ({ item, index }) => {

//     const backgroundColor = index === selected ? "#f9c2ff" : "#00ffff";

//     return(  

//     <TouchableOpacity onPress = {()=>setSelected(index)} style={[styles.item, {backgroundColor}]}>
//       <View styles={{justifyContent: "space-between"}}>
//         <View  style={{flex: 0.5}}>
//           <Text style={styles.title}>{item.name}</Text>
//         </View>

//         <View  style={{flex: 0.5,textAlign:'center'}}>
//           <Text>{item.desc}</Text>
//           <Text>{item.price}</Text>

//           <Text>{item.category}</Text> 

//           <Text>{item.inventory}</Text> 

//           <Text>{item.safetyStock}/{index}</Text>
//           <Text></Text>
//         </View>
//       </View>
//     </TouchableOpacity>

//     )

//   };





//  return (

//    <View style={styles.container}>

//    <FlatList 

//     data={data} 

//     renderItem = {renderItem}

//     keyExtractor={item => item.name}

//     >

//    </FlatList>

//    </View>

//  );

// }
//   const [selected, setSelected] = useState(null);
//  return (

//    <View style={styles.container}>

//    <FlatList 

//     data={data} 

//     renderItem = {renderItem}

//     keyExtractor={item => item.name}

//     >

//    </FlatList>

//    </View>

//  );



const styles = StyleSheet.create({

  container: {
    //backgroundColor: '#00bfff',
    flex: 1,
    flexDirection: 'row',
    marginTop: StatusBar.currentHeight || 5,
    padding: 20,
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

});