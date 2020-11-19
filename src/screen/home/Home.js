import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="TopicView"
        onPress={() =>
          navigation.push('TopicView', { itemID: '5fac44f7d3986500906e1b40' })
        }
      />
      <Button
        title="TopicCreate"
        onPress={() =>
          navigation.push('TopicCreate', { itemID: '5fac37ad7843f3001cf63d5f' })
        }
      />
      <Button
        title="Plant"
        onPress={() =>
          navigation.push('Plant', { itemID: '5fac44f7d3986500906e1b40' })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
