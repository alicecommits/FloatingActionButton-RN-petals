import { StyleSheet, 
  Text, 
  View, 
  Button,
  Dimensions,
  TouchableOpacity, 
  Touchable} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import MapView, {Marker} from 'react-native-maps';

// TO RELOCATE TO COMPONENTS AND TBD HOW TO CONFIGURE PATHS
import FloatingButton from '../components/FloatingActionButton';
import styles from "../styles/component.styles/ButtonStyles";

function HomeScreen({ navigation }) {

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
  navigation.setOptions({
    headerRight: () => (
      <Button 
      onPress={() => alert("Will take to init screen.")} 
      title="ON/OFF ICON HERE" />
    ),
  });
}, [navigation]);

  return (
      <><View style={stylesScreen.container}>
        <MapView style={stylesScreen.map}>
        </MapView>
      </View><View style={stylesScreen.footerContainer}>
          <FloatingButton />
      </View>
        <StatusBar style="auto" /></>
  );
  }

export default HomeScreen;

//TODO: how to export styling whilst keeping overlay of menu on map?
const offsetPos = 20;
const radiusOffsetPos = styles.clicktopopicon.height + offsetPos;
const stylesScreen = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  footerContainer: {
    position: 'absolute',
    bottom: radiusOffsetPos,
    flex: 1,
    // icon positioning
    alignSelf: 'center',
  },
});
