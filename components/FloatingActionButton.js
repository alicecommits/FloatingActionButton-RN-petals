import React, { useState, useRef } from "react";
import { View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Animated,
Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import generatePetalsCoord from "./PetalsCalc";
import styles from "../styles/ButtonStyles";

const FloatingButton = () => {

  // X AXIS INI -------------------------------------------
  const windowWidth = Dimensions.get('window').width;
  const centerX = 0.5*(windowWidth - styles.petals.width);
  
  // Y AXIS INI -------------------------------------------
  //tbd the smartest way to guarantee position on Y axis
  const windowHeight = Dimensions.get('window').height;
  // arbitrary, looks not to bad
  const default_height_offset = 260; 
  const centerY = windowHeight - default_height_offset


  // these are just examples from FontAwesome, with 5 icons.
  // Link to FontAwesome names in the README
  // icons to specify in the trigo direction
  const iconNamesArrDemo = [
    "pencil-square-o", 
    "map-marker", 
    "support", 
    "sitemap",
    "gears"
  ];

  const petals = generatePetalsCoord(
    centerX, 
    centerY, 
    85,
    2,
    5, 
    iconNamesArrDemo);
  console.log(petals);

  const initialXY = {
    x: centerX,
    y: centerY
  };

  const icon_1 = useRef(new Animated.ValueXY(initialXY)).current;
  const icon_2 = useRef(new Animated.ValueXY(initialXY)).current;
  const icon_3 = useRef(new Animated.ValueXY(initialXY)).current;
  const icon_4 = useRef(new Animated.ValueXY(initialXY)).current;
  const icon_5 = useRef(new Animated.ValueXY(initialXY)).current;
  

  // icons poppiing out when pressing '+' -----------------------------
  const [pop, setPop] = useState(false);

  const popOut = () => {
    setPop(true);

    Animated.timing(icon_1, {
      toValue: {x: petals[0].x, y: petals[0].y},
      duration: 500,
      useNativeDriver: false,
    }).start();

    Animated.timing(icon_2, {
      toValue: {x: petals[1].x, y: petals[1].y},
      duration: 500,
      useNativeDriver: false,
    }).start();
    
    Animated.timing(icon_3, {
      toValue: {x: petals[2].x, y: petals[2].y},
      duration: 500,
      useNativeDriver: false,
    }).start();
    
    Animated.timing(icon_4, {
      toValue: {x: petals[3].x, y: petals[3].y},
      duration: 500,
      useNativeDriver: false,
    }).start();
    
    Animated.timing(icon_5, {
      toValue: {x: petals[4].x, y: petals[4].y},
      duration: 500,
      useNativeDriver: false,
    }).start();
    
  }

  // icons hiding back behind the '+' --------------------------------
  const popIn = () => {
    setPop(false);

    Animated.timing(icon_1, {
      toValue: initialXY,
      duration: 500,
      useNativeDriver: false,
    }).start();

    Animated.timing(icon_2, {
      toValue: initialXY,
      duration: 500,
      useNativeDriver: false,
    }).start();

    Animated.timing(icon_3, {
      toValue: initialXY,
      duration: 500,
      useNativeDriver: false,
    }).start();
    
    Animated.timing(icon_4, {
      toValue: initialXY,
      duration: 500,
      useNativeDriver: false,
    }).start();
    
    Animated.timing(icon_5, {
      toValue: initialXY,
      duration: 500,
      useNativeDriver: false,
    }).start();
    
  }

  // Animated Views - TODO way of generating them all auto -------------
  return(
    <View style={{
      flex: 1,
      //justifyContent: "center",
      //alignItems: "center",
    }}>

      <Animated.View style={[styles.petals, icon_1.getLayout()]}>
        <TouchableOpacity>
          <Icon name={petals[0].iconName} 
          size={styles.iconscontent.size} 
          color={styles.iconscontent.textColor} />
        </TouchableOpacity>
      </Animated.View>
      
      <Animated.View style={[styles.petals, icon_2.getLayout()]}>
        <TouchableOpacity>
          <Icon name={petals[1].iconName} 
          size={styles.iconscontent.size} 
          color={styles.iconscontent.textColor} />
        </TouchableOpacity>
      </Animated.View>
      
      <Animated.View style={[styles.petals, icon_3.getLayout()]}>
        <TouchableOpacity
        onPress={() => alert('This will go to Help Screen.')}>
          <Icon name={petals[2].iconName} 
          size={styles.iconscontent.size} 
          color={styles.iconscontent.textColor} />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.petals, icon_4.getLayout()]}>
        <TouchableOpacity>
          <Icon name={petals[3].iconName} 
          size={styles.iconscontent.size} 
          color={styles.iconscontent.textColor} />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.petals, icon_5.getLayout()]}>
        <TouchableOpacity>
          <Icon name={petals[4].iconName} 
          size={styles.iconscontent.size} 
          color={styles.iconscontent.textColor} />
        </TouchableOpacity>
      </Animated.View>


      <TouchableOpacity
        style={styles.clicktopopicon}
        onPress={() => {
          pop === false ? popOut() : popIn();
        }}
      >
        <Icon name="plus" size={25} color="#FFFF" />
      </TouchableOpacity>
    
    </View>
  )
}
export default FloatingButton;