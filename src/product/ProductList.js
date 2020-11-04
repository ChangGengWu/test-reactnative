// import styles from '../styles';
// 產品描述 / desc (String)
// 價格 / price (int)
// 產品類型 / category (String) (個人電腦、筆記型電腦、平板電腦、智慧型手機)
// 庫存量 / inventory (int) 
// 安全存量 / safetyStock (int)

import React ,{useState,useEffect }from 'react';

import {ActivityIndicator,FlatList, View, Text, StatusBar,StyleSheet,TouchableOpacity,Button,Alert, YellowBox} from 'react-native';

import {Icon, Fab} from 'native-base';

import ProductAdd from './ProductAdd';

import ProductDel from './ProductDel';

import * as firebase from 'firebase';

import firestore from 'firebase/firestore'

import {config} from './firebase_config';




// const data =[

//   {id:1,name:"iPhone 7", price:12000},

//   {id:2,name:"iPhone 8", price:10000},

//   {id:3,name:"iPhone X", price:20000},

// ]



export default function ProductList() {

  YellowBox.ignoreWarnings(['Setting a timer']);

  const [selected, setSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  // const [products, setProducts] = useState(data);
  // useEffect(p_delete);

//===============================renderItem============================================

  const renderItem = ({ item, index }) => {

    const backgroundColor = index === selected ? "#f9c2ff" : "#00ffff";
    const tit = "刪除"

    return(  

    <TouchableOpacity onPress = {()=>setSelected(index)} style={[styles.item, {backgroundColor}]}>

      <Text style={styles.title}>{item.desc}</Text>

      <Text style={styles.title}>{item.price}</Text>
      <Button 
        title = {tit}
        color="#f194ff"
        // onPress={() => Alert.alert('delete item ' + index)}

        // () =>p_delete(item.id) :執行function || p_delete(item.id) 取得function回傳值
        onPress={() =>p_delete(item.p_id)}
      />

      {/* <Text>/{index}</Text> */}

    </TouchableOpacity>

    )

  };
  //===============================renderItem============================================

  //===============================firebase connect======================================

  if (!firebase.apps.length) {

    firebase.initializeApp(config);

  }
  const db = firebase.firestore();

  const [products, setProducts] = useState([]);

  async function readData(){
    const newProducts = [];

    try {

      const querySnapshot = await db.collection("product").get();

      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data().desc}`);
        console.log(doc.id)
        console.log(doc.data().desc);
        console.log(doc.data().price);
        const newProduct = {
          p_id:doc.id,
          desc:doc.data().desc,
          price:doc.data().price
        }
        newProducts.push(newProduct)         
      });//foreach
      setProducts(newProducts);
      setIsLoading(false)
    }//try

  catch(e){console.log(e);}

  }//readData

  

  useEffect(()=>{

    readData();}

    ,[modalVisible]

  );

//===============================firebase connect============================================

//===============================    functions   ============================================

  // function update(newProduct){

  //   setProducts(oldProducts=>[...oldProducts, newProduct]);

  // }
  function update(){

    setModalVisible(false);

  }

  
  // function p_delete(id){
  //   //const r_products = products.filter(product => (product.id !== id))
  //   setProducts(oldProducts => oldProducts.filter(product => (product.id !== id)));
  //   //console.log(products)
  //   //console.log(id)
  // }
  // // const p_delete = index => e => {
  // //   setProducts(products.filter(product => product.index !== index));
  // // };

  function p_delete(id){
    db.collection("product").doc(id).delete().then(function() {

      console.log("Document successfully deleted!");
  
  }).catch(function(error) {
  
      console.error("Error removing document: ", error);
  
  });
  }

 //===============================    functions   ============================================

return (
  <View style={styles.container}>

  {!isLoading ?

  <FlatList 

  data={products} 

  renderItem = {renderItem}

  keyExtractor={(item, index) => ""+index}

  >

  </FlatList>

  :

  <View style={styles.loading}>

    <ActivityIndicator color="red" size="large" animating={isLoading} />

  </View>

  }

  <Fab onPress={()=>setModalVisible(true)}>

    <Icon ios='ios-add' android="md-add"/>

  </Fab>

  <ProductAdd modalVisible = {modalVisible} update={update}/>

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