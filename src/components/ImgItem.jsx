import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import {
  useFonts,
  Kalam_700Bold,
  Kalam_300Light,
  Kalam_400Regular
} from '@expo-google-fonts/kalam'
import { Collections } from './Collections'

const { width, height } = Dimensions.get("window")

export const ImgItem = ({ profilePic, author, location, img, desc, index }) => {
  const [fontsLoaded] = useFonts({
    Kalam_700Bold,
    Kalam_300Light,
    Kalam_400Regular
  })

  if (!fontsLoaded) return <></>

  return (
    <>
      {index ? null : <Collections />}
      <View style={styles.container}>
        <View style={styles.profileWrapper}>
          <Image
            source={{ uri: profilePic }}
            style={styles.picture}
            resizeMode="cover"
          />
          <View style={styles.textWrapper}>
            <Text style={styles.textName}>
              {author || "Anonymous"}
            </Text>
            <Text style={styles.textLocation}>
              From {location || "Somewhere..."}
            </Text>
          </View>
        </View>
        <Text style={styles.textDesc}>
          {desc || "No caption needed"}
        </Text>
        <Image
          source={{ uri: img }}
          style={styles.img}
          resizeMode="stretch"
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  profileWrapper: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingLeft: 15
  },
  picture: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#aaa8"
  },
  textWrapper: {
    paddingLeft: 10,
    justifyContent: "center"
  },
  textName: {
    fontFamily: "Kalam_700Bold",
    fontSize: 16
  },
  textLocation: {
    fontSize: 14,
    fontFamily: "Kalam_300Light",
  },
  textDesc: {
    fontSize: 16,
    fontFamily: "Kalam_400Regular",
    paddingLeft: 20,
    paddingBottom: 5
  },
  img: {
    width,
    height: height * .65
  }
})