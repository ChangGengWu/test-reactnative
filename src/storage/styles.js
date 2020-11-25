import {StatusBar, StyleSheet} from 'react-native';



const styles = StyleSheet.create({

    container: {

      flex: 1,

      display: "flex",

      flexDirection: "column",

      justifyContent: "center",

      padding: 35,

      backgroundColor: '#fff',

      //backgroundColor: '#00bfff',

      //flex: 1,

      //display: 'flex',

      //margin: 'auto',

      //flexDirection: 'row',

      marginTop: StatusBar.currentHeight || 0,

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

    inputStyle: {

      width: '100%',

      marginBottom: 15,

      paddingBottom: 15,

      alignSelf: "center",

      borderColor: "#ccc",

      borderBottomWidth: 1

    },

    logo: {

      width: 305,

      height: 159,

      marginBottom: 20,

    },

  

  });

export default styles;