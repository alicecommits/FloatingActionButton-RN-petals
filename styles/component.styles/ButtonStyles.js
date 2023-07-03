import { StyleSheet } from "react-native";

// Petals for now
export default StyleSheet.create({
    petals: {
      // aspects of icon
      backgroundColor: '#f52d56',
      width: 60,
      height: 60,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      
      // icon positioning: careful
      // for position 'relative' would
      // stack+translate icons together
      position: 'absolute',
      //unused:
      //alignSelf: 'center',
    },
    iconscontent: {
        size: 25,
        textColor: "#FFFFFF",
    },
    clicktopopicon: {
      // aspects of icon
      backgroundColor: '#000000',
      width: 60,
      height: 60,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      
      // icon positioning
      position: 'absolute',
      alignSelf: 'center',
      // hard-coded initial '+' pos
      //bottom: 20, // can't access .default_pos_x?
    }
  });