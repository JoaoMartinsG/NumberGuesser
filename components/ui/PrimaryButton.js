import { View, Text, Pressable, StyleSheet } from 'react-native'

import  Colors  from '../../theme/colors'

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.accent }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.secondary,
    paddingVertical: 10,
    elevation: 2,
  },
  buttonText: {
    color: Colors.text,
    textAlign: 'center',
  },

  pressed: {
    opacity: 0.75,
  },
})
