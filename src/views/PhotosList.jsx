import { useContext } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { store } from '../context/store'
import { useFonts, Kalam_700Bold } from '@expo-google-fonts/kalam'
import GridImageView from 'react-native-grid-image-viewer';

export const PhotosList = () => {
  const { listTitle, photos } = useContext(store)
  const [fontsLoaded] = useFonts({
    Kalam_700Bold
  })

  if (!fontsLoaded) return <></>
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{listTitle}</Text>
      <View style={styles.listWrapper}>
        <GridImageView data={photos} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#F4DFCA",
    padding: 20
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    fontFamily: "Kalam_700Bold",
    textTransform: 'capitalize',
    textShadowColor: '#0007',
    textShadowOffset: {width: -1, height: 2},
    textShadowRadius: 10
  },
  listWrapper: {
    // backgroundColor: "#f007",
    // width: "100%",
    flex: 1
  }
})