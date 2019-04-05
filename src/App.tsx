/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { SFC } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

          const App: SFC<{}> = props => (
  <View style={styles.container}>
            <Text>Mais um para testar o prettier</Text>
    <Text style={styles.welcome}>Welcome to React Native TS!</Text>
      <Text style={styles.instructions}>To get started, edit App.tsx</Text>
                            <Text style={styles.instructions}>{instructions}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default App
