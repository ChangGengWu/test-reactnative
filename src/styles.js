import {StatusBar, StyleSheet} from 'react-native';



const styles = StyleSheet.create({

    container: {

      //backgroundColor: '#00bfff',

      flex: 1,

      //margin: 'auto',

      flexDirection: 'row',

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

  

  });
  export default styles;