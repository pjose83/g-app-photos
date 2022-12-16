import { StyleSheet, Text } from 'react-native'
import { useFonts, Kalam_300Light, Kalam_400Regular, Kalam_700Bold } from '@expo-google-fonts/kalam'
import { Jua_400Regular } from '@expo-google-fonts/jua'

export const StyledText = ({
  children,
  kalamLight,
  kalamRegular,
  kalamBold,
  juaRegular,
  color,
  extraStyles,
  small,
  regular,
  big,
  title,
  center
}) => {
  const [fontsLoaded] = useFonts({
    Kalam_300Light,
    Kalam_400Regular,
    Kalam_700Bold,
    Jua_400Regular
  })

  if (!fontsLoaded) return <></>

  const textStyles = [
    kalamLight && styles.kalamLight,
    kalamRegular && styles.kalamRegular,
    kalamBold && styles.kalamBold,
    juaRegular && styles.juaRegular,
    small && styles.small,
    regular && styles.regular,
    big && styles.big,
    title && styles.title,
    center && styles.center,
    { color },
    extraStyles
  ]

  return <Text style={textStyles}>{children}</Text>
}

const styles = StyleSheet.create({
  kalamLight: {
    fontFamily: "Kalam_300Light"
  },
  kalamRegular: {
    fontFamily: "Kalam_400Regular"
  },
  kalamBold: {
    fontFamily: "Kalam_700Bold"
  },
  juaRegular: {
    fontFamily: "Jua_400Regular"
  },
  small: {
    fontSize: 14
  },
  regular: {
    fontSize: 16
  },
  big: {
    fontSize: 18
  },
  title: {
    fontSize: 36
  },
  center: {
    textAlign: "center"
  }
})