import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { CarrouselCollection } from './CarrouselCollection'
import { useFonts, Kalam_700Bold } from '@expo-google-fonts/kalam'

const { height } = Dimensions.get("window")

export const Collections = () => {
  const [fontsLoaded] = useFonts({
    Kalam_700Bold
  })

  if (!fontsLoaded) return <></>
  return (
    <View style={styles.collectionWrapper}>
      <Text style={styles.collectionTitle}>
        My collections
      </Text>
      <CarrouselCollection />
      <Text style={styles.collectionTitle}>
        Activity feed
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  collectionWrapper: {
    height: height * .35,
    backgroundColor: "#F4DFCA",
    padding: 15,
    justifyContent: "space-between"
  },
  collectionTitle: {
    fontFamily: "Kalam_700Bold",
    fontSize: 18
  }
})