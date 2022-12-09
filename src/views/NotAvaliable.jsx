import { StyleSheet, Text, View } from 'react-native'
import { useFonts, Kalam_700Bold } from '@expo-google-fonts/kalam'

export const NotAvaliable = () => {
  const [fontsLoaded] = useFonts({
    Kalam_700Bold
  })

  if (!fontsLoaded) return <></>

  return (
    <View style={styles.view}>
      <Text style={styles.text}>
        This feacture is not avaliable for the moment :(
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4DFCA",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 32,
    textAlign: "center",
    fontFamily: "Kalam_700Bold",
    textShadowColor: '#0007',
    textShadowOffset: {width: -3, height: 3},
    textShadowRadius: 15
  }
})