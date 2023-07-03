import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react'

const HelpScreen = ({ route, navigation }) => {
  /*2. Get param from home */
  const { itemId, otherParam } = route.params;
  return (
    <View style={styles.container}>
      <Text>Just testing, I need help!!!</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
      title="Take me back home"
      onPress={() => navigation.navigate('Home')}
      />
      <Button
      title="Go to Help... again"
      onPress={() => navigation.push('Help', {
          itemId: Math.floor(Math.random() * 100),
          })
        }
      />
    </View>
  );
}

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
