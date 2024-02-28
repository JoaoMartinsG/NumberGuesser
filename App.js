import { StatusBar } from 'expo-status-bar'
import { StyleSheet, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import StartGameScreen from './screens/StartGameScreen'
import { Colors } from './theme/Colors'

export default function App() {
  return (
    <>
      <StatusBar style="inverted" />
      <LinearGradient
        colors={[Colors.primary, Colors.secondary]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require('./assets/images/dice.jpg')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
    </>
  )
}
;[]

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
})
